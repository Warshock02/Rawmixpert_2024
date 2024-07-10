
var recipenum;
var db;



document.addEventListener("deviceready", function () {


    const db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert24.db",
        location: "default",
    });

    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS rmTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NULL,email TEXT NULL,check16 BOOL,D16_Limestone NUMERIC NULL,E16_Shale NUMERIC NULL,F16_Sand NUMERIC NULL,G16_Iron NUMERIC NULL,  check17 BOOL,D17_Limestone NUMERIC NULL,E17_Shale  NUMERIC NULL,F17_Sand NUMERIC NULL,G17_Iron NUMERIC NULL,check18 BOOL,D18_Limestone NUMERIC NULL, E18_Shale  NUMERIC NULL,F18_Sand NUMERIC NULL,G18_Iron NUMERIC NULL,check19 BOOL,D19_Limestone NUMERIC NULL,E19_Shale  NUMERIC NULL,F19_Sand NUMERIC NULL,G19_Iron NUMERIC NULL,   D15 NUMERIC NULL,E15 NUMERIC NULL,F15 NUMERIC NULL,G15 NUMERIC NULL,H15_SiO2 NUMERIC NULL,I15_Al2O3 NUMERIC NULL,J15_Fe2O3 NUMERIC NULL,K15_CaO NUMERIC NULL,L15_MgO NUMERIC NULL,M15_Na2O NUMERIC NULL,N15_K2O NUMERIC NULL,  O15_SO3 NUMERIC NULL,P15_Cl NUMERIC NULL,H16_SiO2 NUMERIC NULL,I16_Al2O3 NUMERIC NULL,J16_Fe2O3 NUMERIC NULL,K16_CaO NUMERIC NULL,L16_MgO NUMERIC NULL,M16_Na2O NUMERIC NULL,N16_K2O NUMERIC NULL, O16_SO3 NUMERIC NULL,P16_Cl NUMERIC NULL,H17_SiO2 NUMERIC NULL,I17_Al2O3 NUMERIC NULL,J17_Fe2O3 NUMERIC NULL,K17_CaO NUMERIC NULL,L17_MgO NUMERIC NULL,M17_Na2O NUMERIC NULL,N17_K2O NUMERIC NULL,O17_SO3 NUMERIC NULL,P17_Cl NUMERIC NULL,H18_SiO2 NUMERIC NULL,I18_Al2O3 NUMERIC NULL,J18_Fe2O3 NUMERIC NULL,K18_CaO NUMERIC NULL,L18_MgO NUMERIC NULL,M18_Na2O NUMERIC NULL,N18_K2O NUMERIC NULL, O18_SO3 NUMERIC NULL,P18_Cl NUMERIC NULL,C30_LSF_PR NUMERIC NULL,C31_SM_PR NUMERIC NULL,C32_AM_PR NUMERIC NULL,E33_Clinker_Factor NUMERIC NULL,E34_RawMixType NUMERIC NULL, F30_LSF_TG NUMERIC NULL,F31_SM_TG NUMERIC NULL,F32_AM_TG NUMERIC NULL,H31_SiO2 NUMERIC NULL,I31_Al2O3 NUMERIC NULL,J31_Fe2O3 NUMERIC NULL,K31_CaO NUMERIC NULL,L31_MgO NUMERIC NULL, M31_Na2O NUMERIC NULL,N31_K2O NUMERIC NULL,O31_SO3 NUMERIC NULL,P31_Cl NUMERIC NULL,L38_KL_LOI NUMERIC NULL,V38_LOI NUMERIC NULL, H38_literKG NUMERIC NULL, I38_FCaO NUMERIC NULL, J38_BurningCondition NUMERIC NULL, U38_SO3 NUMERIC NULL, DT DATETIME)",
            [],
            () => console.log("Table rmd created successfully"),
            (error) => console.error("Error rmd creating table", error)
        );
    });

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

    
    function getApiUrl() {
        const hostname = window.location.hostname;
        if (hostname === "localhost" || hostname === "127.0.0.1") {
          return "http://127.0.0.1:8000"; // Local API URL
        } 
        else if (hostname === "192.168.254.168") {
          return "http://192.168.254.168:8000"; // My API
        }
        else {
          return "http://54.160.175.54"; // Server API URL
        }
      }

    function callApiForLogout() {

        // const apiUrl = "http://127.0.0.1:8000/api/auth/logout";
        const apiUrl = getApiUrl() + "/api/auth/logout";
    
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
              

        let db = null;

function openDatabase() {
    return new Promise((resolve, reject) => {
        db = window.sqlitePlugin.openDatabase({
            name: "rawmixpert24.db",
            location: "default",
        }, resolve, reject);
    });
}

function executeSql(query, params = []) {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, result) => resolve(result), (tx, error) => reject(error));
        });
    });
}

