
var recipenum;
var db = null;


document.addEventListener("deviceready", function () {

    db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert24.db",
        location: "default",
    }, function () {
        console.log("Database opened successfully");
    }, function (error) {
        console.error("Error opening database: ", error);
    });
    
    function executeSql(db, query, params) {
        return new Promise((resolve, reject) => {
            db.transaction(function (tx) {
                tx.executeSql(query, params, function (tx, result) {
                    resolve(result);
                }, function (tx, error) {
                    reject(error);
                });
            });
        });
    }

     executeSql(db,
            "CREATE TABLE IF NOT EXISTS rmTable (id INTEGER PRIMARY KEY AUTOINCREMENT,user_id NUMERIC,name TEXT NULL,email TEXT NULL,C8_MIX_RDFC NUMERIC,C9_SiO2_RDFC NUMERIC,C10_Al2O3_RDFC NUMERIC, C11_Fe2O3_RDFC NUMERIC, C12_CaO_RDFC NUMERIC,   C13_MgO_RDFC NUMERIC,   C14_Na2O_RDFC NUMERIC,  C15_K2O_RDFC NUMERIC,   C16_SO3_RDFC NUMERIC,   C17_LOI_RDFC NUMERIC,   D8_MIX_RDFC NUMERIC,D9_SiO2_RDFC NUMERIC,   D10_Al2O3_RDFC NUMERIC, D11_Fe2O3_RDFC NUMERIC, D12_CaO_RDFC NUMERIC,   D13_MgO_RDFC NUMERIC,   D14_Na2O_RDFC NUMERIC,  D15_K2O_RDFC NUMERIC,   D16_SO3_RDFC NUMERIC,   D17_LOI_RDFC NUMERIC,E8_MIX_RDFC NUMERIC,E9_SiO2_RDFC NUMERIC,   E10_Al2O3_RDFC NUMERIC, E11_Fe2O3_RDFC NUMERIC, E12_CaO_RDFC NUMERIC,   E13_MgO_RDFC NUMERIC,   E14_Na2O_RDFC NUMERIC,  E15_K2O_RDFC NUMERIC,   E16_SO3_RDFC NUMERIC,   E17_LOI_RDFC NUMERIC,F8_MIX_RDFC NUMERIC,F9_SiO2_RDFC NUMERIC,   F10_Al2O3_RDFC NUMERIC, F11_Fe2O3_RDFC NUMERIC, F12_CaO_RDFC NUMERIC,   F13_MgO_RDFC NUMERIC,   F14_Na2O_RDFC NUMERIC,  F15_K2O_RDFC NUMERIC,   F16_SO3_RDFC NUMERIC,   F17_LOI_RDFC NUMERIC,   I14_Lime_Saturation NUMERIC, I17_Silica_Modulus NUMERIC,  I20_Alumina_Modulus NUMERIC, check16 BOOL,D16_Limestone NUMERIC NULL,E16_Shale NUMERIC NULL,F16_Sand NUMERIC NULL,G16_Iron NUMERIC NULL,check17 BOOL,D17_Limestone NUMERIC NULL,E17_Shale NUMERIC NULL,F17_Sand NUMERIC NULL,G17_Iron NUMERIC NULL,check18 BOOL,D18_Limestone NUMERIC NULL,E18_Shale NUMERIC NULL,F18_Sand NUMERIC NULL,G18_Iron NUMERIC NULL,check19 BOOL,D19_Limestone NUMERIC NULL,E19_Shale NUMERIC NULL,F19_Sand NUMERIC NULL,G19_Iron NUMERIC NULL,D15 NUMERIC NULL,E15 NUMERIC NULL,F15 NUMERIC NULL,G15 NUMERIC NULL,H15_SiO2 NUMERIC NULL,I15_Al2O3 NUMERIC NULL,J15_Fe2O3 NUMERIC NULL,K15_CaO NUMERIC NULL,L15_MgO NUMERIC NULL,M15_Na2O NUMERIC NULL,N15_K2O NUMERIC NULL,O15_SO3 NUMERIC NULL,P15_Cl NUMERIC NULL,H16_SiO2 NUMERIC NULL,I16_Al2O3 NUMERIC NULL,J16_Fe2O3 NUMERIC NULL,K16_CaO NUMERIC NULL,L16_MgO NUMERIC NULL,M16_Na2O NUMERIC NULL,N16_K2O NUMERIC NULL,O16_SO3 NUMERIC NULL,P16_Cl NUMERIC NULL,H17_SiO2 NUMERIC NULL,I17_Al2O3 NUMERIC NULL,J17_Fe2O3 NUMERIC NULL,K17_CaO NUMERIC NULL,L17_MgO NUMERIC NULL,M17_Na2O NUMERIC NULL,N17_K2O NUMERIC NULL,O17_SO3 NUMERIC NULL,P17_Cl NUMERIC NULL,H18_SiO2 NUMERIC NULL,I18_Al2O3 NUMERIC NULL,J18_Fe2O3 NUMERIC NULL,K18_CaO NUMERIC NULL,L18_MgO NUMERIC NULL,M18_Na2O NUMERIC NULL,N18_K2O NUMERIC NULL,O18_SO3 NUMERIC NULL,P18_Cl NUMERIC NULL,C30_LSF_PR NUMERIC NULL,C31_SM_PR NUMERIC NULL,C32_AM_PR NUMERIC NULL,E33_Clinker_Factor NUMERIC NULL,E34_RawMixType NUMERIC NULL,F30_LSF_TG NUMERIC NULL,F31_SM_TG NUMERIC NULL,F32_AM_TG NUMERIC NULL,H31_SiO2 NUMERIC NULL,I31_Al2O3 NUMERIC NULL,J31_Fe2O3 NUMERIC NULL,K31_CaO NUMERIC NULL,L31_MgO NUMERIC NULL,M31_Na2O NUMERIC NULL,N31_K2O NUMERIC NULL,O31_SO3 NUMERIC NULL,P31_Cl NUMERIC NULL,L38_KL_LOI NUMERIC NULL,V38_LOI NUMERIC NULL,H38_literKG NUMERIC NULL,I38_FCaO NUMERIC NULL,J38_BurningCondition NUMERIC NULL,U38_SO3 NUMERIC NULL,DT DATETIME)",
            [],
            () => console.log("Table rmd created successfully"),
            (error) => console.error("Error rmd creating table", error)
        );

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



    function executeSql(db, query, params) {
        return new Promise((resolve, reject) => {
            db.transaction(function (tx) {
                tx.executeSql(query, params, function (tx, result) {
                    resolve(result);
                }, function (tx, error) {
                    reject(error);
                });
            });
        });
    }
    
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
        const apiUrl = "http://54.160.175.54/api/auth/logout";
    
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
              

