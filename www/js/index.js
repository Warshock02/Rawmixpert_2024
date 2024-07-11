document.addEventListener("deviceready", onDeviceReady);

 async function onDeviceReady() {
  try {


    console.log("INDEX 1!!!!######");

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
    const db =  window.sqlitePlugin.openDatabase({
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

    //checks connection when Login button clicked.
    const checkI = checkInternetConnection();
    if(checkI){
      return;
    }

    const db =  window.sqlitePlugin.openDatabase({
      name: "rawmixpert24.db",
      location: "default",
    });

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!checkEmail(email)) {
      console.log("Email is not empty or null");
    } else {
      console.log("Email is empty or null");
      alert("Email is required.");
      return;
    }

    if (!checkPassword(password)) {
      console.log("Password is not empty or null");
    } else {
      console.log("Password is empty or null");
      alert("Password is required.");
      return;
    }

    // login process

    // Check if the user exists in the local SQLite database
    const res =  await executeSqlAsync(db, "SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1", [email, password]);

    if (res.rows.length > 0) {
      // User exists, retrieve the username
      const email = res.rows.item(0).email;
      console.log("Email from SQLite:", email);
    } else {
      // User doesn't exist, call the API to get the email
      const token = await callApiForEmail(email, password);
      
      if (token != null || token != "") {
        // alert("Token: " + token);
        // Save the email to SQLite for future use
        await saveEmailToSQLite(db, email, password, token);
        alert(token);
        localStorage.setItem("token", token);
        navigateToDashboard();
      } else {
        alert("Error: " + token);
      }
    }
    // end login process
  } catch (error) {
     alert(error.message);
    if(error.message.includes('Failed to fetch')){
      alert("Login's error: Under Maintenance!");
      return;
    }
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


// function getApiUrl() {
//   const hostname = window.location.hostname;
//   if (hostname === "localhost" || hostname === "127.0.0.1") {
//     return "http://127.0.0.1:8000"; // Local API URL
//   } 
//   else if (hostname === "192.168.254.168") {
//     return "http://192.168.254.168:8000"; // My API
//   }
//   else {
//     return "http://54.160.175.54"; // Server API URL
//   }
// }

  function callApiForEmail(email, password) {
    const apiUrl = "http://54.160.175.54/api/auth/login";
    alert(apiUrl);
      // alert(apiUrl);
    // User credentials
    const credentials = {
      email: email,
      password: password,
    };

    // Make an API call to get the username
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        
        // Add CORS-related headers
        "Access-Control-Allow-Origin": "*", // Replace * with the specific origin if required
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Specify the allowed HTTP methods
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Specify the allowed headers
      },
      body: JSON.stringify(credentials),
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
      if (data.token != null && data.token !== '') {
        return data.token;
      } else {
        return data.message;
      }
    })
    .catch(error => {
      console.error("Error fetching user from API:", error);
      alert(error);
      throw error; // Re-throw the error to be caught by the caller
    });
    
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

function checkInternetConnection() {
  // const statusElement = document.createElement('p'); // Create a paragraph element
  // document.body.appendChild(statusElement); // Append it to the body
  if (navigator.onLine) {
      // If online, display a message indicating internet connection is available
      // statusElement.textContent = 'Internet connection is available.';
  } else {
      // If offline, display a message indicating no internet connection
      alert('Warning: Login needs to be connected! Please check your internet connection. Thank you!');
      return true;
  }
}