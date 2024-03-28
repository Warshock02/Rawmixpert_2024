// *********RAWMILL D FOUR COMPONENTS ****************/
//MIX

let C8_MIX_RDFC = 0.0;
let C9_SiO2_RDFC = 0.0;
let C10_Al2O3_RDFC = 0.0;
let C11_Fe2O3_RDFC = 0.0;
let C12_CaO_RDFC = 0.0;
let C13_MgO_RDFC = 0.0;
let C14_Na2O_RDFC = 0.0;
let C15_K2O_RDFC = 0.0;
let C16_SO3_RDFC = 0.0;
let C17_LOI_RDFC = 0.0;
let C18_TOTAL_RDFC = 0.0;
let C19_LSF_RDFC = 0.0;
let C20_SM_RDFC = 0.0;
let C21_AM_RDFC = 0.0;
let D8_MIX_RDFC = 0.0;
let D9_SiO2_RDFC = 0.0;
let D10_Al2O3_RDFC = 0.0;
let D11_Fe2O3_RDFC = 0.0;
let D12_CaO_RDFC = 0.0;
let D13_MgO_RDFC = 0.0;
let D14_Na2O_RDFC = 0.0;
let D15_K2O_RDFC = 0.0;
let D16_SO3_RDFC = 0.0;
let D17_LOI_RDFC = 0.0;
let D18_TOTAL_RDFC = 0.0;
let D19_LSF_RDFC = 0.0;
let D20_SM_RDFC = 0.0;
let D21_AM_RDFC = 0.0;
let E8_MIX_RDFC = 0.0;
let E9_SiO2_RDFC = 0.0;
let E10_Al2O3_RDFC = 0.0;
let E11_Fe2O3_RDFC = 0.0;
let E12_CaO_RDFC = 0.0;
let E13_MgO_RDFC = 0.0;
let E14_Na2O_RDFC = 0.0;
let E15_K2O_RDFC = 0.0;
let E16_SO3_RDFC = 0.0;
let E17_LOI_RDFC = 0.0;
let E18_TOTAL_RDFC = 0.0;
let E19_LSF_RDFC = 0.0;
let E20_SM_RDFC = 0.0;
let E21_AM_RDFC = 0.0;
let F8_MIX_RDFC = 0.0;
let F9_SiO2_RDFC = 0.0;
let F10_Al2O3_RDFC = 0.0;
let F11_Fe2O3_RDFC = 0.0;
let F12_CaO_RDFC = 0.0;
let F13_MgO_RDFC = 0.0;
let F14_Na2O_RDFC = 0.0;
let F15_K2O_RDFC = 0.0;
let F16_SO3_RDFC = 0.0;
let F17_LOI_RDFC = 0.0;
let F18_TOTAL_RDFC = 0.0;
let F19_LSF_RDFC = 0.0;
let F20_SM_RDFC = 0.0;
let F21_AM_RDFC = 0.0;
let G8_MIX_RDFC = 0.0;
let G9_SiO2_RDFC = 0.0;
let G10_Al2O3_RDFC = 0.0;
let G11_Fe2O3_RDFC = 0.0;
let G12_CaO_RDFC = 0.0;
let G13_MgO_RDFC = 0.0;
let G14_Na2O_RDFC = 0.0;
let G15_K2O_RDFC = 0.0;
let G16_SO3_RDFC = 0.0;
let G17_LOI_RDFC = 0.0;
let G18_TOTAL_RDFC = 0.0;
let G19_LSF_RDFC = 0.0;
let G20_SM_RDFC = 0.0;
let G21_AM_RDFC = 0.0;
let I14_Lime_Saturation = 10;
let I17_Silica_Modulus = 0.0;
let I20_Alumina_Modulus = 0.0;

//MATRIX AND COEFFICIENTS
//all fix cell
let L8_a = 0.0;
let L9_b = 0.0;
let L10_c = 0.0;
let L11_d = 0.0;
let L12_e = 0.0;
let L13_f = 0.0;
let L14_g = 0.0;
let L15_h = 0.0;
let L16_i = 0.0;
let L17_k = 0.0;
let L18_l = 0.0;
let L19_m = 0.0;
let L20_n = 0.0;
let L21_p = 0.0;
let L22_q = 0.0;
let L23_r = 0.0;
let L24_s = 0.0;

//fixed cell
//MATRIX DETERMINANTS

let O8_Dw_Matrix = 0.0;
let O9_Dx_Matrix = 0.0;
let O10_Dy_Matrix = 0.0;
let O11_Dz_Matrix = 0.0;
let O12_D_Matrix = 0.0;

//RAW MATERIALS %

let O15_W = 0.0;
let O16_X = 0.0;
let O17_Y = 0.0;
let O18_Z = 0.0;
let O19_TOTAL = 0.0;

// Begin All Variables getbyElementID
//#region
let C8_MIX_RDFC_DG = document.getElementById("C8_MIX_RDFC");
let C9_SiO2_RDFC_DG = document.getElementById("C9_SiO2_RDFC");
let C10_Al2O3_RDFC_DG = document.getElementById("C10_Al2O3_RDFC");
let C11_Fe2O3_RDFC_DG = document.getElementById("C11_Fe2O3_RDFC");
let C12_CaO_RDFC_DG = document.getElementById("C12_CaO_RDFC");
let C13_MgO_RDFC_DG = document.getElementById("C13_MgO_RDFC");
let C14_Na2O_RDFC_DG = document.getElementById("C14_Na2O_RDFC");
let C15_K2O_RDFC_DG = document.getElementById("C15_K2O_RDFC");
let C16_SO3_RDFC_DG = document.getElementById("C16_SO3_RDFC");
let C17_LOI_RDFC_DG = document.getElementById("C17_LOI_RDFC");

let C18_TOTAL_RDFC_DG = document.querySelector("label[for='C18_TOTAL_RDFC']");
let C19_LSF_RDFC_DG = document.querySelector("label[for='C19_LSF_RDFC']");
let C20_SM_RDFC_DG = document.querySelector("label[for='C20_SM_RDFC']");
let C21_AM_RDFC_DG = document.querySelector("label[for='C21_AM_RDFC']");

let D8_MIX_RDFC_DG = document.getElementById("D8_MIX_RDFC");
let D9_SiO2_RDFC_DG = document.getElementById("D9_SiO2_RDFC");
let D10_Al2O3_RDFC_DG = document.getElementById("D10_Al2O3_RDFC");
let D11_Fe2O3_RDFC_DG = document.getElementById("D11_Fe2O3_RDFC");
let D12_CaO_RDFC_DG = document.getElementById("D12_CaO_RDFC");
let D13_MgO_RDFC_DG = document.getElementById("D13_MgO_RDFC");
let D14_Na2O_RDFC_DG = document.getElementById("D14_Na2O_RDFC");
let D15_K2O_RDFC_DG = document.getElementById("D15_K2O_RDFC");
let D16_SO3_RDFC_DG = document.getElementById("D16_SO3_RDFC");
let D17_LOI_RDFC_DG = document.getElementById("D17_LOI_RDFC");

let D18_TOTAL_RDFC_DG = document.querySelector("label[for='D18_TOTAL_RDFC']");
let D19_LSF_RDFC_DG = document.querySelector("label[for='D19_LSF_RDFC']");
let D20_SM_RDFC_DG = document.querySelector("label[for='D20_SM_RDFC']");
let D21_AM_RDFC_DG = document.querySelector("label[for='D21_AM_RDFC']");

let E8_MIX_RDFC_DG = document.getElementById("E8_MIX_RDFC");
let E9_SiO2_RDFC_DG = document.getElementById("E9_SiO2_RDFC");
let E10_Al2O3_RDFC_DG = document.getElementById("E10_Al2O3_RDFC");
let E11_Fe2O3_RDFC_DG = document.getElementById("E11_Fe2O3_RDFC");
let E12_CaO_RDFC_DG = document.getElementById("E12_CaO_RDFC");
let E13_MgO_RDFC_DG = document.getElementById("E13_MgO_RDFC");
let E14_Na2O_RDFC_DG = document.getElementById("E14_Na2O_RDFC");
let E15_K2O_RDFC_DG = document.getElementById("E15_K2O_RDFC");
let E16_SO3_RDFC_DG = document.getElementById("E16_SO3_RDFC");
let E17_LOI_RDFC_DG = document.getElementById("E17_LOI_RDFC");

let E18_TOTAL_RDFC_DG = document.querySelector("label[for='E18_TOTAL_RDFC']");
let E19_LSF_RDFC_DG = document.querySelector("label[for='E19_LSF_RDFC']");
let E20_SM_RDFC_DG = document.querySelector("label[for='E20_SM_RDFC']");
let E21_AM_RDFC_DG = document.querySelector("label[for='E21_AM_RDFC']");

let F8_MIX_RDFC_DG = document.getElementById("F8_MIX_RDFC");
let F9_SiO2_RDFC_DG = document.getElementById("F9_SiO2_RDFC");
let F10_Al2O3_RDFC_DG = document.getElementById("F10_Al2O3_RDFC");
let F11_Fe2O3_RDFC_DG = document.getElementById("F11_Fe2O3_RDFC");
let F12_CaO_RDFC_DG = document.getElementById("F12_CaO_RDFC");
let F13_MgO_RDFC_DG = document.getElementById("F13_MgO_RDFC");
let F14_Na2O_RDFC_DG = document.getElementById("F14_Na2O_RDFC");
let F15_K2O_RDFC_DG = document.getElementById("F15_K2O_RDFC");
let F16_SO3_RDFC_DG = document.getElementById("F16_SO3_RDFC");
let F17_LOI_RDFC_DG = document.getElementById("F17_LOI_RDFC");

let F18_TOTAL_RDFC_DG = document.querySelector("label[for='F18_TOTAL_RDFC']");
let F19_LSF_RDFC_DG = document.querySelector("label[for='F19_LSF_RDFC']");
let F20_SM_RDFC_DG = document.querySelector("label[for='F20_SM_RDFC']");
let F21_AM_RDFC_DG = document.querySelector("label[for='F21_AM_RDFC']");

let G8_MIX_RDFC_DG = document.querySelector("label[for='G8_MIX_RDFC']");
let G9_SiO2_RDFC_DG = document.querySelector("label[for='G9_SiO2_RDFC']");
let G10_Al2O3_RDFC_DG = document.querySelector("label[for='G10_Al2O3_RDFC']");
let G11_Fe2O3_RDFC_DG = document.querySelector("label[for='G11_Fe2O3_RDFC']");
let G12_CaO_RDFC_DG = document.querySelector("label[for='G12_CaO_RDFC']");
let G13_MgO_RDFC_DG = document.querySelector("label[for='G13_MgO_RDFC']");
let G14_Na2O_RDFC_DG = document.querySelector("label[for='G14_Na2O_RDFC']");
let G15_K2O_RDFC_DG = document.querySelector("label[for='G15_K2O_RDFC']");
let G16_SO3_RDFC_DG = document.querySelector("label[for='G16_SO3_RDFC']");
let G17_LOI_RDFC_DG = document.querySelector("label[for='G17_LOI_RDFC']");
let G18_TOTAL_RDFC_DG = document.querySelector("label[for='G18_TOTAL_RDFC']");
let G19_LSF_RDFC_DG = document.querySelector("label[for='G19_LSF_RDFC']");
let G20_SM_RDFC_DG = document.querySelector("label[for='G20_SM_RDFC']");
let G21_AM_RDFC_DG = document.querySelector("label[for='G21_AM_RDFC']");

