// *********RAWMILL D FOUR COMPONENTS ****************/
//MIX
var db;
var mixnewptype;
var mixtable_id;

var C8_MIX_RDFC = 0.0;
var C9_SiO2_RDFC = 0.0;
var C10_Al2O3_RDFC = 0.0;
var C11_Fe2O3_RDFC = 0.0;
var C12_CaO_RDFC = 0.0;
var C13_MgO_RDFC = 0.0;
var C14_Na2O_RDFC = 0.0;
var C15_K2O_RDFC = 0.0;
var C16_SO3_RDFC = 0.0;
var C17_LOI_RDFC = 0.0;
var C18_TOTAL_RDFC = 0.0;
var C19_LSF_RDFC = 0.0;
var C20_SM_RDFC = 0.0;
var C21_AM_RDFC = 0.0;
var D8_MIX_RDFC = 0.0;
var D9_SiO2_RDFC = 0.0;
var D10_Al2O3_RDFC = 0.0;
var D11_Fe2O3_RDFC = 0.0;
var D12_CaO_RDFC = 0.0;
var D13_MgO_RDFC = 0.0;
var D14_Na2O_RDFC = 0.0;
var D15_K2O_RDFC = 0.0;
var D16_SO3_RDFC = 0.0;
var D17_LOI_RDFC = 0.0;
var D18_TOTAL_RDFC = 0.0;
var D19_LSF_RDFC = 0.0;
var D20_SM_RDFC = 0.0;
var D21_AM_RDFC = 0.0;
var E8_MIX_RDFC = 0.0;
var E9_SiO2_RDFC = 0.0;
var E10_Al2O3_RDFC = 0.0;
var E11_Fe2O3_RDFC = 0.0;
var E12_CaO_RDFC = 0.0;
var E13_MgO_RDFC = 0.0;
var E14_Na2O_RDFC = 0.0;
var E15_K2O_RDFC = 0.0;
var E16_SO3_RDFC = 0.0;
var E17_LOI_RDFC = 0.0;
var E18_TOTAL_RDFC = 0.0;
var E19_LSF_RDFC = 0.0;
var E20_SM_RDFC = 0.0;
var E21_AM_RDFC = 0.0;
var F8_MIX_RDFC = 0.0;
var F9_SiO2_RDFC = 0.0;
var F10_Al2O3_RDFC = 0.0;
var F11_Fe2O3_RDFC = 0.0;
var F12_CaO_RDFC = 0.0;
var F13_MgO_RDFC = 0.0;
var F14_Na2O_RDFC = 0.0;
var F15_K2O_RDFC = 0.0;
var F16_SO3_RDFC = 0.0;
var F17_LOI_RDFC = 0.0;
var F18_TOTAL_RDFC = 0.0;
var F19_LSF_RDFC = 0.0;
var F20_SM_RDFC = 0.0;
var F21_AM_RDFC = 0.0;
var G8_MIX_RDFC = 0.0;
var G9_SiO2_RDFC = 0.0;
var G10_Al2O3_RDFC = 0.0;
var G11_Fe2O3_RDFC = 0.0;
var G12_CaO_RDFC = 0.0;
var G13_MgO_RDFC = 0.0;
var G14_Na2O_RDFC = 0.0;
var G15_K2O_RDFC = 0.0;
var G16_SO3_RDFC = 0.0;
var G17_LOI_RDFC = 0.0;
var G18_TOTAL_RDFC = 0.0;
var G19_LSF_RDFC = 0.0;
var G20_SM_RDFC = 0.0;
var G21_AM_RDFC = 0.0;
var I14_Lime_Saturation = 10;
var I17_Silica_Modulus = 0.0;
var I20_Alumina_Modulus = 0.0;

//MATRIX AND COEFFICIENTS
//all fix cell
var L8_a = 0.0;
var L9_b = 0.0;
var L10_c = 0.0;
var L11_d = 0.0;
var L12_e = 0.0;
var L13_f = 0.0;
var L14_g = 0.0;
var L15_h = 0.0;
var L16_i = 0.0;
var L17_k = 0.0;
var L18_l = 0.0;
var L19_m = 0.0;
var L20_n = 0.0;
var L21_p = 0.0;
var L22_q = 0.0;
var L23_r = 0.0;
var L24_s = 0.0;

//fixed cell
//MATRIX DETERMINANTS

var O8_Dw_Matrix = 0.0;
var O9_Dx_Matrix = 0.0;
var O10_Dy_Matrix = 0.0;
var O11_Dz_Matrix = 0.0;
var O12_D_Matrix = 0.0;

//RAW MATERIALS %

var O15_W = 0.0;
var O16_X = 0.0;
var O17_Y = 0.0;
var O18_Z = 0.0;
var O19_TOTAL = 0.0;


var C8_MIX_RDFC_DG;
var C9_SiO2_RDFC_DG;
var C10_Al2O3_RDFC_DG;
var C11_Fe2O3_RDFC_DG;
var C12_CaO_RDFC_DG;
var C13_MgO_RDFC_DG;
var C14_Na2O_RDFC_DG;
var C15_K2O_RDFC_DG;
var C16_SO3_RDFC_DG;
var C17_LOI_RDFC_DG;

var C18_TOTAL_RDFC_DG;
var C19_LSF_RDFC_DG;
var C20_SM_RDFC_DG;
var C21_AM_RDFC_DG;

var D8_MIX_RDFC_DG;
var D9_SiO2_RDFC_DG;
var D10_Al2O3_RDFC_DG;
var D11_Fe2O3_RDFC_DG;
var D12_CaO_RDFC_DG;
var D13_MgO_RDFC_DG;
var D14_Na2O_RDFC_DG;
var D15_K2O_RDFC_DG;
var D16_SO3_RDFC_DG;
var D17_LOI_RDFC_DG;

var D18_TOTAL_RDFC_DG;
var D19_LSF_RDFC_DG;
var D20_SM_RDFC_DG;
var D21_AM_RDFC_DG;

var E8_MIX_RDFC_DG;
var E9_SiO2_RDFC_DG;
var E10_Al2O3_RDFC_DG;
var E11_Fe2O3_RDFC_DG;
var E12_CaO_RDFC_DG;
var E13_MgO_RDFC_DG;
var E14_Na2O_RDFC_DG;
var E15_K2O_RDFC_DG;
var E16_SO3_RDFC_DG;
var E17_LOI_RDFC_DG;

var E18_TOTAL_RDFC_DG;
var E19_LSF_RDFC_DG;
var E20_SM_RDFC_DG;
var E21_AM_RDFC_DG;

var F8_MIX_RDFC_DG;
var F9_SiO2_RDFC_DG;
var F10_Al2O3_RDFC_DG;
var F11_Fe2O3_RDFC_DG;
var F12_CaO_RDFC_DG;
var F13_MgO_RDFC_DG;
var F14_Na2O_RDFC_DG;
var F15_K2O_RDFC_DG;
var F16_SO3_RDFC_DG;
var F17_LOI_RDFC_DG;

var F18_TOTAL_RDFC_DG;
var F19_LSF_RDFC_DG;
var F20_SM_RDFC_DG;
var F21_AM_RDFC_DG;

var G8_MIX_RDFC_DG;
var G9_SiO2_RDFC_DG;
var G10_Al2O3_RDFC_DG;
var G11_Fe2O3_RDFC_DG;
var G12_CaO_RDFC_DG;
var G13_MgO_RDFC_DG;
var G14_Na2O_RDFC_DG;
var G15_K2O_RDFC_DG;
var G16_SO3_RDFC_DG;
var G17_LOI_RDFC_DG;
var G18_TOTAL_RDFC_DG;
var G19_LSF_RDFC_DG;
var G20_SM_RDFC_DG;
var G21_AM_RDFC_DG;

//MATRIX & COE

var L8_a_DG;
var L9_b_DG;
var L10_c_DG;
var L11_d_DG;
var L12_e_DG;
var L13_f_DG;
var L14_g_DG;
var L15_h_DG;
var L16_i_DG;
var L17_k_DG;
var L18_l_DG;
var L19_m_DG;
var L20_n_DG;
var L21_p_DG;
var L22_q_DG;
var L23_r_DG;
var L24_s_DG;
var O8_Dw_Matrix_DG;
var O9_Dx_Matrix_DG;
var O10_Dy_Matrix_DG;
var O11_Dz_Matrix_DG;
var O12_D_Matrix_DG;
var O15_W_DG;
var O16_X_DG;
var O17_Y_DG;
var O18_Z_DG;
var O19_TOTAL_DG;

