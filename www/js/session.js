const SESSION_TIMEOUT = 7 * 60 * 1000;
let sessionTimeout;
function startSessionTimer() {
    clearTimeout(sessionTimeout), (sessionTimeout = setTimeout(showTimeoutMessage, SESSION_TIMEOUT));
}
function resetSessionTimer() {
    startSessionTimer();
}


function callApiForLogout() {

    const apiUrl = "http://127.0.0.1:8000/api/auth/logout";

    // Make an API call to get the username
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authentication: "Bearer " + localStorage.getItem('token'),
        "Content-Type": "application/json",
        Accept: "application/json",
        // Add CORS-related headers
        "Access-Control-Allow-Origin": "*", // Replace * with the specific origin if required
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Specify the allowed HTTP methods
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Specify the allowed headers
      },
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw new Error(error.message);
        });
      }
      return response.json();
    })
    .then(data => {
        return data.message;
    })
    .catch(error => {
      console.error("Error fetching user from API:", error);
      throw error; // Re-throw the error to be caught by the caller
    });
    
}


function showTimeoutMessage() {
    //logout
    checkInternetConnection();
    callApiForLogout();

    alert("Your session has timed out. Please log in again."),
        localStorage.removeItem("lastActivity"),
        localStorage.removeItem("email"),
        localStorage.removeItem("token"),
        cordova.InAppBrowser.open("index.html", "_self");
        if(localStorage.getItem("token") == null){
            cordova.InAppBrowser.open("index.html", "_self");
        }
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
    //checkSessionTimeout();


    checkSessionTimeout();

function checkInternetConnection() {
    // const statusElement = document.createElement('p'); // Create a paragraph element
    // document.body.appendChild(statusElement); // Append it to the body
    if (!navigator.onLine) {
        if (navigator.connection.type === Connection.WIFI) {
            console.log("Wi-Fi is enabled");
        } else {
            // Enable Wi-Fi
            navigator.connection.setWiFiEnabled(true, successCallback, errorCallback);
        }
        return true;
    } else {
        //Online
        return false;
    }
  }


function successCallback() {
    console.log("Wi-Fi enabled successfully");
}

function errorCallback(error) {
    console.error("Failed to enable Wi-Fi:", error);
}