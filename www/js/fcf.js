var db;

// Global variables for each calculation
let F5_LVM = 0;
let E5_LVM = 0;

let F6_HVM = 0;
let E6_HVM = 0;

let G5_CombinedFuel = 0;
let G6_CombinedFuel = 0;

let F9_Ash = 0;
let F10_Ash = 0;

let D9_LVM_CAsh = 0;
let E9_LVM_CAsh = 0;

let D10_HVM_CAsh = 0;
let E10_HVM_CAsh = 0;

let F12_VCM = 0;
let F13_VCM = 0;

let D12_LVM_CVCM = 0;
let E12_LVM_CVCM = 0;

let D13_HVM_CVCM = 0;
let E13_HVM_CVCM = 0;

let G14_KgFuelPerKgClinkerProduced = 0;
let G7_KgFuelPerKgClinkerProduced = 0;

let G18_AshAbsorbed = 0;
let G15_AshAbsorbed = 0;

let G20_ClinkerProductionTPH = 0;
let G21_ClinkerProductionTPH = 0;
let G22_ClinkerProductionTPH = 0;
let G23_ClinkerProductionTPH = 0;
let G19_ClinkerProductionTPH = 0;
let G18_ClinkerProductionTPH = 0;

let G20_ClinkerFactor = 0;
let G25_ClinkerFactor = 0;

let G28_RecheckClinkerProductionTPH = 0;
let G29_RecheckClinkerProductionTPH = 0;

let G30_RecheckFuelReqTPH = 0;
let G15_RecheckFuelReqTPH = 0;

let G31_RecheckFuelReqCMH = 0;
let G16_RecheckFuelReqCMH = 0;


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {

    initializeVariable();

    if (rawmillnum == 1) {
        localStorage.setItem("pagetype", 0);
        newptype = 0;
    } else {
        localStorage.setItem("pagetype", 1);
        newptype = 1;
    }

    // Lock the screen orientation to landscape
    screen.orientation.lock('landscape')
        .then(function() {
            console.log('Screen orientation locked to landscape.');
        })
        .catch(function(error) {
            console.error('Failed to lock the screen orientation: ', error);
        });

    // Initialize SQLite database
    db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert24.db",
        location: "default",
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

    const email = localStorage.getItem('email').trim();
    const pageType = localStorage.getItem('pagetype');

    var materialtable_id = "material_table";

    if (pageType == 1) {
        newptype = 1;
    } else {
        newptype = 0;
    }

    executeSql(db,
        "SELECT * FROM rmdTable where email = ? and pageType = ?",
        [email, newptype]).then(results => {

        const table = document.getElementById(materialtable_id);
        const rows = results.rows;

        for (let i = 0; i < rows.length; i++) {
            const row = rows.item(i);
            const id = row.id;
            const name = row.name;

            // Create a new row in the table
            const newRow = table.insertRow();

            // Insert a cell for the checkbox
            const checkboxCell = newRow.insertCell();
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = id; // Use the id as the value for the checkbox
            checkbox.className = 'checkbox'; // Add class for easy selection
            checkboxCell.appendChild(checkbox);

            const idCell = newRow.insertCell();
            const nameCell = newRow.insertCell();
            const actionCell = newRow.insertCell();

            // Populate the cells with datac
            idCell.textContent = id;
            nameCell.textContent = name;

            const selectButton = createActionButton2("Select", function() {
                if (confirm("Are you sure you want to 'select' RAWMILL ID:" + id + "'s record?")) {
                    alert("Selected ID: " + id + ", Name: " + name)
                    localStorage.setItem("getid", id);
                    load_ma(id);
                }

            }, "blue");
            const updateButton = createActionButton2("Update", function() {
                if (confirm("Are you sure you want to update RAWMILL ID:" + id + "'s record?")) {
                    saveOrUpdateMA();

                }


            }, "orange");
            // const deleteButton = createActionButton2("Delete", function() {
            //     if (confirm("Are you sure you want to delete RAWMILL ID: " + id + "'s record?")) {
            //         deleteRecord(id);
            //         window.mloadlist();
            //     }
            // }, "red");

            actionCell.appendChild(selectButton);
            actionCell.appendChild(updateButton);
            // actionCell.appendChild(deleteButton);
        }
    }).catch(error => {
        alert("Error fetching data:", error);
    });



    toggleButtons();


    deviceReady = true;
    checkAndCompute();
}