var I14_Lime_Saturation_DG;
var I17_Silica_Modulus_DG;
var I20_Alumina_Modulus_DG;

// Begin All Variables getbyElementID
//#region

function initializeVariable() {

    window.C8_MIX_RDFC_DG = document.getElementById("C8_MIX_RDFC");
    window.C9_SiO2_RDFC_DG = document.getElementById("C9_SiO2_RDFC");
    window.C10_Al2O3_RDFC_DG = document.getElementById("C10_Al2O3_RDFC");
    window.C11_Fe2O3_RDFC_DG = document.getElementById("C11_Fe2O3_RDFC");
    window.C12_CaO_RDFC_DG = document.getElementById("C12_CaO_RDFC");
    window.C13_MgO_RDFC_DG = document.getElementById("C13_MgO_RDFC");
    window.C14_Na2O_RDFC_DG = document.getElementById("C14_Na2O_RDFC");
    window.C15_K2O_RDFC_DG = document.getElementById("C15_K2O_RDFC");
    window.C16_SO3_RDFC_DG = document.getElementById("C16_SO3_RDFC");
    window.C17_LOI_RDFC_DG = document.getElementById("C17_LOI_RDFC");

    window.C18_TOTAL_RDFC_DG = document.querySelector("label[for='C18_TOTAL_RDFC']");
    window.C19_LSF_RDFC_DG = document.querySelector("label[for='C19_LSF_RDFC']");
    window.C20_SM_RDFC_DG = document.querySelector("label[for='C20_SM_RDFC']");
    window.C21_AM_RDFC_DG = document.querySelector("label[for='C21_AM_RDFC']");

    window.D8_MIX_RDFC_DG = document.getElementById("D8_MIX_RDFC");
    window.D9_SiO2_RDFC_DG = document.getElementById("D9_SiO2_RDFC");
    window.D10_Al2O3_RDFC_DG = document.getElementById("D10_Al2O3_RDFC");
    window.D11_Fe2O3_RDFC_DG = document.getElementById("D11_Fe2O3_RDFC");
    window.D12_CaO_RDFC_DG = document.getElementById("D12_CaO_RDFC");
    window.D13_MgO_RDFC_DG = document.getElementById("D13_MgO_RDFC");
    window.D14_Na2O_RDFC_DG = document.getElementById("D14_Na2O_RDFC");
    window.D15_K2O_RDFC_DG = document.getElementById("D15_K2O_RDFC");
    window.D16_SO3_RDFC_DG = document.getElementById("D16_SO3_RDFC");
    window.D17_LOI_RDFC_DG = document.getElementById("D17_LOI_RDFC");

    window.D18_TOTAL_RDFC_DG = document.querySelector("label[for='D18_TOTAL_RDFC']");
    window.D19_LSF_RDFC_DG = document.querySelector("label[for='D19_LSF_RDFC']");
    window.D20_SM_RDFC_DG = document.querySelector("label[for='D20_SM_RDFC']");
    window.D21_AM_RDFC_DG = document.querySelector("label[for='D21_AM_RDFC']");

    window.E8_MIX_RDFC_DG = document.getElementById("E8_MIX_RDFC");
    window.E9_SiO2_RDFC_DG = document.getElementById("E9_SiO2_RDFC");
    window.E10_Al2O3_RDFC_DG = document.getElementById("E10_Al2O3_RDFC");
    window.E11_Fe2O3_RDFC_DG = document.getElementById("E11_Fe2O3_RDFC");
    window.E12_CaO_RDFC_DG = document.getElementById("E12_CaO_RDFC");
    window.E13_MgO_RDFC_DG = document.getElementById("E13_MgO_RDFC");
    window.E14_Na2O_RDFC_DG = document.getElementById("E14_Na2O_RDFC");
    window.E15_K2O_RDFC_DG = document.getElementById("E15_K2O_RDFC");
    window.E16_SO3_RDFC_DG = document.getElementById("E16_SO3_RDFC");
    window.E17_LOI_RDFC_DG = document.getElementById("E17_LOI_RDFC");

    window.E18_TOTAL_RDFC_DG = document.querySelector("label[for='E18_TOTAL_RDFC']");
    window.E19_LSF_RDFC_DG = document.querySelector("label[for='E19_LSF_RDFC']");
    window.E20_SM_RDFC_DG = document.querySelector("label[for='E20_SM_RDFC']");
    window.E21_AM_RDFC_DG = document.querySelector("label[for='E21_AM_RDFC']");

    window.F8_MIX_RDFC_DG = document.getElementById("F8_MIX_RDFC");
    window.F9_SiO2_RDFC_DG = document.getElementById("F9_SiO2_RDFC");
    window.F10_Al2O3_RDFC_DG = document.getElementById("F10_Al2O3_RDFC");
    window.F11_Fe2O3_RDFC_DG = document.getElementById("F11_Fe2O3_RDFC");
    window.F12_CaO_RDFC_DG = document.getElementById("F12_CaO_RDFC");
    window.F13_MgO_RDFC_DG = document.getElementById("F13_MgO_RDFC");
    window.F14_Na2O_RDFC_DG = document.getElementById("F14_Na2O_RDFC");
    window.F15_K2O_RDFC_DG = document.getElementById("F15_K2O_RDFC");
    window.F16_SO3_RDFC_DG = document.getElementById("F16_SO3_RDFC");
    window.F17_LOI_RDFC_DG = document.getElementById("F17_LOI_RDFC");

    window.F18_TOTAL_RDFC_DG = document.querySelector("label[for='F18_TOTAL_RDFC']");
    window.F19_LSF_RDFC_DG = document.querySelector("label[for='F19_LSF_RDFC']");
    window.F20_SM_RDFC_DG = document.querySelector("label[for='F20_SM_RDFC']");
    window.F21_AM_RDFC_DG = document.querySelector("label[for='F21_AM_RDFC']");

    window.G8_MIX_RDFC_DG = document.querySelector("label[for='G8_MIX_RDFC']");
    window.G9_SiO2_RDFC_DG = document.querySelector("label[for='G9_SiO2_RDFC']");
    window.G10_Al2O3_RDFC_DG = document.querySelector("label[for='G10_Al2O3_RDFC']");
    window.G11_Fe2O3_RDFC_DG = document.querySelector("label[for='G11_Fe2O3_RDFC']");
    window.G12_CaO_RDFC_DG = document.querySelector("label[for='G12_CaO_RDFC']");
    window.G13_MgO_RDFC_DG = document.querySelector("label[for='G13_MgO_RDFC']");
    window.G14_Na2O_RDFC_DG = document.querySelector("label[for='G14_Na2O_RDFC']");
    window.G15_K2O_RDFC_DG = document.querySelector("label[for='G15_K2O_RDFC']");
    window.G16_SO3_RDFC_DG = document.querySelector("label[for='G16_SO3_RDFC']");
    window.G17_LOI_RDFC_DG = document.querySelector("label[for='G17_LOI_RDFC']");
    window.G18_TOTAL_RDFC_DG = document.querySelector("label[for='G18_TOTAL_RDFC']");
    window.G19_LSF_RDFC_DG = document.querySelector("label[for='G19_LSF_RDFC']");
    window.G20_SM_RDFC_DG = document.querySelector("label[for='G20_SM_RDFC']");
    window.G21_AM_RDFC_DG = document.querySelector("label[for='G21_AM_RDFC']");

    window. //MATRIX & COE

    window.L8_a_DG = document.querySelector("label[for='L8_a']");
    window.L9_b_DG = document.querySelector("label[for='L9_b']");
    window.L10_c_DG = document.querySelector("label[for='L10_c']");
    window.L11_d_DG = document.querySelector("label[for='L11_d']");
    window.L12_e_DG = document.querySelector("label[for='L12_e']");
    window.L13_f_DG = document.querySelector("label[for='L13_f']");
    window.L14_g_DG = document.querySelector("label[for='L14_g']");
    window.L15_h_DG = document.querySelector("label[for='L15_h']");
    window.L16_i_DG = document.querySelector("label[for='L16_i']");
    window.L17_k_DG = document.querySelector("label[for='L17_k']");
    window.L18_l_DG = document.querySelector("label[for='L18_l']");
    window.L19_m_DG = document.querySelector("label[for='L19_m']");
    window.L20_n_DG = document.querySelector("label[for='L20_n']");
    window.L21_p_DG = document.querySelector("label[for='L21_p']");
    window.L22_q_DG = document.querySelector("label[for='L22_q']");
    window.L23_r_DG = document.querySelector("label[for='L23_r']");
    window.L24_s_DG = document.querySelector("label[for='L24_s']");
    window.O8_Dw_Matrix_DG = document.querySelector("label[for='O8_Dw_Matrix']");
    window.O9_Dx_Matrix_DG = document.querySelector("label[for='O9_Dx_Matrix']");
    window.O10_Dy_Matrix_DG = document.querySelector("label[for='O10_Dy_Matrix']");
    window.O11_Dz_Matrix_DG = document.querySelector("label[for='O11_Dz_Matrix']");
    window.O12_D_Matrix_DG = document.querySelector("label[for='O12_D_Matrix']");
    window.O15_W_DG = document.querySelector("label[for='O15_W']");
    window.O16_X_DG = document.querySelector("label[for='O16_X']");
    window.O17_Y_DG = document.querySelector("label[for='O17_Y']");
    window.O18_Z_DG = document.querySelector("label[for='O18_Z']");
    window.O19_TOTAL_DG = document.querySelector("label[for='O19_TOTAL']");

    window.I14_Lime_Saturation_DG = document.getElementById("I14_Lime_Saturation");
    window.I17_Silica_Modulus_DG = document.getElementById("I17_Silica_Modulus");
    window.I20_Alumina_Modulus_DG = document.getElementById("I20_Alumina_Modulus");
}

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
window.addEventListener('beforeunload', function(event) {
    storetoLocal();
});

