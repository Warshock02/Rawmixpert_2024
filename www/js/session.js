const SESSION_TIMEOUT = 7 * 60 * 1000;
let sessionTimeout;
function startSessionTimer() {
    clearTimeout(sessionTimeout), (sessionTimeout = setTimeout(showTimeoutMessage, SESSION_TIMEOUT));
}
function resetSessionTimer() {
    startSessionTimer();
}
function showTimeoutMessage() {
    alert("Your session has timed out. Please log in again."),
        localStorage.removeItem("lastActivity"),
        localStorage.removeItem("userName"),
        cordova.InAppBrowser.open("index.html", "_self");
}
function checkSessionTimeout() {
    const e = localStorage.getItem("lastActivity");
    e && Date.now() - e > SESSION_TIMEOUT ? (showTimeoutMessage(), console.log("END SESSION!!!")) : (console.log("START SESSION!!!"), startSessionTimer());
}
function updateLastActivity() {
    localStorage.setItem("lastActivity", Date.now());
}
document.addEventListener("click", resetSessionTimer),
    document.addEventListener("keydown", resetSessionTimer),
    document.addEventListener("touchstart", resetSessionTimer),
    document.addEventListener("click", updateLastActivity),
    document.addEventListener("keydown", updateLastActivity),
    document.addEventListener("touchstart", updateLastActivity),
    checkSessionTimeout();
