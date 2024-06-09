
var recipenum;
var db;



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
    //   document.getElementById('downloadbtn').addEventListener('click', function() {
    //     handleButtonClick(1);
    // });

    // document.getElementById('uploadbtn').addEventListener('click', function() {
    //     handleButtonClick(2);
    // });

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
               
        ////
        function callApiForCreateOrUpdate() {
            alert('Create or Update');
            try {
        
                db = window.sqlitePlugin.openDatabase({
                    name: "rawmixpert2.db",
                    location: "default",
                });
        
                console.log('SULOD SA LOCAL DB');
                db.transaction((tx) => {
                    tx.executeSql(
                        "SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC",
                        [localStorage.getItem("email")],
                        function (tx, result) {
                            const records = [];
        
                            console.log('SULOD SA EXECUTE SQL');
                            console.log(result);
                            for (let i = 0; i < result.rows.length; i++) {
                                const record = {};
                                const row = result.rows.item(i);
                                record['C8_MIX_RDFC'] = row['C8_MIX_RDFC'];
                                record['C9_SiO2_RDFC'] = row['C9_SiO2_RDFC'];
                                record['C10_Al2O3_RDFC'] = row['C10_Al2O3_RDFC'];
                                record['C11_Fe2O3_RDFC'] = row['C11_Fe2O3_RDFC'];
                                record['C12_CaO_RDFC'] = row['C12_CaO_RDFC'];
                                record['C13_MgO_RDFC'] = row['C13_MgO_RDFC'];
                                record['C14_Na2O_RDFC'] = row['C14_Na2O_RDFC'];
                                record['C15_K2O_RDFC'] = row['C15_K2O_RDFC'];
                                record['C16_SO3_RDFC'] = row['C16_SO3_RDFC'];
                                record['C17_LOI_RDFC'] = row['C17_LOI_RDFC'];
                                record['D8_MIX_RDFC'] = row['D8_MIX_RDFC'];
                                record['D9_SiO2_RDFC'] = row['D9_SiO2_RDFC'];
                                record['D10_Al2O3_RDFC'] = row['D10_Al2O3_RDFC'];
                                record['D11_Fe2O3_RDFC'] = row['D11_Fe2O3_RDFC'];
                                record['D12_CaO_RDFC'] = row['D12_CaO_RDFC'];
                                record['D13_MgO_RDFC'] = row['D13_MgO_RDFC'];
                                record['D14_Na2O_RDFC'] = row['D14_Na2O_RDFC'];
                                record['D15_K2O_RDFC'] = row['D15_K2O_RDFC'];
                                record['D16_SO3_RDFC'] = row['D16_SO3_RDFC'];
                                record['D17_LOI_RDFC'] = row['D17_LOI_RDFC'];
                                record['E8_MIX_RDFC'] = row['E8_MIX_RDFC'];
                                record['E9_SiO2_RDFC'] = row['E9_SiO2_RDFC'];
                                record['E10_Al2O3_RDFC'] = row['E10_Al2O3_RDFC'];
                                record['E11_Fe2O3_RDFC'] = row['E11_Fe2O3_RDFC'];
                                record['E12_CaO_RDFC'] = row['E12_CaO_RDFC'];
                                record['E13_MgO_RDFC'] = row['E13_MgO_RDFC'];
                                record['E14_Na2O_RDFC'] = row['E14_Na2O_RDFC'];
                                record['E15_K2O_RDFC'] = row['E15_K2O_RDFC'];
                                record['E16_SO3_RDFC'] = row['E16_SO3_RDFC'];
                                record['E17_LOI_RDFC'] = row['E17_LOI_RDFC'];
                                record['F8_MIX_RDFC'] = row['F8_MIX_RDFC'];
                                record['F9_SiO2_RDFC'] = row['F9_SiO2_RDFC'];
                                record['F10_Al2O3_RDFC'] = row['F10_Al2O3_RDFC'];
                                record['F11_Fe2O3_RDFC'] = row['F11_Fe2O3_RDFC'];
                                record['F12_CaO_RDFC'] = row['F12_CaO_RDFC'];
                                record['F13_MgO_RDFC'] = row['F13_MgO_RDFC'];
                                record['F14_Na2O_RDFC'] = row['F14_Na2O_RDFC'];
                                record['F15_K2O_RDFC'] = row['F15_K2O_RDFC'];
                                record['F16_SO3_RDFC'] = row['F16_SO3_RDFC'];
                                record['F17_LOI_RDFC'] = row['F17_LOI_RDFC'];
                                record['I14_Lime_Saturation'] = row['I14_Lime_Saturation'];
                                record['I17_Silica_Modulus'] = row['I17_Silica_Modulus'];
                                record['I20_Alumina_Modulus'] = row['I20_Alumina_Modulus'];
                                // Add other record fields here
                                records.push(record);
                                console.log(record);
                            }
        
                            const responses = [];
                            records.forEach(recordData => {
                                fetch('http://127.0.0.1:8000/api/auth/storeOrupdate', {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        // Add necessary headers
                                        "Content-Type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem('token'),
                                    },
                                    body: JSON.stringify(recordData)
                                })
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error('Failed to create record');
                                    }
                                    return response.json();
                                })
                                .then(data => {
                                    responses.push(true);
                                })
                                .catch(error => {
                                    console.log(error);
                                    responses.push(false);
                                });
                            });
        
                            // Check all responses and resolve based on success
                            if (responses.every(success => success)) {
                                // All records were uploaded successfully
                                console.log("All records uploaded successfully");
                            } else {
                                // Some records failed to upload
                                console.log("Some records failed to upload");
                            }
                        }
                    );
                });
            } catch (error) {
                console.error("Error in callApiForCreateOrUpdate:", error);
            }
        }

        async function callApiForCreateOrUpdate1() {
            alert('Create or Update');
            try {

                     db = window.sqlitePlugin.openDatabase({
                     name: "rawmixpert2.db",
                     location: "default",
                     });

                    console.log('SULOD SA LOCAL DB');
                    db.transaction((tx) => {
                        tx.executeSql(
                            "SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC",
                            [localStorage.getItem("email")],
                            async function (tx, result) {
                                const records = [];
        
                            console.log('SULOD SA EXECUTE SQL');
                                console.log(result);
                                for (let i = 0; i < result.rows.length; i++) {
                                    const record = {};
                                    const row = result.rows.item(i);
                                    record['C8_MIX_RDFC'] = row['C8_MIX_RDFC'];
                                    record['C9_SiO2_RDFC'] = row['C9_SiO2_RDFC'];
                                    record['C10_Al2O3_RDFC'] = row['C10_Al2O3_RDFC'];
                                    record['C11_Fe2O3_RDFC'] = row['C11_Fe2O3_RDFC'];
                                    record['C12_CaO_RDFC'] = row['C12_CaO_RDFC'];
                                    record['C13_MgO_RDFC'] = row['C13_MgO_RDFC'];
                                    record['C14_Na2O_RDFC'] = row['C14_Na2O_RDFC'];
                                    record['C15_K2O_RDFC'] = row['C15_K2O_RDFC'];
                                    record['C16_SO3_RDFC'] = row['C16_SO3_RDFC'];
                                    record['C17_LOI_RDFC'] = row['C17_LOI_RDFC'];
                                    record['D8_MIX_RDFC'] = row['D8_MIX_RDFC'];
                                    record['D9_SiO2_RDFC'] = row['D9_SiO2_RDFC'];
                                    record['D10_Al2O3_RDFC'] = row['D10_Al2O3_RDFC'];
                                    record['D11_Fe2O3_RDFC'] = row['D11_Fe2O3_RDFC'];
                                    record['D12_CaO_RDFC'] = row['D12_CaO_RDFC'];
                                    record['D13_MgO_RDFC'] = row['D13_MgO_RDFC'];
                                    record['D14_Na2O_RDFC'] = row['D14_Na2O_RDFC'];
                                    record['D15_K2O_RDFC'] = row['D15_K2O_RDFC'];
                                    record['D16_SO3_RDFC'] = row['D16_SO3_RDFC'];
                                    record['D17_LOI_RDFC'] = row['D17_LOI_RDFC'];
                                    record['E8_MIX_RDFC'] = row['E8_MIX_RDFC'];
                                    record['E9_SiO2_RDFC'] = row['E9_SiO2_RDFC'];
                                    record['E10_Al2O3_RDFC'] = row['E10_Al2O3_RDFC'];
                                    record['E11_Fe2O3_RDFC'] = row['E11_Fe2O3_RDFC'];
                                    record['E12_CaO_RDFC'] = row['E12_CaO_RDFC'];
                                    record['E13_MgO_RDFC'] = row['E13_MgO_RDFC'];
                                    record['E14_Na2O_RDFC'] = row['E14_Na2O_RDFC'];
                                    record['E15_K2O_RDFC'] = row['E15_K2O_RDFC'];
                                    record['E16_SO3_RDFC'] = row['E16_SO3_RDFC'];
                                    record['E17_LOI_RDFC'] = row['E17_LOI_RDFC'];
                                    record['F8_MIX_RDFC'] = row['F8_MIX_RDFC'];
                                    record['F9_SiO2_RDFC'] = row['F9_SiO2_RDFC'];
                                    record['F10_Al2O3_RDFC'] = row['F10_Al2O3_RDFC'];
                                    record['F11_Fe2O3_RDFC'] = row['F11_Fe2O3_RDFC'];
                                    record['F12_CaO_RDFC'] = row['F12_CaO_RDFC'];
                                    record['F13_MgO_RDFC'] = row['F13_MgO_RDFC'];
                                    record['F14_Na2O_RDFC'] = row['F14_Na2O_RDFC'];
                                    record['F15_K2O_RDFC'] = row['F15_K2O_RDFC'];
                                    record['F16_SO3_RDFC'] = row['F16_SO3_RDFC'];
                                    record['F17_LOI_RDFC'] = row['F17_LOI_RDFC'];
                                    record['I14_Lime_Saturation'] = row['I14_Lime_Saturation'];
                                    record['I17_Silica_Modulus'] = row['I17_Silica_Modulus'];
                                    record['I20_Alumina_Modulus'] = row['I20_Alumina_Modulus'];
                                    // Add other record fields here
                                    records.push(record);
                                    console.log(record);
                                }
        
                                const responses = await Promise.all(records.map(async (recordData) => {
                                    try {
                                        const response = await fetch('http://127.0.0.1:8000/api/auth/storeOrupdate', {
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
                                            body: JSON.stringify(recordData)
                                        });
        
                                        if (!response.ok) {
                                            throw new Error('Failed to create record');
                                        }
        
                                        await response.json();
                                        return true; // Return true for successful record upload
                                    } catch (error) {
                                        console.log(error);
                                        return false; // Return false for failed record upload
                                    }
                                }));
        
                                resolve(responses.every(success => success));
                            }
                        );
                    });
            } catch (error) {
                console.error("Error in callApiForCreateOrUpdate:", error);
            }
        }
        // ****END API FUNCTION */


    ///******* Create or Update API method */
    const uploadbtn = document.getElementById("uploadbtn");
uploadbtn.addEventListener("click", async () => {
    const result = confirm("Are you sure to upload data?");
    if (result) {
        const createupdate_result = await callApiForCreateOrUpdate();
        if (createupdate_result) {
            alert('Success: Data Uploaded!');
        } else {
            alert('Error: Upload failed');
        }
    }
});


})

