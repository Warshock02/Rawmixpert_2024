
var recipenum;

document.addEventListener("deviceready", function () {


    var element = document.querySelector(".loading-screen")

    if (element !== null) {
        // Element exists, you can work with it
        element.style.display = "none";


        function rawmill1() {
            window.rawmillnum = 1;
            console.log("RAWMILL 1")
            cordova.InAppBrowser.open("rawmill1.html", "_self");
        }
        window.rawmill1 = rawmill1;
        function rawmill2() {
            window.rawmillnum = 2;
            console.log("RAWMILL 2")
            cordova.InAppBrowser.open("rawmill2.html", "_self");
        }
        window.rawmill2 = rawmill2;
        function recipe1() {
            window.recipenum = 1
            console.log("RECIPE 1")
            cordova.InAppBrowser.open("recipe1.html", "_self");
        }
        window.recipe1 = recipe1;
        function recipe2() {
            window.recipenum = 2
            console.log("RECIPE 2")
            cordova.InAppBrowser.open("recipe2.html", "_self");
        }
        window.recipe2 = recipe2;

        document.querySelector(".app-content").style.display = "block";

    }
    function back() {
        cordova.InAppBrowser.open("rm-main.html", "_self");
    }
    window.back = back;

      // Example of how to bind a button click to the handleButtonClick function
      document.getElementById('downloadbtn').addEventListener('click', function() {
        handleButtonClick(1);
    });

    document.getElementById('uploadbtn').addEventListener('click', function() {
        handleButtonClick(2);
    });

})

document.addEventListener("DOMContentLoaded", function () {


    function logout() {

        localStorage.removeItem('lastActivity');
        localStorage.removeItem('email');

        // localStorage.removeItem('token');

        // Redirect the user to the login page
        cordova.InAppBrowser.open("index.html", "_self");
    }
    const offbtn = document.getElementById("offBtn");
    offbtn.addEventListener("click", async () => {
        console.log("Bearer " + localStorage.getItem('token'));
        const result = confirm("Are you sure to logout?");
        if (result) {
            const logout_result = await callApiForLogout();
            if (logout_result.includes('Successfully logged out')) {
                // Do something if the message contains 'Successfully logged out'
                alert('Logout was successful');
                logout();
            } else {
                // Do something if the message does not contain 'Successfully logged out'
                alert('Error: Logout failed');
                return;
            }
        }
    });

    function callApiForLogout() {

        const apiUrl = "http://127.0.0.1:8000/api/auth/logout";
    
        // Make an API call to get the username
        return fetch(apiUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            // Add CORS-related headers
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token'),
            "Access-Control-Allow-Origin": "*", // Replace * with the specific origin if required
            "Access-Control-Allow-Methods": "POST, OPTIONS", // Specify the allowed HTTP methods
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


    ///******* Create or Update API method */
    const uploadbtn = document.getElementById("uploadbtn");
    uploadbtn.addEventListener("click", async () => {
        const result = confirm("Are you sure to logout?");
        if (result) {
            const logout_result = await callApiForCreateOrUpdate();
            if (logout_result.includes('Successfully logged out')) {
                // Do something if the message contains 'Successfully logged out'
                alert('Logout was successful');
                logout();
            } else {
                // Do something if the message does not contain 'Successfully logged out'
                alert('Error: Logout failed');
                return;
            }
        }
    });

    var CU = {
    callApiForCreateOrUpdate: function() {

        alert("Welcome CreateUpdate Method");
        return;
        // Define an array of data for multiple records
const records = [
    { C8_MIX_RDFC: 'value1', C9_SiO2_RDFC: 'value2' }, // Example data for record 1
    { C8_MIX_RDFC: 'value3', C9_SiO2_RDFC: 'value4' }, // Example data for record 2
    // Add more data objects for additional records as needed
];

// Loop through the array of records
records.forEach(recordData => {
    // Send a POST request to the API endpoint
    fetch('/api/your-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed, e.g., authorization token
        },
        body: JSON.stringify(recordData), // Convert record data to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create record');
        }
        return response.json();
    })
    .then(data => {
        console.log('Record created successfully:', data);
    })
    .catch(error => {
        console.error('Error creating record:', error.message);
    });
});

    }
};
})


function handleButtonClick(buttonNumber) {
    if (buttonNumber == 1) {
        // window.save_ma();
        alert("DOWNLOAD");
    } else if (buttonNumber == 2) {
        // window.save_ma();
        alert("UPLOAD");
        CU.callApiForCreateOrUpdate();
    } 

    // You can add your custom action here
}