//MATRIX & COE

let L8_a_DG = document.querySelector("label[for='L8_a']");
let L9_b_DG = document.querySelector("label[for='L9_b']");
let L10_c_DG = document.querySelector("label[for='L10_c']");
let L11_d_DG = document.querySelector("label[for='L11_d']");
let L12_e_DG = document.querySelector("label[for='L12_e']");
let L13_f_DG = document.querySelector("label[for='L13_f']");
let L14_g_DG = document.querySelector("label[for='L14_g']");
let L15_h_DG = document.querySelector("label[for='L15_h']");
let L16_i_DG = document.querySelector("label[for='L16_i']");
let L17_k_DG = document.querySelector("label[for='L17_k']");
let L18_l_DG = document.querySelector("label[for='L18_l']");
let L19_m_DG = document.querySelector("label[for='L19_m']");
let L20_n_DG = document.querySelector("label[for='L20_n']");
let L21_p_DG = document.querySelector("label[for='L21_p']");
let L22_q_DG = document.querySelector("label[for='L22_q']");
let L23_r_DG = document.querySelector("label[for='L23_r']");
let L24_s_DG = document.querySelector("label[for='L24_s']");
let O8_Dw_Matrix_DG = document.querySelector("label[for='O8_Dw_Matrix']");
let O9_Dx_Matrix_DG = document.querySelector("label[for='O9_Dx_Matrix']");
let O10_Dy_Matrix_DG = document.querySelector("label[for='O10_Dy_Matrix']");
let O11_Dz_Matrix_DG = document.querySelector("label[for='O11_Dz_Matrix']");
let O12_D_Matrix_DG = document.querySelector("label[for='O12_D_Matrix']");
let O15_W_DG = document.querySelector("label[for='O15_W']");
let O16_X_DG = document.querySelector("label[for='O16_X']");
let O17_Y_DG = document.querySelector("label[for='O17_Y']");
let O18_Z_DG = document.querySelector("label[for='O18_Z']");
let O19_TOTAL_DG = document.querySelector("label[for='O19_TOTAL']");

let I14_Lime_Saturation_DG = document.getElementById("I14_Lime_Saturation");
let I17_Silica_Modulus_DG = document.getElementById("I17_Silica_Modulus");
let I20_Alumina_Modulus_DG = document.getElementById("I20_Alumina_Modulus");

//#endregion
// End All Variables getbyElementID

var recipe1num = document.getElementById("recipe1");
var recipe2num = document.getElementById("recipe2");
var recipenum = 0;

function storetoLocal() {
    if (recipe1num !== null) {
        recipenum = recipe1num.value;
    }
    if (recipe2num !== null) {
        recipenum = recipe2num.value;
    }

    //Store to local
    var myObject = {
        C8_MIX_RDFC: C8_MIX_RDFC_DG.value,
        C9_SiO2_RDFC: C9_SiO2_RDFC_DG.value,
        C10_Al2O3_RDFC: C10_Al2O3_RDFC_DG.value,
        C11_Fe2O3_RDFC: C11_Fe2O3_RDFC_DG.value,
        C12_CaO_RDFC: C12_CaO_RDFC_DG.value,
        C13_MgO_RDFC: C13_MgO_RDFC_DG.value,
        C14_Na2O_RDFC: C14_Na2O_RDFC_DG.value,
        C15_K2O_RDFC: C15_K2O_RDFC_DG.value,
        C16_SO3_RDFC: C16_SO3_RDFC_DG.value,
        C17_LOI_RDFC: C17_LOI_RDFC_DG.value,
        D8_MIX_RDFC: D8_MIX_RDFC_DG.value,
        D9_SiO2_RDFC: D9_SiO2_RDFC_DG.value,
        D10_Al2O3_RDFC: D10_Al2O3_RDFC_DG.value,
        D11_Fe2O3_RDFC: D11_Fe2O3_RDFC_DG.value,
        D12_CaO_RDFC: D12_CaO_RDFC_DG.value,
        D13_MgO_RDFC: D13_MgO_RDFC_DG.value,
        D14_Na2O_RDFC: D14_Na2O_RDFC_DG.value,
        D15_K2O_RDFC: D15_K2O_RDFC_DG.value,
        D16_SO3_RDFC: D16_SO3_RDFC_DG.value,
        D17_LOI_RDFC: D17_LOI_RDFC_DG.value,
        E8_MIX_RDFC: E8_MIX_RDFC_DG.value,
        E9_SiO2_RDFC: E9_SiO2_RDFC_DG.value,
        E10_Al2O3_RDFC: E10_Al2O3_RDFC_DG.value,
        E11_Fe2O3_RDFC: E11_Fe2O3_RDFC_DG.value,
        E12_CaO_RDFC: E12_CaO_RDFC_DG.value,
        E13_MgO_RDFC: E13_MgO_RDFC_DG.value,
        E14_Na2O_RDFC: E14_Na2O_RDFC_DG.value,
        E15_K2O_RDFC: E15_K2O_RDFC_DG.value,
        E16_SO3_RDFC: E16_SO3_RDFC_DG.value,
        E17_LOI_RDFC: E17_LOI_RDFC_DG.value,
        F8_MIX_RDFC: F8_MIX_RDFC_DG.value,
        F9_SiO2_RDFC: F9_SiO2_RDFC_DG.value,
        F10_Al2O3_RDFC: F10_Al2O3_RDFC_DG.value,
        F11_Fe2O3_RDFC: F11_Fe2O3_RDFC_DG.value,
        F12_CaO_RDFC: F12_CaO_RDFC_DG.value,
        F13_MgO_RDFC: F13_MgO_RDFC_DG.value,
        F14_Na2O_RDFC: F14_Na2O_RDFC_DG.value,
        F15_K2O_RDFC: F15_K2O_RDFC_DG.value,
        F16_SO3_RDFC: F16_SO3_RDFC_DG.value,
        F17_LOI_RDFC: F17_LOI_RDFC_DG.value,
        I14_Lime_Saturation: I14_Lime_Saturation_DG.value,
        I17_Silica_Modulus: I17_Silica_Modulus_DG.value,
        I20_Alumina_Modulus: I20_Alumina_Modulus_DG.value

    };

    localStorage.setItem('Recipe' + recipenum, JSON.stringify(myObject));

}

//change navigation 
window.addEventListener('beforeunload', function (event) {
    storetoLocal();
});

document.addEventListener('pause', function () {
    storetoLocal();
    console.log('App paused (minimized)');
    // Perform actions when the app is paused, such as saving data
});

const notification3 = document.getElementById('notify2');
const notification4 = document.getElementById('notifyerror2');

function showNotification(message, duration, notifynum) {
    if (notifynum == 3) {
        notification3.textContent = message;
        notification3.style.display = 'block';

    } else if (notifynum == 4) {
        notification4.textContent = message;
        notification4.style.display = 'block';
    }

    setTimeout(() => {
        if (notifynum == 3) {
            notification3.style.display = 'none';

        } else if (notifynum == 4) {
            notification4.style.display = 'none';
        }
    }, duration);
}


// SQLITE
// CREATE TABLE

document.addEventListener("deviceready", onDeviceReady, false);
// Create Action Button
function createActionButton(label, onClick, color) {
    const button = document.createElement("button");
    button.textContent = label;
    button.style.backgroundColor = color;
    button.addEventListener("click", onClick);
    return button;
}

function onDeviceReady() {
    // Initialize SQLite database

    const db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert2.db",
        location: "default",
    });

    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS rmdTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NULL,C8_MIX_RDFC NUMERIC, C9_SiO2_RDFC NUMERIC,C10_Al2O3_RDFC      NUMERIC,C11_Fe2O3_RDFC NUMERIC,C12_CaO_RDFC NUMERIC,C13_MgO_RDFC NUMERIC,C14_Na2O_RDFC NUMERIC,C15_K2O_RDFC NUMERIC,C16_SO3_RDFC NUMERIC,C17_LOI_RDFC NUMERIC,D8_MIX_RDFC NUMERIC,D9_SiO2_RDFC NUMERIC,D10_Al2O3_RDFC NUMERIC,D11_Fe2O3_RDFC NUMERIC,D12_CaO_RDFC NUMERIC,D13_MgO_RDFC NUMERIC,D14_Na2O_RDFC NUMERIC,D15_K2O_RDFC NUMERIC,D16_SO3_RDFC NUMERIC,D17_LOI_RDFC NUMERIC,E8_MIX_RDFC NUMERIC,E9_SiO2_RDFC NUMERIC,E10_Al2O3_RDFC NUMERIC,E11_Fe2O3_RDFC NUMERIC,E12_CaO_RDFC NUMERIC,E13_MgO_RDFC NUMERIC,E14_Na2O_RDFC       NUMERIC,E15_K2O_RDFC NUMERIC,E16_SO3_RDFC NUMERIC,E17_LOI_RDFC NUMERIC,F8_MIX_RDFC NUMERIC,F9_SiO2_RDFC NUMERIC,F10_Al2O3_RDFC NUMERIC,F11_Fe2O3_RDFC NUMERIC,F12_CaO_RDFC NUMERIC,F13_MgO_RDFC NUMERIC,F14_Na2O_RDFC NUMERIC,F15_K2O_RDFC NUMERIC,F16_SO3_RDFC NUMERIC,F17_LOI_RDFC NUMERIC,I14_Lime_Saturation NUMERIC,I17_Silica_Modulus  NUMERIC,I20_Alumina_Modulus NUMERIC, DT DATETIME)",
            [],
            () => console.log("Table rmd created successfully"),
            (error) => console.error("Error rmd creating table", error)
        );
    });


    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM rmdTable  ORDER BY id DESC",
            [],
            function (tx, result) {
                const table = document.getElementById("mix_table");
                const rows = result.rows;

                for (let i = 0; i < rows.length; i++) {
                    const row = rows.item(i);
                    const id = row.id;
                    const name = row.name;

                    // Create a new row in the table
                    const newRow = table.insertRow();
                    const idCell = newRow.insertCell();
                    const nameCell = newRow.insertCell();
                    const actionCell = newRow.insertCell();

                    // Populate the cells with data
                    idCell.textContent = id;
                    nameCell.textContent = name;

                    // Create buttons for select, update, and delete
                    const selectButton = createActionButton("Select", function () {
                        if (confirm("Are you sure you want to 'select' RECIPE ID:" + id + "'s record?")) {
                            alert("Selected ID: " + id + ", Name: " + name)
                            // showNotification("Selected ID: " + id + ", Name: " + name);
                            loadselectData2(id);
                        }
                    }, "blue");

                    const updateButton = createActionButton("Update", function () {
                        if (confirm("Are you sure you want to update RECIPE ID:" + id + "'s record?")) {
                            updateData2(id);
                        }

                    }, "orange");

                    const deleteButton = createActionButton("Delete", function () {
                        if (confirm("Are you sure you want to delete RECIPE ID:" + id + "'s record?")) {

                            deleteData2(id);
                            loadlist();
                        }
                    }, "red");

                    // Append the buttons to the action cell
                    actionCell.appendChild(selectButton);
                    actionCell.appendChild(updateButton);
                    actionCell.appendChild(deleteButton);
                }
            },
            function (error) {
                console.error("Error fetching data:", error);
            }
        );
    });
}