async function fetchRmdData() {
    const apiUrl = getApiUrl() + "/api/download-rmd";
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const rmdData = await response.json();
      saveRmdDataToLocalDb(rmdData);
    } catch (error) {
      console.error("Error fetching RMD data:", error);
    }
  }
  
  async function saveRmdDataToLocalDb(rmdData) {
    const db = window.sqlitePlugin.openDatabase({
      name: "rawmixpert24.db",
      location: "default",
    });
  
    try {
    //   await executeSqlAsync(db, "CREATE TABLE IF NOT EXISTS rmTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NULL,email TEXT NULL,check16 BOOL,D16_Limestone NUMERIC NULL,E16_Shale NUMERIC NULL,F16_Sand NUMERIC NULL,G16_Iron NUMERIC NULL,  check17 BOOL,D17_Limestone NUMERIC NULL,E17_Shale  NUMERIC NULL,F17_Sand NUMERIC NULL,G17_Iron NUMERIC NULL,check18 BOOL,D18_Limestone NUMERIC NULL, E18_Shale  NUMERIC NULL,F18_Sand NUMERIC NULL,G18_Iron NUMERIC NULL,check19 BOOL,D19_Limestone NUMERIC NULL,E19_Shale  NUMERIC NULL,F19_Sand NUMERIC NULL,G19_Iron NUMERIC NULL,   D15 NUMERIC NULL,E15 NUMERIC NULL,F15 NUMERIC NULL,G15 NUMERIC NULL,H15_SiO2 NUMERIC NULL,I15_Al2O3 NUMERIC NULL,J15_Fe2O3 NUMERIC NULL,K15_CaO NUMERIC NULL,L15_MgO NUMERIC NULL,M15_Na2O NUMERIC NULL,N15_K2O NUMERIC NULL,  O15_SO3 NUMERIC NULL,P15_Cl NUMERIC NULL,H16_SiO2 NUMERIC NULL,I16_Al2O3 NUMERIC NULL,J16_Fe2O3 NUMERIC NULL,K16_CaO NUMERIC NULL,L16_MgO NUMERIC NULL,M16_Na2O NUMERIC NULL,N16_K2O NUMERIC NULL, O16_SO3 NUMERIC NULL,P16_Cl NUMERIC NULL,H17_SiO2 NUMERIC NULL,I17_Al2O3 NUMERIC NULL,J17_Fe2O3 NUMERIC NULL,K17_CaO NUMERIC NULL,L17_MgO NUMERIC NULL,M17_Na2O NUMERIC NULL,N17_K2O NUMERIC NULL,O17_SO3 NUMERIC NULL,P17_Cl NUMERIC NULL,H18_SiO2 NUMERIC NULL,I18_Al2O3 NUMERIC NULL,J18_Fe2O3 NUMERIC NULL,K18_CaO NUMERIC NULL,L18_MgO NUMERIC NULL,M18_Na2O NUMERIC NULL,N18_K2O NUMERIC NULL, O18_SO3 NUMERIC NULL,P18_Cl NUMERIC NULL,C30_LSF_PR NUMERIC NULL,C31_SM_PR NUMERIC NULL,C32_AM_PR NUMERIC NULL,E33_Clinker_Factor NUMERIC NULL,E34_RawMixType NUMERIC NULL, F30_LSF_TG NUMERIC NULL,F31_SM_TG NUMERIC NULL,F32_AM_TG NUMERIC NULL,H31_SiO2 NUMERIC NULL,I31_Al2O3 NUMERIC NULL,J31_Fe2O3 NUMERIC NULL,K31_CaO NUMERIC NULL,L31_MgO NUMERIC NULL, M31_Na2O NUMERIC NULL,N31_K2O NUMERIC NULL,O31_SO3 NUMERIC NULL,P31_Cl NUMERIC NULL,L38_KL_LOI NUMERIC NULL,V38_LOI NUMERIC NULL, H38_literKG NUMERIC NULL, I38_FCaO NUMERIC NULL, J38_BurningCondition NUMERIC NULL, U38_SO3 NUMERIC NULL, DT DATETIME)");
  
      for (const rmd of rmdData) {
        await executeSqlAsync(db, "INSERT INTO rmd_table (id, user_id, data, quantity) VALUES (?, ?, ?, ?)", [rmd.id, rmd.user_id, JSON.stringify(rmd.data), rmd.quantity]);
      }
  
      console.log("RMD data saved to SQLite");
    } catch (error) {
      console.error("Error saving RMD data to SQLite:", error);
    }
  }

