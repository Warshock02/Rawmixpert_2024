const SESSION_TIMEOUT = 30 * 60 * 1000; // 10 seconds for testing
let sessionTimeout;

function startSessionTimer() {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(showTimeoutMessage, SESSION_TIMEOUT);
}

function resetSessionTimer() {
    startSessionTimer();
}

function getApiUrl() {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return "http://127.0.0.1:8000"; // Local API URL
    } else {
        return "https://your-server-domain.com"; // Server API URL
    }
}

async function callApiForLogout() {
    const apiUrl = getApiUrl() + "/api/auth/logout";

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data.message;

    } catch (error) {
        console.error("Error fetching user from API:", error);
        throw error;
    }
}

async function showTimeoutMessage() {
    try {
        checkInternetConnection();
        await callApiForLogout();
        localStorage.removeItem("token");
        localStorage.removeItem("lastActivity");
        localStorage.removeItem("email");
        alert("Your session has timed out. Please log in again.");
        cordova.InAppBrowser.open("index.html", "_self");
    } catch (error) {
        console.error("Failed to logout:", error);
        // Handle the error if necessary
    } finally {
        if (localStorage.getItem("token") === null) {
            cordova.InAppBrowser.open("index.html", "_self");
        }
    }
}

function checkSessionTimeout() {
    const lastActivity = localStorage.getItem("lastActivity");
    if (lastActivity && Date.now() - lastActivity > SESSION_TIMEOUT) {
        showTimeoutMessage();
        console.log("END SESSION!!!");
    } else {
        console.log("START SESSION!!!");
        startSessionTimer();
    }
}

function updateLastActivity() {
    localStorage.setItem("lastActivity", Date.now().toString());
}

document.addEventListener("click", resetSessionTimer);
document.addEventListener("keydown", resetSessionTimer);
document.addEventListener("touchstart", resetSessionTimer);
document.addEventListener("click", updateLastActivity);
document.addEventListener("keydown", updateLastActivity);
document.addEventListener("touchstart", updateLastActivity);

checkSessionTimeout();

function checkInternetConnection() {
    if (!navigator.onLine) {
        if (navigator.connection.type === Connection.WIFI) {
            console.log("Wi-Fi is enabled");
        } else {
            navigator.connection.setWiFiEnabled(true, successCallback, errorCallback);
        }
        return true;
    } else {
        return false;
    }
}

function successCallback() {
    console.log("Wi-Fi enabled successfully");
}

function errorCallback(error) {
    console.error("Failed to enable Wi-Fi:", error);
}