document.addEventListener("DOMContentLoaded", function () {

    if (recipe1num !== null) {
        recipenum = recipe1num.value;
    }
    if (recipe2num !== null) {
        recipenum = recipe2num.value;
    }
    var storedObject = JSON.parse(localStorage.getItem('Recipe' + recipenum));
    if (storedObject !== null) {

        C8_MIX_RDFC_DG.value = storedObject.C8_MIX_RDFC;
        C9_SiO2_RDFC_DG.value = storedObject.C9_SiO2_RDFC;
        C10_Al2O3_RDFC_DG.value = storedObject.C10_Al2O3_RDFC;
        C11_Fe2O3_RDFC_DG.value = storedObject.C11_Fe2O3_RDFC;
        C12_CaO_RDFC_DG.value = storedObject.C12_CaO_RDFC;
        C13_MgO_RDFC_DG.value = storedObject.C13_MgO_RDFC;
        C14_Na2O_RDFC_DG.value = storedObject.C14_Na2O_RDFC;
        C15_K2O_RDFC_DG.value = storedObject.C15_K2O_RDFC;
        C16_SO3_RDFC_DG.value = storedObject.C16_SO3_RDFC;
        C17_LOI_RDFC_DG.value = storedObject.C17_LOI_RDFC;
        D8_MIX_RDFC_DG.value = storedObject.D8_MIX_RDFC;
        D9_SiO2_RDFC_DG.value = storedObject.D9_SiO2_RDFC;
        D10_Al2O3_RDFC_DG.value = storedObject.D10_Al2O3_RDFC;
        D11_Fe2O3_RDFC_DG.value = storedObject.D11_Fe2O3_RDFC;
        D12_CaO_RDFC_DG.value = storedObject.D12_CaO_RDFC;
        D13_MgO_RDFC_DG.value = storedObject.D13_MgO_RDFC;
        D14_Na2O_RDFC_DG.value = storedObject.D14_Na2O_RDFC;
        D15_K2O_RDFC_DG.value = storedObject.D15_K2O_RDFC;
        D16_SO3_RDFC_DG.value = storedObject.D16_SO3_RDFC;
        D17_LOI_RDFC_DG.value = storedObject.D17_LOI_RDFC;
        E8_MIX_RDFC_DG.value = storedObject.E8_MIX_RDFC;
        E9_SiO2_RDFC_DG.value = storedObject.E9_SiO2_RDFC;
        E10_Al2O3_RDFC_DG.value = storedObject.E10_Al2O3_RDFC;
        E11_Fe2O3_RDFC_DG.value = storedObject.E11_Fe2O3_RDFC;
        E12_CaO_RDFC_DG.value = storedObject.E12_CaO_RDFC;
        E13_MgO_RDFC_DG.value = storedObject.E13_MgO_RDFC;
        E14_Na2O_RDFC_DG.value = storedObject.E14_Na2O_RDFC;
        E15_K2O_RDFC_DG.value = storedObject.E15_K2O_RDFC;
        E16_SO3_RDFC_DG.value = storedObject.E16_SO3_RDFC;
        E17_LOI_RDFC_DG.value = storedObject.E17_LOI_RDFC;
        F8_MIX_RDFC_DG.value = storedObject.F8_MIX_RDFC;
        F9_SiO2_RDFC_DG.value = storedObject.F9_SiO2_RDFC;
        F10_Al2O3_RDFC_DG.value = storedObject.F10_Al2O3_RDFC;
        F11_Fe2O3_RDFC_DG.value = storedObject.F11_Fe2O3_RDFC;
        F12_CaO_RDFC_DG.value = storedObject.F12_CaO_RDFC;
        F13_MgO_RDFC_DG.value = storedObject.F13_MgO_RDFC;
        F14_Na2O_RDFC_DG.value = storedObject.F14_Na2O_RDFC;
        F15_K2O_RDFC_DG.value = storedObject.F15_K2O_RDFC;
        F16_SO3_RDFC_DG.value = storedObject.F16_SO3_RDFC;
        F17_LOI_RDFC_DG.value = storedObject.F17_LOI_RDFC;
        I14_Lime_Saturation_DG.value = storedObject.I14_Lime_Saturation;
        I17_Silica_Modulus_DG.value = storedObject.I17_Silica_Modulus;
        I20_Alumina_Modulus_DG.value = storedObject.I20_Alumina_Modulus;

        // if (typeof rdfc_computeall === 'function') {
        //   // The function is defined, so you can call it

        //   rdfc_computeall();
        // }

    }

    // BEGIN FUNCTION MIX % /////////////////////////////////
    //#region
    const compute_G8_MIX_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        G8_MIX_RDFC = C8_MIX_RDFC + D8_MIX_RDFC + E8_MIX_RDFC + F8_MIX_RDFC;

        return G8_MIX_RDFC.toFixed(2);
    };

    const compute_G9_SiO2_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G9_SiO2_RDFC =
            (C8_MIX_RDFC * C9_SiO2_RDFC +
                D8_MIX_RDFC * D9_SiO2_RDFC +
                E8_MIX_RDFC * E9_SiO2_RDFC +
                F8_MIX_RDFC * F9_SiO2_RDFC) /
            G8_MIX_RDFC;

        return G9_SiO2_RDFC.toFixed(2);
    };

    const compute_G10_Al203_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G10_Al2O3_RDFC =
            (C8_MIX_RDFC * C10_Al2O3_RDFC +
                D8_MIX_RDFC * D10_Al2O3_RDFC +
                E8_MIX_RDFC * E10_Al2O3_RDFC +
                F8_MIX_RDFC * F10_Al2O3_RDFC) /
            G8_MIX_RDFC;
        return G10_Al2O3_RDFC.toFixed(2);
    };

    const compute_G11_Fe2O3_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);
        G11_Fe2O3_RDFC =
            (C8_MIX_RDFC * C11_Fe2O3_RDFC +
                D8_MIX_RDFC * D11_Fe2O3_RDFC +
                E8_MIX_RDFC * E11_Fe2O3_RDFC +
                F8_MIX_RDFC * F11_Fe2O3_RDFC) /
            G8_MIX_RDFC;

        return G11_Fe2O3_RDFC.toFixed(2);
    };

    const compute_G12_CaO_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C12_CaO_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D12_CaO_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E12_CaO_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F12_CaO_RDFC_DG.value);
        G12_CaO_RDFC =
            (C8_MIX_RDFC * C12_CaO_RDFC +
                D8_MIX_RDFC * D12_CaO_RDFC +
                E8_MIX_RDFC * E12_CaO_RDFC +
                F8_MIX_RDFC * F12_CaO_RDFC) /
            G8_MIX_RDFC;

        return G12_CaO_RDFC.toFixed(2);
    };
    const compute_G13_MgO_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C13_MgO_RDFC = isNaN(parseFloat(C13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C13_MgO_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D13_MgO_RDFC = isNaN(parseFloat(D13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D13_MgO_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E13_MgO_RDFC = isNaN(parseFloat(E13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E13_MgO_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F13_MgO_RDFC = isNaN(parseFloat(F13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F13_MgO_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G13_MgO_RDFC =
            (C8_MIX_RDFC * C13_MgO_RDFC +
                D8_MIX_RDFC * D13_MgO_RDFC +
                E8_MIX_RDFC * E13_MgO_RDFC +
                F8_MIX_RDFC * F13_MgO_RDFC) /
            G8_MIX_RDFC;

        return G13_MgO_RDFC.toFixed(2);
    };

    const compute_G14_Na2O_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C14_Na2O_RDFC = isNaN(parseFloat(C14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(C14_Na2O_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D14_Na2O_RDFC = isNaN(parseFloat(D14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(D14_Na2O_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E14_Na2O_RDFC = isNaN(parseFloat(E14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(E14_Na2O_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F14_Na2O_RDFC = isNaN(parseFloat(F14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(F14_Na2O_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G14_Na2O_RDFC =
            (C8_MIX_RDFC * C14_Na2O_RDFC +
                D8_MIX_RDFC * D14_Na2O_RDFC +
                E8_MIX_RDFC * E14_Na2O_RDFC +
                F8_MIX_RDFC * F14_Na2O_RDFC) /
            G8_MIX_RDFC;

        return G14_Na2O_RDFC.toFixed(2);
    };

    const compute_G15_K2O_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C15_K2O_RDFC = isNaN(parseFloat(C15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(C15_K2O_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D15_K2O_RDFC = isNaN(parseFloat(D15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(D15_K2O_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E15_K2O_RDFC = isNaN(parseFloat(E15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(E15_K2O_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F15_K2O_RDFC = isNaN(parseFloat(F15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(F15_K2O_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G15_K2O_RDFC =
            (C8_MIX_RDFC * C15_K2O_RDFC +
                D8_MIX_RDFC * D15_K2O_RDFC +
                E8_MIX_RDFC * E15_K2O_RDFC +
                F8_MIX_RDFC * F15_K2O_RDFC) /
            G8_MIX_RDFC;

        return G15_K2O_RDFC.toFixed(2);
    };

    const compute_G16_SO3_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C16_SO3_RDFC = isNaN(parseFloat(C16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C16_SO3_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D16_SO3_RDFC = isNaN(parseFloat(D16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D16_SO3_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E16_SO3_RDFC = isNaN(parseFloat(E16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E16_SO3_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F16_SO3_RDFC = isNaN(parseFloat(F16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F16_SO3_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);
        G16_SO3_RDFC =
            (C8_MIX_RDFC * C16_SO3_RDFC +
                D8_MIX_RDFC * D16_SO3_RDFC +
                E8_MIX_RDFC * E16_SO3_RDFC +
                F8_MIX_RDFC * F16_SO3_RDFC) /
            G8_MIX_RDFC;

        return G16_SO3_RDFC.toFixed(2);
    };
    const compute_G17_LOI_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(C8_MIX_RDFC_DG.value);
        C17_LOI_RDFC = isNaN(parseFloat(C17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(C17_LOI_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(D8_MIX_RDFC_DG.value);
        D17_LOI_RDFC = isNaN(parseFloat(D17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(D17_LOI_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(E8_MIX_RDFC_DG.value);
        E17_LOI_RDFC = isNaN(parseFloat(E17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(E17_LOI_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value))
            ? 0.0
            : parseFloat(F8_MIX_RDFC_DG.value);
        F17_LOI_RDFC = isNaN(parseFloat(F17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(F17_LOI_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G8_MIX_RDFC_DG.textContent);

        G17_LOI_RDFC =
            (C8_MIX_RDFC * C17_LOI_RDFC +
                D8_MIX_RDFC * D17_LOI_RDFC +
                E8_MIX_RDFC * E17_LOI_RDFC +
                F8_MIX_RDFC * F17_LOI_RDFC) /
            G8_MIX_RDFC;

        return G17_LOI_RDFC.toFixed(2);
    };

    //all fix cell
    const compute_G18_TOTAL_RDFC = () => {
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G12_CaO_RDFC = isNaN(parseFloat(G12_CaO_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G12_CaO_RDFC_DG.textContent);
        G13_MgO_RDFC = isNaN(parseFloat(G13_MgO_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G13_MgO_RDFC_DG.textContent);
        G14_Na2O_RDFC = isNaN(parseFloat(G14_Na2O_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G14_Na2O_RDFC_DG.textContent);
        G15_K2O_RDFC = isNaN(parseFloat(G15_K2O_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G15_K2O_RDFC_DG.textContent);
        G16_SO3_RDFC = isNaN(parseFloat(G16_SO3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G16_SO3_RDFC_DG.textContent);
        G17_LOI_RDFC = isNaN(parseFloat(G17_LOI_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G17_LOI_RDFC_DG.textContent);
        G18_TOTAL_RDFC =
            G9_SiO2_RDFC +
            G10_Al2O3_RDFC +
            G11_Fe2O3_RDFC +
            G12_CaO_RDFC +
            G13_MgO_RDFC +
            G14_Na2O_RDFC +
            G15_K2O_RDFC +
            G16_SO3_RDFC +
            G17_LOI_RDFC;

        return G18_TOTAL_RDFC.toFixed(2);
    };

    const compute_G19_LSF_RDFC = () => {
        G12_CaO_RDFC = isNaN(parseFloat(G12_CaO_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G12_CaO_RDFC_DG.textContent);
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G19_LSF_RDFC =
            100 * G12_CaO_RDFC /
            (2.8 * G9_SiO2_RDFC +
                1.18 * G10_Al2O3_RDFC +
                0.65 * G11_Fe2O3_RDFC);

        return G19_LSF_RDFC.toFixed(2);
    };

    const compute_G20_SM_RDFC = () => {
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G20_SM_RDFC = G9_SiO2_RDFC / (G10_Al2O3_RDFC + G11_Fe2O3_RDFC);

        return G20_SM_RDFC.toFixed(2);
    };

    const compute_G21_AM_RDFC = () => {
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent))
            ? 0.0
            : parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G21_AM_RDFC = G10_Al2O3_RDFC / G11_Fe2O3_RDFC;

        return G21_AM_RDFC.toFixed(2);
    };

    //   0000000000000000000000000000000000000000000000000000

    const compute_C18_TOTAL_RDFC = () => {
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C12_CaO_RDFC_DG.value);
        C13_MgO_RDFC = isNaN(parseFloat(C13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C13_MgO_RDFC_DG.value);
        C14_Na2O_RDFC = isNaN(parseFloat(C14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(C14_Na2O_RDFC_DG.value);
        C15_K2O_RDFC = isNaN(parseFloat(C15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(C15_K2O_RDFC_DG.value);
        C16_SO3_RDFC = isNaN(parseFloat(C16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C16_SO3_RDFC_DG.value);
        C17_LOI_RDFC = isNaN(parseFloat(C17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(C17_LOI_RDFC_DG.value);

        C18_TOTAL_RDFC =
            C9_SiO2_RDFC +
            C10_Al2O3_RDFC +
            C11_Fe2O3_RDFC +
            C12_CaO_RDFC +
            C13_MgO_RDFC +
            C14_Na2O_RDFC +
            C15_K2O_RDFC +
            C16_SO3_RDFC +
            C17_LOI_RDFC;

        return C18_TOTAL_RDFC.toFixed(2);
    };

    const compute_D18_TOTAL_RDFC = () => {
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D12_CaO_RDFC_DG.value);
        D13_MgO_RDFC = isNaN(parseFloat(D13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D13_MgO_RDFC_DG.value);
        D14_Na2O_RDFC = isNaN(parseFloat(D14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(D14_Na2O_RDFC_DG.value);
        D15_K2O_RDFC = isNaN(parseFloat(D15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(D15_K2O_RDFC_DG.value);
        D16_SO3_RDFC = isNaN(parseFloat(D16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D16_SO3_RDFC_DG.value);
        D17_LOI_RDFC = isNaN(parseFloat(D17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(D17_LOI_RDFC_DG.value);

        D18_TOTAL_RDFC =
            D9_SiO2_RDFC +
            D10_Al2O3_RDFC +
            D11_Fe2O3_RDFC +
            D12_CaO_RDFC +
            D13_MgO_RDFC +
            D14_Na2O_RDFC +
            D15_K2O_RDFC +
            D16_SO3_RDFC +
            D17_LOI_RDFC;

        return D18_TOTAL_RDFC.toFixed(2);
    };
    const compute_E18_TOTAL_RDFC = () => {
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E12_CaO_RDFC_DG.value);
        E13_MgO_RDFC = isNaN(parseFloat(E13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E13_MgO_RDFC_DG.value);
        E14_Na2O_RDFC = isNaN(parseFloat(E14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(E14_Na2O_RDFC_DG.value);
        E15_K2O_RDFC = isNaN(parseFloat(E15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(E15_K2O_RDFC_DG.value);
        E16_SO3_RDFC = isNaN(parseFloat(E16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E16_SO3_RDFC_DG.value);
        E17_LOI_RDFC = isNaN(parseFloat(E17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(E17_LOI_RDFC_DG.value);

        E18_TOTAL_RDFC =
            E9_SiO2_RDFC +
            E10_Al2O3_RDFC +
            E11_Fe2O3_RDFC +
            E12_CaO_RDFC +
            E13_MgO_RDFC +
            E14_Na2O_RDFC +
            E15_K2O_RDFC +
            E16_SO3_RDFC +
            E17_LOI_RDFC;

        return E18_TOTAL_RDFC.toFixed(2);
    };

    const compute_F18_TOTAL_RDFC = () => {
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F12_CaO_RDFC_DG.value);
        F13_MgO_RDFC = isNaN(parseFloat(F13_MgO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F13_MgO_RDFC_DG.value);
        F14_Na2O_RDFC = isNaN(parseFloat(F14_Na2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(F14_Na2O_RDFC_DG.value);
        F15_K2O_RDFC = isNaN(parseFloat(F15_K2O_RDFC_DG.value))
            ? 0.0
            : parseFloat(F15_K2O_RDFC_DG.value);
        F16_SO3_RDFC = isNaN(parseFloat(F16_SO3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F16_SO3_RDFC_DG.value);
        F17_LOI_RDFC = isNaN(parseFloat(F17_LOI_RDFC_DG.value))
            ? 0.0
            : parseFloat(F17_LOI_RDFC_DG.value);

        F18_TOTAL_RDFC =
            F9_SiO2_RDFC +
            F10_Al2O3_RDFC +
            F11_Fe2O3_RDFC +
            F12_CaO_RDFC +
            F13_MgO_RDFC +
            F14_Na2O_RDFC +
            F15_K2O_RDFC +
            F16_SO3_RDFC +
            F17_LOI_RDFC;

        return F18_TOTAL_RDFC.toFixed(2);
    };

    //LSF
    const compute_C19_LSF_RDFC = () => {
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C12_CaO_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);

        C19_LSF_RDFC =
            (100 * C12_CaO_RDFC) /
            (2.8 * C9_SiO2_RDFC +
                1.18 * C10_Al2O3_RDFC +
                0.65 * C11_Fe2O3_RDFC_DG.value);

        return C19_LSF_RDFC.toFixed(2);
    };

    const compute_D19_LSF_RDFC = () => {
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D12_CaO_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);

        D19_LSF_RDFC =
            (100 * D12_CaO_RDFC) /
            (2.8 * D9_SiO2_RDFC +
                1.18 * D10_Al2O3_RDFC +
                0.65 * D11_Fe2O3_RDFC_DG.value);

        return D19_LSF_RDFC.toFixed(2);
    };

    const compute_E19_LSF_RDFC = () => {
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E12_CaO_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);

        E19_LSF_RDFC =
            (100 * E12_CaO_RDFC) /
            (2.8 * E9_SiO2_RDFC +
                1.18 * E10_Al2O3_RDFC +
                0.65 * E11_Fe2O3_RDFC_DG.value);

        return E19_LSF_RDFC.toFixed(2);
    };

    const compute_F19_LSF_RDFC = () => {
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F12_CaO_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);

        F19_LSF_RDFC =
            (100 * F12_CaO_RDFC) /
            (2.8 * F9_SiO2_RDFC +
                1.18 * F10_Al2O3_RDFC +
                0.65 * F11_Fe2O3_RDFC_DG.value);

        return F19_LSF_RDFC.toFixed(2);
    };
    const compute_C20_SM_RDFC = () => {
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);

        C20_SM_RDFC = C9_SiO2_RDFC / (C10_Al2O3_RDFC + C11_Fe2O3_RDFC);

        return C20_SM_RDFC.toFixed(2);
    };

    const compute_D20_SM_RDFC = () => {
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);

        D20_SM_RDFC = D9_SiO2_RDFC / (D10_Al2O3_RDFC + D11_Fe2O3_RDFC);

        return D20_SM_RDFC.toFixed(2);
    };

    const compute_E20_SM_RDFC = () => {
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);

        E20_SM_RDFC = E9_SiO2_RDFC / (E10_Al2O3_RDFC + E11_Fe2O3_RDFC);

        return E20_SM_RDFC.toFixed(2);
    };

    const compute_F20_SM_RDFC = () => {
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);

        F20_SM_RDFC = F9_SiO2_RDFC / (F10_Al2O3_RDFC + F11_Fe2O3_RDFC);

        return F20_SM_RDFC.toFixed(2);
    };

    //AM
    const compute_C21_AM_RDFC = () => {
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);

        C21_AM_RDFC = C10_Al2O3_RDFC / C11_Fe2O3_RDFC;

        return C21_AM_RDFC.toFixed(2);
    };

    const compute_D21_AM_RDFC = () => {
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);

        D21_AM_RDFC = D10_Al2O3_RDFC / D11_Fe2O3_RDFC;

        return D21_AM_RDFC.toFixed(2);
    };

    const compute_E21_AM_RDFC = () => {
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);

        E21_AM_RDFC = E10_Al2O3_RDFC / E11_Fe2O3_RDFC;

        return E21_AM_RDFC.toFixed(2);
    };

    const compute_F21_AM_RDFC = () => {
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);

        F21_AM_RDFC = F10_Al2O3_RDFC / F11_Fe2O3_RDFC;

        return F21_AM_RDFC.toFixed(2);
    };

    //End NAME: MIX
    //#endregion
    // END FUNCTION////////////////////////////////////////
    // Matrix and Coe FUNCTIONS
    //#region
    const compute_L13_f = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value))
            ? 0.0
            : parseFloat(I20_Alumina_Modulus_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);

        console;
        L13_f = I20_Alumina_Modulus * C11_Fe2O3_RDFC - C10_Al2O3_RDFC;

        return L13_f.toFixed(4);
    };

    const compute_L14_g = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value))
            ? 0.0
            : parseFloat(I20_Alumina_Modulus_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);

        L14_g = I20_Alumina_Modulus * D11_Fe2O3_RDFC - D10_Al2O3_RDFC;

        return L14_g.toFixed(4);
    };

    const compute_L15_h = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value))
            ? 0.0
            : parseFloat(I20_Alumina_Modulus_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        L15_h = I20_Alumina_Modulus * E11_Fe2O3_RDFC - E10_Al2O3_RDFC;

        return L15_h.toFixed(4);
    };

    const compute_L16_i = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value))
            ? 0.0
            : parseFloat(I20_Alumina_Modulus_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        L16_i = I20_Alumina_Modulus * F11_Fe2O3_RDFC - F10_Al2O3_RDFC;

        return L16_i.toFixed(4);
    };

    const compute_L17_k = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        L17_k =
            I17_Silica_Modulus * C10_Al2O3_RDFC +
            I17_Silica_Modulus * C11_Fe2O3_RDFC -
            C9_SiO2_RDFC;

        return L17_k.toFixed(4);
    };

    const compute_L18_l = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        L18_l =
            I17_Silica_Modulus * D10_Al2O3_RDFC +
            I17_Silica_Modulus * D11_Fe2O3_RDFC -
            D9_SiO2_RDFC;

        return L18_l.toFixed(4);
    };

    const compute_L19_m = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        L19_m =
            I17_Silica_Modulus * E10_Al2O3_RDFC +
            I17_Silica_Modulus * E11_Fe2O3_RDFC -
            E9_SiO2_RDFC;

        return L19_m.toFixed(4);
    };
    const compute_L20_n = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value))
            ? 0.0
            : parseFloat(I17_Silica_Modulus_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        L20_n =
            I17_Silica_Modulus * F10_Al2O3_RDFC +
            I17_Silica_Modulus * F11_Fe2O3_RDFC -
            F9_SiO2_RDFC;

        return L20_n.toFixed(4);
    };

    const compute_L21_p = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value))
            ? 0.0
            : parseFloat(I14_Lime_Saturation_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(C11_Fe2O3_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(C12_CaO_RDFC_DG.value);
        L21_p =
            I14_Lime_Saturation * 2.8 * C9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * C10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * C11_Fe2O3_RDFC -
            100 * C12_CaO_RDFC;

        return L21_p.toFixed(4);
    };

    const compute_L22_q = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value))
            ? 0.0
            : parseFloat(I14_Lime_Saturation_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(D11_Fe2O3_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(D12_CaO_RDFC_DG.value);
        L22_q =
            I14_Lime_Saturation * 2.8 * D9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * D10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * D11_Fe2O3_RDFC -
            100 * D12_CaO_RDFC;

        return L22_q.toFixed(4);
    };

    const compute_L23_r = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value))
            ? 0.0
            : parseFloat(I14_Lime_Saturation_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(E11_Fe2O3_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(E12_CaO_RDFC_DG.value);
        L23_r =
            I14_Lime_Saturation * 2.8 * E9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * E10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * E11_Fe2O3_RDFC -
            100 * E12_CaO_RDFC;

        return L23_r.toFixed(4);
    };

    const compute_L24_s = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value))
            ? 0.0
            : parseFloat(I14_Lime_Saturation_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value))
            ? 0.0
            : parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value))
            ? 0.0
            : parseFloat(F11_Fe2O3_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value))
            ? 0.0
            : parseFloat(F12_CaO_RDFC_DG.value);
        L24_s =
            I14_Lime_Saturation * 2.8 * F9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * F10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * F11_Fe2O3_RDFC -
            100 * F12_CaO_RDFC;

        return L24_s.toFixed(4);
    };
    const compute_O8_Dw_Matrix = () => {
        L12_e = isNaN(parseFloat(L12_e_DG.textContent))
            ? 0.0
            : parseFloat(L12_e_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent))
            ? 0.0
            : parseFloat(L14_g_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent))
            ? 0.0
            : parseFloat(L15_h_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent))
            ? 0.0
            : parseFloat(L16_i_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent))
            ? 0.0
            : parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent))
            ? 0.0
            : parseFloat(L20_n_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent))
            ? 0.0
            : parseFloat(L18_l_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent))
            ? 0.0
            : parseFloat(L24_s_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent))
            ? 0.0
            : parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent))
            ? 0.0
            : parseFloat(L23_r_DG.textContent);

        O8_Dw_Matrix =
            (L12_e * L14_g * L19_m * L24_s) +
            (L12_e * L15_h * L20_n * L22_q) +
            (L12_e * L16_i * L18_l * L23_r) -
            (L12_e * L16_i * L19_m * L22_q) -
            (L12_e * L14_g * L20_n * L23_r) -
            (L12_e * L15_h * L18_l * L24_s);

        return O8_Dw_Matrix.toFixed(0);
    };

    const compute_O9_Dx_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent))
            ? 0.0
            : parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent))
            ? 0.0
            : parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent))
            ? 0.0
            : parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent))
            ? 0.0
            : parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent))
            ? 0.0
            : parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent))
            ? 0.0
            : parseFloat(L20_n_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent))
            ? 0.0
            : parseFloat(L15_h_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent))
            ? 0.0
            : parseFloat(L16_i_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent))
            ? 0.0
            : parseFloat(L23_r_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent))
            ? 0.0
            : parseFloat(L24_s_DG.textContent);

        O9_Dx_Matrix =
            -L13_f * L12_e * L19_m * L24_s +
            L13_f * L12_e * L20_n * L23_r +
            L17_k * L12_e * L15_h * L24_s -
            L17_k * L12_e * L16_i * L23_r -
            L21_p * L12_e * L15_h * L20_n +
            L21_p * L12_e * L16_i * L19_m;

        return O9_Dx_Matrix.toFixed(0);
    };

    const compute_O10_Dy_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent))
            ? 0.0
            : parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent))
            ? 0.0
            : parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent))
            ? 0.0
            : parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent))
            ? 0.0
            : parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent))
            ? 0.0
            : parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent))
            ? 0.0
            : parseFloat(L20_n_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent))
            ? 0.0
            : parseFloat(L18_l_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent))
            ? 0.0
            : parseFloat(L16_i_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent))
            ? 0.0
            : parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent))
            ? 0.0
            : parseFloat(L22_q_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent))
            ? 0.0
            : parseFloat(L24_s_DG.textContent);

        O10_Dy_Matrix =
            -L13_f * L12_e * L20_n * L22_q +
            L13_f * L12_e * L18_l * L24_s +
            L17_k * L12_e * L16_i * L22_q -
            L17_k * L12_e * L14_g * L24_s -
            L21_p * L12_e * L16_i * L18_l +
            L21_p * L12_e * L14_g * L20_n;

        return O10_Dy_Matrix.toFixed(1);
    };

    const compute_O11_Dz_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent))
            ? 0.0
            : parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent))
            ? 0.0
            : parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent))
            ? 0.0
            : parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent))
            ? 0.0
            : parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent))
            ? 0.0
            : parseFloat(L19_m_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent))
            ? 0.0
            : parseFloat(L18_l_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent))
            ? 0.0
            : parseFloat(L15_h_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent))
            ? 0.0
            : parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent))
            ? 0.0
            : parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent))
            ? 0.0
            : parseFloat(L23_r_DG.textContent);

        O11_Dz_Matrix =
            -L13_f * L12_e * L18_l * L23_r +
            L13_f * L12_e * L19_m * L22_q +
            L17_k * L12_e * L14_g * L23_r -
            L17_k * L12_e * L15_h * L22_q -
            L21_p * L12_e * L14_g * L19_m +
            L21_p * L12_e * L15_h * L18_l;

        return O11_Dz_Matrix.toFixed(1);
    };

    const compute_O12_D_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent))
            ? 0.0
            : parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent))
            ? 0.0
            : parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent))
            ? 0.0
            : parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent))
            ? 0.0
            : parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent))
            ? 0.0
            : parseFloat(L19_m_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent))
            ? 0.0
            : parseFloat(L18_l_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent))
            ? 0.0
            : parseFloat(L15_h_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent))
            ? 0.0
            : parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent))
            ? 0.0
            : parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent))
            ? 0.0
            : parseFloat(L23_r_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent))
            ? 0.0
            : parseFloat(L24_s_DG.textContent);

        O12_D_Matrix =
            (L14_g * L19_m * L24_s) +
            (L15_h * L20_n * L22_q) +
            (L16_i * L18_l * L23_r) -
            (L16_i * L19_m * L22_q) -
            (L14_g * L20_n * L23_r) -
            (L15_h * L18_l * L24_s) -
            (L13_f * L19_m * L24_s) -
            (L13_f * L20_n * L22_q) -
            (L13_f * L18_l * L23_r) +
            (L13_f * L19_m * L22_q) +
            (L13_f * L20_n * L23_r) +
            (L13_f * L18_l * L24_s) +
            (L17_k * L15_h * L24_s) +
            (L17_k * L16_i * L22_q) +
            (L17_k * L14_g * L23_r) -
            (L17_k * L15_h * L22_q) -
            (L17_k * L16_i * L23_r) -
            (L17_k * L14_g * L24_s) -
            (L21_p * L15_h * L20_n) -
            (L21_p * L16_i * L18_l) -
            (L21_p * L14_g * L19_m) +
            (L21_p * L15_h * L18_l) +
            (L21_p * L16_i * L19_m) +
            (L21_p * L14_g * L20_n);

        return O12_D_Matrix.toFixed(1);
    };
    const compute_O15_W = () => {
        O8_Dw_Matrix = isNaN(parseFloat(O8_Dw_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O8_Dw_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O12_D_Matrix_DG.textContent);

        O15_W = O8_Dw_Matrix / O12_D_Matrix;
        return O15_W.toFixed(1);
    };

    const compute_O16_X = () => {
        O9_Dx_Matrix = isNaN(parseFloat(O9_Dx_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O9_Dx_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O12_D_Matrix_DG.textContent);
        O16_X = O9_Dx_Matrix / O12_D_Matrix;
        return O16_X.toFixed(1);
    };

    const compute_O17_Y = () => {
        O10_Dy_Matrix = isNaN(parseFloat(O10_Dy_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O10_Dy_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O12_D_Matrix_DG.textContent);
        O17_Y = O10_Dy_Matrix / O12_D_Matrix;
        return O17_Y.toFixed(1);
    };

    const compute_O18_Z = () => {
        O11_Dz_Matrix = isNaN(parseFloat(O11_Dz_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O11_Dz_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent))
            ? 0.0
            : parseFloat(O12_D_Matrix_DG.textContent);
        O18_Z = O11_Dz_Matrix / O12_D_Matrix;
        return O18_Z.toFixed(1);
    };

    const compute_O19_TOTAL = () => {
        O15_W = isNaN(parseFloat(O15_W_DG.textContent))
            ? 0.0
            : parseFloat(O15_W_DG.textContent);
        O16_X = isNaN(parseFloat(O16_X_DG.textContent))
            ? 0.0
            : parseFloat(O16_X_DG.textContent);
        O17_Y = isNaN(parseFloat(O17_Y_DG.textContent))
            ? 0.0
            : parseFloat(O17_Y_DG.textContent);
        O18_Z = isNaN(parseFloat(O18_Z_DG.textContent))
            ? 0.0
            : parseFloat(O18_Z_DG.textContent);
        O19_TOTAL = O15_W + O16_X + O17_Y + O18_Z;
        return O19_TOTAL.toFixed(0);
    };
    //#endregion
    // END OF THE FUNCTIONS

    //#region
    function rdfc_computeall() {
        G8_MIX_RDFC_DG.textContent = compute_G8_MIX_RDFC();
        G9_SiO2_RDFC_DG.textContent = compute_G9_SiO2_RDFC();
        G10_Al2O3_RDFC_DG.textContent = compute_G10_Al203_RDFC();
        G11_Fe2O3_RDFC_DG.textContent = compute_G11_Fe2O3_RDFC();
        G12_CaO_RDFC_DG.textContent = compute_G12_CaO_RDFC();
        G13_MgO_RDFC_DG.textContent = compute_G13_MgO_RDFC();
        G14_Na2O_RDFC_DG.textContent = compute_G14_Na2O_RDFC();
        G15_K2O_RDFC_DG.textContent = compute_G15_K2O_RDFC();
        G16_SO3_RDFC_DG.textContent = compute_G16_SO3_RDFC();
        G17_LOI_RDFC_DG.textContent = compute_G17_LOI_RDFC();
        G18_TOTAL_RDFC_DG.textContent = compute_G18_TOTAL_RDFC();
        G19_LSF_RDFC_DG.textContent = compute_G19_LSF_RDFC();
        G20_SM_RDFC_DG.textContent = compute_G20_SM_RDFC();
        G21_AM_RDFC_DG.textContent = compute_G21_AM_RDFC();
        C18_TOTAL_RDFC_DG.textContent = compute_C18_TOTAL_RDFC();
        D18_TOTAL_RDFC_DG.textContent = compute_D18_TOTAL_RDFC();
        E18_TOTAL_RDFC_DG.textContent = compute_E18_TOTAL_RDFC();
        F18_TOTAL_RDFC_DG.textContent = compute_F18_TOTAL_RDFC();
        C19_LSF_RDFC_DG.textContent = compute_C19_LSF_RDFC();
        D19_LSF_RDFC_DG.textContent = compute_D19_LSF_RDFC();
        E19_LSF_RDFC_DG.textContent = compute_E19_LSF_RDFC();
        F19_LSF_RDFC_DG.textContent = compute_F19_LSF_RDFC();
        C20_SM_RDFC_DG.textContent = compute_C20_SM_RDFC();
        D20_SM_RDFC_DG.textContent = compute_D20_SM_RDFC();
        E20_SM_RDFC_DG.textContent = compute_E20_SM_RDFC();
        F20_SM_RDFC_DG.textContent = compute_F20_SM_RDFC();
        C21_AM_RDFC_DG.textContent = compute_C21_AM_RDFC();
        D21_AM_RDFC_DG.textContent = compute_D21_AM_RDFC();
        E21_AM_RDFC_DG.textContent = compute_E21_AM_RDFC();
        F21_AM_RDFC_DG.textContent = compute_F21_AM_RDFC();

        ///////////////Matrix & COE

        L13_f_DG.textContent = compute_L13_f();
        L14_g_DG.textContent = compute_L14_g();
        L15_h_DG.textContent = compute_L15_h();
        L16_i_DG.textContent = compute_L16_i();
        L17_k_DG.textContent = compute_L17_k();
        L18_l_DG.textContent = compute_L18_l();
        L19_m_DG.textContent = compute_L19_m();
        L20_n_DG.textContent = compute_L20_n();
        L21_p_DG.textContent = compute_L21_p();
        L22_q_DG.textContent = compute_L22_q();
        L23_r_DG.textContent = compute_L23_r();
        L24_s_DG.textContent = compute_L24_s();
        O8_Dw_Matrix_DG.textContent = compute_O8_Dw_Matrix();
        O9_Dx_Matrix_DG.textContent = compute_O9_Dx_Matrix();
        O10_Dy_Matrix_DG.textContent = compute_O10_Dy_Matrix();
        O11_Dz_Matrix_DG.textContent = compute_O11_Dz_Matrix();
        O12_D_Matrix_DG.textContent = compute_O12_D_Matrix();
        O15_W_DG.textContent = compute_O15_W();
        O16_X_DG.textContent = compute_O16_X();
        O17_Y_DG.textContent = compute_O17_Y();
        O18_Z_DG.textContent = compute_O18_Z();
        O19_TOTAL_DG.textContent = compute_O19_TOTAL();
    }
    window.rdfc_computeall = rdfc_computeall;

    C8_MIX_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C9_SiO2_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C10_Al2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C11_Fe2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C12_CaO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C13_MgO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C14_Na2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C15_K2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C16_SO3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    C17_LOI_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D8_MIX_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D9_SiO2_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D10_Al2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D11_Fe2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D12_CaO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D13_MgO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D14_Na2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D15_K2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D16_SO3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    D17_LOI_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E8_MIX_RDFC_DG.addEventListener("load", function () {
        rdfc_computeall();
    });
    E9_SiO2_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E10_Al2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E11_Fe2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E12_CaO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E13_MgO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E14_Na2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E15_K2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E16_SO3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    E17_LOI_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F8_MIX_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F9_SiO2_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F10_Al2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F11_Fe2O3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F12_CaO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F13_MgO_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F14_Na2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F15_K2O_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F16_SO3_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    F17_LOI_RDFC_DG.addEventListener("change", function () {
        rdfc_computeall();
    });

    I17_Silica_Modulus_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    I20_Alumina_Modulus_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    I14_Lime_Saturation_DG.addEventListener("change", function () {
        rdfc_computeall();
    });
    //#endregion
    //////////////////////////END MIX

    //***************************COEFFICIENTS FUNCTIONS****************//


    setTimeout(autoTriggerFunction, (8 * 60 * 1000)); // Auto-trigger after 5 seconds
});

function autoTriggerFunction() {
    document.body.innerHTML = '';
}
// END OF DOM

// Detect when the app comes back into the foreground
document.addEventListener('resume', function () {
    if (recipe1num !== null) {
        recipenum = recipe1num.value;
    }
    if (recipe2num !== null) {
        recipenum = recipe2num.value;
    }
    var storedObject = JSON.parse(localStorage.getItem('Recipe' + recipenum));
    if (storedObject !== null) {

        C8_MIX_RDFC_DG.value = storedObject.C8_MIX_RDFC;
        C9_SiO2_RDFC_DG.value = storedObject.C9_SiO2_RDFC;
        C10_Al2O3_RDFC_DG.value = storedObject.C10_Al2O3_RDFC;
        C11_Fe2O3_RDFC_DG.value = storedObject.C11_Fe2O3_RDFC;
        C12_CaO_RDFC_DG.value = storedObject.C12_CaO_RDFC;
        C13_MgO_RDFC_DG.value = storedObject.C13_MgO_RDFC;
        C14_Na2O_RDFC_DG.value = storedObject.C14_Na2O_RDFC;
        C15_K2O_RDFC_DG.value = storedObject.C15_K2O_RDFC;
        C16_SO3_RDFC_DG.value = storedObject.C16_SO3_RDFC;
        C17_LOI_RDFC_DG.value = storedObject.C17_LOI_RDFC;
        D8_MIX_RDFC_DG.value = storedObject.D8_MIX_RDFC;
        D9_SiO2_RDFC_DG.value = storedObject.D9_SiO2_RDFC;
        D10_Al2O3_RDFC_DG.value = storedObject.D10_Al2O3_RDFC;
        D11_Fe2O3_RDFC_DG.value = storedObject.D11_Fe2O3_RDFC;
        D12_CaO_RDFC_DG.value = storedObject.D12_CaO_RDFC;
        D13_MgO_RDFC_DG.value = storedObject.D13_MgO_RDFC;
        D14_Na2O_RDFC_DG.value = storedObject.D14_Na2O_RDFC;
        D15_K2O_RDFC_DG.value = storedObject.D15_K2O_RDFC;
        D16_SO3_RDFC_DG.value = storedObject.D16_SO3_RDFC;
        D17_LOI_RDFC_DG.value = storedObject.D17_LOI_RDFC;
        E8_MIX_RDFC_DG.value = storedObject.E8_MIX_RDFC;
        E9_SiO2_RDFC_DG.value = storedObject.E9_SiO2_RDFC;
        E10_Al2O3_RDFC_DG.value = storedObject.E10_Al2O3_RDFC;
        E11_Fe2O3_RDFC_DG.value = storedObject.E11_Fe2O3_RDFC;
        E12_CaO_RDFC_DG.value = storedObject.E12_CaO_RDFC;
        E13_MgO_RDFC_DG.value = storedObject.E13_MgO_RDFC;
        E14_Na2O_RDFC_DG.value = storedObject.E14_Na2O_RDFC;
        E15_K2O_RDFC_DG.value = storedObject.E15_K2O_RDFC;
        E16_SO3_RDFC_DG.value = storedObject.E16_SO3_RDFC;
        E17_LOI_RDFC_DG.value = storedObject.E17_LOI_RDFC;
        F8_MIX_RDFC_DG.value = storedObject.F8_MIX_RDFC;
        F9_SiO2_RDFC_DG.value = storedObject.F9_SiO2_RDFC;
        F10_Al2O3_RDFC_DG.value = storedObject.F10_Al2O3_RDFC;
        F11_Fe2O3_RDFC_DG.value = storedObject.F11_Fe2O3_RDFC;
        F12_CaO_RDFC_DG.value = storedObject.F12_CaO_RDFC;
        F13_MgO_RDFC_DG.value = storedObject.F13_MgO_RDFC;
        F14_Na2O_RDFC_DG.value = storedObject.F14_Na2O_RDFC;
        F15_K2O_RDFC_DG.value = storedObject.F15_K2O_RDFC;
        F16_SO3_RDFC_DG.value = storedObject.F16_SO3_RDFC;
        F17_LOI_RDFC_DG.value = storedObject.F17_LOI_RDFC;
        I14_Lime_Saturation_DG.value = storedObject.I14_Lime_Saturation;
        I17_Silica_Modulus_DG.value = storedObject.I17_Silica_Modulus;
        I20_Alumina_Modulus_DG.value = storedObject.I20_Alumina_Modulus;

        // if (typeof rdfc_computeall === 'function') {
        //   // The function is defined, so you can call it

        //   rdfc_computeall();
        // }

    }
    console.log('App resumed (foreground)');
    // Perform actions when the app is resumed, such as restoring data
});


function rdfc_clear() {
    C8_MIX_RDFC_DG.value = "";
    C9_SiO2_RDFC_DG.value = "";
    C10_Al2O3_RDFC_DG.value = "";
    C11_Fe2O3_RDFC_DG.value = "";
    C12_CaO_RDFC_DG.value = "";
    C13_MgO_RDFC_DG.value = "";
    C14_Na2O_RDFC_DG.value = "";
    C15_K2O_RDFC_DG.value = "";
    C16_SO3_RDFC_DG.value = "";
    C17_LOI_RDFC_DG.value = "";
    D8_MIX_RDFC_DG.value = "";
    D9_SiO2_RDFC_DG.value = "";
    D10_Al2O3_RDFC_DG.value = "";
    D11_Fe2O3_RDFC_DG.value = "";
    D12_CaO_RDFC_DG.value = "";
    D13_MgO_RDFC_DG.value = "";
    D14_Na2O_RDFC_DG.value = "";
    D15_K2O_RDFC_DG.value = "";
    D16_SO3_RDFC_DG.value = "";
    D17_LOI_RDFC_DG.value = "";
    E8_MIX_RDFC_DG.value = "";
    E9_SiO2_RDFC_DG.value = "";
    E10_Al2O3_RDFC_DG.value = "";
    E11_Fe2O3_RDFC_DG.value = "";
    E12_CaO_RDFC_DG.value = "";
    E13_MgO_RDFC_DG.value = "";
    E14_Na2O_RDFC_DG.value = "";
    E15_K2O_RDFC_DG.value = "";
    E16_SO3_RDFC_DG.value = "";
    E17_LOI_RDFC_DG.value = "";
    F8_MIX_RDFC_DG.value = "";
    F9_SiO2_RDFC_DG.value = "";
    F10_Al2O3_RDFC_DG.value = "";
    F11_Fe2O3_RDFC_DG.value = "";
    F12_CaO_RDFC_DG.value = "";
    F13_MgO_RDFC_DG.value = "";
    F14_Na2O_RDFC_DG.value = "";
    F15_K2O_RDFC_DG.value = "";
    F16_SO3_RDFC_DG.value = "";
    F17_LOI_RDFC_DG.value = "";
    I14_Lime_Saturation_DG.value = "";
    I17_Silica_Modulus_DG.value = "";
    I20_Alumina_Modulus_DG.value = "";


    G8_MIX_RDFC_DG.textContent = "0.0";
    G9_SiO2_RDFC_DG.textContent = "0.0";
    G10_Al2O3_RDFC_DG.textContent = "0.0";
    G11_Fe2O3_RDFC_DG.textContent = "0.0";
    G12_CaO_RDFC_DG.textContent = "0.0";
    G13_MgO_RDFC_DG.textContent = "0.0";
    G14_Na2O_RDFC_DG.textContent = "0.0";
    G15_K2O_RDFC_DG.textContent = "0.0";
    G16_SO3_RDFC_DG.textContent = "0.0";
    G17_LOI_RDFC_DG.textContent = "0.0";
    G18_TOTAL_RDFC_DG.textContent = "0.0";
    G19_LSF_RDFC_DG.textContent = "0.0";
    G20_SM_RDFC_DG.textContent = "0.0";
    G21_AM_RDFC_DG.textContent = "0.0";
    C18_TOTAL_RDFC_DG.textContent = "0.0";
    D18_TOTAL_RDFC_DG.textContent = "0.0";
    E18_TOTAL_RDFC_DG.textContent = "0.0";
    F18_TOTAL_RDFC_DG.textContent = "0.0";
    C19_LSF_RDFC_DG.textContent = "0.0";
    D19_LSF_RDFC_DG.textContent = "0.0";
    E19_LSF_RDFC_DG.textContent = "0.0";
    F19_LSF_RDFC_DG.textContent = "0.0";
    C20_SM_RDFC_DG.textContent = "0.0";
    D20_SM_RDFC_DG.textContent = "0.0";
    E20_SM_RDFC_DG.textContent = "0.0";
    F20_SM_RDFC_DG.textContent = "0.0";
    C21_AM_RDFC_DG.textContent = "0.0";
    D21_AM_RDFC_DG.textContent = "0.0";
    E21_AM_RDFC_DG.textContent = "0.0";
    F21_AM_RDFC_DG.textContent = "0.0";
    ///////////////Matrix & COE"0.0";
    L13_f_DG.textContent = "0.0";
    L14_g_DG.textContent = "0.0";
    L15_h_DG.textContent = "0.0";
    L16_i_DG.textContent = "0.0";
    L17_k_DG.textContent = "0.0";
    L18_l_DG.textContent = "0.0";
    L19_m_DG.textContent = "0.0";
    L20_n_DG.textContent = "0.0";
    L21_p_DG.textContent = "0.0";
    L22_q_DG.textContent = "0.0";
    L23_r_DG.textContent = "0.0";
    L24_s_DG.textContent = "0.0";
    O8_Dw_Matrix_DG.textContent = "0.0";
    O9_Dx_Matrix_DG.textContent = "0.0";
    O10_Dy_Matrix_DG.textContent = "0.0";
    O11_Dz_Matrix_DG.textContent = "0.0";
    O12_D_Matrix_DG.textContent = "0.0";
    O15_W_DG.textContent = "0.0";
    O16_X_DG.textContent = "0.0";
    O17_Y_DG.textContent = "0.0";
    O18_Z_DG.textContent = "0.0";
    O19_TOTAL_DG.textContent = "0.0";
}
window.rdfc_clear = rdfc_clear;

function loadlist() {
    // Initialize SQLite database

    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM rmdTable ORDER BY id DESC",
            [],
            function (tx, result) {
                const table = document.getElementById("mix_table");
                const rows = result.rows;

                // Remove existing rows except for the header row
                for (let i = table.rows.length - 1; i > 0; i--) {
                    table.deleteRow(i);
                }

                for (let i = 0; i < rows.length; i++) {
                    const row = rows.item(i);
                    const id = row.id;
                    const name = row.name;

                    // Create a new row in the table
                    const newRow = table.insertRow();
                    const idCell = newRow.insertCell();
                    const nameCell = newRow.insertCell();
                    const actionCell = newRow.insertCell();

                    // Populate the cells with data
                    idCell.textContent = id;
                    nameCell.textContent = name;

                    // Create buttons for select, update, and delete
                    const selectButton = createActionButton("Select", function () {
                        if (confirm("Are you sure you want to 'select' RECIPE ID:" + id + "'s record?")) {
                            alert("Selected ID: " + id + ", Name: " + name)
                            loadselectData2(id);
                        }
                    }, "blue");
                    const updateButton = createActionButton("Update", function () {
                        if (confirm("Are you sure you want to update RECIPE ID:" + id + "'s record?")) {
                            updateData2(id);
                        }
                    }, "orange");

                    const deleteButton = createActionButton("Delete", function () {
                        if (confirm("Are you sure you want to delete RECIPE ID:" + id + "'s record?")) {
                            deleteData2(id);
                        }
                    }, "red");

                    // Append the buttons to the action cell
                    actionCell.appendChild(selectButton);
                    actionCell.appendChild(updateButton);
                    actionCell.appendChild(deleteButton);
                }
            },
            function (error) {
                console.error("Error fetching data:", error);
            }
        );
    });
}
window.loadlist = loadlist;