//BEGIN DOM
document.addEventListener("DOMContentLoaded", function() {

    // Function to calculate LVM (LVM = F5 * E5)
    const calculateLVM = () => {
        return F5_LVM * E5_LVM;
    };

    // Function to calculate HVM (HVM = F6 * E6)
    const calculateHVM = () => {
        return F6_HVM * E6_HVM;
    };

    // Function to calculate Combined Fuel (Combined Fuel = G5 + G6)
    const calculateCombinedFuel = () => {
        return G5_CombinedFuel + G6_CombinedFuel;
    };

    // Function to calculate Ash (Ash = F9 + F10)
    const calculateAsh = () => {
        return F9_Ash + F10_Ash;
    };

    // Function to calculate LVM Combined Ash (LVM_CAsh = D9 * E9)
    const calculateLVM_CAsh = () => {
        return D9_LVM_CAsh * E9_LVM_CAsh;
    };

    // Function to calculate HVM Combined Ash (HVM_CAsh = D10 * E10)
    const calculateHVM_CAsh = () => {
        return D10_HVM_CAsh * E10_HVM_CAsh;
    };

    // Function to calculate VCM (VCM = F12 + F13)
    const calculateVCM = () => {
        return F12_VCM + F13_VCM;
    };

    // Function to calculate LVM Combined VCM (LVM_CVCM = D12 * E12)
    const calculateLVM_CVCM = () => {
        return D12_LVM_CVCM * E12_LVM_CVCM;
    };

    // Function to calculate HVM Combined VCM (HVM_CVCM = D13 * E13)
    const calculateHVM_CVCM = () => {
        return D13_HVM_CVCM * E13_HVM_CVCM;
    };

    // Function to calculate Kg Fuel per Kg Clinker Produced (KgFuelperKgClinkerProduced = G14 / G7)
    const calculateKgFuelPerKgClinkerProduced = () => {
        return G14_KgFuelPerKgClinkerProduced / G7_KgFuelPerKgClinkerProduced;
    };

    // Function to calculate Ash Absorbed (AshAbsorbed = G18 * G15)
    const calculateAshAbsorbed = () => {
        return G18_AshAbsorbed * G15_AshAbsorbed;
    };

    // Function to calculate Clinker Production TPH (ClinkerProductionTPH = G20 * (1 - G21 / 100) * (1 - G22 / 100) * (1 - G23 / 100) + (G19 * G18 / 100))
    const calculateClinkerProductionTPH = () => {
        return G20_ClinkerProductionTPH * (1 - G21_ClinkerProductionTPH / 100) * (1 - G22_ClinkerProductionTPH / 100) * (1 - G23_ClinkerProductionTPH / 100) + (G19_ClinkerProductionTPH * G18_ClinkerProductionTPH / 100);
    };

    // Function to calculate Clinker Factor (ClinkFactor = G20 / G25)
    const calculateClinkerFactor = () => {
        return G20_ClinkerFactor / G25_ClinkerFactor;
    };

    // Function to calculate Recheck Clinker Production TPH (RecheckClinkerProductionTPH = G28 / G29)
    const calculateRecheckClinkerProductionTPH = () => {
        return G28_RecheckClinkerProductionTPH / G29_RecheckClinkerProductionTPH;
    };

    // Function to calculate Recheck Fuel Requirement TPH (RecheckFuelReqTPH = G30 * G15)
    const calculateRecheckFuelReqTPH = () => {
        return G30_RecheckFuelReqTPH * G15_RecheckFuelReqTPH;
    };

    // Function to calculate Recheck Fuel Requirement CMH (RecheckFuelReqCMH = G31 / G16)
    const calculateRecheckFuelReqCMH = () => {
        return G31_RecheckFuelReqCMH / G16_RecheckFuelReqCMH;
    };

    function computecfc() {
        calculateLVM();
        calculateHVM();
        calculateCombinedFuel();
        calculateAsh();
        calculateLVM_CAsh();
        calculateHVM_CAsh();
        calculateVCM();
        calculateLVM_CVCM();
        calculateHVM_CVCM();
        calculateKgFuelPerKgClinkerProduced();
        calculateAshAbsorbed();
        calculateClinkerProductionTPH();
        calculateClinkerFactor();
        calculateRecheckClinkerProductionTPH();
        calculateRecheckFuelReqTPH();
        calculateRecheckFuelReqCMH();
    }
    window.computecfc = computecfc;
})

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

function clear() {

}