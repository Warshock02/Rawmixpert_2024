var recipenum;
var db = null;

let domContentLoaded = false;
let deviceReady = false;


function getApiUrl() {
    const hostname = window.location.hostname;
    return "http://107.23.7.86";
    if (hostname === "localhost" || hostname === "127.0.0.1") {
        // alert("LOCAL API");
        return "http://127.0.0.1:8000"; // Local API URL
    } else {
        // alert("SERVER API");
        return "http://107.23.7.86"; // Server API URL
    }
}

function updateProgressBar(progressPercentage) {
    const progressBar = document.getElementById("progress-container");
    const progressText = document.getElementById("progress-text");
    progressBar.style.setProperty("--progress", `${progressPercentage}%`);
    progressText.innerText = `${progressPercentage}%`;
}


function hideProgressBar() {
    document.getElementById("progress-container").classList.add("hidden");
}

function showProgressBar() {
    document.getElementById("progress-container").classList.remove("hidden");
}


document.addEventListener("deviceready", function() {

    const token = localStorage.getItem('token');

    // If the token is missing or empty, navigate to the login page
    if (!token || token.trim() === '') {
        window.location.href = 'index.html';
    }

    db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert24.db",
        location: "default",
    }, function() {
        console.log("Database opened successfully");
    }, function(error) {
        console.error("Error opening database: ", error);
    });

    function executeSql(db, query, params) {
        return new Promise((resolve, reject) => {
            db.transaction(function(tx) {
                tx.executeSql(query, params, function(tx, result) {
                    resolve(result);
                }, function(tx, error) {
                    reject(error);
                });
            });
        });
    }

    executeSql(db,
        "CREATE TABLE IF NOT EXISTS rmdTable (id INTEGER PRIMARY KEY AUTOINCREMENT,user_id NUMERIC,name TEXT NULL,email TEXT NULL, pageType BOOL DEFAULT 'false',C8_MIX_RDFC NUMERIC DEFAULT 0 NOT NULL,C9_SiO2_RDFC NUMERIC DEFAULT 0 NOT NULL,C10_Al2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, C11_Fe2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, C12_CaO_RDFC NUMERIC DEFAULT 0 NOT NULL,   C13_MgO_RDFC NUMERIC DEFAULT 0 NOT NULL,   C14_Na2O_RDFC NUMERIC DEFAULT 0 NOT NULL,  C15_K2O_RDFC NUMERIC DEFAULT 0 NOT NULL,   C16_SO3_RDFC NUMERIC DEFAULT 0 NOT NULL,   C17_LOI_RDFC NUMERIC DEFAULT 0 NOT NULL,   D8_MIX_RDFC NUMERIC DEFAULT 0 NOT NULL,D9_SiO2_RDFC NUMERIC DEFAULT 0 NOT NULL,   D10_Al2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, D11_Fe2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, D12_CaO_RDFC NUMERIC DEFAULT 0 NOT NULL,   D13_MgO_RDFC NUMERIC DEFAULT 0 NOT NULL,   D14_Na2O_RDFC NUMERIC DEFAULT 0 NOT NULL,  D15_K2O_RDFC NUMERIC DEFAULT 0 NOT NULL,   D16_SO3_RDFC NUMERIC DEFAULT 0 NOT NULL,   D17_LOI_RDFC NUMERIC DEFAULT 0 NOT NULL,E8_MIX_RDFC NUMERIC DEFAULT 0 NOT NULL,E9_SiO2_RDFC NUMERIC DEFAULT 0 NOT NULL,   E10_Al2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, E11_Fe2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, E12_CaO_RDFC NUMERIC DEFAULT 0 NOT NULL,   E13_MgO_RDFC NUMERIC DEFAULT 0 NOT NULL,   E14_Na2O_RDFC NUMERIC DEFAULT 0 NOT NULL,  E15_K2O_RDFC NUMERIC DEFAULT 0 NOT NULL,   E16_SO3_RDFC NUMERIC DEFAULT 0 NOT NULL,   E17_LOI_RDFC NUMERIC DEFAULT 0 NOT NULL,F8_MIX_RDFC NUMERIC DEFAULT 0 NOT NULL,F9_SiO2_RDFC NUMERIC DEFAULT 0 NOT NULL,   F10_Al2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, F11_Fe2O3_RDFC NUMERIC DEFAULT 0 NOT NULL, F12_CaO_RDFC NUMERIC DEFAULT 0 NOT NULL,   F13_MgO_RDFC NUMERIC DEFAULT 0 NOT NULL,   F14_Na2O_RDFC NUMERIC DEFAULT 0 NOT NULL,  F15_K2O_RDFC NUMERIC DEFAULT 0 NOT NULL,   F16_SO3_RDFC NUMERIC DEFAULT 0 NOT NULL,   F17_LOI_RDFC NUMERIC DEFAULT 0 NOT NULL,   I14_Lime_Saturation NUMERIC DEFAULT 0 NOT NULL, I17_Silica_Modulus NUMERIC DEFAULT 0 NOT NULL,  I20_Alumina_Modulus NUMERIC DEFAULT 0 NOT NULL, check16 BOOL,D16_Limestone NUMERIC DEFAULT 0 NOT NULL,E16_Shale NUMERIC DEFAULT 0 NOT NULL,F16_Sand NUMERIC DEFAULT 0 NOT NULL,G16_Iron NUMERIC DEFAULT 0 NOT NULL,check17 BOOL,D17_Limestone NUMERIC DEFAULT 0 NOT NULL,E17_Shale NUMERIC DEFAULT 0 NOT NULL,F17_Sand NUMERIC DEFAULT 0 NOT NULL,G17_Iron NUMERIC DEFAULT 0 NOT NULL,check18 BOOL,D18_Limestone NUMERIC DEFAULT 0 NOT NULL,E18_Shale NUMERIC DEFAULT 0 NOT NULL,F18_Sand NUMERIC DEFAULT 0 NOT NULL,G18_Iron NUMERIC DEFAULT 0 NOT NULL,check19 BOOL,D19_Limestone NUMERIC DEFAULT 0 NOT NULL,E19_Shale NUMERIC DEFAULT 0 NOT NULL,F19_Sand NUMERIC DEFAULT 0 NOT NULL,G19_Iron NUMERIC DEFAULT 0 NOT NULL,D15 NUMERIC DEFAULT 0 NOT NULL,E15 NUMERIC DEFAULT 0 NOT NULL,F15 NUMERIC DEFAULT 0 NOT NULL,G15 NUMERIC DEFAULT 0 NOT NULL,H15_SiO2 NUMERIC DEFAULT 0 NOT NULL,I15_Al2O3 NUMERIC DEFAULT 0 NOT NULL,J15_Fe2O3 NUMERIC DEFAULT 0 NOT NULL,K15_CaO NUMERIC DEFAULT 0 NOT NULL,L15_MgO NUMERIC DEFAULT 0 NOT NULL,M15_Na2O NUMERIC DEFAULT 0 NOT NULL,N15_K2O NUMERIC DEFAULT 0 NOT NULL,O15_SO3 NUMERIC DEFAULT 0 NOT NULL,P15_Cl NUMERIC DEFAULT 0 NOT NULL,H16_SiO2 NUMERIC DEFAULT 0 NOT NULL,I16_Al2O3 NUMERIC DEFAULT 0 NOT NULL,J16_Fe2O3 NUMERIC DEFAULT 0 NOT NULL,K16_CaO NUMERIC DEFAULT 0 NOT NULL,L16_MgO NUMERIC DEFAULT 0 NOT NULL,M16_Na2O NUMERIC DEFAULT 0 NOT NULL,N16_K2O NUMERIC DEFAULT 0 NOT NULL,O16_SO3 NUMERIC DEFAULT 0 NOT NULL,P16_Cl NUMERIC DEFAULT 0 NOT NULL,H17_SiO2 NUMERIC DEFAULT 0 NOT NULL,I17_Al2O3 NUMERIC DEFAULT 0 NOT NULL,J17_Fe2O3 NUMERIC DEFAULT 0 NOT NULL,K17_CaO NUMERIC DEFAULT 0 NOT NULL,L17_MgO NUMERIC DEFAULT 0 NOT NULL,M17_Na2O NUMERIC DEFAULT 0 NOT NULL,N17_K2O NUMERIC DEFAULT 0 NOT NULL,O17_SO3 NUMERIC DEFAULT 0 NOT NULL,P17_Cl NUMERIC DEFAULT 0 NOT NULL,H18_SiO2 NUMERIC DEFAULT 0 NOT NULL,I18_Al2O3 NUMERIC DEFAULT 0 NOT NULL,J18_Fe2O3 NUMERIC DEFAULT 0 NOT NULL,K18_CaO NUMERIC DEFAULT 0 NOT NULL,L18_MgO NUMERIC DEFAULT 0 NOT NULL,M18_Na2O NUMERIC DEFAULT 0 NOT NULL,N18_K2O NUMERIC DEFAULT 0 NOT NULL,O18_SO3 NUMERIC DEFAULT 0 NOT NULL,P18_Cl NUMERIC DEFAULT 0 NOT NULL,C30_LSF_PR NUMERIC DEFAULT 0 NOT NULL,C31_SM_PR NUMERIC DEFAULT 0 NOT NULL,C32_AM_PR NUMERIC DEFAULT 0 NOT NULL,E33_Clinker_Factor NUMERIC DEFAULT 0 NOT NULL,E34_RawMixType TEXT,F30_LSF_TG NUMERIC DEFAULT 0 NOT NULL,F31_SM_TG NUMERIC DEFAULT 0 NOT NULL,F32_AM_TG NUMERIC DEFAULT 0 NOT NULL,H31_SiO2 NUMERIC DEFAULT 0 NOT NULL,I31_Al2O3 NUMERIC DEFAULT 0 NOT NULL,J31_Fe2O3 NUMERIC DEFAULT 0 NOT NULL,K31_CaO NUMERIC DEFAULT 0 NOT NULL,L31_MgO NUMERIC DEFAULT 0 NOT NULL,M31_Na2O NUMERIC DEFAULT 0 NOT NULL,N31_K2O NUMERIC DEFAULT 0 NOT NULL,O31_SO3 NUMERIC DEFAULT 0 NOT NULL,P31_Cl NUMERIC DEFAULT 0 NOT NULL,L38_KL_LOI NUMERIC DEFAULT 0 NOT NULL,V38_LOI NUMERIC DEFAULT 0 NOT NULL,H38_literKG TEXT,I38_FCaO NUMERIC DEFAULT 0 NOT NULL,J38_BurningCondition TEXT,U38_SO3 TEXT,DT DATETIME)",
        [],
        () => console.log("Table rmd created successfully"),
        (error) => console.error("Error rmd creating table", error)
    );

    var element = document.querySelector(".loading-screen")

    if (element !== null) {
        // Element exists, you can work with it
        element.style.display = "none";

        function rawmill() {
            // window.rawmillnum = 1;
            console.log("RAWMILL")
            cordova.InAppBrowser.open("rawmill.html", "_self");
        }
        window.rawmill = rawmill;

        function rawmill_2() {
            // window.rawmillnum = 1;
            console.log("RAWMILL 2")
            cordova.InAppBrowser.open("rawmill_2.html", "_self");
        }
        window.rawmill_2 = rawmill_2;

        // function rawmill1() {
        //     window.rawmillnum = 1;
        //     console.log("RAWMILL 1")
        //     cordova.InAppBrowser.open("rawmill1.html", "_self");
        // }
        // window.rawmill1 = rawmill1;

        // function rawmill2() {
        //     window.rawmillnum = 2;
        //     console.log("RAWMILL 2")
        //     cordova.InAppBrowser.open("rawmill2.html", "_self");
        // }
        // window.rawmill2 = rawmill2;

        // function recipe1() {
        //     window.recipenum = 1
        //     console.log("RECIPE 1")
        //     cordova.InAppBrowser.open("recipe1.html", "_self");
        // }
        // window.recipe1 = recipe1;

        // function recipe2() {
        //     window.recipenum = 2
        //     console.log("RECIPE 2")
        //     cordova.InAppBrowser.open("recipe2.html", "_self");
        // }
        // window.recipe2 = recipe2;

        document.querySelector(".app-content").style.display = "block";


    }

    function back() {
        cordova.InAppBrowser.open("rm-main.html", "_self");
    }
    window.back = back;




    async function fetchRmdDataDR() {

        showProgressBar();

        const apiUrl = getApiUrl() + "/api/auth/download-rmd";

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
            if (!rmdData || (Array.isArray(rmdData) && rmdData.length === 0) || (typeof rmdData === 'object' && Object.keys(rmdData).length === 0)) {
                alert('No data to download!');
                return; // Optionally return or handle the empty data case
            } else {
                DRsaveRmdDataToLocalDb(rmdData);
            }
        } catch (error) {
            console.error("Error fetching RMD data:", error);
        }

        hideProgressBar();
    }


    ////
    var getcount = executeSql(db, `SELECT COUNT(*) AS row_count FROM rmdTable where email = ?`, [localStorage.getItem('email')]);
    ///
    if (getcount.row_count <= 0) {
        fetchRmdDataDR();
    }
    // Example of how to bind a button click to the handleButtonClick function
    //   document.getElementById('downloadbtn').addEventListener('click', function() {
    //     handleButtonClick(1);
    // });

    // document.getElementById('uploadbtn').addEventListener('click', function() {
    //     handleButtonClick(2);
    // });


    deviceReady = true;
    checkAndCompute();
})

