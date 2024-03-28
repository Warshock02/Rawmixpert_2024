// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("deviceready", function () {
    document.querySelector(".loading-screen").style.display = "none";

    getSessionData();

    // Lock the screen orientation to landscape
    screen.orientation
      .lock("landscape")
      .then(function () {
        console.log("Screen orientation locked to landscape.");
      })
      .catch(function (error) {
        console.error("Failed to lock the screen orientation: ", error);
      });

    const db = window.sqlitePlugin.openDatabase({
      name: "rawmixpert2.db",
      location: "default",
    });

    // Start Sqlite (Create user local table, Insert Admin Data)
    if (window.sqlitePlugin) {
      // Create a table to store data (if not exists)
      // Create the table if it doesn't exist
      db.transaction(function (tx) {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT, token TEXT)",
          [],
          function () {
            console.log("User Table created successfully.");
          },
          function (error) {
            console.error("Error creating user table: " + error.message);
          }
        );
      });

      db.transaction(function (tx) {
        tx.executeSql(
          "SELECT COUNT(*) AS rowCount FROM users where id = ?",
          [1],
          function (tx, result) {
            const rowCount = result.rows.item(0).rowCount;

            if (rowCount > 0) {
              console.log("The current user account is saved.");
            } else {
              // (Change the insert to Check user status before insert)
              // db.transaction(function (tx) {
              //     // Insert data into the users table
              //     tx.executeSql(
              //         "INSERT INTO users (username, password) VALUES (?, ?)",
              //         ["Fadmin", "admin2023"],
              //         function () {
              //             // Clear the form inputs after insertion
              //         },
              //         function (error) {
              //             alert("Error inserting data: " + error.message);
              //         }
              //     );
              // });
            }
          },
          function (error) {
            alert("Error executing SQL: " + error.message);
          }
        );
      });
    } else {
      alert("SQLITE PLUGIN NOT AVAILABLE!");
    }

    document.querySelector(".app-content").style.display = "block";
  });
});

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

// EMail and Password Checker
function checkEmail(email) {
  if (email !== null || email !== "") {
    // Username is null or empty
    return true;
  } else {
    // Username is not null or empty
    return false;
  }
}
function checkPassword(password) {
  if (password !== null || password !== "") {
    // Username is null or empty
    return true;
  } else {
    // Username is not null or empty
    return false;
  }
}
// END EMail and Password Checker

// Login Api Check
// Assuming the API endpoint for login is '/api/login'
var token;
var resapi;
async function loginapi(Email, Password) {
  // Create a new XMLHttpRequest object

  if (checkEmail(Email)) {
    console.log("Email is not empty or null");
  } else {
    console.log("Email is empty or null");
    alert("Email is required.");
    return;
  }

  if (checkPassword(Password)) {
    console.log("Password is not empty or null");
  } else {
    console.log("Password is empty or null");
    alert("Password is required.");
    return;
  }

  const apiUrl = "http://127.0.0.1:8000/api/auth/login";

  // User credentials
  const credentials = {
    email: Email,
    password: Password,
  };

  // Make a POST request to the API
  await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Add CORS-related headers
      "Access-Control-Allow-Origin": "*", // Replace * with the specific origin if required
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Specify the allowed HTTP methods
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // Specify the allowed headers
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json(); // Parse JSON response
    })
    .then((data) => {
      // Check if the login was successful
      // alert("Here is the data: " + data.token);

      if (data.token) {
        // Token obtained, you can store it in a secure way (e.g., localStorage)
        token = data.token;
        resapi = true;
      } else {
        resapi = false;
      }
    })
    .catch((error) => {
      alert(error);
    });
}

// End Login Api Check

//LOGIN SUBMIT METHOD
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", onLoginFormSubmit);

async function onLoginFormSubmit(event) {
  try {
    event.preventDefault();

    if (window.sqlitePlugin) {
      const db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert2.db",
        location: "default",
      });
    } else {
      alert("SQLite plugin not available.");
    }


    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // START API
    //#region 

    //Login API
    await loginapi(email, password);
    if (token == null || token == "") {
      alert("Error: Invalid credentials!");
      return;
    }

    if (resapi) {
      alert("token: " + token);
    } else {
      alert(
        "Something went wrong with data service. Please check your internet connection and try again!"
      );
      return;
    }
    //#endregion
    // END API


    if (email === "" || password === "") {
      alert("Please enter both email and password.");
    }

    const db = window.sqlitePlugin.openDatabase({
      name: "rawmixpert2.db",
      location: "default",
    });

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        function (tx, result) {
          if (result.rows.length > 0) {
            // Successful login
            alert("Login successful!");

            // set session
            // if (isUserLoggedIn()) {
            //     // Replace "userId", "userName", "userEmail", etc. with your actual user data
            //     localStorage.setItem("userName", username);
            //     // Add more data as needed
            // }
            //end session
            localStorage.setItem("email", email);
            localStorage.setItem("token", token);
            // navigateToDashboard();
          } else {
            // Invalid credentials
            alert("Invalid email or password.");
          }

          // Clear the form inputs
          emailInput.value = "";
          passwordInput.value = "";
        },
        function (error) {
          alert("Error executing SQL: " + error.message);
        }
      );
    });
  } catch (error) {
    alert("Login's error: " + error.message);
  }
}

// var xhr = new XMLHttpRequest();

// alert('LOADING API. . .')
// // Define the API URL
// var apiUrl = 'http://127.0.0.1:8000/api/auth/login';

// // Configure the request
// xhr.open('GET', apiUrl, true);

// // Set request headers if needed (optional)
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.setRequestHeader('Accept', 'application/json');
// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
// xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
// xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

// // Set up a function to handle the response
// xhr.onload = function() {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     // Request was successful, parse the response
//     var responseData = JSON.parse(xhr.responseText);
//     console.log(responseData);
//     alert('API: ' + responseData)
//   } else {
//     // Request failed, handle the error
//     console.error('Request failed with status:', xhr.status);
//   }
// };

// // Set up a function to handle network errors
// xhr.onerror = function() {
//   console.error('Request failed');
// };