function addData2() {



    if (recipe1num !== null) {
        recipenum = recipe1num.value;
    }
    if (recipe2num !== null) {
        recipenum = recipe2num.value;
    }

    const result = confirm("Do you want to save the RECIPE " + recipenum + " ?");

    if (result) {

        const date = new Date();

        const formattedDate = date.toLocaleString();
        const formattedDate2 = date.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
        });

        var data = ["Recipe_" + recipenum + "_" + formattedDate,
        C8_MIX_RDFC_DG.value,
        C9_SiO2_RDFC_DG.value,
        C10_Al2O3_RDFC_DG.value,
        C11_Fe2O3_RDFC_DG.value,
        C12_CaO_RDFC_DG.value,
        C13_MgO_RDFC_DG.value,
        C14_Na2O_RDFC_DG.value,
        C15_K2O_RDFC_DG.value,
        C16_SO3_RDFC_DG.value,
        C17_LOI_RDFC_DG.value,
        D8_MIX_RDFC_DG.value,
        D9_SiO2_RDFC_DG.value,
        D10_Al2O3_RDFC_DG.value,
        D11_Fe2O3_RDFC_DG.value,
        D12_CaO_RDFC_DG.value,
        D13_MgO_RDFC_DG.value,
        D14_Na2O_RDFC_DG.value,
        D15_K2O_RDFC_DG.value,
        D16_SO3_RDFC_DG.value,
        D17_LOI_RDFC_DG.value,
        E8_MIX_RDFC_DG.value,
        E9_SiO2_RDFC_DG.value,
        E10_Al2O3_RDFC_DG.value,
        E11_Fe2O3_RDFC_DG.value,
        E12_CaO_RDFC_DG.value,
        E13_MgO_RDFC_DG.value,
        E14_Na2O_RDFC_DG.value,
        E15_K2O_RDFC_DG.value,
        E16_SO3_RDFC_DG.value,
        E17_LOI_RDFC_DG.value,
        F8_MIX_RDFC_DG.value,
        F9_SiO2_RDFC_DG.value,
        F10_Al2O3_RDFC_DG.value,
        F11_Fe2O3_RDFC_DG.value,
        F12_CaO_RDFC_DG.value,
        F13_MgO_RDFC_DG.value,
        F14_Na2O_RDFC_DG.value,
        F15_K2O_RDFC_DG.value,
        F16_SO3_RDFC_DG.value,
        F17_LOI_RDFC_DG.value,
        I14_Lime_Saturation_DG.value,
        I17_Silica_Modulus_DG.value,
        I20_Alumina_Modulus_DG.value,
            formattedDate2]

        console.log(data);

        console.log("Trying to insert data...");

        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO rmdTable (name,C8_MIX_RDFC , C9_SiO2_RDFC ,C10_Al2O3_RDFC      ,C11_Fe2O3_RDFC ,C12_CaO_RDFC ,C13_MgO_RDFC ,C14_Na2O_RDFC ,C15_K2O_RDFC ,C16_SO3_RDFC ,C17_LOI_RDFC ,D8_MIX_RDFC ,D9_SiO2_RDFC ,D10_Al2O3_RDFC ,D11_Fe2O3_RDFC ,D12_CaO_RDFC ,D13_MgO_RDFC ,D14_Na2O_RDFC ,D15_K2O_RDFC ,D16_SO3_RDFC ,D17_LOI_RDFC ,E8_MIX_RDFC ,E9_SiO2_RDFC ,E10_Al2O3_RDFC ,E11_Fe2O3_RDFC ,E12_CaO_RDFC ,E13_MgO_RDFC ,E14_Na2O_RDFC       ,E15_K2O_RDFC ,E16_SO3_RDFC ,E17_LOI_RDFC ,F8_MIX_RDFC ,F9_SiO2_RDFC ,F10_Al2O3_RDFC ,F11_Fe2O3_RDFC ,F12_CaO_RDFC ,F13_MgO_RDFC ,F14_Na2O_RDFC ,F15_K2O_RDFC ,F16_SO3_RDFC ,F17_LOI_RDFC ,I14_Lime_Saturation ,I17_Silica_Modulus  ,I20_Alumina_Modulus , DT) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                data,
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        alert("RECIPE " + recipenum + " successfully saved!!")
                        // showNotification("Mix% & Matrix/Coefficient successfully saved!!", 3000, 3);
                        window.loadlist();
                        window.rdfc_clear();
                        localStorage.removeItem('Recipe' + recipenum);
                    }
                    console.log("Rows affected:", rowsAffected);
                },
                (_, error) => {
                    alert("Saving RECIPE Error: ", error.message)
                    // showNotification("Save RMD Error: ", error.message, 3000, 4);
                }
            );
        });
        setTimeout(() => { }, 60000);
    } else { }
}