document.addEventListener("DOMContentLoaded", function() {


    function navigateToDashboard() {
        cordova.InAppBrowser.open("index.html", "_self");
    }

    if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
        navigateToDashboard();
    }

    function logout() {

        localStorage.removeItem('lastActivity');
        localStorage.removeItem('email');
        localStorage.removeItem('token');

        // localStorage.removeItem('token');

        // Redirect the user to the login page
        cordova.InAppBrowser.open("index.html", "_self");
    }
    const offbtn = document.getElementById("offBtn");
    offbtn.addEventListener("click", async () => {

        const result = confirm("Are you sure to logout?");
        if (result) {
            if (localStorage.getItem("token") == "" || localStorage.getItem("token") == null) {
                logout();
            }

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
            db.transaction(function(tx) {
                tx.executeSql(query, params, function(tx, result) {
                    resolve(result);
                }, function(tx, error) {
                    reject(error);
                });
            });
        });
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


    async function fetchRmdData() {

        showProgressBar();

        const apiUrl = getApiUrl() + "/api/auth/download-rmd";

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

        hideProgressBar();
    }

    /////55555
    async function saveRmdDataToLocalDb(rmdData) {
        const checkI = checkInternetConnection();
        if (checkI) {
            return;
        }

        const totalItems = rmdData.length;
        let processedItems = 0;
        try {

            for (const rmd of rmdData) {
                await executeSql(db, `
                INSERT INTO rmdTable (
                    id, user_id, name, email, pageType, C8_MIX_RDFC, C9_SiO2_RDFC, C10_Al2O3_RDFC, C11_Fe2O3_RDFC, C12_CaO_RDFC, 
                    C13_MgO_RDFC, C14_Na2O_RDFC, C15_K2O_RDFC, C16_SO3_RDFC, C17_LOI_RDFC, D8_MIX_RDFC, D9_SiO2_RDFC, D10_Al2O3_RDFC, 
                    D11_Fe2O3_RDFC, D12_CaO_RDFC, D13_MgO_RDFC, D14_Na2O_RDFC, D15_K2O_RDFC, D16_SO3_RDFC, D17_LOI_RDFC, E8_MIX_RDFC, 
                    E9_SiO2_RDFC, E10_Al2O3_RDFC, E11_Fe2O3_RDFC, E12_CaO_RDFC, E13_MgO_RDFC, E14_Na2O_RDFC, E15_K2O_RDFC, E16_SO3_RDFC, 
                    E17_LOI_RDFC, F8_MIX_RDFC, F9_SiO2_RDFC, F10_Al2O3_RDFC, F11_Fe2O3_RDFC, F12_CaO_RDFC, F13_MgO_RDFC, F14_Na2O_RDFC, 
                    F15_K2O_RDFC, F16_SO3_RDFC, F17_LOI_RDFC, I14_Lime_Saturation, I17_Silica_Modulus, I20_Alumina_Modulus, check16, 
                    D16_Limestone, E16_Shale, F16_Sand, G16_Iron, check17, D17_Limestone, E17_Shale, F17_Sand, G17_Iron, check18, 
                    D18_Limestone, E18_Shale, F18_Sand, G18_Iron, check19, D19_Limestone, E19_Shale, F19_Sand, G19_Iron, D15, E15, F15, 
                    G15, H15_SiO2, I15_Al2O3, J15_Fe2O3, K15_CaO, L15_MgO, M15_Na2O, N15_K2O, O15_SO3, P15_Cl, H16_SiO2, I16_Al2O3, 
                    J16_Fe2O3, K16_CaO, L16_MgO, M16_Na2O, N16_K2O, O16_SO3, P16_Cl, H17_SiO2, I17_Al2O3, J17_Fe2O3, K17_CaO, L17_MgO, 
                    M17_Na2O, N17_K2O, O17_SO3, P17_Cl, H18_SiO2, I18_Al2O3, J18_Fe2O3, K18_CaO, L18_MgO, M18_Na2O, N18_K2O, O18_SO3, 
                    P18_Cl, C30_LSF_PR, C31_SM_PR, C32_AM_PR, E33_Clinker_Factor, E34_RawMixType, F30_LSF_TG, F31_SM_TG, F32_AM_TG, 
                    H31_SiO2, I31_Al2O3, J31_Fe2O3, K31_CaO, L31_MgO, M31_Na2O, N31_K2O, O31_SO3, P31_Cl, L38_KL_LOI, V38_LOI, H38_literKG, 
                    I38_FCaO, J38_BurningCondition, U38_SO3, DT
                ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
                ) ON CONFLICT(id) DO UPDATE SET 
                    user_id=excluded.user_id, name=excluded.name, email=excluded.email, pageType=excluded.pageType, 
                    C8_MIX_RDFC=excluded.C8_MIX_RDFC, C9_SiO2_RDFC=excluded.C9_SiO2_RDFC, C10_Al2O3_RDFC=excluded.C10_Al2O3_RDFC, 
                    C11_Fe2O3_RDFC=excluded.C11_Fe2O3_RDFC, C12_CaO_RDFC=excluded.C12_CaO_RDFC, C13_MgO_RDFC=excluded.C13_MgO_RDFC, 
                    C14_Na2O_RDFC=excluded.C14_Na2O_RDFC, C15_K2O_RDFC=excluded.C15_K2O_RDFC, C16_SO3_RDFC=excluded.C16_SO3_RDFC, 
                    C17_LOI_RDFC=excluded.C17_LOI_RDFC, D8_MIX_RDFC=excluded.D8_MIX_RDFC, D9_SiO2_RDFC=excluded.D9_SiO2_RDFC, 
                    D10_Al2O3_RDFC=excluded.D10_Al2O3_RDFC, D11_Fe2O3_RDFC=excluded.D11_Fe2O3_RDFC, D12_CaO_RDFC=excluded.D12_CaO_RDFC, 
                    D13_MgO_RDFC=excluded.D13_MgO_RDFC, D14_Na2O_RDFC=excluded.D14_Na2O_RDFC, D15_K2O_RDFC=excluded.D15_K2O_RDFC, 
                    D16_SO3_RDFC=excluded.D16_SO3_RDFC, D17_LOI_RDFC=excluded.D17_LOI_RDFC, E8_MIX_RDFC=excluded.E8_MIX_RDFC, 
                    E9_SiO2_RDFC=excluded.E9_SiO2_RDFC, E10_Al2O3_RDFC=excluded.E10_Al2O3_RDFC, E11_Fe2O3_RDFC=excluded.E11_Fe2O3_RDFC, 
                    E12_CaO_RDFC=excluded.E12_CaO_RDFC, E13_MgO_RDFC=excluded.E13_MgO_RDFC, E14_Na2O_RDFC=excluded.E14_Na2O_RDFC, 
                    E15_K2O_RDFC=excluded.E15_K2O_RDFC, E16_SO3_RDFC=excluded.E16_SO3_RDFC, E17_LOI_RDFC=excluded.E17_LOI_RDFC, 
                    F8_MIX_RDFC=excluded.F8_MIX_RDFC, F9_SiO2_RDFC=excluded.F9_SiO2_RDFC, F10_Al2O3_RDFC=excluded.F10_Al2O3_RDFC, 
                    F11_Fe2O3_RDFC=excluded.F11_Fe2O3_RDFC, F12_CaO_RDFC=excluded.F12_CaO_RDFC, F13_MgO_RDFC=excluded.F13_MgO_RDFC, 
                    F14_Na2O_RDFC=excluded.F14_Na2O_RDFC, F15_K2O_RDFC=excluded.F15_K2O_RDFC, F16_SO3_RDFC=excluded.F16_SO3_RDFC, 
                    F17_LOI_RDFC=excluded.F17_LOI_RDFC, I14_Lime_Saturation=excluded.I14_Lime_Saturation, 
                    I17_Silica_Modulus=excluded.I17_Silica_Modulus, I20_Alumina_Modulus=excluded.I20_Alumina_Modulus, check16=excluded.check16, 
                    D16_Limestone=excluded.D16_Limestone, E16_Shale=excluded.E16_Shale, F16_Sand=excluded.F16_Sand, G16_Iron=excluded.G16_Iron, 
                    check17=excluded.check17, D17_Limestone=excluded.D17_Limestone, E17_Shale=excluded.E17_Shale, F17_Sand=excluded.F17_Sand, 
                    G17_Iron=excluded.G17_Iron, check18=excluded.check18, D18_Limestone=excluded.D18_Limestone, E18_Shale=excluded.E18_Shale, 
                    F18_Sand=excluded.F18_Sand, G18_Iron=excluded.G18_Iron, check19=excluded.check19, D19_Limestone=excluded.D19_Limestone, 
                    E19_Shale=excluded.E19_Shale, F19_Sand=excluded.F19_Sand, G19_Iron=excluded.G19_Iron, D15=excluded.D15, E15=excluded.E15, 
                    F15=excluded.F15, G15=excluded.G15, H15_SiO2=excluded.H15_SiO2, I15_Al2O3=excluded.I15_Al2O3, J15_Fe2O3=excluded.J15_Fe2O3, 
                    K15_CaO=excluded.K15_CaO, L15_MgO=excluded.L15_MgO, M15_Na2O=excluded.M15_Na2O, N15_K2O=excluded.N15_K2O, O15_SO3=excluded.O15_SO3, 
                    P15_Cl=excluded.P15_Cl, H16_SiO2=excluded.H16_SiO2, I16_Al2O3=excluded.I16_Al2O3, J16_Fe2O3=excluded.J16_Fe2O3, K16_CaO=excluded.K16_CaO, 
                    L16_MgO=excluded.L16_MgO, M16_Na2O=excluded.M16_Na2O, N16_K2O=excluded.N16_K2O, O16_SO3=excluded.O16_SO3, P16_Cl=excluded.P16_Cl, 
                    H17_SiO2=excluded.H17_SiO2, I17_Al2O3=excluded.I17_Al2O3, J17_Fe2O3=excluded.J17_Fe2O3, K17_CaO=excluded.K17_CaO, L17_MgO=excluded.L17_MgO, 
                    M17_Na2O=excluded.M17_Na2O, N17_K2O=excluded.N17_K2O, O17_SO3=excluded.O17_SO3, P17_Cl=excluded.P17_Cl, H18_SiO2=excluded.H18_SiO2, 
                    I18_Al2O3=excluded.I18_Al2O3, J18_Fe2O3=excluded.J18_Fe2O3, K18_CaO=excluded.K18_CaO, L18_MgO=excluded.L18_MgO, M18_Na2O=excluded.M18_Na2O, 
                    N18_K2O=excluded.N18_K2O, O18_SO3=excluded.O18_SO3, P18_Cl=excluded.P18_Cl, C30_LSF_PR=excluded.C30_LSF_PR, C31_SM_PR=excluded.C31_SM_PR, 
                    C32_AM_PR=excluded.C32_AM_PR, E33_Clinker_Factor=excluded.E33_Clinker_Factor, E34_RawMixType=excluded.E34_RawMixType, 
                    F30_LSF_TG=excluded.F30_LSF_TG, F31_SM_TG=excluded.F31_SM_TG, F32_AM_TG=excluded.F32_AM_TG, H31_SiO2=excluded.H31_SiO2, I31_Al2O3=excluded.I31_Al2O3, 
                    J31_Fe2O3=excluded.J31_Fe2O3, K31_CaO=excluded.K31_CaO, L31_MgO=excluded.L31_MgO, M31_Na2O=excluded.M31_Na2O, N31_K2O=excluded.N31_K2O, 
                    O31_SO3=excluded.O31_SO3, P31_Cl=excluded.P31_Cl, L38_KL_LOI=excluded.L38_KL_LOI, V38_LOI=excluded.V38_LOI, H38_literKG=excluded.H38_literKG, 
                    I38_FCaO=excluded.I38_FCaO, J38_BurningCondition=excluded.J38_BurningCondition, U38_SO3=excluded.U38_SO3, DT=excluded.DT
            `, [
                    rmd.id, rmd.user_id, rmd.name, rmd.email, rmd.pageType, rmd.C8_MIX_RDFC, rmd.C9_SiO2_RDFC, rmd.C10_Al2O3_RDFC, rmd.C11_Fe2O3_RDFC, rmd.C12_CaO_RDFC,
                    rmd.C13_MgO_RDFC, rmd.C14_Na2O_RDFC, rmd.C15_K2O_RDFC, rmd.C16_SO3_RDFC, rmd.C17_LOI_RDFC, rmd.D8_MIX_RDFC, rmd.D9_SiO2_RDFC, rmd.D10_Al2O3_RDFC,
                    rmd.D11_Fe2O3_RDFC, rmd.D12_CaO_RDFC, rmd.D13_MgO_RDFC, rmd.D14_Na2O_RDFC, rmd.D15_K2O_RDFC, rmd.D16_SO3_RDFC, rmd.D17_LOI_RDFC, rmd.E8_MIX_RDFC,
                    rmd.E9_SiO2_RDFC, rmd.E10_Al2O3_RDFC, rmd.E11_Fe2O3_RDFC, rmd.E12_CaO_RDFC, rmd.E13_MgO_RDFC, rmd.E14_Na2O_RDFC, rmd.E15_K2O_RDFC, rmd.E16_SO3_RDFC,
                    rmd.E17_LOI_RDFC, rmd.F8_MIX_RDFC, rmd.F9_SiO2_RDFC, rmd.F10_Al2O3_RDFC, rmd.F11_Fe2O3_RDFC, rmd.F12_CaO_RDFC, rmd.F13_MgO_RDFC, rmd.F14_Na2O_RDFC,
                    rmd.F15_K2O_RDFC, rmd.F16_SO3_RDFC, rmd.F17_LOI_RDFC, rmd.I14_Lime_Saturation, rmd.I17_Silica_Modulus, rmd.I20_Alumina_Modulus, rmd.check16,
                    rmd.D16_Limestone, rmd.E16_Shale, rmd.F16_Sand, rmd.G16_Iron, rmd.check17, rmd.D17_Limestone, rmd.E17_Shale, rmd.F17_Sand, rmd.G17_Iron, rmd.check18,
                    rmd.D18_Limestone, rmd.E18_Shale, rmd.F18_Sand, rmd.G18_Iron, rmd.check19, rmd.D19_Limestone, rmd.E19_Shale, rmd.F19_Sand, rmd.G19_Iron, rmd.D15, rmd.E15,
                    rmd.F15, rmd.G15, rmd.H15_SiO2, rmd.I15_Al2O3, rmd.J15_Fe2O3, rmd.K15_CaO, rmd.L15_MgO, rmd.M15_Na2O, rmd.N15_K2O, rmd.O15_SO3, rmd.P15_Cl, rmd.H16_SiO2,
                    rmd.I16_Al2O3, rmd.J16_Fe2O3, rmd.K16_CaO, rmd.L16_MgO, rmd.M16_Na2O, rmd.N16_K2O, rmd.O16_SO3, rmd.P16_Cl, rmd.H17_SiO2, rmd.I17_Al2O3, rmd.J17_Fe2O3,
                    rmd.K17_CaO, rmd.L17_MgO, rmd.M17_Na2O, rmd.N17_K2O, rmd.O17_SO3, rmd.P17_Cl, rmd.H18_SiO2, rmd.I18_Al2O3, rmd.J18_Fe2O3, rmd.K18_CaO, rmd.L18_MgO,
                    rmd.M18_Na2O, rmd.N18_K2O, rmd.O18_SO3, rmd.P18_Cl, rmd.C30_LSF_PR, rmd.C31_SM_PR, rmd.C32_AM_PR, rmd.E33_Clinker_Factor, rmd.E34_RawMixType, rmd.F30_LSF_TG,
                    rmd.F31_SM_TG, rmd.F32_AM_TG, rmd.H31_SiO2, rmd.I31_Al2O3, rmd.J31_Fe2O3, rmd.K31_CaO, rmd.L31_MgO, rmd.M31_Na2O, rmd.N31_K2O, rmd.O31_SO3, rmd.P31_Cl,
                    rmd.L38_KL_LOI, rmd.V38_LOI, rmd.H38_literKG, rmd.I38_FCaO, rmd.J38_BurningCondition, rmd.U38_SO3, rmd.DT
                ]);

                processedItems++;
                const progressPercentage = Math.round((processedItems / totalItems) * 100);
                updateProgressBar(progressPercentage);
            }
            console.log("RMD data saved to SQLite");
            alert("Rawmix data successfully downloaded! HERE!!");
        } catch (error) {
            console.log("Error saving RMD data to SQLite:", error);
            alert("Error saving RMD data to SQLite:", error);
        }
    }

    async function fetchAndUploadRecords() {
        try {

            document.getElementById('overlay').style.display = 'block';
            document.getElementById('uploadPopup').style.display = 'block';

            const uploadList = document.getElementById('uploadList');
            uploadList.innerHTML = ''; // Clear previous entries

            console.log("You're about to UPLOAD!!!!!!!!");
            const result = await executeSql(db, "SELECT * FROM rmdTable WHERE email = ? ORDER BY id DESC", [localStorage.getItem("email")]);
            const records = [];

            for (let i = 0; i < result.rows.length; i++) {
                const row = result.rows.item(i);

                const record = {
                    id: row.id, // Ensure id is stringified if necessary
                    check16: Boolean(row.check16),
                    check17: Boolean(row.check17),
                    check18: Boolean(row.check18),
                    check19: Boolean(row.check19),
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
                    D16_Limestone: row.D16_Limestone,
                    E16_Shale: row.E16_Shale,
                    F16_Sand: row.F16_Sand,
                    G16_Iron: row.G16_Iron,
                    D17_Limestone: row.D17_Limestone,
                    E17_Shale: row.E17_Shale,
                    F17_Sand: row.F17_Sand,
                    G17_Iron: row.G17_Iron,
                    D18_Limestone: row.D18_Limestone,
                    E18_Shale: row.E18_Shale,
                    F18_Sand: row.F18_Sand,
                    G18_Iron: row.G18_Iron,
                    D19_Limestone: row.D19_Limestone,
                    E19_Shale: row.E19_Shale,
                    F19_Sand: row.F19_Sand,
                    G19_Iron: row.G19_Iron,
                    D15: row.D15,
                    E15: row.E15,
                    F15: row.F15,
                    G15: row.G15,
                    H15_SiO2: row.H15_SiO2,
                    I15_Al2O3: row.I15_Al2O3,
                    J15_Fe2O3: row.J15_Fe2O3,
                    K15_CaO: row.K15_CaO,
                    L15_MgO: row.L15_MgO,
                    M15_Na2O: row.M15_Na2O,
                    N15_K2O: row.N15_K2O,
                    O15_SO3: row.O15_SO3,
                    P15_Cl: row.P15_Cl,
                    H16_SiO2: row.H16_SiO2,
                    I16_Al2O3: row.I16_Al2O3,
                    J16_Fe2O3: row.J16_Fe2O3,
                    K16_CaO: row.K16_CaO,
                    L16_MgO: row.L16_MgO,
                    M16_Na2O: row.M16_Na2O,
                    N16_K2O: row.N16_K2O,
                    O16_SO3: row.O16_SO3,
                    P16_Cl: row.P16_Cl,
                    H17_SiO2: row.H17_SiO2,
                    I17_Al2O3: row.I17_Al2O3,
                    J17_Fe2O3: row.J17_Fe2O3,
                    K17_CaO: row.K17_CaO,
                    L17_MgO: row.L17_MgO,
                    M17_Na2O: row.M17_Na2O,
                    N17_K2O: row.N17_K2O,
                    O17_SO3: row.O17_SO3,
                    P17_Cl: row.P17_Cl,
                    H18_SiO2: row.H18_SiO2,
                    I18_Al2O3: row.I18_Al2O3,
                    J18_Fe2O3: row.J18_Fe2O3,
                    K18_CaO: row.K18_CaO,
                    L18_MgO: row.L18_MgO,
                    M18_Na2O: row.M18_Na2O,
                    N18_K2O: row.N18_K2O,
                    O18_SO3: row.O18_SO3,
                    P18_Cl: row.P18_Cl,
                    C30_LSF_PR: row.C30_LSF_PR,
                    C31_SM_PR: row.C31_SM_PR,
                    C32_AM_PR: row.C32_AM_PR,
                    E33_Clinker_Factor: row.E33_Clinker_Factor,
                    E34_RawMixType: row.E34_RawMixType,
                    F30_LSF_TG: row.F30_LSF_TG,
                    F31_SM_TG: row.F31_SM_TG,
                    F32_AM_TG: row.F32_AM_TG,
                    H31_SiO2: row.H31_SiO2,
                    I31_Al2O3: row.I31_Al2O3,
                    J31_Fe2O3: row.J31_Fe2O3,
                    K31_CaO: row.K31_CaO,
                    L31_MgO: row.L31_MgO,
                    M31_Na2O: row.M31_Na2O,
                    N31_K2O: row.N31_K2O,
                    O31_SO3: row.O31_SO3,
                    P31_Cl: row.P31_Cl,
                    L38_KL_LOI: row.L38_KL_LOI,
                    V38_LOI: row.V38_LOI,
                    H38_literKG: row.H38_literKG,
                    I38_FCaO: row.I38_FCaO,
                    J38_BurningCondition: row.J38_BurningCondition,
                    U38_SO3: row.U38_SO3,
                    name: row.name,
                    email: row.email,
                    pageType: row.pageType
                    // Include other fields as needed
                };
                records.push(record);
            }

            console.log(records);

            if (records == null || records == "") {
                alert("Warning: Record is empty, there's nothing to upload");
                return;
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
                .then(data => {
                    // Success: Add the RM data ID with a success message
                    const listItem = document.createElement('li');
                    listItem.classList.add('success'); // Add success class
                    listItem.textContent = `RM ID: ${recordData.id} - Success`;
                    uploadList.appendChild(listItem);
                    console.log(data);
                })
                .catch(error => {
                    // Error: Add the RM data ID with an error message
                    const listItem = document.createElement('li');
                    listItem.classList.add('error'); // Add error class
                    listItem.textContent = `RM ID: ${recordData.id} - Error: ${error.message}`;
                    uploadList.appendChild(listItem);
                    console.log(error);
                })
            ));


            if (responses.every(success => success)) {
                console.log("All records uploaded successfully");
                // alert("Rawmix records uploaded successfully");
            } else {
                console.log("Some records failed to upload");
                console.log("Error: " + responses);
                // alert("Some records failed to upload");
            }
        } catch (error) {
            alert(error);
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



    domContentLoaded = true;
    checkAndCompute();
})

function closePopup() {
    // Hide the overlay and popup
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('uploadPopup').style.display = 'none';
}

//CHECK DOM & DEVICEREADY
function checkAndCompute() {
    if (localStorage.getItem("token") == null || localStorage.getItem("token") == "") {
        // cordova.InAppBrowser.open("index.html", "_self");
    }
    if (domContentLoaded && deviceReady) {
        console.log("ReadyDevice & DOMContent has been loaded!");
    }
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