async function fetchAndUploadRecords() {
    try {
        await openDatabase();
        
        const result = await executeSql("SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC", [localStorage.getItem("email")]);
        const records = [];

        for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            const record = {
                C8_MIX_RDFC: row.C8_MIX_RDFC,
                C9_SiO2_RDFC: row.C9_SiO2_RDFC,
                C10_Al2O3_RDFC: row.C10_Al2O3_RDFC,
                C11_Fe2O3_RDFC: row.C11_Fe2O3_RDFC,
                C12_CaO_RDFC: row.C12_CaO_RDFC,
                C13_MgO_RDFC: row.C13_MgO_RDFC,
                C14_Na2O_RDFC: row.C14_Na2O_RDFC,
                C15_K2O_RDFC: row.C15_K2O_RDFC,
                C16_SO3_RDFC: row.C16_SO3_RDFC,
                C17_LOI_RDFC: row.C17_LOI_RDFC,
                D8_MIX_RDFC: row.D8_MIX_RDFC,
                D9_SiO2_RDFC: row.D9_SiO2_RDFC,
                D10_Al2O3_RDFC: row.D10_Al2O3_RDFC,
                D11_Fe2O3_RDFC: row.D11_Fe2O3_RDFC,
                D12_CaO_RDFC: row.D12_CaO_RDFC,
                D13_MgO_RDFC: row.D13_MgO_RDFC,
                D14_Na2O_RDFC: row.D14_Na2O_RDFC,
                D15_K2O_RDFC: row.D15_K2O_RDFC,
                D16_SO3_RDFC: row.D16_SO3_RDFC,
                D17_LOI_RDFC: row.D17_LOI_RDFC,
                E8_MIX_RDFC: row.E8_MIX_RDFC,
                E9_SiO2_RDFC: row.E9_SiO2_RDFC,
                E10_Al2O3_RDFC: row.E10_Al2O3_RDFC,
                E11_Fe2O3_RDFC: row.E11_Fe2O3_RDFC,
                E12_CaO_RDFC: row.E12_CaO_RDFC,
                E13_MgO_RDFC: row.E13_MgO_RDFC,
                E14_Na2O_RDFC: row.E14_Na2O_RDFC,
                E15_K2O_RDFC: row.E15_K2O_RDFC,
                E16_SO3_RDFC: row.E16_SO3_RDFC,
                E17_LOI_RDFC: row.E17_LOI_RDFC,
                F8_MIX_RDFC: row.F8_MIX_RDFC,
                F9_SiO2_RDFC: row.F9_SiO2_RDFC,
                F10_Al2O3_RDFC: row.F10_Al2O3_RDFC,
                F11_Fe2O3_RDFC: row.F11_Fe2O3_RDFC,
                F12_CaO_RDFC: row.F12_CaO_RDFC,
                F13_MgO_RDFC: row.F13_MgO_RDFC,
                F14_Na2O_RDFC: row.F14_Na2O_RDFC,
                F15_K2O_RDFC: row.F15_K2O_RDFC,
                F16_SO3_RDFC: row.F16_SO3_RDFC,
                F17_LOI_RDFC: row.F17_LOI_RDFC,
                I14_Lime_Saturation: row.I14_Lime_Saturation,
                I17_Silica_Modulus: row.I17_Silica_Modulus,
                I20_Alumina_Modulus: row.I20_Alumina_Modulus,
                // Add other record fields here
            };
            records.push(record);
        }

        const responses = await Promise.all(records.map(recordData =>
            fetch(getApiUrl() + '/api/auth/storeOrupdate', {
                method: "POST",
                headers: {
                    Accept: "application/json",
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
            .then(() => true)
            .catch(error => {
                console.log(error);
                return false;
            })
        ));

        if (responses.every(success => success)) {
            console.log("All records uploaded successfully");
            alert("All records uploaded successfully");
        } else {
            console.log("Some records failed to upload");
            alert("Some records failed to upload");
        }
    } catch (error) {
        alert(error.message);
        console.error("Error in fetchAndUploadRecords:", error);
    }
}

// function callApiForCreateOrUpdate() {
//     alert('Create or Update');
//     fetchAndUploadRecords();
// }


        async function callApiForCreateOrUpdate1() {
            alert('Create or Update');
            try {

                     db = window.sqlitePlugin.openDatabase({
                     name: "rawmixpert24.db",
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
                                        const response = await fetch(getApiUrl() + 'api/auth/storeOrupdate', {
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
        try {
            await fetchAndUploadRecords();
        } catch (error) {
            alert("Error Upload: " + error);
        }
    }
});


const downloadbtn = document.getElementById("downloadbtn");
downloadbtn.addEventListener("click", async () => {
    const result = confirm("Are you sure to upload data?");
    if (result) {
        try {
            await fetchRmdData();
        } catch (error) {
            alert("Error Upload: " + error);
        }
    }
});


})