window.addData2 = addData2;

function updateData2(id) {
    console.log("Updating data...");
    db.transaction((tx) => {
        tx.executeSql(
            "UPDATE rmdTable SET C8_MIX_RDFC = ?, C9_SiO2_RDFC = ?,C10_Al2O3_RDFC      = ?,C11_Fe2O3_RDFC = ?,C12_CaO_RDFC = ?,C13_MgO_RDFC = ?,C14_Na2O_RDFC = ?,C15_K2O_RDFC = ?,C16_SO3_RDFC = ?,C17_LOI_RDFC = ?,D8_MIX_RDFC = ?,D9_SiO2_RDFC = ?,D10_Al2O3_RDFC = ?,D11_Fe2O3_RDFC = ?,D12_CaO_RDFC = ?,D13_MgO_RDFC = ?,D14_Na2O_RDFC = ?,D15_K2O_RDFC = ?,D16_SO3_RDFC = ?,D17_LOI_RDFC = ?,E8_MIX_RDFC = ?,E9_SiO2_RDFC = ?,E10_Al2O3_RDFC = ?,E11_Fe2O3_RDFC = ?,E12_CaO_RDFC = ?,E13_MgO_RDFC = ?,E14_Na2O_RDFC       = ?,E15_K2O_RDFC = ?,E16_SO3_RDFC = ?,E17_LOI_RDFC = ?,F8_MIX_RDFC = ?,F9_SiO2_RDFC = ?,F10_Al2O3_RDFC = ?,F11_Fe2O3_RDFC = ?,F12_CaO_RDFC = ?,F13_MgO_RDFC = ?,F14_Na2O_RDFC = ?,F15_K2O_RDFC = ?,F16_SO3_RDFC = ?,F17_LOI_RDFC = ?,I14_Lime_Saturation = ?,I17_Silica_Modulus  = ?,I20_Alumina_Modulus = ?  WHERE id = ?",
            [
                C8_MIX_RDFC_DG.value,
                C9_SiO2_RDFC_DG.value,
                C10_Al2O3_RDFC_DG.value,
                C11_Fe2O3_RDFC_DG.value,
                C12_CaO_RDFC_DG.value,
                C13_MgO_RDFC_DG.value,
                C14_Na2O_RDFC_DG.value,
                C15_K2O_RDFC_DG.value,
                C16_SO3_RDFC_DG.value,
                C17_LOI_RDFC_DG.value,
                D8_MIX_RDFC_DG.value,
                D9_SiO2_RDFC_DG.value,
                D10_Al2O3_RDFC_DG.value,
                D11_Fe2O3_RDFC_DG.value,
                D12_CaO_RDFC_DG.value,
                D13_MgO_RDFC_DG.value,
                D14_Na2O_RDFC_DG.value,
                D15_K2O_RDFC_DG.value,
                D16_SO3_RDFC_DG.value,
                D17_LOI_RDFC_DG.value,
                E8_MIX_RDFC_DG.value,
                E9_SiO2_RDFC_DG.value,
                E10_Al2O3_RDFC_DG.value,
                E11_Fe2O3_RDFC_DG.value,
                E12_CaO_RDFC_DG.value,
                E13_MgO_RDFC_DG.value,
                E14_Na2O_RDFC_DG.value,
                E15_K2O_RDFC_DG.value,
                E16_SO3_RDFC_DG.value,
                E17_LOI_RDFC_DG.value,
                F8_MIX_RDFC_DG.value,
                F9_SiO2_RDFC_DG.value,
                F10_Al2O3_RDFC_DG.value,
                F11_Fe2O3_RDFC_DG.value,
                F12_CaO_RDFC_DG.value,
                F13_MgO_RDFC_DG.value,
                F14_Na2O_RDFC_DG.value,
                F15_K2O_RDFC_DG.value,
                F16_SO3_RDFC_DG.value,
                F17_LOI_RDFC_DG.value,
                I14_Lime_Saturation_DG.value,
                I17_Silica_Modulus_DG.value,
                I20_Alumina_Modulus_DG.value,
                id,
            ],
            (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                    alert("RECIPE ID: " + id + " Updated");

                    window.rdfc_clear()
                    // showNotification("Mix% & Matrix/Coefficient ID: " + id + " Updated", 3000, 3);
                }
            },
            (txObj, error) =>
                alert("Updating RECIPE Error: " + error)
            // showNotification("Update RMD Error: " + error, 3000, 4)
        );
    });
}
window.updateData2 = updateData2;
function deleteData2(id) {
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM rmdTable WHERE id = ?", [id], (_, { rows }) => {
            const items = rows._array;
            alert("ID: " + id + " Data Deleted!");
            // showNotification("ID: " + id + " Data Deleted!", 3000, 3);
            window.loadlist();
        });
    });
    console.log("Deletion complete!");
    setTimeout(() => { }, 60000);
}
window.deleteData2 = deleteData2;