document.addEventListener('pause', function() {
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


    if (recipenum == 0) {
        localStorage.setItem("mixpagetype", 0);
        mixnewptype = 0;
        mixtable_id = "mix_table"
    } else {
        localStorage.setItem("mixpagetype", 1);
        mixnewptype = 1;
        mixtable_id = "mix_table_2"
    }

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

    // db.transaction((tx) => {
    //     tx.executeSql(
    //         "CREATE TABLE IF NOT EXISTS rmdTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NULL,C8_MIX_RDFC NUMERIC, C9_SiO2_RDFC NUMERIC,C10_Al2O3_RDFC      NUMERIC,C11_Fe2O3_RDFC NUMERIC,C12_CaO_RDFC NUMERIC,C13_MgO_RDFC NUMERIC,C14_Na2O_RDFC NUMERIC,C15_K2O_RDFC NUMERIC,C16_SO3_RDFC NUMERIC,C17_LOI_RDFC NUMERIC,D8_MIX_RDFC NUMERIC,D9_SiO2_RDFC NUMERIC,D10_Al2O3_RDFC NUMERIC,D11_Fe2O3_RDFC NUMERIC,D12_CaO_RDFC NUMERIC,D13_MgO_RDFC NUMERIC,D14_Na2O_RDFC NUMERIC,D15_K2O_RDFC NUMERIC,D16_SO3_RDFC NUMERIC,D17_LOI_RDFC NUMERIC,E8_MIX_RDFC NUMERIC,E9_SiO2_RDFC NUMERIC,E10_Al2O3_RDFC NUMERIC,E11_Fe2O3_RDFC NUMERIC,E12_CaO_RDFC NUMERIC,E13_MgO_RDFC NUMERIC,E14_Na2O_RDFC       NUMERIC,E15_K2O_RDFC NUMERIC,E16_SO3_RDFC NUMERIC,E17_LOI_RDFC NUMERIC,F8_MIX_RDFC NUMERIC,F9_SiO2_RDFC NUMERIC,F10_Al2O3_RDFC NUMERIC,F11_Fe2O3_RDFC NUMERIC,F12_CaO_RDFC NUMERIC,F13_MgO_RDFC NUMERIC,F14_Na2O_RDFC NUMERIC,F15_K2O_RDFC NUMERIC,F16_SO3_RDFC NUMERIC,F17_LOI_RDFC NUMERIC,I14_Lime_Saturation NUMERIC,I17_Silica_Modulus  NUMERIC,I20_Alumina_Modulus NUMERIC, DT DATETIME)",
    //         [],
    //         () => console.log("Table rmd created successfully"),
    //         (error) => console.error("Error rmd creating table", error)
    //     );
    // });




    // const mixpageType = localStorage.getItem('mixpagetype');

    // if (mixpageType == 1) {
    //     mixnewptype = 1;
    //     mixtable_id = "mix_table_2";
    // } else {
    //     mixnewptype = 0;
    //     mixtable_id = "mix_table";
    // }

    // executeSql(db,
    //         "SELECT * FROM rmdTable WHERE email = ? and pageType = ? ORDER BY id DESC",
    //         [localStorage.getItem("email"), mixnewptype])
    //     .then(result => {
    //         const table = document.getElementById(mixtable_id);
    //         const rows = result.rows;

    //         for (let i = 0; i < rows.length; i++) {
    //             const row = rows.item(i);
    //             const id = row.id;
    //             const name = row.name;

    //             let newname = name.replace("Rawmill", "Recipe");

    //             // Create a new row in the table
    //             const newRow = table.insertRow();
    //             const idCell = newRow.insertCell();
    //             const nameCell = newRow.insertCell();
    //             const actionCell = newRow.insertCell();

    //             // Populate the cells with data
    //             idCell.textContent = id;
    //             nameCell.textContent = newname;

    //             // Create buttons for select, update, and delete
    //             const selectButton = createActionButton("Select", function() {
    //                 if (confirm("Are you sure you want to 'select' RECIPE ID:" + id + "'s record?")) {
    //                     alert("Selected ID: " + id + ", Name: " + newname)
    //                     // showNotification("Selected ID: " + id + ", Name: " + name);
    //                     localStorage.setItem("getid", id);
    //                     loadselectData2(id);
    //                 }
    //             }, "blue");

    //             const updateButton = createActionButton("Update", function() {
    //                 if (confirm("Are you sure you want to update RECIPE ID:" + id + "'s record?")) {
    //                     updateData2(id);
    //                 }

    //             }, "orange");

    //             const deleteButton = createActionButton("Delete", function() {
    //                 if (confirm("Are you sure you want to delete RECIPE ID:" + id + "'s record?")) {

    //                     deleteData2(id);
    //                     loadlist();
    //                 }
    //             }, "red");

    //             // Append the buttons to the action cell
    //             actionCell.appendChild(selectButton);
    //             actionCell.appendChild(updateButton);
    //             actionCell.appendChild(deleteButton);
    //         }
    //     }).catch(error => {
    //         console.error("Error fetching data:", error);
    //     });

}

document.addEventListener("DOMContentLoaded", function() {

    initializeVariable();
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
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        G8_MIX_RDFC = C8_MIX_RDFC + D8_MIX_RDFC + E8_MIX_RDFC + F8_MIX_RDFC;

        return G8_MIX_RDFC.toFixed(2);
    };

    const compute_G9_SiO2_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G9_SiO2_RDFC =
            (C8_MIX_RDFC * C9_SiO2_RDFC +
                D8_MIX_RDFC * D9_SiO2_RDFC +
                E8_MIX_RDFC * E9_SiO2_RDFC +
                F8_MIX_RDFC * F9_SiO2_RDFC) /
            G8_MIX_RDFC;

        return G9_SiO2_RDFC.toFixed(2);
    };

    const compute_G10_Al203_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G10_Al2O3_RDFC =
            (C8_MIX_RDFC * C10_Al2O3_RDFC +
                D8_MIX_RDFC * D10_Al2O3_RDFC +
                E8_MIX_RDFC * E10_Al2O3_RDFC +
                F8_MIX_RDFC * F10_Al2O3_RDFC) /
            G8_MIX_RDFC;
        return G10_Al2O3_RDFC.toFixed(2);
    };

    const compute_G11_Fe2O3_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);
        G11_Fe2O3_RDFC =
            (C8_MIX_RDFC * C11_Fe2O3_RDFC +
                D8_MIX_RDFC * D11_Fe2O3_RDFC +
                E8_MIX_RDFC * E11_Fe2O3_RDFC +
                F8_MIX_RDFC * F11_Fe2O3_RDFC) /
            G8_MIX_RDFC;

        return G11_Fe2O3_RDFC.toFixed(2);
    };

    const compute_G12_CaO_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C12_CaO_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D12_CaO_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E12_CaO_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F12_CaO_RDFC_DG.value);
        G12_CaO_RDFC =
            (C8_MIX_RDFC * C12_CaO_RDFC +
                D8_MIX_RDFC * D12_CaO_RDFC +
                E8_MIX_RDFC * E12_CaO_RDFC +
                F8_MIX_RDFC * F12_CaO_RDFC) /
            G8_MIX_RDFC;

        return G12_CaO_RDFC.toFixed(2);
    };
    const compute_G13_MgO_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C13_MgO_RDFC = isNaN(parseFloat(C13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C13_MgO_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D13_MgO_RDFC = isNaN(parseFloat(D13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D13_MgO_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E13_MgO_RDFC = isNaN(parseFloat(E13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E13_MgO_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F13_MgO_RDFC = isNaN(parseFloat(F13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F13_MgO_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G13_MgO_RDFC =
            (C8_MIX_RDFC * C13_MgO_RDFC +
                D8_MIX_RDFC * D13_MgO_RDFC +
                E8_MIX_RDFC * E13_MgO_RDFC +
                F8_MIX_RDFC * F13_MgO_RDFC) /
            G8_MIX_RDFC;

        return G13_MgO_RDFC.toFixed(2);
    };

    const compute_G14_Na2O_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C14_Na2O_RDFC = isNaN(parseFloat(C14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C14_Na2O_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D14_Na2O_RDFC = isNaN(parseFloat(D14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D14_Na2O_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E14_Na2O_RDFC = isNaN(parseFloat(E14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E14_Na2O_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F14_Na2O_RDFC = isNaN(parseFloat(F14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F14_Na2O_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G14_Na2O_RDFC =
            (C8_MIX_RDFC * C14_Na2O_RDFC +
                D8_MIX_RDFC * D14_Na2O_RDFC +
                E8_MIX_RDFC * E14_Na2O_RDFC +
                F8_MIX_RDFC * F14_Na2O_RDFC) /
            G8_MIX_RDFC;

        return G14_Na2O_RDFC.toFixed(2);
    };

    const compute_G15_K2O_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C15_K2O_RDFC = isNaN(parseFloat(C15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C15_K2O_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D15_K2O_RDFC = isNaN(parseFloat(D15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D15_K2O_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E15_K2O_RDFC = isNaN(parseFloat(E15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E15_K2O_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F15_K2O_RDFC = isNaN(parseFloat(F15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F15_K2O_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G15_K2O_RDFC =
            (C8_MIX_RDFC * C15_K2O_RDFC +
                D8_MIX_RDFC * D15_K2O_RDFC +
                E8_MIX_RDFC * E15_K2O_RDFC +
                F8_MIX_RDFC * F15_K2O_RDFC) /
            G8_MIX_RDFC;

        return G15_K2O_RDFC.toFixed(2);
    };

    const compute_G16_SO3_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C16_SO3_RDFC = isNaN(parseFloat(C16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C16_SO3_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D16_SO3_RDFC = isNaN(parseFloat(D16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D16_SO3_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E16_SO3_RDFC = isNaN(parseFloat(E16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E16_SO3_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F16_SO3_RDFC = isNaN(parseFloat(F16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F16_SO3_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);
        G16_SO3_RDFC =
            (C8_MIX_RDFC * C16_SO3_RDFC +
                D8_MIX_RDFC * D16_SO3_RDFC +
                E8_MIX_RDFC * E16_SO3_RDFC +
                F8_MIX_RDFC * F16_SO3_RDFC) /
            G8_MIX_RDFC;

        return G16_SO3_RDFC.toFixed(2);
    };
    const compute_G17_LOI_RDFC = () => {
        C8_MIX_RDFC = isNaN(parseFloat(C8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C8_MIX_RDFC_DG.value);
        C17_LOI_RDFC = isNaN(parseFloat(C17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C17_LOI_RDFC_DG.value);
        D8_MIX_RDFC = isNaN(parseFloat(D8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D8_MIX_RDFC_DG.value);
        D17_LOI_RDFC = isNaN(parseFloat(D17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D17_LOI_RDFC_DG.value);
        E8_MIX_RDFC = isNaN(parseFloat(E8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E8_MIX_RDFC_DG.value);
        E17_LOI_RDFC = isNaN(parseFloat(E17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E17_LOI_RDFC_DG.value);
        F8_MIX_RDFC = isNaN(parseFloat(F8_MIX_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F8_MIX_RDFC_DG.value);
        F17_LOI_RDFC = isNaN(parseFloat(F17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F17_LOI_RDFC_DG.value);
        G8_MIX_RDFC = isNaN(parseFloat(G8_MIX_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G8_MIX_RDFC_DG.textContent);

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
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G12_CaO_RDFC = isNaN(parseFloat(G12_CaO_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G12_CaO_RDFC_DG.textContent);
        G13_MgO_RDFC = isNaN(parseFloat(G13_MgO_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G13_MgO_RDFC_DG.textContent);
        G14_Na2O_RDFC = isNaN(parseFloat(G14_Na2O_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G14_Na2O_RDFC_DG.textContent);
        G15_K2O_RDFC = isNaN(parseFloat(G15_K2O_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G15_K2O_RDFC_DG.textContent);
        G16_SO3_RDFC = isNaN(parseFloat(G16_SO3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G16_SO3_RDFC_DG.textContent);
        G17_LOI_RDFC = isNaN(parseFloat(G17_LOI_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G17_LOI_RDFC_DG.textContent);
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
        G12_CaO_RDFC = isNaN(parseFloat(G12_CaO_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G12_CaO_RDFC_DG.textContent);
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G19_LSF_RDFC =
            100 * G12_CaO_RDFC /
            (2.8 * G9_SiO2_RDFC +
                1.18 * G10_Al2O3_RDFC +
                0.65 * G11_Fe2O3_RDFC);

        return G19_LSF_RDFC.toFixed(2);
    };

    const compute_G20_SM_RDFC = () => {
        G9_SiO2_RDFC = isNaN(parseFloat(G9_SiO2_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G9_SiO2_RDFC_DG.textContent);
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G20_SM_RDFC = G9_SiO2_RDFC / (G10_Al2O3_RDFC + G11_Fe2O3_RDFC);

        return G20_SM_RDFC.toFixed(2);
    };

    const compute_G21_AM_RDFC = () => {
        G10_Al2O3_RDFC = isNaN(parseFloat(G10_Al2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G10_Al2O3_RDFC_DG.textContent);
        G11_Fe2O3_RDFC = isNaN(parseFloat(G11_Fe2O3_RDFC_DG.textContent)) ?
            0.0 :
            parseFloat(G11_Fe2O3_RDFC_DG.textContent);
        G21_AM_RDFC = G10_Al2O3_RDFC / G11_Fe2O3_RDFC;

        return G21_AM_RDFC.toFixed(2);
    };

    //   0000000000000000000000000000000000000000000000000000

    const compute_C18_TOTAL_RDFC = () => {
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C12_CaO_RDFC_DG.value);
        C13_MgO_RDFC = isNaN(parseFloat(C13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C13_MgO_RDFC_DG.value);
        C14_Na2O_RDFC = isNaN(parseFloat(C14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C14_Na2O_RDFC_DG.value);
        C15_K2O_RDFC = isNaN(parseFloat(C15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C15_K2O_RDFC_DG.value);
        C16_SO3_RDFC = isNaN(parseFloat(C16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C16_SO3_RDFC_DG.value);
        C17_LOI_RDFC = isNaN(parseFloat(C17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C17_LOI_RDFC_DG.value);

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
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D12_CaO_RDFC_DG.value);
        D13_MgO_RDFC = isNaN(parseFloat(D13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D13_MgO_RDFC_DG.value);
        D14_Na2O_RDFC = isNaN(parseFloat(D14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D14_Na2O_RDFC_DG.value);
        D15_K2O_RDFC = isNaN(parseFloat(D15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D15_K2O_RDFC_DG.value);
        D16_SO3_RDFC = isNaN(parseFloat(D16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D16_SO3_RDFC_DG.value);
        D17_LOI_RDFC = isNaN(parseFloat(D17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D17_LOI_RDFC_DG.value);

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
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E12_CaO_RDFC_DG.value);
        E13_MgO_RDFC = isNaN(parseFloat(E13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E13_MgO_RDFC_DG.value);
        E14_Na2O_RDFC = isNaN(parseFloat(E14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E14_Na2O_RDFC_DG.value);
        E15_K2O_RDFC = isNaN(parseFloat(E15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E15_K2O_RDFC_DG.value);
        E16_SO3_RDFC = isNaN(parseFloat(E16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E16_SO3_RDFC_DG.value);
        E17_LOI_RDFC = isNaN(parseFloat(E17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E17_LOI_RDFC_DG.value);

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
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F12_CaO_RDFC_DG.value);
        F13_MgO_RDFC = isNaN(parseFloat(F13_MgO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F13_MgO_RDFC_DG.value);
        F14_Na2O_RDFC = isNaN(parseFloat(F14_Na2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F14_Na2O_RDFC_DG.value);
        F15_K2O_RDFC = isNaN(parseFloat(F15_K2O_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F15_K2O_RDFC_DG.value);
        F16_SO3_RDFC = isNaN(parseFloat(F16_SO3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F16_SO3_RDFC_DG.value);
        F17_LOI_RDFC = isNaN(parseFloat(F17_LOI_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F17_LOI_RDFC_DG.value);

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
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C12_CaO_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);

        C19_LSF_RDFC =
            (100 * C12_CaO_RDFC) /
            (2.8 * C9_SiO2_RDFC +
                1.18 * C10_Al2O3_RDFC +
                0.65 * C11_Fe2O3_RDFC_DG.value);

        return C19_LSF_RDFC.toFixed(2);
    };

    const compute_D19_LSF_RDFC = () => {
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D12_CaO_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);

        D19_LSF_RDFC =
            (100 * D12_CaO_RDFC) /
            (2.8 * D9_SiO2_RDFC +
                1.18 * D10_Al2O3_RDFC +
                0.65 * D11_Fe2O3_RDFC_DG.value);

        return D19_LSF_RDFC.toFixed(2);
    };

    const compute_E19_LSF_RDFC = () => {
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E12_CaO_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);

        E19_LSF_RDFC =
            (100 * E12_CaO_RDFC) /
            (2.8 * E9_SiO2_RDFC +
                1.18 * E10_Al2O3_RDFC +
                0.65 * E11_Fe2O3_RDFC_DG.value);

        return E19_LSF_RDFC.toFixed(2);
    };

    const compute_F19_LSF_RDFC = () => {
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F12_CaO_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);

        F19_LSF_RDFC =
            (100 * F12_CaO_RDFC) /
            (2.8 * F9_SiO2_RDFC +
                1.18 * F10_Al2O3_RDFC +
                0.65 * F11_Fe2O3_RDFC_DG.value);

        return F19_LSF_RDFC.toFixed(2);
    };
    const compute_C20_SM_RDFC = () => {
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);

        C20_SM_RDFC = C9_SiO2_RDFC / (C10_Al2O3_RDFC + C11_Fe2O3_RDFC);

        return C20_SM_RDFC.toFixed(2);
    };

    const compute_D20_SM_RDFC = () => {
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);

        D20_SM_RDFC = D9_SiO2_RDFC / (D10_Al2O3_RDFC + D11_Fe2O3_RDFC);

        return D20_SM_RDFC.toFixed(2);
    };

    const compute_E20_SM_RDFC = () => {
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);

        E20_SM_RDFC = E9_SiO2_RDFC / (E10_Al2O3_RDFC + E11_Fe2O3_RDFC);

        return E20_SM_RDFC.toFixed(2);
    };

    const compute_F20_SM_RDFC = () => {
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);

        F20_SM_RDFC = F9_SiO2_RDFC / (F10_Al2O3_RDFC + F11_Fe2O3_RDFC);

        return F20_SM_RDFC.toFixed(2);
    };

    //AM
    const compute_C21_AM_RDFC = () => {
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);

        C21_AM_RDFC = C10_Al2O3_RDFC / C11_Fe2O3_RDFC;

        return C21_AM_RDFC.toFixed(2);
    };

    const compute_D21_AM_RDFC = () => {
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);

        D21_AM_RDFC = D10_Al2O3_RDFC / D11_Fe2O3_RDFC;

        return D21_AM_RDFC.toFixed(2);
    };

    const compute_E21_AM_RDFC = () => {
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);

        E21_AM_RDFC = E10_Al2O3_RDFC / E11_Fe2O3_RDFC;

        return E21_AM_RDFC.toFixed(2);
    };

    const compute_F21_AM_RDFC = () => {
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);

        F21_AM_RDFC = F10_Al2O3_RDFC / F11_Fe2O3_RDFC;

        return F21_AM_RDFC.toFixed(2);
    };

    //End NAME: MIX
    //#endregion
    // END FUNCTION////////////////////////////////////////
    // Matrix and Coe FUNCTIONS
    //#region
    const compute_L13_f = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I20_Alumina_Modulus_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);

        console;
        L13_f = I20_Alumina_Modulus * C11_Fe2O3_RDFC - C10_Al2O3_RDFC;

        return L13_f.toFixed(4);
    };

    const compute_L14_g = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I20_Alumina_Modulus_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);

        L14_g = I20_Alumina_Modulus * D11_Fe2O3_RDFC - D10_Al2O3_RDFC;

        return L14_g.toFixed(4);
    };

    const compute_L15_h = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I20_Alumina_Modulus_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        L15_h = I20_Alumina_Modulus * E11_Fe2O3_RDFC - E10_Al2O3_RDFC;

        return L15_h.toFixed(4);
    };

    const compute_L16_i = () => {
        I20_Alumina_Modulus = isNaN(parseFloat(I20_Alumina_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I20_Alumina_Modulus_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        L16_i = I20_Alumina_Modulus * F11_Fe2O3_RDFC - F10_Al2O3_RDFC;

        return L16_i.toFixed(4);
    };

    const compute_L17_k = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        L17_k =
            I17_Silica_Modulus * C10_Al2O3_RDFC +
            I17_Silica_Modulus * C11_Fe2O3_RDFC -
            C9_SiO2_RDFC;

        return L17_k.toFixed(4);
    };

    const compute_L18_l = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        L18_l =
            I17_Silica_Modulus * D10_Al2O3_RDFC +
            I17_Silica_Modulus * D11_Fe2O3_RDFC -
            D9_SiO2_RDFC;

        return L18_l.toFixed(4);
    };

    const compute_L19_m = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        L19_m =
            I17_Silica_Modulus * E10_Al2O3_RDFC +
            I17_Silica_Modulus * E11_Fe2O3_RDFC -
            E9_SiO2_RDFC;

        return L19_m.toFixed(4);
    };
    const compute_L20_n = () => {
        I17_Silica_Modulus = isNaN(parseFloat(I17_Silica_Modulus_DG.value)) ?
            0.0 :
            parseFloat(I17_Silica_Modulus_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        L20_n =
            I17_Silica_Modulus * F10_Al2O3_RDFC +
            I17_Silica_Modulus * F11_Fe2O3_RDFC -
            F9_SiO2_RDFC;

        return L20_n.toFixed(4);
    };

    const compute_L21_p = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value)) ?
            0.0 :
            parseFloat(I14_Lime_Saturation_DG.value);
        C9_SiO2_RDFC = isNaN(parseFloat(C9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C9_SiO2_RDFC_DG.value);
        C10_Al2O3_RDFC = isNaN(parseFloat(C10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C10_Al2O3_RDFC_DG.value);
        C11_Fe2O3_RDFC = isNaN(parseFloat(C11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C11_Fe2O3_RDFC_DG.value);
        C12_CaO_RDFC = isNaN(parseFloat(C12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(C12_CaO_RDFC_DG.value);
        L21_p =
            I14_Lime_Saturation * 2.8 * C9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * C10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * C11_Fe2O3_RDFC -
            100 * C12_CaO_RDFC;

        return L21_p.toFixed(4);
    };

    const compute_L22_q = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value)) ?
            0.0 :
            parseFloat(I14_Lime_Saturation_DG.value);
        D9_SiO2_RDFC = isNaN(parseFloat(D9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D9_SiO2_RDFC_DG.value);
        D10_Al2O3_RDFC = isNaN(parseFloat(D10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D10_Al2O3_RDFC_DG.value);
        D11_Fe2O3_RDFC = isNaN(parseFloat(D11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D11_Fe2O3_RDFC_DG.value);
        D12_CaO_RDFC = isNaN(parseFloat(D12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(D12_CaO_RDFC_DG.value);
        L22_q =
            I14_Lime_Saturation * 2.8 * D9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * D10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * D11_Fe2O3_RDFC -
            100 * D12_CaO_RDFC;

        return L22_q.toFixed(4);
    };

    const compute_L23_r = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value)) ?
            0.0 :
            parseFloat(I14_Lime_Saturation_DG.value);
        E9_SiO2_RDFC = isNaN(parseFloat(E9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E9_SiO2_RDFC_DG.value);
        E10_Al2O3_RDFC = isNaN(parseFloat(E10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E10_Al2O3_RDFC_DG.value);
        E11_Fe2O3_RDFC = isNaN(parseFloat(E11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E11_Fe2O3_RDFC_DG.value);
        E12_CaO_RDFC = isNaN(parseFloat(E12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(E12_CaO_RDFC_DG.value);
        L23_r =
            I14_Lime_Saturation * 2.8 * E9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * E10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * E11_Fe2O3_RDFC -
            100 * E12_CaO_RDFC;

        return L23_r.toFixed(4);
    };

    const compute_L24_s = () => {
        I14_Lime_Saturation = isNaN(parseFloat(I14_Lime_Saturation_DG.value)) ?
            0.0 :
            parseFloat(I14_Lime_Saturation_DG.value);
        F9_SiO2_RDFC = isNaN(parseFloat(F9_SiO2_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F9_SiO2_RDFC_DG.value);
        F10_Al2O3_RDFC = isNaN(parseFloat(F10_Al2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F10_Al2O3_RDFC_DG.value);
        F11_Fe2O3_RDFC = isNaN(parseFloat(F11_Fe2O3_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F11_Fe2O3_RDFC_DG.value);
        F12_CaO_RDFC = isNaN(parseFloat(F12_CaO_RDFC_DG.value)) ?
            0.0 :
            parseFloat(F12_CaO_RDFC_DG.value);
        L24_s =
            I14_Lime_Saturation * 2.8 * F9_SiO2_RDFC +
            I14_Lime_Saturation * 1.18 * F10_Al2O3_RDFC +
            I14_Lime_Saturation * 0.65 * F11_Fe2O3_RDFC -
            100 * F12_CaO_RDFC;

        return L24_s.toFixed(4);
    };
    const compute_O8_Dw_Matrix = () => {
        L12_e = isNaN(parseFloat(L12_e_DG.textContent)) ?
            0.0 :
            parseFloat(L12_e_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent)) ?
            0.0 :
            parseFloat(L14_g_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent)) ?
            0.0 :
            parseFloat(L15_h_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent)) ?
            0.0 :
            parseFloat(L16_i_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent)) ?
            0.0 :
            parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent)) ?
            0.0 :
            parseFloat(L20_n_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent)) ?
            0.0 :
            parseFloat(L18_l_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent)) ?
            0.0 :
            parseFloat(L24_s_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent)) ?
            0.0 :
            parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent)) ?
            0.0 :
            parseFloat(L23_r_DG.textContent);

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
        L13_f = isNaN(parseFloat(L13_f_DG.textContent)) ?
            0.0 :
            parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent)) ?
            0.0 :
            parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent)) ?
            0.0 :
            parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent)) ?
            0.0 :
            parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent)) ?
            0.0 :
            parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent)) ?
            0.0 :
            parseFloat(L20_n_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent)) ?
            0.0 :
            parseFloat(L15_h_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent)) ?
            0.0 :
            parseFloat(L16_i_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent)) ?
            0.0 :
            parseFloat(L23_r_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent)) ?
            0.0 :
            parseFloat(L24_s_DG.textContent);

        O9_Dx_Matrix = -L13_f * L12_e * L19_m * L24_s +
            L13_f * L12_e * L20_n * L23_r +
            L17_k * L12_e * L15_h * L24_s -
            L17_k * L12_e * L16_i * L23_r -
            L21_p * L12_e * L15_h * L20_n +
            L21_p * L12_e * L16_i * L19_m;

        return O9_Dx_Matrix.toFixed(0);
    };

    const compute_O10_Dy_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent)) ?
            0.0 :
            parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent)) ?
            0.0 :
            parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent)) ?
            0.0 :
            parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent)) ?
            0.0 :
            parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent)) ?
            0.0 :
            parseFloat(L19_m_DG.textContent);
        L20_n = isNaN(parseFloat(L20_n_DG.textContent)) ?
            0.0 :
            parseFloat(L20_n_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent)) ?
            0.0 :
            parseFloat(L18_l_DG.textContent);
        L16_i = isNaN(parseFloat(L16_i_DG.textContent)) ?
            0.0 :
            parseFloat(L16_i_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent)) ?
            0.0 :
            parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent)) ?
            0.0 :
            parseFloat(L22_q_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent)) ?
            0.0 :
            parseFloat(L24_s_DG.textContent);

        O10_Dy_Matrix = -L13_f * L12_e * L20_n * L22_q +
            L13_f * L12_e * L18_l * L24_s +
            L17_k * L12_e * L16_i * L22_q -
            L17_k * L12_e * L14_g * L24_s -
            L21_p * L12_e * L16_i * L18_l +
            L21_p * L12_e * L14_g * L20_n;

        return O10_Dy_Matrix.toFixed(1);
    };

    const compute_O11_Dz_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent)) ?
            0.0 :
            parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent)) ?
            0.0 :
            parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent)) ?
            0.0 :
            parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent)) ?
            0.0 :
            parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent)) ?
            0.0 :
            parseFloat(L19_m_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent)) ?
            0.0 :
            parseFloat(L18_l_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent)) ?
            0.0 :
            parseFloat(L15_h_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent)) ?
            0.0 :
            parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent)) ?
            0.0 :
            parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent)) ?
            0.0 :
            parseFloat(L23_r_DG.textContent);

        O11_Dz_Matrix = -L13_f * L12_e * L18_l * L23_r +
            L13_f * L12_e * L19_m * L22_q +
            L17_k * L12_e * L14_g * L23_r -
            L17_k * L12_e * L15_h * L22_q -
            L21_p * L12_e * L14_g * L19_m +
            L21_p * L12_e * L15_h * L18_l;

        return O11_Dz_Matrix.toFixed(1);
    };

    const compute_O12_D_Matrix = () => {
        L13_f = isNaN(parseFloat(L13_f_DG.textContent)) ?
            0.0 :
            parseFloat(L13_f_DG.textContent);
        L12_e = isNaN(parseFloat(L12_e_DG.textContent)) ?
            0.0 :
            parseFloat(L12_e_DG.textContent);
        L17_k = isNaN(parseFloat(L17_k_DG.textContent)) ?
            0.0 :
            parseFloat(L17_k_DG.textContent);
        L21_p = isNaN(parseFloat(L21_p_DG.textContent)) ?
            0.0 :
            parseFloat(L21_p_DG.textContent);
        L19_m = isNaN(parseFloat(L19_m_DG.textContent)) ?
            0.0 :
            parseFloat(L19_m_DG.textContent);
        L18_l = isNaN(parseFloat(L18_l_DG.textContent)) ?
            0.0 :
            parseFloat(L18_l_DG.textContent);
        L15_h = isNaN(parseFloat(L15_h_DG.textContent)) ?
            0.0 :
            parseFloat(L15_h_DG.textContent);
        L14_g = isNaN(parseFloat(L14_g_DG.textContent)) ?
            0.0 :
            parseFloat(L14_g_DG.textContent);
        L22_q = isNaN(parseFloat(L22_q_DG.textContent)) ?
            0.0 :
            parseFloat(L22_q_DG.textContent);
        L23_r = isNaN(parseFloat(L23_r_DG.textContent)) ?
            0.0 :
            parseFloat(L23_r_DG.textContent);
        L24_s = isNaN(parseFloat(L24_s_DG.textContent)) ?
            0.0 :
            parseFloat(L24_s_DG.textContent);

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
        O8_Dw_Matrix = isNaN(parseFloat(O8_Dw_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O8_Dw_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O12_D_Matrix_DG.textContent);

        O15_W = O8_Dw_Matrix / O12_D_Matrix;
        return O15_W.toFixed(1);
    };

    const compute_O16_X = () => {
        O9_Dx_Matrix = isNaN(parseFloat(O9_Dx_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O9_Dx_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O12_D_Matrix_DG.textContent);
        O16_X = O9_Dx_Matrix / O12_D_Matrix;
        return O16_X.toFixed(1);
    };

    const compute_O17_Y = () => {
        O10_Dy_Matrix = isNaN(parseFloat(O10_Dy_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O10_Dy_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O12_D_Matrix_DG.textContent);
        O17_Y = O10_Dy_Matrix / O12_D_Matrix;
        return O17_Y.toFixed(1);
    };

    const compute_O18_Z = () => {
        O11_Dz_Matrix = isNaN(parseFloat(O11_Dz_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O11_Dz_Matrix_DG.textContent);
        O12_D_Matrix = isNaN(parseFloat(O12_D_Matrix_DG.textContent)) ?
            0.0 :
            parseFloat(O12_D_Matrix_DG.textContent);
        O18_Z = O11_Dz_Matrix / O12_D_Matrix;
        return O18_Z.toFixed(1);
    };

    const compute_O19_TOTAL = () => {
        O15_W = isNaN(parseFloat(O15_W_DG.textContent)) ?
            0.0 :
            parseFloat(O15_W_DG.textContent);
        O16_X = isNaN(parseFloat(O16_X_DG.textContent)) ?
            0.0 :
            parseFloat(O16_X_DG.textContent);
        O17_Y = isNaN(parseFloat(O17_Y_DG.textContent)) ?
            0.0 :
            parseFloat(O17_Y_DG.textContent);
        O18_Z = isNaN(parseFloat(O18_Z_DG.textContent)) ?
            0.0 :
            parseFloat(O18_Z_DG.textContent);
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


        replaceNaNInLabels();
    }
    window.rdfc_computeall = rdfc_computeall;

    C8_MIX_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C9_SiO2_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C10_Al2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C11_Fe2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C12_CaO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C13_MgO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C14_Na2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C15_K2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C16_SO3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    C17_LOI_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D8_MIX_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D9_SiO2_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D10_Al2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D11_Fe2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D12_CaO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D13_MgO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D14_Na2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D15_K2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D16_SO3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    D17_LOI_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E8_MIX_RDFC_DG.addEventListener("load", function() {
        rdfc_computeall();
    });
    E9_SiO2_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E10_Al2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E11_Fe2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E12_CaO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E13_MgO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E14_Na2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E15_K2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E16_SO3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    E17_LOI_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F8_MIX_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F9_SiO2_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F10_Al2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F11_Fe2O3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F12_CaO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F13_MgO_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F14_Na2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F15_K2O_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F16_SO3_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    F17_LOI_RDFC_DG.addEventListener("change", function() {
        rdfc_computeall();
    });

    I17_Silica_Modulus_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    I20_Alumina_Modulus_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    I14_Lime_Saturation_DG.addEventListener("change", function() {
        rdfc_computeall();
    });
    //#endregion
    //////////////////////////END MIX

    //***************************COEFFICIENTS FUNCTIONS****************//


    setTimeout(autoTriggerFunction, (8 * 60 * 1000)); // Auto-trigger after 5 seconds
});

function autoTriggerFunction() {
    //empty the body
    // document.body.innerHTML = '';
}
// END OF DOM

// Detect when the app comes back into the foreground
document.addEventListener('resume', function() {
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

    // const mixpageType = localStorage.getItem('mixpagetype');

    // if (mixpageType == 1) {
    //     mixnewptype = 1;
    //     mixtable_id = "mix_table_2";
    // } else {
    //     mixnewptype = 0;
    //     mixtable_id = "mix_table";
    // }

    // executeSql(db,
    //     "SELECT * FROM rmdTable where email = ? and pageType = ? ORDER BY id DESC",
    //     [localStorage.getItem("email"), mixnewptype]).then(result => {
    //     const table = document.getElementById(mixtable_id);
    //     const rows = result.rows;

    //     // Remove existing rows except for the header row
    //     for (let i = table.rows.length - 1; i > 0; i--) {
    //         table.deleteRow(i);
    //     }

    //     for (let i = 0; i < rows.length; i++) {
    //         const row = rows.item(i);
    //         const id = row.id;
    //         const name = row.name;

    //         let newname = name.replace("RAWMILL", "RECIPE");

    //         // Create a new row in the table
    //         const newRow = table.insertRow();
    //         const idCell = newRow.insertCell();
    //         const nameCell = newRow.insertCell();
    //         const actionCell = newRow.insertCell();

    //         // Populate the cells with data
    //         idCell.textContent = id;
    //         nameCell.textContent = newname;

    //         // Create buttons for select, update, and delete
    //         const selectButton = createActionButton("Select", function() {
    //             if (confirm("Are you sure you want to 'select' RECIPE ID:" + id + "'s record?")) {
    //                 alert("Selected ID: " + id + ", Name: " + newname)
    //                 loadselectData2(id);
    //             }
    //         }, "blue");
    //         const updateButton = createActionButton("Update", function() {
    //             if (confirm("Are you sure you want to update RECIPE ID:" + id + "'s record?")) {
    //                 updateData2(id);
    //             }
    //         }, "orange");

    //         const deleteButton = createActionButton("Delete", function() {
    //             if (confirm("Are you sure you want to delete RECIPE ID:" + id + "'s record?")) {
    //                 deleteData2(id);
    //             }
    //         }, "red");

    //         // Append the buttons to the action cell
    //         actionCell.appendChild(selectButton);
    //         actionCell.appendChild(updateButton);
    //         actionCell.appendChild(deleteButton);
    //     }
    // }).catch(error => {
    //     console.error("Error fetching data:", error);
    // });
}
window.loadlist = loadlist;

//
function saveOrUpdateMix() {
    try {

        if (recipe1num !== null) {
            recipenum = recipe1num.value;
        }
        if (recipe2num !== null) {
            recipenum = recipe2num.value;
        }

        var get_id = localStorage.getItem("getid");
        var parsed_id = parseInt(get_id);

        if (isNaN(parsed_id)) {
            throw new Error("Invalid ID");
        }

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

        executeSql(db,
                "SELECT * FROM rmdTable WHERE id = ? and email = ? and pageType = ?",
                [parsed_id, localStorage.getItem("email"), mixnewptype])
            .then(result => {
                var executetxt = "";

                var rows_result = result.rows.length;

                if (rows_result > 0) {
                    executetxt = "Update";
                } else {
                    executetxt = "Save";
                }

                const resulttask = confirm("Do you want to " + executetxt + " the Recipe " + rawmillnum + "?");

                if (resulttask) {
                    executeSql(db,
                        "UPDATE rmdTable SET C8_MIX_RDFC = ?, C9_SiO2_RDFC = ?,C10_Al2O3_RDFC      = ?,C11_Fe2O3_RDFC = ?,C12_CaO_RDFC = ?,C13_MgO_RDFC = ?,C14_Na2O_RDFC = ?,C15_K2O_RDFC = ?,C16_SO3_RDFC = ?,C17_LOI_RDFC = ?,D8_MIX_RDFC = ?,D9_SiO2_RDFC = ?,D10_Al2O3_RDFC = ?,D11_Fe2O3_RDFC = ?,D12_CaO_RDFC = ?,D13_MgO_RDFC = ?,D14_Na2O_RDFC = ?,D15_K2O_RDFC = ?,D16_SO3_RDFC = ?,D17_LOI_RDFC = ?,E8_MIX_RDFC = ?,E9_SiO2_RDFC = ?,E10_Al2O3_RDFC = ?,E11_Fe2O3_RDFC = ?,E12_CaO_RDFC = ?,E13_MgO_RDFC = ?,E14_Na2O_RDFC       = ?,E15_K2O_RDFC = ?,E16_SO3_RDFC = ?,E17_LOI_RDFC = ?,F8_MIX_RDFC = ?,F9_SiO2_RDFC = ?,F10_Al2O3_RDFC = ?,F11_Fe2O3_RDFC = ?,F12_CaO_RDFC = ?,F13_MgO_RDFC = ?,F14_Na2O_RDFC = ?,F15_K2O_RDFC = ?,F16_SO3_RDFC = ?,F17_LOI_RDFC = ?,I14_Lime_Saturation = ?,I17_Silica_Modulus  = ?,I20_Alumina_Modulus = ?  WHERE id = ? and email = ? and pagetype = ?",
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
                            getmix_id,
                            localStorage.getItem("email"),
                            mixnewptype
                        ]).then(resultSet => {
                        if (resultSet.rowsAffected > 0) {
                            alert("RECIPE ID: " + id + " Updated");
                            window.rdfc_clear()
                            localStorage.setItem("getid", "0");
                            // showNotification("Mix% & Matrix/Coefficient ID: " + id + " Updated", 3000, 3);
                        }
                    }).catch(error => {
                        alert("Updating RECIPE Error: " + error)
                        // showNotification("Update RMD Error: " + error, 3000, 4)
                    });

                } else {
                    //INSERT MIX
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

                    var data = ["Rawmill_" + recipenum + "_" + formattedDate,
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
                        formattedDate2,
                        localStorage.getItem("email"),
                        mixnewptype,
                    ]

                    console.log(data);

                    console.log("Trying to insert data...");

                    executeSql(db,
                        "INSERT INTO rmdTable (name,C8_MIX_RDFC , C9_SiO2_RDFC ,C10_Al2O3_RDFC      ,C11_Fe2O3_RDFC ,C12_CaO_RDFC ,C13_MgO_RDFC ,C14_Na2O_RDFC ,C15_K2O_RDFC ,C16_SO3_RDFC ,C17_LOI_RDFC ,D8_MIX_RDFC ,D9_SiO2_RDFC ,D10_Al2O3_RDFC ,D11_Fe2O3_RDFC ,D12_CaO_RDFC ,D13_MgO_RDFC ,D14_Na2O_RDFC ,D15_K2O_RDFC ,D16_SO3_RDFC ,D17_LOI_RDFC ,E8_MIX_RDFC ,E9_SiO2_RDFC ,E10_Al2O3_RDFC ,E11_Fe2O3_RDFC ,E12_CaO_RDFC ,E13_MgO_RDFC ,E14_Na2O_RDFC       ,E15_K2O_RDFC ,E16_SO3_RDFC ,E17_LOI_RDFC ,F8_MIX_RDFC ,F9_SiO2_RDFC ,F10_Al2O3_RDFC ,F11_Fe2O3_RDFC ,F12_CaO_RDFC ,F13_MgO_RDFC ,F14_Na2O_RDFC ,F15_K2O_RDFC ,F16_SO3_RDFC ,F17_LOI_RDFC ,I14_Lime_Saturation ,I17_Silica_Modulus  ,I20_Alumina_Modulus , DT, email, pageType) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)",
                        data,
                        (_, {
                            rowsAffected
                        }) => {
                            if (rowsAffected > 0) {
                                alert("RECIPE " + recipenum + " successfully saved!!")
                                // showNotification("Mix% & Matrix/Coefficient successfully saved!!", 3000, 3);
                                window.loadlist();
                                window.rdfc_clear();

                                localStorage.setItem("getid", "0");
                                localStorage.removeItem('Recipe' + recipenum);
                            }
                            console.log("Rows affected:", rowsAffected);
                        },
                        (_, error) => {
                            alert("Saving RECIPE Error: ", error.message)
                            // showNotification("Save RMD Error: ", error.message, 3000, 4);
                        }
                    );
                    setTimeout(() => {}, 60000);
                    //END INSERT MIX

                }

            });
    } catch (error) {


    }
}
//


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
            formattedDate2,
            localStorage.getItem("email"),
            mixnewptype,
        ]

        console.log(data);

        console.log("Trying to insert data...");

        executeSql(db,
            "INSERT INTO rmdTable (name,C8_MIX_RDFC , C9_SiO2_RDFC ,C10_Al2O3_RDFC      ,C11_Fe2O3_RDFC ,C12_CaO_RDFC ,C13_MgO_RDFC ,C14_Na2O_RDFC ,C15_K2O_RDFC ,C16_SO3_RDFC ,C17_LOI_RDFC ,D8_MIX_RDFC ,D9_SiO2_RDFC ,D10_Al2O3_RDFC ,D11_Fe2O3_RDFC ,D12_CaO_RDFC ,D13_MgO_RDFC ,D14_Na2O_RDFC ,D15_K2O_RDFC ,D16_SO3_RDFC ,D17_LOI_RDFC ,E8_MIX_RDFC ,E9_SiO2_RDFC ,E10_Al2O3_RDFC ,E11_Fe2O3_RDFC ,E12_CaO_RDFC ,E13_MgO_RDFC ,E14_Na2O_RDFC       ,E15_K2O_RDFC ,E16_SO3_RDFC ,E17_LOI_RDFC ,F8_MIX_RDFC ,F9_SiO2_RDFC ,F10_Al2O3_RDFC ,F11_Fe2O3_RDFC ,F12_CaO_RDFC ,F13_MgO_RDFC ,F14_Na2O_RDFC ,F15_K2O_RDFC ,F16_SO3_RDFC ,F17_LOI_RDFC ,I14_Lime_Saturation ,I17_Silica_Modulus  ,I20_Alumina_Modulus , DT, email, pageType) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)",
            data,
            (_, {
                rowsAffected
            }) => {
                if (rowsAffected > 0) {
                    alert("RECIPE " + recipenum + " successfully saved!!")
                    // showNotification("Mix% & Matrix/Coefficient successfully saved!!", 3000, 3);
                    window.loadlist();
                    window.rdfc_clear();

                    localStorage.setItem("getid", "0");
                    localStorage.removeItem('Recipe' + recipenum);
                }
                console.log("Rows affected:", rowsAffected);
            },
            (_, error) => {
                alert("Saving RECIPE Error: ", error.message)
                // showNotification("Save RMD Error: ", error.message, 3000, 4);
            }
        );
        setTimeout(() => {}, 60000);
    }
}
window.addData2 = addData2;

