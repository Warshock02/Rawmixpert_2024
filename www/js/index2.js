document.addEventListener("deviceready", onDeviceReady);

async function onDeviceReady() {
  try {
    console.log("INDEX 2!!!!!!!!!!!");

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

    // Open or create the SQLite database
    const db = await window.sqlitePlugin.openDatabase({
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

// Begin Submit


//LOGIN SUBMIT METHOD
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", onLoginFormSubmit);

async function onLoginFormSubmit(event) {
  try {
    event.preventDefault();

    const db = await window.sqlitePlugin.openDatabase({
        name: "rawmixpert24.db",
        location: "default",
      });

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (checkEmail(email)) {
      console.log("Email is not empty or null");
    } else {
      console.log("Email is empty or null");
      alert("Email is required.");
      return;
    }

    if (checkPassword(password)) {
      console.log("Password is not empty or null");
    } else {
      console.log("Password is empty or null");
      alert("Password is required.");
      return;
    }

    // login process

    // Check if the user exists in the local SQLite database
    const res = await executeSqlAsync(db, "SELECT * FROM users LIMIT 1");
    if (res.rows.length > 0) {
      // User exists, retrieve the username
      const email = res.rows.item(0).email;
      console.log("Email from SQLite:", email);
    } else {
      // User doesn't exist, call the API to get the email
      const token = await callApiForUsername(email, password);
      console.log("Email from API:", token);

      if (token != null || token != "") {
        // Save the email to SQLite for future use
        await saveEmailToSQLite(db, email, password, token);
      }
    }
    // end login process

  } catch (error) {
    alert("Login's error: " + error.message);
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

async function callApiForUsername(email, password) {
  try {
    const apiUrl = "http://127.0.0.1:8000/api/auth/login";

    // User credentials
    const credentials = {
      email: Email,
      password: Password,
    };

    // Make an API call to get the username
    const response = await fetch(apiUrl, {
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
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    alert("TOKEN: " + data.token);
    return data.token;
  } catch (error) {
    throw new Error("Error fetching user from API:", error);
  }
}

async function saveEmailToSQLite(db, email, password, token) {
  // Insert the username into the users table
  await executeSqlAsync(
    db,
    "INSERT INTO users (email, password, token) VALUES (?, ?, ?)",
    [email, password, token]
  );
  console.log("Email saved to SQLite:", email);
}