async function fetchRmdData() {
    const apiUrl = "http://54.160.175.54/api/auth/download-rmd";
                    http://54.160.175.54/api/auth/download-rmd
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('token'),
          "Access-Control-Allow-Origin": "*", // Replace * with the specific origin if required
          "Access-Control-Allow-Methods": "GET, OPTIONS", // Specify the allowed HTTP methods
          "Access-Control-Allow-Headers": "Content-Type, Authorization", // Specify the allowed headers
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
    
  
    try {
   
      for (const rmd of rmdData) {
        await executeSql(db, "INSERT INTO rmTable (id, user_id, name, check16, check17, check18, check19, C8_MIX_RDFC , C9_SiO2_RDFC ,C10_Al2O3_RDFC      ,C11_Fe2O3_RDFC ,C12_CaO_RDFC ,C13_MgO_RDFC ,C14_Na2O_RDFC ,C15_K2O_RDFC ,C16_SO3_RDFC ,C17_LOI_RDFC ,D8_MIX_RDFC ,D9_SiO2_RDFC ,D10_Al2O3_RDFC ,D11_Fe2O3_RDFC ,D12_CaO_RDFC ,D13_MgO_RDFC ,D14_Na2O_RDFC ,D15_K2O_RDFC ,D16_SO3_RDFC ,D17_LOI_RDFC ,E8_MIX_RDFC ,E9_SiO2_RDFC ,E10_Al2O3_RDFC ,E11_Fe2O3_RDFC ,E12_CaO_RDFC ,E13_MgO_RDFC ,E14_Na2O_RDFC       ,E15_K2O_RDFC ,E16_SO3_RDFC ,E17_LOI_RDFC ,F8_MIX_RDFC ,F9_SiO2_RDFC ,F10_Al2O3_RDFC ,F11_Fe2O3_RDFC ,F12_CaO_RDFC ,F13_MgO_RDFC ,F14_Na2O_RDFC ,F15_K2O_RDFC ,F16_SO3_RDFC ,F17_LOI_RDFC ,I14_Lime_Saturation ,I17_Silica_Modulus  ,I20_Alumina_Modulus , DT, email) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)", 
            [
                rmd.id, rmd.user_id, rmd.name, rmd.check16, rmd.check17, rmd.check18, rmd.check19, rmd.C8_MIX_RDFC, rmd.C9_SiO2_RDFC, rmd.C10_Al2O3_RDFC, rmd.C11_Fe2O3_RDFC, rmd.C12_CaO_RDFC, 
                rmd.C13_MgO_RDFC, rmd.C14_Na2O_RDFC, rmd.C15_K2O_RDFC, rmd.C16_SO3_RDFC, rmd.C17_LOI_RDFC, rmd.D8_MIX_RDFC, rmd.D9_SiO2_RDFC, 
                rmd.D10_Al2O3_RDFC, rmd.D11_Fe2O3_RDFC, rmd.D12_CaO_RDFC, rmd.D13_MgO_RDFC, rmd.D14_Na2O_RDFC, rmd.D15_K2O_RDFC, rmd.D16_SO3_RDFC, 
                rmd.D17_LOI_RDFC, rmd.E8_MIX_RDFC, rmd.E9_SiO2_RDFC, rmd.E10_Al2O3_RDFC, rmd.E11_Fe2O3_RDFC, rmd.E12_CaO_RDFC, rmd.E13_MgO_RDFC, 
                rmd.E14_Na2O_RDFC, rmd.E15_K2O_RDFC, rmd.E16_SO3_RDFC, rmd.E17_LOI_RDFC, rmd.F8_MIX_RDFC, rmd.F9_SiO2_RDFC, rmd.F10_Al2O3_RDFC, 
                rmd.F11_Fe2O3_RDFC, rmd.F12_CaO_RDFC, rmd.F13_MgO_RDFC, rmd.F14_Na2O_RDFC, rmd.F15_K2O_RDFC, rmd.F16_SO3_RDFC, rmd.F17_LOI_RDFC, 
                rmd.I14_Lime_Saturation, rmd.I17_Silica_Modulus, rmd.I20_Alumina_Modulus, rmd.DT, localStorage.getItem('email')
            ]);
      }
      
      console.log("RMD data saved to SQLite");
      alert("Rawmix data successfully downloaded!")
    } catch (error) {
      console.error("Error saving RMD data to SQLite:", error);
    }
  }

async function fetchAndUploadRecords() {
    try {
        
        const result = await executeSql(db, "SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC", [localStorage.getItem("email")]);
        const records = [];

        for (let i = 0; i < result.rows.length; i++) {
            const row = result.rows.item(i);
            const record = {
                check16: row.check16,
                check17: row.check17,
                check18: row.check18,
                check19: row.check19,
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
            fetch('http://54.160.175.54/api/auth/storeOrupdate', {
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
            alert("Rawmix records uploaded successfully");
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
    const result = confirm("Are you sure to download data?");
    if (result) {
        try {
            await fetchRmdData();
        } catch (error) {
            alert("Error Upload: " + error);
        }
    }
});


})