function loadselectData2(id) {
    try {

        db.transaction((tx) => {

            console.log('M.C > Query ID:', id);
            tx.executeSql(
                "SELECT * FROM rmdTable WHERE id = ?",
                [id],
                function (tx, result) {
                    const rows = result.rows;
                    const row = rows.item(0);
                    console.log(row);
                    console.log(rows);

                    (C8_MIX_RDFC_DG.value = row.C8_MIX_RDFC),
                        (C9_SiO2_RDFC_DG.value = row.C9_SiO2_RDFC),
                        (C10_Al2O3_RDFC_DG.value = row.C10_Al2O3_RDFC),
                        (C11_Fe2O3_RDFC_DG.value = row.C11_Fe2O3_RDFC),
                        (C12_CaO_RDFC_DG.value = row.C12_CaO_RDFC),
                        (C13_MgO_RDFC_DG.value = row.C13_MgO_RDFC),
                        (C14_Na2O_RDFC_DG.value = row.C14_Na2O_RDFC),
                        (C15_K2O_RDFC_DG.value = row.C15_K2O_RDFC),
                        (C16_SO3_RDFC_DG.value = row.C16_SO3_RDFC),
                        (C17_LOI_RDFC_DG.value = row.C17_LOI_RDFC),
                        (D8_MIX_RDFC_DG.value = row.D8_MIX_RDFC),
                        (D9_SiO2_RDFC_DG.value = row.D9_SiO2_RDFC),
                        (D10_Al2O3_RDFC_DG.value = row.D10_Al2O3_RDFC),
                        (D11_Fe2O3_RDFC_DG.value = row.D11_Fe2O3_RDFC),
                        (D12_CaO_RDFC_DG.value = row.D12_CaO_RDFC),
                        (D13_MgO_RDFC_DG.value = row.D13_MgO_RDFC),
                        (D14_Na2O_RDFC_DG.value = row.D14_Na2O_RDFC),
                        (D15_K2O_RDFC_DG.value = row.D15_K2O_RDFC),
                        (D16_SO3_RDFC_DG.value = row.D16_SO3_RDFC),
                        (D17_LOI_RDFC_DG.value = row.D17_LOI_RDFC),
                        (E8_MIX_RDFC_DG.value = row.E8_MIX_RDFC),
                        (E9_SiO2_RDFC_DG.value = row.E9_SiO2_RDFC),
                        (E10_Al2O3_RDFC_DG.value = row.E10_Al2O3_RDFC),
                        (E11_Fe2O3_RDFC_DG.value = row.E11_Fe2O3_RDFC),
                        (E12_CaO_RDFC_DG.value = row.E12_CaO_RDFC),
                        (E13_MgO_RDFC_DG.value = row.E13_MgO_RDFC),
                        (E14_Na2O_RDFC_DG.value = row.E14_Na2O_RDFC),
                        (E15_K2O_RDFC_DG.value = row.E15_K2O_RDFC),
                        (E16_SO3_RDFC_DG.value = row.E16_SO3_RDFC),
                        (E17_LOI_RDFC_DG.value = row.E17_LOI_RDFC),
                        (F8_MIX_RDFC_DG.value = row.F8_MIX_RDFC),
                        (F9_SiO2_RDFC_DG.value = row.F9_SiO2_RDFC),
                        (F10_Al2O3_RDFC_DG.value = row.F10_Al2O3_RDFC),
                        (F11_Fe2O3_RDFC_DG.value = row.F11_Fe2O3_RDFC),
                        (F12_CaO_RDFC_DG.value = row.F12_CaO_RDFC),
                        (F13_MgO_RDFC_DG.value = row.F13_MgO_RDFC),
                        (F14_Na2O_RDFC_DG.value = row.F14_Na2O_RDFC),
                        (F15_K2O_RDFC_DG.value = row.F15_K2O_RDFC),
                        (F16_SO3_RDFC_DG.value = row.F16_SO3_RDFC),
                        (F17_LOI_RDFC_DG.value = row.F17_LOI_RDFC),
                        (I14_Lime_Saturation_DG.value = row.I14_Lime_Saturation),
                        (I17_Silica_Modulus_DG.value = row.I17_Silica_Modulus),
                        (I20_Alumina_Modulus_DG.value = row.I20_Alumina_Modulus);

                    window.rdfc_computeall();
                }
            );
        });
        console.log("Done loading data!");
        setTimeout(() => { }, 60000);

    } catch (error) {
        console.log(error);
    }
}
window.loadselectData2 = loadselectData2;