function updateData2() {
    console.log("Updating data...");
    executeSql(db,
        "UPDATE rmdTable SET C8_MIX_RDFC = ?, C9_SiO2_RDFC = ?,C10_Al2O3_RDFC      = ?,C11_Fe2O3_RDFC = ?,C12_CaO_RDFC = ?,C13_MgO_RDFC = ?,C14_Na2O_RDFC = ?,C15_K2O_RDFC = ?,C16_SO3_RDFC = ?,C17_LOI_RDFC = ?,D8_MIX_RDFC = ?,D9_SiO2_RDFC = ?,D10_Al2O3_RDFC = ?,D11_Fe2O3_RDFC = ?,D12_CaO_RDFC = ?,D13_MgO_RDFC = ?,D14_Na2O_RDFC = ?,D15_K2O_RDFC = ?,D16_SO3_RDFC = ?,D17_LOI_RDFC = ?,E8_MIX_RDFC = ?,E9_SiO2_RDFC = ?,E10_Al2O3_RDFC = ?,E11_Fe2O3_RDFC = ?,E12_CaO_RDFC = ?,E13_MgO_RDFC = ?,E14_Na2O_RDFC       = ?,E15_K2O_RDFC = ?,E16_SO3_RDFC = ?,E17_LOI_RDFC = ?,F8_MIX_RDFC = ?,F9_SiO2_RDFC = ?,F10_Al2O3_RDFC = ?,F11_Fe2O3_RDFC = ?,F12_CaO_RDFC = ?,F13_MgO_RDFC = ?,F14_Na2O_RDFC = ?,F15_K2O_RDFC = ?,F16_SO3_RDFC = ?,F17_LOI_RDFC = ?,I14_Lime_Saturation = ?,I17_Silica_Modulus  = ?,I20_Alumina_Modulus = ?  WHERE id = ? and email = ? and pagetype = ?",
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
            getmix_id,
            localStorage.getItem("email"),
            mixnewptype
        ]).then(resultSet => {
        if (resultSet.rowsAffected > 0) {
            alert("RECIPE ID: " + id + " Updated");
            window.rdfc_clear()
            localStorage.setItem("getid", "0");
            // showNotification("Mix% & Matrix/Coefficient ID: " + id + " Updated", 3000, 3);
        }
    }).catch(error => {
        alert("Updating RECIPE Error: " + error)
        // showNotification("Update RMD Error: " + error, 3000, 4)
    });
}
window.updateData2 = updateData2;

