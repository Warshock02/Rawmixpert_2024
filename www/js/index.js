var db;

document.addEventListener("deviceready", onDeviceReady);

async function onDeviceReady() {
    try {

        document.querySelector(".loading-screen").style.display = "none";

        getSessionData();

        // Lock the screen orientation to landscape
        screen.orientation
            .lock("landscape")
            .then(function() {
                console.log("Screen orientation locked to landscape.");
            })
            .catch(function(error) {
                console.error("Failed to lock the screen orientation: ", error);
            });

        // Open or create the SQLite database
        db = window.sqlitePlugin.openDatabase({
            name: "rawmixpert24.db",
            location: "default",
        });

        if (window.sqlitePlugin) {
            // Create the users table if it doesn't exist
            await executeSqlAsync(
                db,
                "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, token TEXT)"
            );
        } else {
            alert("SQLite plugin not available.");
        }

        if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
            // User exists, retrieve the username
            navigateToDashboard();
        }


    } catch (error) {
        console.error("Error:", error);
    }

}

//Session Checker
function isUserLoggedIn() {
    // Replace this with your actual check for user authentication
    // For example, you might check if there's a user token in the session or a user ID, etc.
    var result = false;
    if (
        localStorage.getItem("email") != null &&
        localStorage.getItem("token") != null
    ) {
        result = true;
        console.log("Email DETECTED!");
    }

    return result;
}

function navigateToDashboard() {
    cordova.InAppBrowser.open("rm-main.html", "_self");
}

// If the user is logged in, set the session data

function getSessionData() {
    if (isUserLoggedIn()) {
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        // Retrieve more data as needed
        if (email != null && token != null) {
            // Use the retrieved data as required
            console.log("User Name:", email);
            navigateToDashboard();
        }
    } else {
        console.log("User is not logged in.");
    }
}
//End Session Checker

// EMail and Password Checker
function checkEmail(email) {
    if (email == null || email == "") {
        // Username is null or empty
        return true;
    } else {
        // Username is not null or empty
        return false;
    }
}

function checkPassword(password) {
    if (password == null || password == "") {
        // Username is null or empty
        return true;
    } else {
        // Username is not null or empty
        return false;
    }
}
// END EMail and Password Checker

// Begin Submit


//LOGIN SUBMIT METHOD
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", onLoginFormSubmit);

async function onLoginFormSubmit(event) {
    var element = document.querySelector(".loading-screen");
    element.style.display = "none"; // Hide loading screen initially

    try {
        event.preventDefault();
        document.getElementById("loginButton").disabled = true; // Disable login button

        //checks connection when Login button clicked.
        const checkI = checkInternetConnection();
        if (checkI) {
            element.style.display = "none";
            document.getElementById("loginButton").disabled = false; // Enable login button
            return;
        }

        db = window.sqlitePlugin.openDatabase({
            name: "rawmixpert24.db",
            location: "default",
        });

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (checkEmail(email)) {
            alert("Email is required.");
            element.style.display = "none";
            document.getElementById("loginButton").disabled = false; // Enable login button
            return;
        }

        if (checkPassword(password)) {
            alert("Password is required.");
            element.style.display = "none";
            document.getElementById("loginButton").disabled = false; // Enable login button
            return;
        }

        // login process

        const res = await executeSqlAsync(db, "SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1", [email, password]);

        if (localStorage.getItem("token") != "" && localStorage.getItem("token") != null) {
            navigateToDashboard();
        } else {
            const response = await callApiForEmail(email, password);

            if (!response == "") {
                alert("Successfully login!");
                const token = response; // Assuming response contains the token
                localStorage.setItem("token", token);
                localStorage.setItem("email", email);
                saveEmailToSQLite(db, email, token);
                navigateToDashboard();
            }
        }
        // end login process
    } catch (error) {
        if (error.message.includes('Failed to fetch')) {
            alert("Login's error: Under Maintenance!");
            return;
        }
    } finally {
        element.style.display = "none";
        document.getElementById("loginButton").disabled = false; // Enable login button
    }
}

// End Submit

async function executeSqlAsync(db, query, params = []) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                query,
                params,
                (_, res) => {
                    resolve(res);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
}


function getApiUrl() {
    const hostname = window.location.hostname;
    return "http://107.23.7.86";
    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return "http://127.0.0.1:8000"; // Local API URL
    } else {
        return "http://107.23.7.86"; // Server API URL
    }
}

function callApiForEmail(email, password) {
    const apiUrl = getApiUrl() + "/api/auth/login";
    const credentials = {
        email: email,
        password: password,
    };

    // Make an API call to get the username
    return fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
            body: JSON.stringify(credentials),
        })
        .then(response => {
            return response.json().then(data => {
                if (!response.ok) {
                    // If response is not ok, throw an error with the message from the response
                    throw new Error(data.message || 'Unknown error');
                }
                return data;
            });
        })
        .then(data => {
            if (data.token) {
                return data.token;
            } else {
                throw new Error(data.message || 'Token not found');
            }
        })
        .catch(error => {
            console.error('Error during login:', error.message);
            alert(`Error: ${error.message}`);
        });
}


async function saveEmailToSQLite(db, email, token) {
    // Insert the username into the users table
    await executeSqlAsync(
        db,
        "INSERT INTO users (email, token) VALUES (?, ?, ?)",
        [email, token]
    );
    console.log("Email saved to SQLite:", email);

}

function checkInternetConnection() {

    if (navigator.onLine) {
        return false;
    } else {
        alert('Warning: Login needs to be connected! Please check your internet connection. Thank you!');
        return true;
    }
}