function deleteData2(id) {
    executeSql(db,
        "DELETE FROM rmdTable WHERE id = ? and email = ? and pageType = ?",
        [id, localStorage.getItem("email"), mixnewptype], (_, {
            rows
        }) => {
            const items = rows._array;
            alert("ID: " + id + "Recipe Data Deleted!");
            // showNotification("ID: " + id + " Data Deleted!", 3000, 3);
            window.loadlist();
        });

    console.log("Deletion complete!");
    setTimeout(() => {}, 60000);
}
window.deleteData2 = deleteData2;

function loadselectData2(id) {
    try {
        console.log('M.C > Query ID:', id);
        executeSql(db,
                "SELECT * FROM rmdTable WHERE id = ? and email = ? and pageType = ?",
                [id, localStorage.getItem("email"), mixnewptype])
            .then(result => {
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
            }).catch(error => {
                alert("Load Error: " + error.message);
            });
        console.log("Done loading data!");
        setTimeout(() => {}, 60000);

    } catch (error) {
        console.log(error);
        alert("Catched Error: " + error.message);
    }
}
window.loadselectData2 = loadselectData2;

// function handleButtonClick(buttonNumber) {
//     if (buttonNumber == 1) {
//         toggleButtons();
//     } else if (buttonNumber == 2) {
//         toggleButtons();
//     } else if (buttonNumber == 3) {
//         window.saveOrUpdateMix();
//         toggleButtons();
//     } else if (buttonNumber == 4) {
//         window.rdfc_clear();
//         toggleButtons();
//     } else if (buttonNumber == 5) {
//         toggleButtons();
//     } else if (buttonNumber == 6) {
//         location.reload();
//         toggleButtons();
//     }

//     // You can add your custom action here

// }