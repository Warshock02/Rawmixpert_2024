var db;

document.addEventListener("deviceready", onDeviceReady, false);

//BEGIN VARIABLES
//#region
let dataList = [];
let dataList2 = [];

// MATERIAL ANALYSIS useStates
let C16TotalEnable = false;
let C17TotalEnable = false;
let C18TotalEnable = false;
let C19TotalEnable = false;
let previousDataLoaded = false;

let total_C15 = 0.0;
let total_C16 = 0.0;
let total_C17 = 0.0;
let total_C18 = 0.0;
let total_C19 = 0.0;

// START NAME: RAW MILL 2
// FORMULAS

// Material Setting
// can be changed
// Limestone, Shale, Sand, Iron
let D15 = 0.0;
let E15 = 0.0;
let F15 = 0.0;
let G15 = 0.0;

// Material Q31_LOI
// fixed cell
// let D16 = 0.0;
// let E16 = 0.0;
// let F16 = 0.0;
// let G16 = 0.0;
// let D17 = 0.0;
// let E17 = 0.0;
// let F17 = 0.0;
// let G17 = 0.0;
// let D18 = 0.0;
// let E18 = 0.0;
// let F18 = 0.0;
// let G18 = 0.0;
// let D19 = 0.0;
// let E19 = 0.0;
// let F19 = 0.0;
// let G19 = 0.0;

// DONE
// XRF Analysis
// can be changed
let H15_SiO2 = 0.0;
let H16_SiO2 = 0.0;
let H17_SiO2 = 0.0;
let H18_SiO2 = 0.0;

let I15_Al2O3 = 0.0;
let I16_Al2O3 = 0.0;
let I17_Al2O3 = 0.0;
let I18_Al2O3 = 0.0;

let J15_Fe2O3 = 0.0;
let J16_Fe2O3 = 0.0;
let J17_Fe2O3 = 0.0;
let J18_Fe2O3 = 0.0;

let K15_CaO = 0.0;
let K16_CaO = 0.0;
let K17_CaO = 0.0;
let K18_CaO = 0.0;

let L15_MgO = 0.0;
let L16_MgO = 0.0;
let L17_MgO = 0.0;
let L18_MgO = 0.0;

let M15_Na2O = 0.0;
let M16_Na2O = 0.0;
let M17_Na2O = 0.0;
let M18_Na2O = 0.0;

let N15_K2O = 0.0;
let N16_K2O = 0.0;
let N17_K2O = 0.0;
let N18_K2O = 0.0;

let O15_SO3 = 0.0;
let O16_SO3 = 0.0;
let O17_SO3 = 0.0;
let O18_SO3 = 0.0;

let P15_Cl = 0.0;
let P16_Cl = 0.0;
let P17_Cl = 0.0;
let P18_Cl = 0.0;

// XRF Analysis
// fixed cell
let Q15_LOI = 0.0;
let Q16_LOI = 0.0;
let Q17_LOI = 0.0;
let Q18_LOI = 0.0;

let R15_XRFtotal = 0.0;
let R16_XRFtotal = 0.0;
let R17_XRFtotal = 0.0;
let R18_XRFtotal = 0.0;

// RATIOS
// fixed cell
let S15_LSF = 0.0;
let S16_LSF = 0.0;
let S17_LSF = 0.0;
let S18_LSF = 0.0;

let T15_HM = 0.0;
let T16_HM = 0.0;
let T17_HM = 0.0;
let T18_HM = 0.0;

let U15_SM = 0.0;
let U16_SM = 0.0;
let U17_SM = 0.0;
let U18_SM = 0.0;

let V15_AM = 0.0;
let V16_AM = 0.0;
let V17_AM = 0.0;
let V18_AM = 0.0;

//DONE
//LSF

//DONE
//HM

//DONE
//SM

//DONE
//AM

//DONE
//Limestone
//D19
let D19_Limestone = 0.0;
let E19_Shale = 0.0;
let F19_Sand = 0.0;
let G19_Iron = 0.0;
let D16_Limestone = 0.0;
let D17_Limestone = 0.0;
let D18_Limestone = 0.0;
let E16_Shale = 0.0;
let E17_Shale = 0.0;
let E18_Shale = 0.0;
let F16_Sand = 0.0;
let F17_Sand = 0.0;
let F18_Sand = 0.0;
let G16_Iron = 0.0;
let G17_Iron = 0.0;
let G18_Iron = 0.0;

//DONE
//AVERAGE
let D20_AVG = 0.0;
let E20_AVG = 0.0;
let F20_AVG = 0.0;
let G20_AVG = 0.0;
let H20_AVG = 0.0;
let I20_AVG = 0.0;
let J20_AVG = 0.0;
let K20_AVG = 0.0;
let L20_AVG = 0.0;
let M20_AVG = 0.0;
let N20_AVG = 0.0;
let O20_AVG = 0.0;
let P20_AVG = 0.0;
let Q20_AVG = 0.0;
let R20_AVG = 0.0;
let S20_AVG = 0.0;
let T20_AVG = 0.0;
let U20_AVG = 0.0;
let V20_AVG = 0.0;

//DONE
//STDEV
let D20_STDEV = 0.0;
let E20_STDEV = 0.0;
let F20_STDEV = 0.0;
let G20_STDEV = 0.0;
let H20_STDEV = 0.0;
let I20_STDEV = 0.0;
let J20_STDEV = 0.0;
let K20_STDEV = 0.0;
let L20_STDEV = 0.0;
let M20_STDEV = 0.0;
let N20_STDEV = 0.0;
let O20_STDEV = 0.0;
let P20_STDEV = 0.0;
let Q20_STDEV = 0.0;
let R20_STDEV = 0.0;
let S20_STDEV = 0.0;
let T20_STDEV = 0.0;
let U20_STDEV = 0.0;
let V20_STDEV = 0.0;

//DONE
//MIN
let D20_MIN = 0.0;
let E20_MIN = 0.0;
let F20_MIN = 0.0;
let G20_MIN = 0.0;
let H20_MIN = 0.0;
let I20_MIN = 0.0;
let J20_MIN = 0.0;
let K20_MIN = 0.0;
let L20_MIN = 0.0;
let M20_MIN = 0.0;
let N20_MIN = 0.0;
let O20_MIN = 0.0;
let P20_MIN = 0.0;
let Q20_MIN = 0.0;
let R20_MIN = 0.0;
let S20_MIN = 0.0;
let T20_MIN = 0.0;
let U20_MIN = 0.0;
let V20_MIN = 0.0;

//DONE
//MAX
let D20_MAX = 0.0;
let E20_MAX = 0.0;
let F20_MAX = 0.0;
let G20_MAX = 0.0;
let H20_MAX = 0.0;
let I20_MAX = 0.0;
let J20_MAX = 0.0;
let K20_MAX = 0.0;
let L20_MAX = 0.0;
let M20_MAX = 0.0;
let N20_MAX = 0.0;
let O20_MAX = 0.0;
let P20_MAX = 0.0;
let Q20_MAX = 0.0;
let R20_MAX = 0.0;
let S20_MAX = 0.0;
let T20_MAX = 0.0;
let U20_MAX = 0.0;
let V20_MAX = 0.0;

//START NAME: INPUT VARIABLES

//PRIORITY
//CAN BE CHANGE
let C30_LSF_PR = 0.0;
let C31_SM_PR = 0.0;
let C32_AM_PR = 0.0;
//TARGET
//CAN BE CHANGE
let F30_LSF_TG = 0.0;
let F31_SM_TG = 0.0;
let F32_AM_TG = 0.0;
//CLINKER FACTOR
//CAN BE CHANGE
let E33_Clinker_Factor = 0.0;
let E34_RawMixType = "";

//END NAME: INPUT VARIABLES

//***************************************************** */

//DONE
//START NAME: RAWMEAL and CLINKER TARGETS

//Target Rawmeal Composition
//can be change
let H31_SiO2 = 0.0;
let I31_Al2O3 = 0.0;
let J31_Fe2O3 = 0.0;
let K31_CaO = 0.0;
let L31_MgO = 0.0;
let M31_Na2O = 0.0;
let N31_K2O = 0.0;
let O31_SO3 = 0.0;
let P31_Cl = 0.0;

//fixed cell
let Q31_LOI = 0.0;
let R31_total = 0.0;
let S31_LSF = 0.0;
let T31_HM = 0.0;
let U31_SM = 0.0;
let V31_AM = 0.0;

//DONE
//Expected  Clinker Composition

//fixed cell
let H35_SiO2 = 0.0;
let I35_Al2O3 = 0.0;
let J35_Fe2O3 = 0.0;
let K35_CaO = 0.0;
let L35_MgO = 0.0;
let M35_Na2O = 0.0;
let N35_K2O = 0.0;
let O35_SO3 = 0.0;
let P35_Cl = 0.0;
let Q35_ECC_total = 0.0;
let S35_LSF = 0.0;
let T35_HM = 0.0;
let U35_SM = 0.0;
let V35_AM = 0.0;
//Fixed cell

let H38_literKG = "0.0";
let I38_FCaO = 0.0;
let J38_BurningCondition = "";
let L38_KL_LOI = 0.0;
let U38_SO3 = "";
let V38_LOI = 0.0;

//END NAME: RAWMEAL and CLINKER TARGETS

let K38_DOC = 0.0;
let M38_C3Snet = 0.0;
let N38_C2S = 0.0;
let O38_C3A = 0.0;
let P38_C4AF = 0.0;
let Q38_Sulfur_Alkali_ratio = 0.0;
let R38_total_Alkali = 0.0;
let S38_Liquid_Phase = 0.0;
let T38_Coating_Index = 0.0;

//#endregion
//END OF VARIABLES

// Begin All Variables getbyElementID
//#region

// MANUAL
let D15_DG = document.getElementById("D15");
let E15_DG = document.getElementById("E15");
let F15_DG = document.getElementById("F15");
let G15_DG = document.getElementById("G15");

let D16_Limestone_DG = document.getElementById("D16_Limestone");
let E16_Shale_DG = document.getElementById("E16_Shale");
let F16_Sand_DG = document.getElementById("F16_Sand");
let G16_Iron_DG = document.getElementById("G16_Iron");
let D16_Limestone_DQ = document.querySelector("label[for='D16_Limestone']");
let E16_Shale_DQ = document.querySelector("label[for='E16_Shale']");
let F16_Sand_DQ = document.querySelector("label[for='F16_Sand']");
let G16_Iron_DQ = document.querySelector("label[for='G16_Iron']");
let D17_Limestone_DG = document.getElementById("D17_Limestone");
let E17_Shale_DG = document.getElementById("E17_Shale");
let F17_Sand_DG = document.getElementById("F17_Sand");
let G17_Iron_DG = document.getElementById("G17_Iron");
let D17_Limestone_DQ = document.querySelector("label[for='D17_Limestone']");
let E17_Shale_DQ = document.querySelector("label[for='E17_Shale']");
let F17_Sand_DQ = document.querySelector("label[for='F17_Sand']");
let G17_Iron_DQ = document.querySelector("label[for='G17_Iron']");
let D18_Limestone_DG = document.getElementById("D18_Limestone");
let E18_Shale_DG = document.getElementById("E18_Shale");
let F18_Sand_DG = document.getElementById("F18_Sand");
let G18_Iron_DG = document.getElementById("G18_Iron");
let D18_Limestone_DQ = document.querySelector("label[for='D18_Limestone']");
let E18_Shale_DQ = document.querySelector("label[for='E18_Shale']");
let F18_Sand_DQ = document.querySelector("label[for='F18_Sand']");
let G18_Iron_DQ = document.querySelector("label[for='G18_Iron']");
let D19_Limestone_DG = document.getElementById("D19_Limestone");
let E19_Shale_DG = document.getElementById("E19_Shale");
let F19_Sand_DG = document.getElementById("F19_Sand");
let G19_Iron_DG = document.getElementById("G19_Iron");
let D19_Limestone_DQ = document.querySelector("label[for='D19_Limestone']");
let E19_Shale_DQ = document.querySelector("label[for='E19_Shale']");
let F19_Sand_DQ = document.querySelector("label[for='F19_Sand']");
let G19_Iron_DQ = document.querySelector("label[for='G19_Iron']");
let H15_SiO2_DG = document.getElementById("H15_SiO2");
let H16_SiO2_DG = document.getElementById("H16_SiO2");
let H17_SiO2_DG = document.getElementById("H17_SiO2");
let H18_SiO2_DG = document.getElementById("H18_SiO2");
let I15_Al2O3_DG = document.getElementById("I15_Al2O3");
let I16_Al2O3_DG = document.getElementById("I16_Al2O3");
let I17_Al2O3_DG = document.getElementById("I17_Al2O3");
let I18_Al2O3_DG = document.getElementById("I18_Al2O3");
let J15_Fe2O3_DG = document.getElementById("J15_Fe2O3");
let J16_Fe2O3_DG = document.getElementById("J16_Fe2O3");
let J17_Fe2O3_DG = document.getElementById("J17_Fe2O3");
let J18_Fe2O3_DG = document.getElementById("J18_Fe2O3");
let K15_CaO_DG = document.getElementById("K15_CaO");
let K16_CaO_DG = document.getElementById("K16_CaO");
let K17_CaO_DG = document.getElementById("K17_CaO");
let K18_CaO_DG = document.getElementById("K18_CaO");
let L15_MgO_DG = document.getElementById("L15_MgO");
let L16_MgO_DG = document.getElementById("L16_MgO");
let L17_MgO_DG = document.getElementById("L17_MgO");
let L18_MgO_DG = document.getElementById("L18_MgO");
let M15_Na2O_DG = document.getElementById("M15_Na2O");
let M16_Na2O_DG = document.getElementById("M16_Na2O");
let M17_Na2O_DG = document.getElementById("M17_Na2O");
let M18_Na2O_DG = document.getElementById("M18_Na2O");
let N15_K2O_DG = document.getElementById("N15_K2O");
let N16_K2O_DG = document.getElementById("N16_K2O");
let N17_K2O_DG = document.getElementById("N17_K2O");
let N18_K2O_DG = document.getElementById("N18_K2O");
let O15_SO3_DG = document.getElementById("O15_SO3");
let O16_SO3_DG = document.getElementById("O16_SO3");
let O17_SO3_DG = document.getElementById("O17_SO3");
let O18_SO3_DG = document.getElementById("O18_SO3");
let P15_Cl_DG = document.getElementById("P15_Cl");
let P16_Cl_DG = document.getElementById("P16_Cl");
let P17_Cl_DG = document.getElementById("P17_Cl");
let P18_Cl_DG = document.getElementById("P18_Cl");

// FIXED CELL
let total_C15_DG = document.querySelector("label[for='total_C15']");
let total_C16_DG = document.querySelector("label[for='total_C16']");
let total_C17_DG = document.querySelector("label[for='total_C17']");
let total_C18_DG = document.querySelector("label[for='total_C18']");
let total_C19_DG = document.querySelector("label[for='total_C19']");
let Q15_LOI_DG = document.querySelector("label[for='Q15_LOI']");
let Q16_LOI_DG = document.querySelector("label[for='Q16_LOI']");
let Q17_LOI_DG = document.querySelector("label[for='Q17_LOI']");
let Q18_LOI_DG = document.querySelector("label[for='Q18_LOI']");
let R15_XRFtotal_DG = document.querySelector("label[for='R15_XRFtotal']");
let R16_XRFtotal_DG = document.querySelector("label[for='R16_XRFtotal']");
let R17_XRFtotal_DG = document.querySelector("label[for='R17_XRFtotal']");
let R18_XRFtotal_DG = document.querySelector("label[for='R18_XRFtotal']");
let S15_LSF_DG = document.querySelector("label[for='S15_LSF']");
let S16_LSF_DG = document.querySelector("label[for='S16_LSF']");
let S17_LSF_DG = document.querySelector("label[for='S17_LSF']");
let S18_LSF_DG = document.querySelector("label[for='S18_LSF']");
let T15_HM_DG = document.querySelector("label[for='T15_HM']");
let T16_HM_DG = document.querySelector("label[for='T16_HM']");
let T17_HM_DG = document.querySelector("label[for='T17_HM']");
let T18_HM_DG = document.querySelector("label[for='T18_HM']");
let U15_SM_DG = document.querySelector("label[for='U15_SM']");
let U16_SM_DG = document.querySelector("label[for='U16_SM']");
let U17_SM_DG = document.querySelector("label[for='U17_SM']");
let U18_SM_DG = document.querySelector("label[for='U18_SM']");
let V15_AM_DG = document.querySelector("label[for='V15_AM']");
let V16_AM_DG = document.querySelector("label[for='V16_AM']");
let V17_AM_DG = document.querySelector("label[for='V17_AM']");
let V18_AM_DG = document.querySelector("label[for='V18_AM']");
let D20_AVG_DG = document.querySelector("label[for='D20_AVG']");
let E20_AVG_DG = document.querySelector("label[for='E20_AVG']");
let F20_AVG_DG = document.querySelector("label[for='F20_AVG']");
let G20_AVG_DG = document.querySelector("label[for='G20_AVG']");
let H20_AVG_DG = document.querySelector("label[for='H20_AVG']");
let I20_AVG_DG = document.querySelector("label[for='I20_AVG']");
let J20_AVG_DG = document.querySelector("label[for='J20_AVG']");
let K20_AVG_DG = document.querySelector("label[for='K20_AVG']");
let L20_AVG_DG = document.querySelector("label[for='L20_AVG']");
let M20_AVG_DG = document.querySelector("label[for='M20_AVG']");
let N20_AVG_DG = document.querySelector("label[for='N20_AVG']");
let O20_AVG_DG = document.querySelector("label[for='O20_AVG']");
let P20_AVG_DG = document.querySelector("label[for='P20_AVG']");
let Q20_AVG_DG = document.querySelector("label[for='Q20_AVG']");
let R20_AVG_DG = document.querySelector("label[for='R20_AVG']");
let S20_AVG_DG = document.querySelector("label[for='S20_AVG']");
let T20_AVG_DG = document.querySelector("label[for='T20_AVG']");
let U20_AVG_DG = document.querySelector("label[for='U20_AVG']");
let V20_AVG_DG = document.querySelector("label[for='V20_AVG']");
let D20_STDEV_DG = document.querySelector("label[for='D20_STDEV']");
let E20_STDEV_DG = document.querySelector("label[for='E20_STDEV']");
let F20_STDEV_DG = document.querySelector("label[for='F20_STDEV']");
let G20_STDEV_DG = document.querySelector("label[for='G20_STDEV']");
let H20_STDEV_DG = document.querySelector("label[for='H20_STDEV']");
let I20_STDEV_DG = document.querySelector("label[for='I20_STDEV']");
let J20_STDEV_DG = document.querySelector("label[for='J20_STDEV']");
let K20_STDEV_DG = document.querySelector("label[for='K20_STDEV']");
let L20_STDEV_DG = document.querySelector("label[for='L20_STDEV']");
let M20_STDEV_DG = document.querySelector("label[for='M20_STDEV']");
let N20_STDEV_DG = document.querySelector("label[for='N20_STDEV']");
let O20_STDEV_DG = document.querySelector("label[for='O20_STDEV']");
let P20_STDEV_DG = document.querySelector("label[for='P20_STDEV']");
let Q20_STDEV_DG = document.querySelector("label[for='Q20_STDEV']");
let R20_STDEV_DG = document.querySelector("label[for='R20_STDEV']");
let S20_STDEV_DG = document.querySelector("label[for='S20_STDEV']");
let T20_STDEV_DG = document.querySelector("label[for='T20_STDEV']");
let U20_STDEV_DG = document.querySelector("label[for='U20_STDEV']");
let V20_STDEV_DG = document.querySelector("label[for='V20_STDEV']");
let D20_MIN_DG = document.querySelector("label[for='D20_MIN']");
let E20_MIN_DG = document.querySelector("label[for='E20_MIN']");
let F20_MIN_DG = document.querySelector("label[for='F20_MIN']");
let G20_MIN_DG = document.querySelector("label[for='G20_MIN']");
let H20_MIN_DG = document.querySelector("label[for='H20_MIN']");
let I20_MIN_DG = document.querySelector("label[for='I20_MIN']");
let J20_MIN_DG = document.querySelector("label[for='J20_MIN']");
let K20_MIN_DG = document.querySelector("label[for='K20_MIN']");
let L20_MIN_DG = document.querySelector("label[for='L20_MIN']");
let M20_MIN_DG = document.querySelector("label[for='M20_MIN']");
let N20_MIN_DG = document.querySelector("label[for='N20_MIN']");
let O20_MIN_DG = document.querySelector("label[for='O20_MIN']");
let P20_MIN_DG = document.querySelector("label[for='P20_MIN']");
let Q20_MIN_DG = document.querySelector("label[for='Q20_MIN']");
let R20_MIN_DG = document.querySelector("label[for='R20_MIN']");
let S20_MIN_DG = document.querySelector("label[for='S20_MIN']");
let T20_MIN_DG = document.querySelector("label[for='T20_MIN']");
let U20_MIN_DG = document.querySelector("label[for='U20_MIN']");
let V20_MIN_DG = document.querySelector("label[for='V20_MIN']");
let D20_MAX_DG = document.querySelector("label[for='D20_MAX']");
let E20_MAX_DG = document.querySelector("label[for='E20_MAX']");
let F20_MAX_DG = document.querySelector("label[for='F20_MAX']");
let G20_MAX_DG = document.querySelector("label[for='G20_MAX']");
let H20_MAX_DG = document.querySelector("label[for='H20_MAX']");
let I20_MAX_DG = document.querySelector("label[for='I20_MAX']");
let J20_MAX_DG = document.querySelector("label[for='J20_MAX']");
let K20_MAX_DG = document.querySelector("label[for='K20_MAX']");
let L20_MAX_DG = document.querySelector("label[for='L20_MAX']");
let M20_MAX_DG = document.querySelector("label[for='M20_MAX']");
let N20_MAX_DG = document.querySelector("label[for='N20_MAX']");
let O20_MAX_DG = document.querySelector("label[for='O20_MAX']");
let P20_MAX_DG = document.querySelector("label[for='P20_MAX']");
let Q20_MAX_DG = document.querySelector("label[for='Q20_MAX']");
let R20_MAX_DG = document.querySelector("label[for='R20_MAX']");
let S20_MAX_DG = document.querySelector("label[for='S20_MAX']");
let T20_MAX_DG = document.querySelector("label[for='T20_MAX']");
let U20_MAX_DG = document.querySelector("label[for='U20_MAX']");
let V20_MAX_DG = document.querySelector("label[for='V20_MAX']");

const cbox16 = document.getElementById("cbox16");
const cbox17 = document.getElementById("cbox17");
const cbox18 = document.getElementById("cbox18");
const cbox19 = document.getElementById("cbox19");

// INPUT
let C30_LSF_PR_DG = document.getElementById("C30_LSF_PR");
let C31_SM_PR_DG = document.getElementById("C31_SM_PR");
let C32_AM_PR_DG = document.getElementById("C32_AM_PR");
//TARGET
//CAN BE CHANGE
let F30_LSF_TG_DG = document.getElementById("F30_LSF_TG");
let F31_SM_TG_DG = document.getElementById("F31_SM_TG");
let F32_AM_TG_DG = document.getElementById("F32_AM_TG");
//CLINKER FACTOR
//CAN BE CHANGE
let E33_Clinker_Factor_DG = document.getElementById("E33_Clinker_Factor");
let E34_RawMixType_DG = document.getElementById("E34_RawMixType");

// TARGET Composition
//can be change
let H31_SiO2_DG = document.getElementById("H31_SiO2");
let I31_Al2O3_DG = document.getElementById("I31_Al2O3");
let J31_Fe2O3_DG = document.getElementById("J31_Fe2O3");
let K31_CaO_DG = document.getElementById("K31_CaO");
let L31_MgO_DG = document.getElementById("L31_MgO");
let M31_Na2O_DG = document.getElementById("M31_Na2O");
let N31_K2O_DG = document.getElementById("N31_K2O");
let O31_SO3_DG = document.getElementById("O31_SO3");
let P31_Cl_DG = document.getElementById("P31_Cl");

//fixed cell
let Q31_LOI_DG = document.querySelector("label[for='Q31_LOI']");
let R31_total_DG = document.querySelector("label[for='R31_total']");
let S31_LSF_DG = document.querySelector("label[for='S31_LSF']");
let T31_HM_DG = document.querySelector("label[for='T31_HM']");
let U31_SM_DG = document.querySelector("label[for='U31_SM']");
let V31_AM_DG = document.querySelector("label[for='V31_AM']");

//DONE
//Expected  Clinker Composition

//fixed cell
let H35_SiO2_DG = document.querySelector("label[for='H35_SiO2']");
let I35_Al2O3_DG = document.querySelector("label[for='I35_Al2O3']");
let J35_Fe2O3_DG = document.querySelector("label[for='J35_Fe2O3']");
let K35_CaO_DG = document.querySelector("label[for='K35_CaO']");
let L35_MgO_DG = document.querySelector("label[for='L35_MgO']");
let M35_Na2O_DG = document.querySelector("label[for='M35_Na2O']");
let N35_K2O_DG = document.querySelector("label[for='N35_K2O']");
let O35_SO3_DG = document.querySelector("label[for='O35_SO3']");
let P35_Cl_DG = document.querySelector("label[for='P35_Cl']");
let Q35_ECC_total_DG = document.querySelector("label[for='Q35_ECC_total']");
let S35_LSF_DG = document.querySelector("label[for='S35_LSF']");
let T35_HM_DG = document.querySelector("label[for='T35_HM']");
let U35_SM_DG = document.querySelector("label[for='U35_SM']");
let V35_AM_DG = document.querySelector("label[for='V35_AM']");

let H38_literKG_DG = document.getElementById("H38_literKG");
let I38_FCaO_DG = document.getElementById("I38_FCaO");
let J38_BurningCondition_DG = document.getElementById("J38_BurningCondition");

let L38_KL_LOI_DG = document.getElementById("L38_KL_LOI");
let U38_SO3_DG = document.getElementById("U38_SO3");
let V38_LOI_DG = document.getElementById("V38_LOI");

//END NAME: RAWMEAL and CLINKER TARGETS
//Fixed cell
let K38_DOC_DG = document.querySelector("label[for='K38_DOC']");
let M38_C3Snet_DG = document.querySelector("label[for='M38_C3Snet']");
let N38_C2S_DG = document.querySelector("label[for='N38_C2S']");
let O38_C3A_DG = document.querySelector("label[for='O38_C3A']");
let P38_C4AF_DG = document.querySelector("label[for='P38_C4AF']");
let Q38_Sulfur_Alkali_ratio_DG = document.querySelector(
    "label[for='Q38_Sulfur_Alkali_ratio']"
);
let R38_total_Alkali_DG = document.querySelector(
    "label[for='R38_total_Alkali']"
);
let S38_Liquid_Phase_DG = document.querySelector(
    "label[for='S38_Liquid_Phase']"
);
let T38_Coating_Index_DG = document.querySelector(
    "label[for='T38_Coating_Index']"
);
// End TARGET Composition

// checkbox if true auto else manual
//#region
const inputContainerD16_Limestone = document.getElementById(
    "inputContainerD16_Limestone"
);
const inputContainerE16_Shale = document.getElementById(
    "inputContainerE16_Shale"
);
const inputContainerF16_Sand = document.getElementById(
    "inputContainerF16_Sand"
);
const inputContainerG16_Iron = document.getElementById(
    "inputContainerG16_Iron"
);

const labelContainerD16_Limestone = document.getElementById(
    "labelContainerD16_Limestone"
);
const labelContainerE16_Shale = document.getElementById(
    "labelContainerE16_Shale"
);
const labelContainerF16_Sand = document.getElementById(
    "labelContainerF16_Sand"
);
const labelContainerG16_Iron = document.getElementById(
    "labelContainerG16_Iron"
);

const inputContainerD17_Limestone = document.getElementById(
    "inputContainerD17_Limestone"
);
const inputContainerE17_Shale = document.getElementById(
    "inputContainerE17_Shale"
);
const inputContainerF17_Sand = document.getElementById(
    "inputContainerF17_Sand"
);
const inputContainerG17_Iron = document.getElementById(
    "inputContainerG17_Iron"
);

const labelContainerD17_Limestone = document.getElementById(
    "labelContainerD17_Limestone"
);
const labelContainerE17_Shale = document.getElementById(
    "labelContainerE17_Shale"
);
const labelContainerF17_Sand = document.getElementById(
    "labelContainerF17_Sand"
);
const labelContainerG17_Iron = document.getElementById(
    "labelContainerG17_Iron"
);

const inputContainerD18_Limestone = document.getElementById(
    "inputContainerD18_Limestone"
);
const inputContainerE18_Shale = document.getElementById(
    "inputContainerE18_Shale"
);
const inputContainerF18_Sand = document.getElementById(
    "inputContainerF18_Sand"
);
const inputContainerG18_Iron = document.getElementById(
    "inputContainerG18_Iron"
);

const labelContainerD18_Limestone = document.getElementById(
    "labelContainerD18_Limestone"
);
const labelContainerE18_Shale = document.getElementById(
    "labelContainerE18_Shale"
);
const labelContainerF18_Sand = document.getElementById(
    "labelContainerF18_Sand"
);
const labelContainerG18_Iron = document.getElementById(
    "labelContainerG18_Iron"
);

const inputContainerD19_Limestone = document.getElementById(
    "inputContainerD19_Limestone"
);
const inputContainerE19_Shale = document.getElementById(
    "inputContainerE19_Shale"
);
const inputContainerF19_Sand = document.getElementById(
    "inputContainerF19_Sand"
);
const inputContainerG19_Iron = document.getElementById(
    "inputContainerG19_Iron"
);

const labelContainerD19_Limestone = document.getElementById(
    "labelContainerD19_Limestone"
);
const labelContainerE19_Shale = document.getElementById(
    "labelContainerE19_Shale"
);
const labelContainerF19_Sand = document.getElementById(
    "labelContainerF19_Sand"
);
const labelContainerG19_Iron = document.getElementById(
    "labelContainerG19_Iron"
);
//#endregion
var rawmill1num = document.getElementById("rawmill1");
var rawmill2num = document.getElementById("rawmill2");
var rawmillnum = 0;

//#endregion
// End All Variables getbyElementID

//change navigation 


window.addEventListener('beforeunload', function (event) {
    if (rawmill1num !== null) {
        rawmillnum = rawmill1num.value;
    }
    if (rawmill2num !== null) {
        rawmillnum = rawmill2num.value;
    }
    //Store to local
    var myObject = {
        cbox16: cbox16.checked,
        D16_Limestone_DQ: cbox16.checked ? parseFloat(D16_Limestone_DQ.textContent) : parseFloat(D16_Limestone_DG.value),
        E16_Shale: cbox16.checked ? parseFloat(E16_Shale_DQ.textContent) : parseFloat(E16_Shale_DG.value),
        F16_Sand: cbox16.checked ? parseFloat(F16_Sand_DQ.textContent) : parseFloat(F16_Sand_DG.value),
        G16_Iron: cbox16.checked ? parseFloat(G16_Iron_DQ.textContent) : parseFloat(G16_Iron_DG.value),
        cbox17: cbox17.checked,
        D17_Limestone: cbox17.checked ? parseFloat(D17_Limestone_DQ.textContent) : parseFloat(D17_Limestone_DG.value),
        E17_Shale: cbox17.checked ? parseFloat(E17_Shale_DQ.textContent) : parseFloat(E17_Shale_DG.value),
        F17_Sand: cbox17.checked ? parseFloat(F17_Sand_DQ.textContent) : parseFloat(F17_Sand_DG.value),
        G17_Iron: cbox17.checked ? parseFloat(G17_Iron_DQ.textContent) : parseFloat(G17_Iron_DG.value),
        cbox18: cbox18.checked,
        D18_Limestone: cbox18.checked ? parseFloat(D18_Limestone_DQ.textContent) : parseFloat(D18_Limestone_DG.value),
        E18_Shale: cbox18.checked ? parseFloat(E18_Shale_DQ.textContent) : parseFloat(E18_Shale_DG.value),
        F18_Sand_: cbox18.checked ? parseFloat(F18_Sand_DQ.textContent) : parseFloat(F18_Sand_DG.value),
        G18_Iron: cbox18.checked ? parseFloat(G18_Iron_DQ.textContent) : parseFloat(G18_Iron_DG.value),
        cbox19: cbox19.checked,
        D19_Limestone: cbox19.checked ? parseFloat(D19_Limestone_DQ.textContent) : parseFloat(D19_Limestone_DG.value),
        E19_Shale: cbox19.checked ? parseFloat(E19_Shale_DQ.textContent) : parseFloat(E19_Shale_DG.value),
        F19_Sand: cbox19.checked ? parseFloat(F19_Sand_DQ.textContent) : parseFloat(F19_Sand_DG.value),
        G19_Iron: cbox19.checked ? parseFloat(G19_Iron_DQ.textContent) : parseFloat(G19_Iron_DG.value),
        D15: D15_DG.value === 'undefined' ? '' : D15_DG.value,
        E15: E15_DG.value === 'undefined' ? '' : E15_DG.value,
        F15: F15_DG.value === 'undefined' ? '' : F15_DG.value,
        G15: G15_DG.value === 'undefined' ? '' : G15_DG.value,
        H15_SiO2: H15_SiO2_DG.value === 'undefined' ? '' : H15_SiO2_DG.value,
        I15_Al2O3: I15_Al2O3_DG.value === 'undefined' ? '' : I15_Al2O3_DG.value,
        J15_Fe2O3: J15_Fe2O3_DG.value === 'undefined' ? '' : J15_Fe2O3_DG.value,
        K15_CaO: K15_CaO_DG.value === 'undefined' ? '' : K15_CaO_DG.value,
        L15_MgO: L15_MgO_DG.value === 'undefined' ? '' : L15_MgO_DG.value,
        M15_Na2O: M15_Na2O_DG.value === 'undefined' ? '' : M15_Na2O_DG.value,
        N15_K2O: N15_K2O_DG.value === 'undefined' ? '' : N15_K2O_DG.value,
        O15_SO3: O15_SO3_DG.value === 'undefined' ? '' : O15_SO3_DG.value,
        P15_Cl: P15_Cl_DG.value === 'undefined' ? '' : P15_Cl_DG.value,
        H16_SiO2: H16_SiO2_DG.value === 'undefined' ? '' : H16_SiO2_DG.value,
        I16_Al2O3: I16_Al2O3_DG.value === 'undefined' ? '' : I16_Al2O3_DG.value,
        J16_Fe2O3: J16_Fe2O3_DG.value === 'undefined' ? '' : J16_Fe2O3_DG.value,
        K16_CaO: K16_CaO_DG.value === 'undefined' ? '' : K16_CaO_DG.value,
        L16_MgO: L16_MgO_DG.value === 'undefined' ? '' : L16_MgO_DG.value,
        M16_Na2O: M16_Na2O_DG.value === 'undefined' ? '' : M16_Na2O_DG.value,
        N16_K2O: N16_K2O_DG.value === 'undefined' ? '' : N16_K2O_DG.value,
        O16_SO3: O16_SO3_DG.value === 'undefined' ? '' : O16_SO3_DG.value,
        P16_Cl: P16_Cl_DG.value === 'undefined' ? '' : P16_Cl_DG.value,
        H17_SiO2: H17_SiO2_DG.value === 'undefined' ? '' : H17_SiO2_DG.value,
        I17_Al2O3: I17_Al2O3_DG.value === 'undefined' ? '' : I17_Al2O3_DG.value,
        J17_Fe2O3: J17_Fe2O3_DG.value === 'undefined' ? '' : J17_Fe2O3_DG.value,
        K17_CaO: K17_CaO_DG.value === 'undefined' ? '' : K17_CaO_DG.value,
        L17_MgO: L17_MgO_DG.value === 'undefined' ? '' : L17_MgO_DG.value,
        M17_Na2O: M17_Na2O_DG.value === 'undefined' ? '' : M17_Na2O_DG.value,
        N17_K2O: N17_K2O_DG.value === 'undefined' ? '' : N17_K2O_DG.value,
        O17_SO3: O17_SO3_DG.value === 'undefined' ? '' : O17_SO3_DG.value,
        P17_Cl: P17_Cl_DG.value === 'undefined' ? '' : P17_Cl_DG.value,
        H18_SiO2: H18_SiO2_DG.value === 'undefined' ? '' : H18_SiO2_DG.value,
        I18_Al2O3: I18_Al2O3_DG.value === 'undefined' ? '' : I18_Al2O3_DG.value,
        J18_Fe2O3: J18_Fe2O3_DG.value === 'undefined' ? '' : J18_Fe2O3_DG.value,
        K18_CaO: K18_CaO_DG.value === 'undefined' ? '' : K18_CaO_DG.value,
        L18_MgO: L18_MgO_DG.value === 'undefined' ? '' : L18_MgO_DG.value,
        M18_Na2O: M18_Na2O_DG.value === 'undefined' ? '' : M18_Na2O_DG.value,
        N18_K2O: N18_K2O_DG.value === 'undefined' ? '' : N18_K2O_DG.value,
        O18_SO3: O18_SO3_DG.value === 'undefined' ? '' : O18_SO3_DG.value,
        P18_Cl: P18_Cl_DG.value === 'undefined' ? '' : P18_Cl_DG.value,
        C30_LSF_PR: C30_LSF_PR_DG.value === 'undefined' ? '' : C30_LSF_PR_DG.value,
        C31_SM_PR: C31_SM_PR_DG.value === 'undefined' ? '' : C31_SM_PR_DG.value,
        C32_AM_PR: C32_AM_PR_DG.value === 'undefined' ? '' : C32_AM_PR_DG.value,
        E33_Clinker_Facto: E33_Clinker_Factor_DG.value === 'undefined' ? '' : E33_Clinker_Factor_DG.value,
        E34_RawMixType: E34_RawMixType_DG.value === 'undefined' ? '' : E34_RawMixType_DG.value,
        F30_LSF_TG: F30_LSF_TG_DG.value === 'undefined' ? '' : F30_LSF_TG_DG.value,
        F31_SM_TG: F31_SM_TG_DG.value === 'undefined' ? '' : F31_SM_TG_DG.value,
        F32_AM_TG: F32_AM_TG_DG.value === 'undefined' ? '' : F32_AM_TG_DG.value,
        H31_SiO2: H31_SiO2_DG.value === 'undefined' ? '' : H31_SiO2_DG.value,
        I31_Al2O3: I31_Al2O3_DG.value === 'undefined' ? '' : I31_Al2O3_DG.value,
        J31_Fe2O3: J31_Fe2O3_DG.value === 'undefined' ? '' : J31_Fe2O3_DG.value,
        K31_CaO: K31_CaO_DG.value === 'undefined' ? '' : K31_CaO_DG.value,
        L31_MgO: L31_MgO_DG.value === 'undefined' ? '' : L31_MgO_DG.value,
        M31_Na2O: M31_Na2O_DG.value === 'undefined' ? '' : M31_Na2O_DG.value,
        N31_K2O: N31_K2O_DG.value === 'undefined' ? '' : N31_K2O_DG.value,
        O31_SO3: O31_SO3_DG.value === 'undefined' ? '' : O31_SO3_DG.value,
        P31_Cl: P31_Cl_DG.value === 'undefined' ? '' : P31_Cl_DG.value,
        L38_KL_LOI: L38_KL_LOI_DG.value === 'undefined' ? '' : L38_KL_LOI_DG.value,
        V38_LOI: V38_LOI_DG.value === 'undefined' ? '' : V38_LOI_DG.value,
        H38_literKG: H38_literKG_DG.value === 'undefined' ? '' : H38_literKG_DG.value,
        I38_FCaO: I38_FCaO_DG.value === 'undefined' ? '' : I38_FCaO_DG.value,
        J38_BurningCondition: J38_BurningCondition_DG.value === 'undefined' ? '' : J38_BurningCondition_DG.value,
        U38_SO3: U38_SO3_DG.value === 'undefined' ? '' : U38_SO3_DG.value
    };

    localStorage.setItem('Rawmill' + rawmillnum, JSON.stringify(myObject));

});

document.addEventListener('pause', function () {
    if (rawmill1num !== null) {
        rawmillnum = rawmill1num.value;
    }
    if (rawmill2num !== null) {
        rawmillnum = rawmill2num.value;
    }
    //Store to local
    var myObject = {
        cbox16: cbox16.checked,
        D16_Limestone_DQ: cbox16.checked ? parseFloat(D16_Limestone_DQ.textContent) : parseFloat(D16_Limestone_DG.value),
        E16_Shale: cbox16.checked ? parseFloat(E16_Shale_DQ.textContent) : parseFloat(E16_Shale_DG.value),
        F16_Sand: cbox16.checked ? parseFloat(F16_Sand_DQ.textContent) : parseFloat(F16_Sand_DG.value),
        G16_Iron: cbox16.checked ? parseFloat(G16_Iron_DQ.textContent) : parseFloat(G16_Iron_DG.value),
        cbox17: cbox17.checked,
        D17_Limestone: cbox17.checked ? parseFloat(D17_Limestone_DQ.textContent) : parseFloat(D17_Limestone_DG.value),
        E17_Shale: cbox17.checked ? parseFloat(E17_Shale_DQ.textContent) : parseFloat(E17_Shale_DG.value),
        F17_Sand: cbox17.checked ? parseFloat(F17_Sand_DQ.textContent) : parseFloat(F17_Sand_DG.value),
        G17_Iron: cbox17.checked ? parseFloat(G17_Iron_DQ.textContent) : parseFloat(G17_Iron_DG.value),
        cbox18: cbox18.checked,
        D18_Limestone: cbox18.checked ? parseFloat(D18_Limestone_DQ.textContent) : parseFloat(D18_Limestone_DG.value),
        E18_Shale: cbox18.checked ? parseFloat(E18_Shale_DQ.textContent) : parseFloat(E18_Shale_DG.value),
        F18_Sand_: cbox18.checked ? parseFloat(F18_Sand_DQ.textContent) : parseFloat(F18_Sand_DG.value),
        G18_Iron: cbox18.checked ? parseFloat(G18_Iron_DQ.textContent) : parseFloat(G18_Iron_DG.value),
        cbox19: cbox19.checked,
        D19_Limestone: cbox19.checked ? parseFloat(D19_Limestone_DQ.textContent) : parseFloat(D19_Limestone_DG.value),
        E19_Shale: cbox19.checked ? parseFloat(E19_Shale_DQ.textContent) : parseFloat(E19_Shale_DG.value),
        F19_Sand: cbox19.checked ? parseFloat(F19_Sand_DQ.textContent) : parseFloat(F19_Sand_DG.value),
        G19_Iron: cbox19.checked ? parseFloat(G19_Iron_DQ.textContent) : parseFloat(G19_Iron_DG.value),
        D15: D15_DG.value === 'undefined' ? '' : D15_DG.value,
        E15: E15_DG.value === 'undefined' ? '' : E15_DG.value,
        F15: F15_DG.value === 'undefined' ? '' : F15_DG.value,
        G15: G15_DG.value === 'undefined' ? '' : G15_DG.value,
        H15_SiO2: H15_SiO2_DG.value === 'undefined' ? '' : H15_SiO2_DG.value,
        I15_Al2O3: I15_Al2O3_DG.value === 'undefined' ? '' : I15_Al2O3_DG.value,
        J15_Fe2O3: J15_Fe2O3_DG.value === 'undefined' ? '' : J15_Fe2O3_DG.value,
        K15_CaO: K15_CaO_DG.value === 'undefined' ? '' : K15_CaO_DG.value,
        L15_MgO: L15_MgO_DG.value === 'undefined' ? '' : L15_MgO_DG.value,
        M15_Na2O: M15_Na2O_DG.value === 'undefined' ? '' : M15_Na2O_DG.value,
        N15_K2O: N15_K2O_DG.value === 'undefined' ? '' : N15_K2O_DG.value,
        O15_SO3: O15_SO3_DG.value === 'undefined' ? '' : O15_SO3_DG.value,
        P15_Cl: P15_Cl_DG.value === 'undefined' ? '' : P15_Cl_DG.value,
        H16_SiO2: H16_SiO2_DG.value === 'undefined' ? '' : H16_SiO2_DG.value,
        I16_Al2O3: I16_Al2O3_DG.value === 'undefined' ? '' : I16_Al2O3_DG.value,
        J16_Fe2O3: J16_Fe2O3_DG.value === 'undefined' ? '' : J16_Fe2O3_DG.value,
        K16_CaO: K16_CaO_DG.value === 'undefined' ? '' : K16_CaO_DG.value,
        L16_MgO: L16_MgO_DG.value === 'undefined' ? '' : L16_MgO_DG.value,
        M16_Na2O: M16_Na2O_DG.value === 'undefined' ? '' : M16_Na2O_DG.value,
        N16_K2O: N16_K2O_DG.value === 'undefined' ? '' : N16_K2O_DG.value,
        O16_SO3: O16_SO3_DG.value === 'undefined' ? '' : O16_SO3_DG.value,
        P16_Cl: P16_Cl_DG.value === 'undefined' ? '' : P16_Cl_DG.value,
        H17_SiO2: H17_SiO2_DG.value === 'undefined' ? '' : H17_SiO2_DG.value,
        I17_Al2O3: I17_Al2O3_DG.value === 'undefined' ? '' : I17_Al2O3_DG.value,
        J17_Fe2O3: J17_Fe2O3_DG.value === 'undefined' ? '' : J17_Fe2O3_DG.value,
        K17_CaO: K17_CaO_DG.value === 'undefined' ? '' : K17_CaO_DG.value,
        L17_MgO: L17_MgO_DG.value === 'undefined' ? '' : L17_MgO_DG.value,
        M17_Na2O: M17_Na2O_DG.value === 'undefined' ? '' : M17_Na2O_DG.value,
        N17_K2O: N17_K2O_DG.value === 'undefined' ? '' : N17_K2O_DG.value,
        O17_SO3: O17_SO3_DG.value === 'undefined' ? '' : O17_SO3_DG.value,
        P17_Cl: P17_Cl_DG.value === 'undefined' ? '' : P17_Cl_DG.value,
        H18_SiO2: H18_SiO2_DG.value === 'undefined' ? '' : H18_SiO2_DG.value,
        I18_Al2O3: I18_Al2O3_DG.value === 'undefined' ? '' : I18_Al2O3_DG.value,
        J18_Fe2O3: J18_Fe2O3_DG.value === 'undefined' ? '' : J18_Fe2O3_DG.value,
        K18_CaO: K18_CaO_DG.value === 'undefined' ? '' : K18_CaO_DG.value,
        L18_MgO: L18_MgO_DG.value === 'undefined' ? '' : L18_MgO_DG.value,
        M18_Na2O: M18_Na2O_DG.value === 'undefined' ? '' : M18_Na2O_DG.value,
        N18_K2O: N18_K2O_DG.value === 'undefined' ? '' : N18_K2O_DG.value,
        O18_SO3: O18_SO3_DG.value === 'undefined' ? '' : O18_SO3_DG.value,
        P18_Cl: P18_Cl_DG.value === 'undefined' ? '' : P18_Cl_DG.value,
        C30_LSF_PR: C30_LSF_PR_DG.value === 'undefined' ? '' : C30_LSF_PR_DG.value,
        C31_SM_PR: C31_SM_PR_DG.value === 'undefined' ? '' : C31_SM_PR_DG.value,
        C32_AM_PR: C32_AM_PR_DG.value === 'undefined' ? '' : C32_AM_PR_DG.value,
        E33_Clinker_Facto: E33_Clinker_Factor_DG.value === 'undefined' ? '' : E33_Clinker_Factor_DG.value,
        E34_RawMixType: E34_RawMixType_DG.value === 'undefined' ? '' : E34_RawMixType_DG.value,
        F30_LSF_TG: F30_LSF_TG_DG.value === 'undefined' ? '' : F30_LSF_TG_DG.value,
        F31_SM_TG: F31_SM_TG_DG.value === 'undefined' ? '' : F31_SM_TG_DG.value,
        F32_AM_TG: F32_AM_TG_DG.value === 'undefined' ? '' : F32_AM_TG_DG.value,
        H31_SiO2: H31_SiO2_DG.value === 'undefined' ? '' : H31_SiO2_DG.value,
        I31_Al2O3: I31_Al2O3_DG.value === 'undefined' ? '' : I31_Al2O3_DG.value,
        J31_Fe2O3: J31_Fe2O3_DG.value === 'undefined' ? '' : J31_Fe2O3_DG.value,
        K31_CaO: K31_CaO_DG.value === 'undefined' ? '' : K31_CaO_DG.value,
        L31_MgO: L31_MgO_DG.value === 'undefined' ? '' : L31_MgO_DG.value,
        M31_Na2O: M31_Na2O_DG.value === 'undefined' ? '' : M31_Na2O_DG.value,
        N31_K2O: N31_K2O_DG.value === 'undefined' ? '' : N31_K2O_DG.value,
        O31_SO3: O31_SO3_DG.value === 'undefined' ? '' : O31_SO3_DG.value,
        P31_Cl: P31_Cl_DG.value === 'undefined' ? '' : P31_Cl_DG.value,
        L38_KL_LOI: L38_KL_LOI_DG.value === 'undefined' ? '' : L38_KL_LOI_DG.value,
        V38_LOI: V38_LOI_DG.value === 'undefined' ? '' : V38_LOI_DG.value,
        H38_literKG: H38_literKG_DG.value === 'undefined' ? '' : H38_literKG_DG.value,
        I38_FCaO: I38_FCaO_DG.value === 'undefined' ? '' : I38_FCaO_DG.value,
        J38_BurningCondition: J38_BurningCondition_DG.value === 'undefined' ? '' : J38_BurningCondition_DG.value,
        U38_SO3: U38_SO3_DG.value === 'undefined' ? '' : U38_SO3_DG.value
    };

    localStorage.setItem('Rawmill' + rawmillnum, JSON.stringify(myObject));

    console.log('App paused (minimized)');
    // Perform actions when the app is paused, such as saving data
});

// Detect when the app comes back into the foreground
document.addEventListener('resume', function () {
    if (rawmill1num !== null) {
        rawmillnum = rawmill1num.value;
    }
    if (rawmill2num !== null) {
        rawmillnum = rawmill2num.value;
    }
    var storedObject = JSON.parse(localStorage.getItem('Rawmill' + rawmillnum));
    if (storedObject !== null) {

        const ck16 = storedObject.cbox16;
        const ck17 = storedObject.cbox17;
        const ck18 = storedObject.cbox18;
        const ck19 = storedObject.cbox19;

        if (ck16 == true || ck16 == 'true') {
            console.log("16: TRUE")
            inputContainerD16_Limestone.style.display = "none";
            inputContainerE16_Shale.style.display = "none";
            inputContainerF16_Sand.style.display = "none";
            inputContainerG16_Iron.style.display = "none";

            labelContainerD16_Limestone.style.display = "block";
            labelContainerE16_Shale.style.display = "block";
            labelContainerF16_Sand.style.display = "block";
            labelContainerG16_Iron.style.display = "block";
            cbox16.value = true;
            cbox16.checked = true;
        } else {
            console.log("16: FALSE")
            inputContainerD16_Limestone.style.display = "block";
            inputContainerE16_Shale.style.display = "block";
            inputContainerF16_Sand.style.display = "block";
            inputContainerG16_Iron.style.display = "block";
            labelContainerD16_Limestone.style.display = "none";
            labelContainerE16_Shale.style.display = "none";
            labelContainerF16_Sand.style.display = "none";
            labelContainerG16_Iron.style.display = "none";
            cbox16.value = false;
            cbox16.checked = false;
        }
        if (ck17 == true || ck17 == 'true') {
            console.log("17: TRUE")
            inputContainerD17_Limestone.style.display = "none";
            inputContainerE17_Shale.style.display = "none";
            inputContainerF17_Sand.style.display = "none";
            inputContainerG17_Iron.style.display = "none";
            labelContainerD17_Limestone.style.display = "block";
            labelContainerE17_Shale.style.display = "block";
            labelContainerF17_Sand.style.display = "block";
            labelContainerG17_Iron.style.display = "block";
            cbox17.value = true;
            cbox17.checked = true;
        } else {
            console.log("17: FALSE")

            inputContainerD17_Limestone.style.display = "block";
            inputContainerE17_Shale.style.display = "block";
            inputContainerF17_Sand.style.display = "block";
            inputContainerG17_Iron.style.display = "block";
            labelContainerD17_Limestone.style.display = "none";
            labelContainerE17_Shale.style.display = "none";
            labelContainerF17_Sand.style.display = "none";
            labelContainerG17_Iron.style.display = "none";
            cbox17.value = false;
            cbox17.checked = false;
        }
        if (ck18 == true || ck18 == 'true') {
            console.log("18: TRUE")
            inputContainerD18_Limestone.style.display = "none";
            inputContainerE18_Shale.style.display = "none";
            inputContainerF18_Sand.style.display = "none";
            inputContainerG18_Iron.style.display = "none";
            labelContainerD18_Limestone.style.display = "block";
            labelContainerE18_Shale.style.display = "block";
            labelContainerF18_Sand.style.display = "block";
            labelContainerG18_Iron.style.display = "block";
            cbox18.value = true;
            cbox18.checked = true;
        } else {

            console.log("18: FALSE")
            inputContainerD18_Limestone.style.display = "block";
            inputContainerE18_Shale.style.display = "block";
            inputContainerF18_Sand.style.display = "block";
            inputContainerG18_Iron.style.display = "block";
            labelContainerD18_Limestone.style.display = "none";
            labelContainerE18_Shale.style.display = "none";
            labelContainerF18_Sand.style.display = "none";
            labelContainerG18_Iron.style.display = "none";
            cbox18.value = false;
            cbox18.checked = false;
        }
        if (ck19 == true || ck19 == 'true') {
            console.log("19: TRUE")
            inputContainerD19_Limestone.style.display = "none";
            inputContainerE19_Shale.style.display = "none";
            inputContainerF19_Sand.style.display = "none";
            inputContainerG19_Iron.style.display = "none";
            labelContainerD19_Limestone.style.display = "block";
            labelContainerE19_Shale.style.display = "block";
            labelContainerF19_Sand.style.display = "block";
            labelContainerG19_Iron.style.display = "block";
            cbox19.value = true;
            cbox19.checked = true;
        } else {

            console.log("19: FALSE")
            inputContainerD19_Limestone.style.display = "block";
            inputContainerE19_Shale.style.display = "block";
            inputContainerF19_Sand.style.display = "block";
            inputContainerG19_Iron.style.display = "block";
            labelContainerD19_Limestone.style.display = "none";
            labelContainerE19_Shale.style.display = "none";
            labelContainerF19_Sand.style.display = "none";
            labelContainerG19_Iron.style.display = "none";
            cbox19.value = false;
            cbox19.checked = false;
        }

        (ck16 == true || ck16 == 'true')
            ? D16_Limestone_DQ.textContent
            : (D16_Limestone_DG.value = storedObject.D16_Limestone);
        (ck16 == true || ck16 == 'true')
            ? E16_Shale_DQ.textContent
            : (E16_Shale_DG.value = storedObject.E16_Shale);
        (ck16 == true || ck16 == 'true')
            ? F16_Sand_DQ.textContent
            : (F16_Sand_DG.value = storedObject.F16_Sand);
        (ck16 == true || ck16 == 'true')
            ? G16_Iron_DQ.textContent
            : (G16_Iron_DG.value = storedObject.G16_Iron);
        (ck17 == true || ck17 == 'true')
            ? D17_Limestone_DQ.textContent
            : (D17_Limestone_DG.value = storedObject.D17_Limestone);
        (ck17 == true || ck17 == 'true')
            ? E17_Shale_DQ.textContent
            : (E17_Shale_DG.value = storedObject.E17_Shale);
        (ck17 == true || ck17 == 'true')
            ? F17_Sand_DQ.textContent
            : (F17_Sand_DG.value = storedObject.F17_Sand);
        (ck17 == true || ck17 == 'true')
            ? G17_Iron_DQ.textContent
            : (G17_Iron_DG.value = storedObject.G17_Iron);
        (ck18 == true || ck18 == 'true')
            ? D18_Limestone_DQ.textContent
            : (D18_Limestone_DG.value = storedObject.D18_Limestone);
        (ck18 == true || ck18 == 'true')
            ? E18_Shale_DQ.textContent
            : (E18_Shale_DG.value = storedObject.E18_Shale);
        (ck18 == true || ck18 == 'true')
            ? F18_Sand_DQ.textContent
            : (F18_Sand_DG.value = storedObject.F18_Sand);
        (ck18 == true || ck18 == 'true')
            ? G18_Iron_DQ.textContent
            : (G18_Iron_DG.value = storedObject.G18_Iron);
        (ck19 == true || ck19 == 'true')
            ? D19_Limestone_DQ.textContent
            : (D19_Limestone_DG.value = storedObject.D19_Limestone);
        (ck19 == true || ck19 == 'true')
            ? E19_Shale_DQ.textContent
            : (E19_Shale_DG.value = storedObject.E19_Shale);
        (ck19 == true || ck19 == 'true')
            ? F19_Sand_DQ.textContent
            : (F19_Sand_DG.value = storedObject.F19_Sand);
        (ck19 == true || ck19 == 'true')
            ? G19_Iron_DQ.textContent
            : (G19_Iron_DG.value = storedObject.G19_Iron);

        D15_DG.value = storedObject.D15;
        E15_DG.value = storedObject.E15;
        F15_DG.value = storedObject.F15;
        G15_DG.value = storedObject.G15;
        H15_SiO2_DG.value = storedObject.H15_SiO2;
        I15_Al2O3_DG.value = storedObject.I15_Al2O3;
        J15_Fe2O3_DG.value = storedObject.J15_Fe2O3;
        K15_CaO_DG.value = storedObject.K15_CaO;
        L15_MgO_DG.value = storedObject.L15_MgO;
        M15_Na2O_DG.value = storedObject.M15_Na2O;
        N15_K2O_DG.value = storedObject.N15_K2O;
        O15_SO3_DG.value = storedObject.O15_SO3;
        P15_Cl_DG.value = storedObject.P15_Cl;
        H16_SiO2_DG.value = storedObject.H16_SiO2;
        I16_Al2O3_DG.value = storedObject.I16_Al2O3;
        J16_Fe2O3_DG.value = storedObject.J16_Fe2O3;
        K16_CaO_DG.value = storedObject.K16_CaO;
        L16_MgO_DG.value = storedObject.L16_MgO;
        M16_Na2O_DG.value = storedObject.M16_Na2O;
        N16_K2O_DG.value = storedObject.N16_K2O;
        O16_SO3_DG.value = storedObject.O16_SO3;
        P16_Cl_DG.value = storedObject.P16_Cl;
        H17_SiO2_DG.value = storedObject.H17_SiO2;
        I17_Al2O3_DG.value = storedObject.I17_Al2O3;
        J17_Fe2O3_DG.value = storedObject.J17_Fe2O3;
        K17_CaO_DG.value = storedObject.K17_CaO;
        L17_MgO_DG.value = storedObject.L17_MgO;
        M17_Na2O_DG.value = storedObject.M17_Na2O;
        N17_K2O_DG.value = storedObject.N17_K2O;
        O17_SO3_DG.value = storedObject.O17_SO3;
        P17_Cl_DG.value = storedObject.P17_Cl;
        H18_SiO2_DG.value = storedObject.H18_SiO2;
        I18_Al2O3_DG.value = storedObject.I18_Al2O3;
        J18_Fe2O3_DG.value = storedObject.J18_Fe2O3;
        K18_CaO_DG.value = storedObject.K18_CaO;
        L18_MgO_DG.value = storedObject.L18_MgO;
        M18_Na2O_DG.value = storedObject.M18_Na2O;
        N18_K2O_DG.value = storedObject.N18_K2O;
        O18_SO3_DG.value = storedObject.O18_SO3;
        P18_Cl_DG.value = storedObject.P18_Cl;
        C30_LSF_PR_DG.value = storedObject.C30_LSF_PR;
        C31_SM_PR_DG.value = storedObject.C31_SM_PR;
        C32_AM_PR_DG.value = storedObject.C32_AM_PR;
        E33_Clinker_Factor_DG.value = storedObject.E33_Clinker_Factor;
        E34_RawMixType_DG.value = storedObject.E34_RawMixType;
        F30_LSF_TG_DG.value = storedObject.F30_LSF_TG;
        F31_SM_TG_DG.value = storedObject.F31_SM_TG;
        F32_AM_TG_DG.value = storedObject.F32_AM_TG;
        H31_SiO2_DG.value = storedObject.H31_SiO2;
        I31_Al2O3_DG.value = storedObject.I31_Al2O3;
        J31_Fe2O3_DG.value = storedObject.J31_Fe2O3;
        K31_CaO_DG.value = storedObject.K31_CaO;
        L31_MgO_DG.value = storedObject.L31_MgO;
        M31_Na2O_DG.value = storedObject.M31_Na2O;
        N31_K2O_DG.value = storedObject.N31_K2O;
        O31_SO3_DG.value = storedObject.O31_SO3;
        P31_Cl_DG.value = storedObject.P31_Cl;
        L38_KL_LOI_DG.value = storedObject.L38_KL_LOI;
        V38_LOI_DG.value = storedObject.V38_LOI;
        H38_literKG_DG.value = storedObject.H38_literKG;
        I38_FCaO_DG.value = storedObject.I38_FCaO;
        J38_BurningCondition_DG.value = storedObject.J38_BurningCondition;
        U38_SO3_DG.value = storedObject.U38_SO3;
        // computeall();

    }
    console.log('App resumed (foreground)');
    // Perform actions when the app is resumed, such as restoring data
});

let check16_Limestone;
let check16_Shale;
let check16_Sand;
let check16_Iron;

let check17_Limestone;
let check17_Shale;
let check17_Sand;
let check17_Iron;

let check18_Limestone;
let check18_Shale;
let check18_Sand;
let check18_Iron;

let check19_Limestone;
let check19_Shale;
let check19_Sand;
let check19_Iron;

let initialDistance = 0;
let currentZoom = 1;
// end Finger Pinch

// SQLITE
// CREATE TABLE

const notification = document.getElementById('notify1');
const notification2 = document.getElementById('notifyerror1');

function showNotification(message, duration, notifynum) {
    if (notifynum == 1) {
        notification.textContent = message;
        notification.style.display = 'block';

    } else if (notifynum == 2) {
        notification2.textContent = message;
        notification2.style.display = 'block';
    }
    setTimeout(() => {
        if (notifynum == 1) {
            notification.style.display = 'none';

        } else if (notifynum == 2) {
            notification2.style.display = 'none';
        }
    }, duration);
}

// Example usage:
// showNotification('This notification will auto-close after 3 seconds.', 3000);

function createActionButton2(label, onClick, color) {
    const button = document.createElement("button");
    button.textContent = label;
    button.style.backgroundColor = color;
    button.addEventListener("click", onClick);
    return button;
}

function onDeviceReady() {



    // Lock the screen orientation to landscape
    screen.orientation.lock('landscape')
        .then(function () {
            console.log('Screen orientation locked to landscape.');
        })
        .catch(function (error) {
            console.error('Failed to lock the screen orientation: ', error);
        });

    // Initialize SQLite database
    db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert2.db",
        location: "default",
    });



    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS rmTable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NULL, email TEXT NULL, check16 BOOLEAN, D16_Limestone NUMERIC NULL,E16_Shale NUMERIC NULL,F16_Sand NUMERIC NULL,G16_Iron NUMERIC NULL, check17 BOOLEAN, D17_Limestone NUMERIC NULL,E17_Shale NUMERIC NULL,F17_Sand NUMERIC NULL,G17_Iron NUMERIC NULL, check18 BOOLEAN, D18_Limestone NUMERIC NULL,E18_Shale NUMERIC NULL,F18_Sand NUMERIC NULL,G18_Iron NUMERIC NULL, check19 BOOLEAN, D19_Limestone NUMERIC NULL,E19_Shale NUMERIC NULL,F19_Sand NUMERIC NULL,G19_Iron NUMERIC NULL, D15 NUMERIC,E15 NUMERIC,F15 NUMERIC,G15 NUMERIC,H15_SiO2 NUMERIC,I15_Al2O3 NUMERIC,J15_Fe2O3 NUMERIC,K15_CaO NUMERIC,L15_MgO NUMERIC,M15_Na2O NUMERIC,N15_K2O NUMERIC,O15_SO3 NUMERIC,P15_Cl NUMERIC,H16_SiO2 NUMERIC,I16_Al2O3 NUMERIC,J16_Fe2O3 NUMERIC,K16_CaO NUMERIC,L16_MgO NUMERIC,M16_Na2O NUMERIC,N16_K2O NUMERIC,O16_SO3 NUMERIC,P16_Cl NUMERIC,H17_SiO2 NUMERIC,I17_Al2O3 NUMERIC,J17_Fe2O3 NUMERIC,K17_CaO NUMERIC,L17_MgO NUMERIC,M17_Na2O NUMERIC,N17_K2O NUMERIC,O17_SO3 NUMERIC,P17_Cl NUMERIC,H18_SiO2 NUMERIC,I18_Al2O3 NUMERIC,J18_Fe2O3 NUMERIC,K18_CaO NUMERIC,L18_MgO NUMERIC,M18_Na2O NUMERIC,N18_K2O NUMERIC,O18_SO3 NUMERIC,P18_Cl NUMERIC,C30_LSF_PR NUMERIC,C31_SM_PR NUMERIC,C32_AM_PR NUMERIC,E33_Clinker_Factor NUMERIC,E34_RawMixType TEXT,F30_LSF_TG NUMERIC,F31_SM_TG NUMERIC,F32_AM_TG NUMERIC,H31_SiO2 NUMERIC,I31_Al2O3 NUMERIC,J31_Fe2O3 NUMERIC,K31_CaO NUMERIC,L31_MgO NUMERIC,M31_Na2O NUMERIC,N31_K2O NUMERIC,O31_SO3 NUMERIC,P31_Cl NUMERIC,L38_KL_LOI NUMERIC, V38_LOI NUMERIC, H38_literKG TEXT,I38_FCaO NUMERIC, J38_BurningCondition TEXT, U38_SO3 TEXT, DT DATETIME)",
            [],
            () => console.log("Table rm created successfully"),
            (error) => console.error("Error rm creating table", error.message)
        );
    });

    // console.log("SQLite plugin is ready.");
    // db.transaction((tx) => {
    //   var query = 'ALTER TABLE rmTable ADD COLUMN H38_literKG TEXT, J38_BurningCondition TEXT, U38_SO3 TEXT';

    //   tx.executeSql(query, [], function (tx, result) {
    //     alert("Columns added successfully.");
    //   }, function (error) {
    //     alert("Error adding columns:" + error.message);
    //     alert("Error adding columns:" + error);
    //     console.log("Error adding columns:", error.message);
    //     console.log("Error adding columns:", error);
    //   });
    // })

    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC",
            [localStorage.getItem("email")],
            function (tx, result) {
                const table = document.getElementById("material_table");
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

                    // Populate the cells with datac
                    idCell.textContent = id;
                    nameCell.textContent = name;

                    const selectButton = createActionButton2("Select", function () {
                        if (confirm("Are you sure you want to 'select' RAWMILL ID:" + id + "'s record?")) {
                            alert("Selected ID: " + id + ", Name: " + name)
                            load_ma(id);
                        }

                    }, "blue");
                    const updateButton = createActionButton2("Update", function () {
                        if (confirm("Are you sure you want to update RAWMILL ID:" + id + "'s record?")) {
                            update_ma(id);

                        }


                    }, "orange");
                    const deleteButton = createActionButton2("Delete", function () {
                        if (confirm("Are you sure you want to delete RAWMILL ID: " + id + "'s record?")) {
                            deleteRecord(id);
                            mloadlist();
                        }
                    }, "red");

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



function clearnow() {
    console.log("CLEAR!!!");
    cbox16.value = false;
    cbox17.value = false;
    cbox18.value = false;
    cbox19.value = false;
    cbox16.checked = false;
    cbox17.checked = false;
    cbox18.checked = false;
    cbox19.checked = false;
    D16_Limestone_DG.value = "";
    E16_Shale_DG.value = "";
    F16_Sand_DG.value = "";
    G16_Iron_DG.value = "";
    D17_Limestone_DG.value = "";
    E17_Shale_DG.value = "";
    F17_Sand_DG.value = "";
    G17_Iron_DG.value = "";
    D18_Limestone_DG.value = "";
    E18_Shale_DG.value = "";
    F18_Sand_DG.value = "";
    G18_Iron_DG.value = "";
    D19_Limestone_DG.value = "";
    E19_Shale_DG.value = "";
    F19_Sand_DG.value = "";
    G19_Iron_DG.value = "";
    D15_DG.value = "";
    E15_DG.value = "";
    F15_DG.value = "";
    G15_DG.value = "";
    H15_SiO2_DG.value = "";
    I15_Al2O3_DG.value = "";
    J15_Fe2O3_DG.value = "";
    K15_CaO_DG.value = "";
    L15_MgO_DG.value = "";
    M15_Na2O_DG.value = "";
    N15_K2O_DG.value = "";
    O15_SO3_DG.value = "";
    P15_Cl_DG.value = "";
    H16_SiO2_DG.value = "";
    I16_Al2O3_DG.value = "";
    J16_Fe2O3_DG.value = "";
    K16_CaO_DG.value = "";
    L16_MgO_DG.value = "";
    M16_Na2O_DG.value = "";
    N16_K2O_DG.value = "";
    O16_SO3_DG.value = "";
    P16_Cl_DG.value = "";
    H17_SiO2_DG.value = "";
    I17_Al2O3_DG.value = "";
    J17_Fe2O3_DG.value = "";
    K17_CaO_DG.value = "";
    L17_MgO_DG.value = "";
    M17_Na2O_DG.value = "";
    N17_K2O_DG.value = "";
    O17_SO3_DG.value = "";
    P17_Cl_DG.value = "";
    H18_SiO2_DG.value = "";
    I18_Al2O3_DG.value = "";
    J18_Fe2O3_DG.value = "";
    K18_CaO_DG.value = "";
    L18_MgO_DG.value = "";
    M18_Na2O_DG.value = "";
    N18_K2O_DG.value = "";
    O18_SO3_DG.value = "";
    P18_Cl_DG.value = "";
    C30_LSF_PR_DG.value = "";
    C31_SM_PR_DG.value = "";
    C32_AM_PR_DG.value = "";
    E33_Clinker_Factor_DG.value = "";
    E34_RawMixType_DG.value = "";
    F30_LSF_TG_DG.value = "";
    F31_SM_TG_DG.value = "";
    F32_AM_TG_DG.value = "";
    H31_SiO2_DG.value = "";
    I31_Al2O3_DG.value = "";
    J31_Fe2O3_DG.value = "";
    K31_CaO_DG.value = "";
    L31_MgO_DG.value = "";
    M31_Na2O_DG.value = "";
    N31_K2O_DG.value = "";
    O31_SO3_DG.value = "";
    P31_Cl_DG.value = "";
    L38_KL_LOI_DG.value = "";
    V38_LOI_DG.value = "";
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
    H38_literKG_DG.value = "";
    I38_FCaO_DG.value = "";
    U38_SO3_DG.value = ""
    J38_BurningCondition_DG.value = "";
    total_C15_DG.textContent = "0.00"
    total_C16_DG.textContent = "0.00"
    total_C17_DG.textContent = "0.00"
    total_C18_DG.textContent = "0.00"
    total_C19_DG.textContent = "0.00"
    Q15_LOI_DG.textContent = "0.00"
    Q16_LOI_DG.textContent = "0.00"
    Q17_LOI_DG.textContent = "0.00"
    Q18_LOI_DG.textContent = "0.00"
    R15_XRFtotal_DG.textContent = "0.00"
    R16_XRFtotal_DG.textContent = "0.00"
    R17_XRFtotal_DG.textContent = "0.00"
    R18_XRFtotal_DG.textContent = "0.00"
    S15_LSF_DG.textContent = "0.00"
    S16_LSF_DG.textContent = "0.00"
    S17_LSF_DG.textContent = "0.00"
    S18_LSF_DG.textContent = "0.00"
    T15_HM_DG.textContent = "0.00"
    T16_HM_DG.textContent = "0.00"
    T17_HM_DG.textContent = "0.00"
    T18_HM_DG.textContent = "0.00"
    U15_SM_DG.textContent = "0.00"
    U16_SM_DG.textContent = "0.00"
    U17_SM_DG.textContent = "0.00"
    U18_SM_DG.textContent = "0.00"
    V15_AM_DG.textContent = "0.00"
    V16_AM_DG.textContent = "0.00"
    V17_AM_DG.textContent = "0.00"
    V18_AM_DG.textContent = "0.00"
    D20_AVG_DG.textContent = "0.00"
    E20_AVG_DG.textContent = "0.00"
    F20_AVG_DG.textContent = "0.00"
    G20_AVG_DG.textContent = "0.00"
    H20_AVG_DG.textContent = "0.00"
    I20_AVG_DG.textContent = "0.00"
    J20_AVG_DG.textContent = "0.00"
    K20_AVG_DG.textContent = "0.00"
    L20_AVG_DG.textContent = "0.00"
    M20_AVG_DG.textContent = "0.00"
    N20_AVG_DG.textContent = "0.00"
    O20_AVG_DG.textContent = "0.00"
    P20_AVG_DG.textContent = "0.00"
    Q20_AVG_DG.textContent = "0.00"
    R20_AVG_DG.textContent = "0.00"
    S20_AVG_DG.textContent = "0.00"
    T20_AVG_DG.textContent = "0.00"
    U20_AVG_DG.textContent = "0.00"
    V20_AVG_DG.textContent = "0.00"
    D20_STDEV_DG.textContent = "0.00"
    E20_STDEV_DG.textContent = "0.00"
    F20_STDEV_DG.textContent = "0.00"
    G20_STDEV_DG.textContent = "0.00"
    H20_STDEV_DG.textContent = "0.00"
    I20_STDEV_DG.textContent = "0.00"
    J20_STDEV_DG.textContent = "0.00"
    K20_STDEV_DG.textContent = "0.00"
    L20_STDEV_DG.textContent = "0.00"
    M20_STDEV_DG.textContent = "0.00"
    N20_STDEV_DG.textContent = "0.00"
    O20_STDEV_DG.textContent = "0.00"
    P20_STDEV_DG.textContent = "0.00"
    Q20_STDEV_DG.textContent = "0.00"
    R20_STDEV_DG.textContent = "0.00"
    S20_STDEV_DG.textContent = "0.00"
    T20_STDEV_DG.textContent = "0.00"
    U20_STDEV_DG.textContent = "0.00"
    V20_STDEV_DG.textContent = "0.00"
    D20_MIN_DG.textContent = "0.00"
    E20_MIN_DG.textContent = "0.00"
    F20_MIN_DG.textContent = "0.00"
    G20_MIN_DG.textContent = "0.00"
    H20_MIN_DG.textContent = "0.00"
    I20_MIN_DG.textContent = "0.00"
    J20_MIN_DG.textContent = "0.00"
    K20_MIN_DG.textContent = "0.00"
    L20_MIN_DG.textContent = "0.00"
    M20_MIN_DG.textContent = "0.00"
    N20_MIN_DG.textContent = "0.00"
    O20_MIN_DG.textContent = "0.00"
    P20_MIN_DG.textContent = "0.00"
    Q20_MIN_DG.textContent = "0.00"
    R20_MIN_DG.textContent = "0.00"
    S20_MIN_DG.textContent = "0.00"
    T20_MIN_DG.textContent = "0.00"
    U20_MIN_DG.textContent = "0.00"
    V20_MIN_DG.textContent = "0.00"
    D20_MAX_DG.textContent = "0.00"
    E20_MAX_DG.textContent = "0.00"
    F20_MAX_DG.textContent = "0.00"
    G20_MAX_DG.textContent = "0.00"
    H20_MAX_DG.textContent = "0.00"
    I20_MAX_DG.textContent = "0.00"
    J20_MAX_DG.textContent = "0.00"
    K20_MAX_DG.textContent = "0.00"
    L20_MAX_DG.textContent = "0.00"
    M20_MAX_DG.textContent = "0.00"
    N20_MAX_DG.textContent = "0.00"
    O20_MAX_DG.textContent = "0.00"
    P20_MAX_DG.textContent = "0.00"
    Q20_MAX_DG.textContent = "0.00"
    R20_MAX_DG.textContent = "0.00"
    S20_MAX_DG.textContent = "0.00"
    T20_MAX_DG.textContent = "0.00"
    U20_MAX_DG.textContent = "0.00"
    V20_MAX_DG.textContent = "0.00"
    O35_SO3_DG.textContent = "0.00"
    Q31_LOI_DG.textContent = "0.00"
    R31_total_DG.textContent = "0.00"
    S31_LSF_DG.textContent = "0.00"
    T31_HM_DG.textContent = "0.00"
    U31_SM_DG.textContent = "0.00"
    V31_AM_DG.textContent = "0.00"
    H35_SiO2_DG.textContent = "0.00"
    I35_Al2O3_DG.textContent = "0.00"
    J35_Fe2O3_DG.textContent = "0.00"
    K35_CaO_DG.textContent = "0.00"
    L35_MgO_DG.textContent = "0.00"
    M35_Na2O_DG.textContent = "0.00"
    N35_K2O_DG.textContent = "0.00"
    // O35_SO3_DG.textContent = ""
    P35_Cl_DG.textContent = "0.00"
    Q35_ECC_total_DG.textContent = "0.00"
    S35_LSF_DG.textContent = "0.00"
    T35_HM_DG.textContent = "0.00"
    U35_SM_DG.textContent = "0.00"
    V35_AM_DG.textContent = "0.00"
    I38_FCaO_DG.textContent = "0.00"
    L38_KL_LOI_DG.textContent = "0.00"
    V38_LOI_DG.textContent = "0.00"
    K38_DOC_DG.textContent = "0.00"
    M38_C3Snet_DG.textContent = "0.00"
    N38_C2S_DG.textContent = "0.00"
    O38_C3A_DG.textContent = "0.00"
    P38_C4AF_DG.textContent = "0.00"
    Q38_Sulfur_Alkali_ratio_DG.textContent = "0.00"
    R38_total_Alkali_DG.textContent = "0.00"
    S38_Liquid_Phase_DG.textContent = "0.00"
    T38_Coating_Index_DG.textContent = "0.00"

    if (cbox16.checked == true) {

        D16_Limestone_DQ.textContent = "0.00"
        E16_Shale_DQ.textContent = "0.00"
        F16_Sand_DQ.textContent = "0.00"
        G16_Iron_DQ.textContent = "0.00"

        inputContainerD16_Limestone.style.display = "none";
        inputContainerE16_Shale.style.display = "none";
        inputContainerF16_Sand.style.display = "none";
        inputContainerG16_Iron.style.display = "none";
        labelContainerD16_Limestone.style.display = "block";
        labelContainerE16_Shale.style.display = "block";
        labelContainerF16_Sand.style.display = "block";
        labelContainerG16_Iron.style.display = "block";
    } else {

        inputContainerD16_Limestone.style.display = "block";
        inputContainerE16_Shale.style.display = "block";
        inputContainerF16_Sand.style.display = "block";
        inputContainerG16_Iron.style.display = "block";
        labelContainerD16_Limestone.style.display = "none";
        labelContainerE16_Shale.style.display = "none";
        labelContainerF16_Sand.style.display = "none";
        labelContainerG16_Iron.style.display = "none";
    }
    if (cbox17.checked == true) {

        D17_Limestone_DQ.textContent = "0.00"
        E17_Shale_DQ.textContent = "0.00"
        F17_Sand_DQ.textContent = "0.00"
        G17_Iron_DQ.textContent = "0.00"

        inputContainerD17_Limestone.style.display = "none";
        inputContainerE17_Shale.style.display = "none";
        inputContainerF17_Sand.style.display = "none";
        inputContainerG17_Iron.style.display = "none";
        labelContainerD17_Limestone.style.display = "block";
        labelContainerE17_Shale.style.display = "block";
        labelContainerF17_Sand.style.display = "block";
        labelContainerG17_Iron.style.display = "block";
    } else {

        inputContainerD17_Limestone.style.display = "block";
        inputContainerE17_Shale.style.display = "block";
        inputContainerF17_Sand.style.display = "block";
        inputContainerG17_Iron.style.display = "block";
        labelContainerD17_Limestone.style.display = "none";
        labelContainerE17_Shale.style.display = "none";
        labelContainerF17_Sand.style.display = "none";
        labelContainerG17_Iron.style.display = "none";
    }
    if (cbox18.checked == true) {
        D18_Limestone_DQ.textContent = "0.00"
        E18_Shale_DQ.textContent = "0.00"
        F18_Sand_DQ.textContent = "0.00"
        G18_Iron_DQ.textContent = "0.00"

        inputContainerD18_Limestone.style.display = "none";
        inputContainerE18_Shale.style.display = "none";
        inputContainerF18_Sand.style.display = "none";
        inputContainerG18_Iron.style.display = "none";
        labelContainerD18_Limestone.style.display = "block";
        labelContainerE18_Shale.style.display = "block";
        labelContainerF18_Sand.style.display = "block";
        labelContainerG18_Iron.style.display = "block";
    } else {

        inputContainerD18_Limestone.style.display = "block";
        inputContainerE18_Shale.style.display = "block";
        inputContainerF18_Sand.style.display = "block";
        inputContainerG18_Iron.style.display = "block";
        labelContainerD18_Limestone.style.display = "none";
        labelContainerE18_Shale.style.display = "none";
        labelContainerF18_Sand.style.display = "none";
        labelContainerG18_Iron.style.display = "none";
    }
    if (cbox19.checked == true) {
        D19_Limestone_DQ.textContent = "0.00"
        E19_Shale_DQ.textContent = "0.00"
        F19_Sand_DQ.textContent = "0.00"
        G19_Iron_DQ.textContent = "0.00"

        inputContainerD19_Limestone.style.display = "none";
        inputContainerE19_Shale.style.display = "none";
        inputContainerF19_Sand.style.display = "none";
        inputContainerG19_Iron.style.display = "none";
        labelContainerD19_Limestone.style.display = "block";
        labelContainerE19_Shale.style.display = "block";
        labelContainerF19_Sand.style.display = "block";
        labelContainerG19_Iron.style.display = "block";
    } else {

        inputContainerD19_Limestone.style.display = "block";
        inputContainerE19_Shale.style.display = "block";
        inputContainerF19_Sand.style.display = "block";
        inputContainerG19_Iron.style.display = "block";
        labelContainerD19_Limestone.style.display = "none";
        labelContainerE19_Shale.style.display = "none";
        labelContainerF19_Sand.style.display = "none";
        labelContainerG19_Iron.style.display = "none";
    }
};
window.clearnow = clearnow;

function checked_select() {

    if (cbox16.value == false) {
        cbox16.checked = false;
    } else {
        cbox16.checked = true;
    }
    if (cbox17.value == false) {
        cbox17.checked = false;
    } else {
        cbox17.checked = true;
    }
    if (cbox18.value == false) {
        cbox18.checked = false;
    } else {
        cbox18.checked = true;
    }
    if (cbox19.value == false) {
        cbox19.checked = false;
    } else {
        cbox19.checked = true;
    }

}
window.checked_select = checked_select;

function mloadlist() {
    const db = window.sqlitePlugin.openDatabase({
        name: "rawmixpert2.db",
        location: "default",
    });
    // Initialize SQLite database

    db.transaction((tx) => {
        tx.executeSql(
            "SELECT * FROM rmTable WHERE email = ? ORDER BY id DESC",
            [localStorage.getItem("email")],
            function (tx, result) {
                const table = document.getElementById("material_table");
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

                    const selectButton = createActionButton2("Select", function () {
                        if (confirm("Are you sure you want to 'select' RAWMILL ID:" + id + "'s record?")) {
                            alert("Selected ID: " + id + ", Name: " + name)
                            load_ma(id);
                        }
                    }, "blue");

                    const updateButton = createActionButton2("Update", function () {
                        if (confirm("Are you sure you want to update RAWMILL ID:" + id + "'s record?")) {
                            update_ma(id);
                        }
                    }, "orange");

                    const deleteButton = createActionButton2("Delete", function () {
                        if (confirm("Are you sure you want to delete RAWMILL ID:" + id + "'s record?")) {
                            deleteRecord(id);
                        }
                    }, "red");

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
window.mloadlist = mloadlist;

function save_ma() {
    try {

        if (rawmill1num !== null) {
            rawmillnum = rawmill1num.value;
        }
        if (rawmill2num !== null) {
            rawmillnum = rawmill2num.value;
        }

        const rawMixType = document.getElementById("E34_RawMixType").value.trim();

        const result = confirm("Do you want to save the Rawmill " + rawmillnum + "?");

        if (result) {
            // User clicked "OK" (Yes)
            // Perform the action you want for a positive response

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

            console.log("Trying to insert data...");

            db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO rmTable (name, email,check16,D16_Limestone,E16_Shale,F16_Sand,G16_Iron,  check17,D17_Limestone,E17_Shale ,F17_Sand,G17_Iron,check18,D18_Limestone, E18_Shale ,F18_Sand,G18_Iron,check19,D19_Limestone,E19_Shale ,F19_Sand,G19_Iron,   D15,E15,F15,G15,H15_SiO2,I15_Al2O3,J15_Fe2O3,K15_CaO,L15_MgO,M15_Na2O,N15_K2O,  O15_SO3,P15_Cl,H16_SiO2,I16_Al2O3,J16_Fe2O3,K16_CaO,L16_MgO,M16_Na2O,N16_K2O, O16_SO3,P16_Cl,H17_SiO2,I17_Al2O3,J17_Fe2O3,K17_CaO,L17_MgO,M17_Na2O,N17_K2O,O17_SO3,P17_Cl,H18_SiO2,I18_Al2O3,J18_Fe2O3,K18_CaO,L18_MgO,M18_Na2O,N18_K2O, O18_SO3,P18_Cl,C30_LSF_PR,C31_SM_PR,C32_AM_PR,E33_Clinker_Factor,E34_RawMixType, F30_LSF_TG,F31_SM_TG,F32_AM_TG,H31_SiO2,I31_Al2O3,J31_Fe2O3,K31_CaO,L31_MgO, M31_Na2O,N31_K2O,O31_SO3,P31_Cl,L38_KL_LOI,V38_LOI, H38_literKG, I38_FCaO, J38_BurningCondition, U38_SO3, DT) values   (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    [
                        "RAWMILL_" + rawmillnum + "_" + formattedDate,
                        localStorage.getItem("email"),
                        cbox16.checked,
                        cbox16.checked ? parseFloat(D16_Limestone_DQ.textContent) : parseFloat(D16_Limestone_DG.value),
                        cbox16.checked ? parseFloat(E16_Shale_DQ.textContent) : parseFloat(E16_Shale_DG.value),
                        cbox16.checked ? parseFloat(F16_Sand_DQ.textContent) : parseFloat(F16_Sand_DG.value),
                        cbox16.checked ? parseFloat(G16_Iron_DQ.textContent) : parseFloat(G16_Iron_DG.value),
                        cbox17.checked,
                        cbox17.checked ? parseFloat(D17_Limestone_DQ.textContent) : parseFloat(D17_Limestone_DG.value),
                        cbox17.checked ? parseFloat(E17_Shale_DQ.textContent) : parseFloat(E17_Shale_DG.value),
                        cbox17.checked ? parseFloat(F17_Sand_DQ.textContent) : parseFloat(F17_Sand_DG.value),
                        cbox17.checked ? parseFloat(G17_Iron_DQ.textContent) : parseFloat(G17_Iron_DG.value),
                        cbox18.checked,
                        cbox18.checked ? parseFloat(D18_Limestone_DQ.textContent) : parseFloat(D18_Limestone_DG.value),
                        cbox18.checked ? parseFloat(E18_Shale_DQ.textContent) : parseFloat(E18_Shale_DG.value),
                        cbox18.checked ? parseFloat(F18_Sand_DQ.textContent) : parseFloat(F18_Sand_DG.value),
                        cbox18.checked ? parseFloat(G18_Iron_DQ.textContent) : parseFloat(G18_Iron_DG.value),
                        cbox19.checked,
                        cbox19.checked ? parseFloat(D19_Limestone_DQ.textContent) : parseFloat(D19_Limestone_DG.value),
                        cbox19.checked ? parseFloat(E19_Shale_DQ.textContent) : parseFloat(E19_Shale_DG.value),
                        cbox19.checked ? parseFloat(F19_Sand_DQ.textContent) : parseFloat(F19_Sand_DG.value),
                        cbox19.checked ? parseFloat(G19_Iron_DQ.textContent) : parseFloat(G19_Iron_DG.value),
                        D15_DG.value,
                        E15_DG.value,
                        F15_DG.value,
                        G15_DG.value,
                        H15_SiO2_DG.value,
                        I15_Al2O3_DG.value,
                        J15_Fe2O3_DG.value,
                        K15_CaO_DG.value,
                        L15_MgO_DG.value,
                        M15_Na2O_DG.value,
                        N15_K2O_DG.value,
                        O15_SO3_DG.value,
                        P15_Cl_DG.value,
                        H16_SiO2_DG.value,
                        I16_Al2O3_DG.value,
                        J16_Fe2O3_DG.value,
                        K16_CaO_DG.value,
                        L16_MgO_DG.value,
                        M16_Na2O_DG.value,
                        N16_K2O_DG.value,
                        O16_SO3_DG.value,
                        P16_Cl_DG.value,
                        H17_SiO2_DG.value,
                        I17_Al2O3_DG.value,
                        J17_Fe2O3_DG.value,
                        K17_CaO_DG.value,
                        L17_MgO_DG.value,
                        M17_Na2O_DG.value,
                        N17_K2O_DG.value,
                        O17_SO3_DG.value,
                        P17_Cl_DG.value,
                        H18_SiO2_DG.value,
                        I18_Al2O3_DG.value,
                        J18_Fe2O3_DG.value,
                        K18_CaO_DG.value,
                        L18_MgO_DG.value,
                        M18_Na2O_DG.value,
                        N18_K2O_DG.value,
                        O18_SO3_DG.value,
                        P18_Cl_DG.value,
                        C30_LSF_PR_DG.value,
                        C31_SM_PR_DG.value,
                        C32_AM_PR_DG.value,
                        E33_Clinker_Factor_DG.value,
                        rawMixType,
                        F30_LSF_TG_DG.value,
                        F31_SM_TG_DG.value,
                        F32_AM_TG_DG.value,
                        H31_SiO2_DG.value,
                        I31_Al2O3_DG.value,
                        J31_Fe2O3_DG.value,
                        K31_CaO_DG.value,
                        L31_MgO_DG.value,
                        M31_Na2O_DG.value,
                        N31_K2O_DG.value,
                        O31_SO3_DG.value,
                        P31_Cl_DG.value,
                        L38_KL_LOI_DG.value,
                        V38_LOI_DG.value,
                        H38_literKG_DG.value,
                        I38_FCaO_DG.value,
                        J38_BurningCondition_DG.value,
                        U38_SO3_DG.value,
                        formattedDate2,
                    ],
                    (_, { rowsAffected }) => {
                        console.log("Rows affected:", rowsAffected);
                        window.mloadlist();
                        window.clearnow();
                        localStorage.removeItem("Rawmill" + rawmillnum);
                        alert("RAWMILL " + rawmillnum + " successfully saved!")
                        // showNotification(" Material Analysis & Target Composition successfully saved!", 3000, 1);
                    },
                    (_, error) => {
                        console.log("RAWMILL " + rawmillnum + " Error: ", error.message);
                        alert("RAWMILL " + rawmillnum + " Error: " + error.message)
                        // showNotification("Material Analysis & Target Composition Error: ", error.message, 3000, 2);
                    }
                );
            });
            setTimeout(() => { }, 60000);
        } else {
            // User clicked "Cancel" (No)
            // Perform the action you want for a negative response or do nothing
        }

    } catch (error) {
        console.log("Save RAWMILL catch error: ", error.message);
        alert("Save RAWMILL catch error: " + error.message);
        // showNotification("Save catch error: ", error.message, 3000, 2);
    }

}
window.save_ma = save_ma;
function update_ma(id) {
    const rawMixType = E34_RawMixType_DG.value.trim();
    // const result = confirm("Do you want to Update the M.A & T.C?");

    // if (result) {
    console.log("Updating data...");

    try {

        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE rmTable SET check16 = ? ,D16_Limestone = ? ,E16_Shale  = ? ,F16_Sand = ? ,  G16_Iron = ? ,  check17 = ? ,D17_Limestone = ? ,E17_Shale  = ? ,F17_Sand = ? ,  G17_Iron = ? ,check18 = ? ,D18_Limestone = ? , E18_Shale  = ? ,F18_Sand = ? , G18_Iron = ? ,check19 = ? ,D19_Limestone = ? ,E19_Shale  = ? ,F19_Sand = ? , G19_Iron = ? , D15 = ? ,E15       = ? ,F15       = ? ,G15       = ? ,H15_SiO2    = ? ,I15_Al2O3 = ? ,J15_Fe2O3 = ? ,K15_CaO   = ?,L15_MgO   = ? ,M15_Na2O  = ? , N15_K2O   = ? ,O15_SO3   = ? ,P15_Cl    = ? ,H16_SiO2  = ? ,I16_Al2O3 = ? ,  J16_Fe2O3 = ? ,K16_CaO   = ? ,L16_MgO   = ? ,M16_Na2O  = ? ,N16_K2O   = ? , O16_SO3   = ? ,P16_Cl    = ? ,H17_SiO2  = ? ,I17_Al2O3 = ? ,J17_Fe2O3 = ? ,  K17_CaO   = ? ,L17_MgO   = ? ,M17_Na2O  = ? ,N17_K2O   = ? ,O17_SO3   = ? , P17_Cl    = ? ,H18_SiO2  = ? ,I18_Al2O3 = ? ,J18_Fe2O3 = ? ,K18_CaO   = ? ,  L18_MgO   = ? ,M18_Na2O  = ? ,N18_K2O   = ? ,O18_SO3   = ? ,P18_Cl    = ? , C30_LSF_PR= ? ,C31_SM_PR = ? ,C32_AM_PR = ? ,E33_Clinker_Factor= ? , E34_RawMixType    = ? ,F30_LSF_TG        = ? ,F31_SM_TG         = ? ,  F32_AM_TG         = ? ,H31_SiO2          = ? ,I31_Al2O3         = ? , J31_Fe2O3         = ? ,K31_CaO           = ? ,L31_MgO           = ? ,  M31_Na2O          = ? ,N31_K2O           = ? ,O31_SO3           = ? , P31_Cl            = ? ,L38_KL_LOI        = ? ,V38_LOI           = ?,  H38_literKG          = ?,I38_FCaO =?, J38_BurningCondition           = ?, U38_SO3           = ?  WHERE id = ? AND email = ? ",
                [

                    cbox16.checked,
                    cbox16.checked ? parseFloat(D16_Limestone_DQ.textContent) : parseFloat(D16_Limestone_DG.value),
                    cbox16.checked ? parseFloat(E16_Shale_DQ.textContent) : parseFloat(E16_Shale_DG.value),
                    cbox16.checked ? parseFloat(F16_Sand_DQ.textContent) : parseFloat(F16_Sand_DG.value),
                    cbox16.checked ? parseFloat(G16_Iron_DQ.textContent) : parseFloat(G16_Iron_DG.value),
                    cbox17.checked,
                    cbox17.checked ? parseFloat(D17_Limestone_DQ.textContent) : parseFloat(D17_Limestone_DG.value),
                    cbox17.checked ? parseFloat(E17_Shale_DQ.textContent) : parseFloat(E17_Shale_DG.value),
                    cbox17.checked ? parseFloat(F17_Sand_DQ.textContent) : parseFloat(F17_Sand_DG.value),
                    cbox17.checked ? parseFloat(G17_Iron_DQ.textContent) : parseFloat(G17_Iron_DG.value),
                    cbox18.checked,
                    cbox18.checked ? parseFloat(D18_Limestone_DQ.textContent) : parseFloat(D18_Limestone_DG.value),
                    cbox18.checked ? parseFloat(E18_Shale_DQ.textContent) : parseFloat(E18_Shale_DG.value),
                    cbox18.checked ? parseFloat(F18_Sand_DQ.textContent) : parseFloat(F18_Sand_DG.value),
                    cbox18.checked ? parseFloat(G18_Iron_DQ.textContent) : parseFloat(G18_Iron_DG.value),
                    cbox19.checked,
                    cbox19.checked ? parseFloat(D19_Limestone_DQ.textContent) : parseFloat(D19_Limestone_DG.value),
                    cbox19.checked ? parseFloat(E19_Shale_DQ.textContent) : parseFloat(E19_Shale_DG.value),
                    cbox19.checked ? parseFloat(F19_Sand_DQ.textContent) : parseFloat(F19_Sand_DG.value),
                    cbox19.checked ? parseFloat(G19_Iron_DQ.textContent) : parseFloat(G19_Iron_DG.value),
                    D15_DG.value,
                    E15_DG.value,
                    F15_DG.value,
                    G15_DG.value,
                    H15_SiO2_DG.value,
                    I15_Al2O3_DG.value,
                    J15_Fe2O3_DG.value,
                    K15_CaO_DG.value,
                    L15_MgO_DG.value,
                    M15_Na2O_DG.value,
                    N15_K2O_DG.value,
                    O15_SO3_DG.value,
                    P15_Cl_DG.value,
                    H16_SiO2_DG.value,
                    I16_Al2O3_DG.value,
                    J16_Fe2O3_DG.value,
                    K16_CaO_DG.value,
                    L16_MgO_DG.value,
                    M16_Na2O_DG.value,
                    N16_K2O_DG.value,
                    O16_SO3_DG.value,
                    P16_Cl_DG.value,
                    H17_SiO2_DG.value,
                    I17_Al2O3_DG.value,
                    J17_Fe2O3_DG.value,
                    K17_CaO_DG.value,
                    L17_MgO_DG.value,
                    M17_Na2O_DG.value,
                    N17_K2O_DG.value,
                    O17_SO3_DG.value,
                    P17_Cl_DG.value,
                    H18_SiO2_DG.value,
                    I18_Al2O3_DG.value,
                    J18_Fe2O3_DG.value,
                    K18_CaO_DG.value,
                    L18_MgO_DG.value,
                    M18_Na2O_DG.value,
                    N18_K2O_DG.value,
                    O18_SO3_DG.value,
                    P18_Cl_DG.value,
                    C30_LSF_PR_DG.value,
                    C31_SM_PR_DG.value,
                    C32_AM_PR_DG.value,
                    E33_Clinker_Factor_DG.value,
                    rawMixType,
                    F30_LSF_TG_DG.value,
                    F31_SM_TG_DG.value,
                    F32_AM_TG_DG.value,
                    H31_SiO2_DG.value,
                    I31_Al2O3_DG.value,
                    J31_Fe2O3_DG.value,
                    K31_CaO_DG.value,
                    L31_MgO_DG.value,
                    M31_Na2O_DG.value,
                    N31_K2O_DG.value,
                    O31_SO3_DG.value,
                    P31_Cl_DG.value,
                    L38_KL_LOI_DG.value,
                    V38_LOI_DG.value,
                    H38_literKG_DG.value,
                    I38_FCaO_DG.value,
                    J38_BurningCondition_DG.value,
                    U38_SO3_DG.value,
                    id,
                    localStorage.getItem("email")
                ],
                (txObj, resultSet) => {
                    if (resultSet.rowsAffected > 0) {
                        alert("RAMILL ID: " + id + " Updated");
                        window.clearnow();
                        // showNotification("Material Analysis & Target Composition ID: " + id + " Updated", 3000, 1);
                    }
                },
                (txObj, error) =>
                    alert("RAMILL Update Error: " + error.message)
                // alshowNotificationert("Material Analysis & Target Composition Update Error: " + error.message, 3000, 1)
            );
        });
        setTimeout(() => { }, 60000);

    } catch (error) {
        alert("RAWMILL Update Error: " + error.message)
    }
}

window.update_ma = update_ma;

function deleteRecord(id) {
    db.transaction((tx) => {
        tx.executeSql("DELETE FROM rmTable WHERE id = ? AND email = ?", [id, localStorage.getItem("email")], (_, { rows }) => {
            const items = rows._array;
            alert("RAWMILL ID: " + id + " Data Deleted!")
            // showNotification("ID: " + id + " Data Deleted!", 3000, 1);
            window.mloadlist();
        });
    });
    console.log("Deletion complete!");
    setTimeout(() => { }, 60000);
}
window.deleteRecord = deleteRecord;

function load_ma(id) {
    try {

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM rmTable WHERE id = ? and email = ?",
                [id,localStorage.getItem("email")],
                function (tx, result) {
                    const rows = result.rows;
                    const row = rows.item(0);
                    var rawMixType = row.E34_RawMixType;

                    const ck16 = row.check16;
                    const ck17 = row.check17;
                    const ck18 = row.check18;
                    const ck19 = row.check19;

                    if (ck16 == true || ck16 == 'true') {
                        console.log("16: TRUE")
                        inputContainerD16_Limestone.style.display = "none";
                        inputContainerE16_Shale.style.display = "none";
                        inputContainerF16_Sand.style.display = "none";
                        inputContainerG16_Iron.style.display = "none";

                        labelContainerD16_Limestone.style.display = "block";
                        labelContainerE16_Shale.style.display = "block";
                        labelContainerF16_Sand.style.display = "block";
                        labelContainerG16_Iron.style.display = "block";
                        cbox16.value = true;
                        cbox16.checked = true;
                    } else {
                        console.log("16: FALSE")
                        inputContainerD16_Limestone.style.display = "block";
                        inputContainerE16_Shale.style.display = "block";
                        inputContainerF16_Sand.style.display = "block";
                        inputContainerG16_Iron.style.display = "block";
                        labelContainerD16_Limestone.style.display = "none";
                        labelContainerE16_Shale.style.display = "none";
                        labelContainerF16_Sand.style.display = "none";
                        labelContainerG16_Iron.style.display = "none";
                        cbox16.value = false;
                        cbox16.checked = false;
                    }
                    if (ck17 == true || ck17 == 'true') {
                        console.log("17: TRUE")
                        inputContainerD17_Limestone.style.display = "none";
                        inputContainerE17_Shale.style.display = "none";
                        inputContainerF17_Sand.style.display = "none";
                        inputContainerG17_Iron.style.display = "none";
                        labelContainerD17_Limestone.style.display = "block";
                        labelContainerE17_Shale.style.display = "block";
                        labelContainerF17_Sand.style.display = "block";
                        labelContainerG17_Iron.style.display = "block";
                        cbox17.value = true;
                        cbox17.checked = true;
                    } else {
                        console.log("17: FALSE")

                        inputContainerD17_Limestone.style.display = "block";
                        inputContainerE17_Shale.style.display = "block";
                        inputContainerF17_Sand.style.display = "block";
                        inputContainerG17_Iron.style.display = "block";
                        labelContainerD17_Limestone.style.display = "none";
                        labelContainerE17_Shale.style.display = "none";
                        labelContainerF17_Sand.style.display = "none";
                        labelContainerG17_Iron.style.display = "none";
                        cbox17.value = false;
                        cbox17.checked = false;
                    }
                    if (ck18 == true || ck18 == 'true') {
                        console.log("18: TRUE")
                        inputContainerD18_Limestone.style.display = "none";
                        inputContainerE18_Shale.style.display = "none";
                        inputContainerF18_Sand.style.display = "none";
                        inputContainerG18_Iron.style.display = "none";
                        labelContainerD18_Limestone.style.display = "block";
                        labelContainerE18_Shale.style.display = "block";
                        labelContainerF18_Sand.style.display = "block";
                        labelContainerG18_Iron.style.display = "block";
                        cbox18.value = true;
                        cbox18.checked = true;
                    } else {

                        console.log("18: FALSE")
                        inputContainerD18_Limestone.style.display = "block";
                        inputContainerE18_Shale.style.display = "block";
                        inputContainerF18_Sand.style.display = "block";
                        inputContainerG18_Iron.style.display = "block";
                        labelContainerD18_Limestone.style.display = "none";
                        labelContainerE18_Shale.style.display = "none";
                        labelContainerF18_Sand.style.display = "none";
                        labelContainerG18_Iron.style.display = "none";
                        cbox18.value = false;
                        cbox18.checked = false;
                    }
                    if (ck19 == true || ck19 == 'true') {
                        console.log("19: TRUE")
                        inputContainerD19_Limestone.style.display = "none";
                        inputContainerE19_Shale.style.display = "none";
                        inputContainerF19_Sand.style.display = "none";
                        inputContainerG19_Iron.style.display = "none";
                        labelContainerD19_Limestone.style.display = "block";
                        labelContainerE19_Shale.style.display = "block";
                        labelContainerF19_Sand.style.display = "block";
                        labelContainerG19_Iron.style.display = "block";
                        cbox19.value = true;
                        cbox19.checked = true;
                    } else {

                        console.log("19: FALSE")
                        inputContainerD19_Limestone.style.display = "block";
                        inputContainerE19_Shale.style.display = "block";
                        inputContainerF19_Sand.style.display = "block";
                        inputContainerG19_Iron.style.display = "block";
                        labelContainerD19_Limestone.style.display = "none";
                        labelContainerE19_Shale.style.display = "none";
                        labelContainerF19_Sand.style.display = "none";
                        labelContainerG19_Iron.style.display = "none";
                        cbox19.value = false;
                        cbox19.checked = false;
                    }

                    (ck16 == true || ck16 == 'true')
                        ? D16_Limestone_DQ.textContent
                        : (D16_Limestone_DG.value = row.D16_Limestone);
                    (ck16 == true || ck16 == 'true')
                        ? E16_Shale_DQ.textContent
                        : (E16_Shale_DG.value = row.E16_Shale);
                    (ck16 == true || ck16 == 'true')
                        ? F16_Sand_DQ.textContent
                        : (F16_Sand_DG.value = row.F16_Sand);
                    (ck16 == true || ck16 == 'true')
                        ? G16_Iron_DQ.textContent
                        : (G16_Iron_DG.value = row.G16_Iron);
                    (ck17 == true || ck17 == 'true')
                        ? D17_Limestone_DQ.textContent
                        : (D17_Limestone_DG.value = row.D17_Limestone);
                    (ck17 == true || ck17 == 'true')
                        ? E17_Shale_DQ.textContent
                        : (E17_Shale_DG.value = row.E17_Shale);
                    (ck17 == true || ck17 == 'true')
                        ? F17_Sand_DQ.textContent
                        : (F17_Sand_DG.value = row.F17_Sand);
                    (ck17 == true || ck17 == 'true')
                        ? G17_Iron_DQ.textContent
                        : (G17_Iron_DG.value = row.G17_Iron);
                    (ck18 == true || ck18 == 'true')
                        ? D18_Limestone_DQ.textContent
                        : (D18_Limestone_DG.value = row.D18_Limestone);
                    (ck18 == true || ck18 == 'true')
                        ? E18_Shale_DQ.textContent
                        : (E18_Shale_DG.value = row.E18_Shale);
                    (ck18 == true || ck18 == 'true')
                        ? F18_Sand_DQ.textContent
                        : (F18_Sand_DG.value = row.F18_Sand);
                    (ck18 == true || ck18 == 'true')
                        ? G18_Iron_DQ.textContent
                        : (G18_Iron_DG.value = row.G18_Iron);
                    (ck19 == true || ck19 == 'true')
                        ? D19_Limestone_DQ.textContent
                        : (D19_Limestone_DG.value = row.D19_Limestone);
                    (ck19 == true || ck19 == 'true')
                        ? E19_Shale_DQ.textContent
                        : (E19_Shale_DG.value = row.E19_Shale);
                    (ck19 == true || ck19 == 'true')
                        ? F19_Sand_DQ.textContent
                        : (F19_Sand_DG.value = row.F19_Sand);
                    (ck19 == true || ck19 == 'true')
                        ? G19_Iron_DQ.textContent
                        : (G19_Iron_DG.value = row.G19_Iron);
                    D15_DG.value = row.D15;
                    E15_DG.value = row.E15;
                    F15_DG.value = row.F15;
                    G15_DG.value = row.G15;
                    H15_SiO2_DG.value = row.H15_SiO2;
                    I15_Al2O3_DG.value = row.I15_Al2O3;
                    J15_Fe2O3_DG.value = row.J15_Fe2O3;
                    K15_CaO_DG.value = row.K15_CaO;
                    L15_MgO_DG.value = row.L15_MgO;
                    M15_Na2O_DG.value = row.M15_Na2O;
                    N15_K2O_DG.value = row.N15_K2O;
                    O15_SO3_DG.value = row.O15_SO3;
                    P15_Cl_DG.value = row.P15_Cl;
                    H16_SiO2_DG.value = row.H16_SiO2;
                    I16_Al2O3_DG.value = row.I16_Al2O3;
                    J16_Fe2O3_DG.value = row.J16_Fe2O3;
                    K16_CaO_DG.value = row.K16_CaO;
                    L16_MgO_DG.value = row.L16_MgO;
                    M16_Na2O_DG.value = row.M16_Na2O;
                    N16_K2O_DG.value = row.N16_K2O;
                    O16_SO3_DG.value = row.O16_SO3;
                    P16_Cl_DG.value = row.P16_Cl;
                    H17_SiO2_DG.value = row.H17_SiO2;
                    I17_Al2O3_DG.value = row.I17_Al2O3;
                    J17_Fe2O3_DG.value = row.J17_Fe2O3;
                    K17_CaO_DG.value = row.K17_CaO;
                    L17_MgO_DG.value = row.L17_MgO;
                    M17_Na2O_DG.value = row.M17_Na2O;
                    N17_K2O_DG.value = row.N17_K2O;
                    O17_SO3_DG.value = row.O17_SO3;
                    P17_Cl_DG.value = row.P17_Cl;
                    H18_SiO2_DG.value = row.H18_SiO2;
                    I18_Al2O3_DG.value = row.I18_Al2O3;
                    J18_Fe2O3_DG.value = row.J18_Fe2O3;
                    K18_CaO_DG.value = row.K18_CaO;
                    L18_MgO_DG.value = row.L18_MgO;
                    M18_Na2O_DG.value = row.M18_Na2O;
                    N18_K2O_DG.value = row.N18_K2O;
                    O18_SO3_DG.value = row.O18_SO3;
                    P18_Cl_DG.value = row.P18_Cl;
                    C30_LSF_PR_DG.value = row.C30_LSF_PR;
                    C31_SM_PR_DG.value = row.C31_SM_PR;
                    C32_AM_PR_DG.value = row.C32_AM_PR;
                    E33_Clinker_Factor_DG.value = row.E33_Clinker_Factor;
                    E34_RawMixType_DG.value = rawMixType;
                    F30_LSF_TG_DG.value = row.F30_LSF_TG;
                    F31_SM_TG_DG.value = row.F31_SM_TG;
                    F32_AM_TG_DG.value = row.F32_AM_TG;
                    H31_SiO2_DG.value = row.H31_SiO2;
                    I31_Al2O3_DG.value = row.I31_Al2O3;
                    J31_Fe2O3_DG.value = row.J31_Fe2O3;
                    K31_CaO_DG.value = row.K31_CaO;
                    L31_MgO_DG.value = row.L31_MgO;
                    M31_Na2O_DG.value = row.M31_Na2O;
                    N31_K2O_DG.value = row.N31_K2O;
                    O31_SO3_DG.value = row.O31_SO3;
                    P31_Cl_DG.value = row.P31_Cl;
                    L38_KL_LOI_DG.value = row.L38_KL_LOI;
                    V38_LOI_DG.value = row.V38_LOI;
                    H38_literKG_DG.value = row.H38_literKG;
                    I38_FCaO_DG.value = row.I38_FCaO;
                    J38_BurningCondition_DG.value = row.J38_BurningCondition;
                    U38_SO3_DG.value = row.U38_SO3;



                    window.computeall();
                }, function (tx, error) {
                    console.error('Error executing the query:', error);
                });
        });

    } catch (error) {
        console.log(error);
    }
}
window.load_ma = load_ma;

const save_mix = () => { };
const update_mix = () => { };


// BEGIN Auto on change text
// Get all the input elements with type "number"
const numberInputs = document.querySelectorAll('input[type="number"]');

// Create a new MutationObserver
const observer = new MutationObserver(function (mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "value") {
            // Your custom logic here
            console.log("Value changed:", mutation.target.value);
        }
    }
});

// Start observing the 'value' attribute of each input element
numberInputs.forEach((input) => {
    observer.observe(input, { attributes: true, attributeFilter: ["value"] });
});
// END on change text

//CALL LOAD ALL TO COMPUTE

// Begin elements
// Create an object to hold the references to the elements



document.addEventListener("DOMContentLoaded", function () {
    if (rawmill1num !== null) {
        rawmillnum = rawmill1num.value;
    }
    if (rawmill2num !== null) {
        rawmillnum = rawmill2num.value;
    }
    var storedObject = JSON.parse(localStorage.getItem('Rawmill' + rawmillnum));
    if (storedObject !== null) {

        const ck16 = storedObject.cbox16;
        const ck17 = storedObject.cbox17;
        const ck18 = storedObject.cbox18;
        const ck19 = storedObject.cbox19;

        if (ck16 == true || ck16 == 'true') {
            console.log("16: TRUE")
            inputContainerD16_Limestone.style.display = "none";
            inputContainerE16_Shale.style.display = "none";
            inputContainerF16_Sand.style.display = "none";
            inputContainerG16_Iron.style.display = "none";

            labelContainerD16_Limestone.style.display = "block";
            labelContainerE16_Shale.style.display = "block";
            labelContainerF16_Sand.style.display = "block";
            labelContainerG16_Iron.style.display = "block";
            cbox16.value = true;
            cbox16.checked = true;
        } else {
            console.log("16: FALSE")
            inputContainerD16_Limestone.style.display = "block";
            inputContainerE16_Shale.style.display = "block";
            inputContainerF16_Sand.style.display = "block";
            inputContainerG16_Iron.style.display = "block";
            labelContainerD16_Limestone.style.display = "none";
            labelContainerE16_Shale.style.display = "none";
            labelContainerF16_Sand.style.display = "none";
            labelContainerG16_Iron.style.display = "none";
            cbox16.value = false;
            cbox16.checked = false;
        }
        if (ck17 == true || ck17 == 'true') {
            console.log("17: TRUE")
            inputContainerD17_Limestone.style.display = "none";
            inputContainerE17_Shale.style.display = "none";
            inputContainerF17_Sand.style.display = "none";
            inputContainerG17_Iron.style.display = "none";
            labelContainerD17_Limestone.style.display = "block";
            labelContainerE17_Shale.style.display = "block";
            labelContainerF17_Sand.style.display = "block";
            labelContainerG17_Iron.style.display = "block";
            cbox17.value = true;
            cbox17.checked = true;
        } else {
            console.log("17: FALSE")

            inputContainerD17_Limestone.style.display = "block";
            inputContainerE17_Shale.style.display = "block";
            inputContainerF17_Sand.style.display = "block";
            inputContainerG17_Iron.style.display = "block";
            labelContainerD17_Limestone.style.display = "none";
            labelContainerE17_Shale.style.display = "none";
            labelContainerF17_Sand.style.display = "none";
            labelContainerG17_Iron.style.display = "none";
            cbox17.value = false;
            cbox17.checked = false;
        }
        if (ck18 == true || ck18 == 'true') {
            console.log("18: TRUE")
            inputContainerD18_Limestone.style.display = "none";
            inputContainerE18_Shale.style.display = "none";
            inputContainerF18_Sand.style.display = "none";
            inputContainerG18_Iron.style.display = "none";
            labelContainerD18_Limestone.style.display = "block";
            labelContainerE18_Shale.style.display = "block";
            labelContainerF18_Sand.style.display = "block";
            labelContainerG18_Iron.style.display = "block";
            cbox18.value = true;
            cbox18.checked = true;
        } else {

            console.log("18: FALSE")
            inputContainerD18_Limestone.style.display = "block";
            inputContainerE18_Shale.style.display = "block";
            inputContainerF18_Sand.style.display = "block";
            inputContainerG18_Iron.style.display = "block";
            labelContainerD18_Limestone.style.display = "none";
            labelContainerE18_Shale.style.display = "none";
            labelContainerF18_Sand.style.display = "none";
            labelContainerG18_Iron.style.display = "none";
            cbox18.value = false;
            cbox18.checked = false;
        }
        if (ck19 == true || ck19 == 'true') {
            console.log("19: TRUE")
            inputContainerD19_Limestone.style.display = "none";
            inputContainerE19_Shale.style.display = "none";
            inputContainerF19_Sand.style.display = "none";
            inputContainerG19_Iron.style.display = "none";
            labelContainerD19_Limestone.style.display = "block";
            labelContainerE19_Shale.style.display = "block";
            labelContainerF19_Sand.style.display = "block";
            labelContainerG19_Iron.style.display = "block";
            cbox19.value = true;
            cbox19.checked = true;
        } else {

            console.log("19: FALSE")
            inputContainerD19_Limestone.style.display = "block";
            inputContainerE19_Shale.style.display = "block";
            inputContainerF19_Sand.style.display = "block";
            inputContainerG19_Iron.style.display = "block";
            labelContainerD19_Limestone.style.display = "none";
            labelContainerE19_Shale.style.display = "none";
            labelContainerF19_Sand.style.display = "none";
            labelContainerG19_Iron.style.display = "none";
            cbox19.value = false;
            cbox19.checked = false;
        }

        (ck16 == true || ck16 == 'true')
            ? D16_Limestone_DQ.textContent
            : (D16_Limestone_DG.value = storedObject.D16_Limestone);
        (ck16 == true || ck16 == 'true')
            ? E16_Shale_DQ.textContent
            : (E16_Shale_DG.value = storedObject.E16_Shale);
        (ck16 == true || ck16 == 'true')
            ? F16_Sand_DQ.textContent
            : (F16_Sand_DG.value = storedObject.F16_Sand);
        (ck16 == true || ck16 == 'true')
            ? G16_Iron_DQ.textContent
            : (G16_Iron_DG.value = storedObject.G16_Iron);
        (ck17 == true || ck17 == 'true')
            ? D17_Limestone_DQ.textContent
            : (D17_Limestone_DG.value = storedObject.D17_Limestone);
        (ck17 == true || ck17 == 'true')
            ? E17_Shale_DQ.textContent
            : (E17_Shale_DG.value = storedObject.E17_Shale);
        (ck17 == true || ck17 == 'true')
            ? F17_Sand_DQ.textContent
            : (F17_Sand_DG.value = storedObject.F17_Sand);
        (ck17 == true || ck17 == 'true')
            ? G17_Iron_DQ.textContent
            : (G17_Iron_DG.value = storedObject.G17_Iron);
        (ck18 == true || ck18 == 'true')
            ? D18_Limestone_DQ.textContent
            : (D18_Limestone_DG.value = storedObject.D18_Limestone);
        (ck18 == true || ck18 == 'true')
            ? E18_Shale_DQ.textContent
            : (E18_Shale_DG.value = storedObject.E18_Shale);
        (ck18 == true || ck18 == 'true')
            ? F18_Sand_DQ.textContent
            : (F18_Sand_DG.value = storedObject.F18_Sand);
        (ck18 == true || ck18 == 'true')
            ? G18_Iron_DQ.textContent
            : (G18_Iron_DG.value = storedObject.G18_Iron);
        (ck19 == true || ck19 == 'true')
            ? D19_Limestone_DQ.textContent
            : (D19_Limestone_DG.value = storedObject.D19_Limestone);
        (ck19 == true || ck19 == 'true')
            ? E19_Shale_DQ.textContent
            : (E19_Shale_DG.value = storedObject.E19_Shale);
        (ck19 == true || ck19 == 'true')
            ? F19_Sand_DQ.textContent
            : (F19_Sand_DG.value = storedObject.F19_Sand);
        (ck19 == true || ck19 == 'true')
            ? G19_Iron_DQ.textContent
            : (G19_Iron_DG.value = storedObject.G19_Iron);

        D15_DG.value = storedObject.D15;
        E15_DG.value = storedObject.E15;
        F15_DG.value = storedObject.F15;
        G15_DG.value = storedObject.G15;
        H15_SiO2_DG.value = storedObject.H15_SiO2;
        I15_Al2O3_DG.value = storedObject.I15_Al2O3;
        J15_Fe2O3_DG.value = storedObject.J15_Fe2O3;
        K15_CaO_DG.value = storedObject.K15_CaO;
        L15_MgO_DG.value = storedObject.L15_MgO;
        M15_Na2O_DG.value = storedObject.M15_Na2O;
        N15_K2O_DG.value = storedObject.N15_K2O;
        O15_SO3_DG.value = storedObject.O15_SO3;
        P15_Cl_DG.value = storedObject.P15_Cl;
        H16_SiO2_DG.value = storedObject.H16_SiO2;
        I16_Al2O3_DG.value = storedObject.I16_Al2O3;
        J16_Fe2O3_DG.value = storedObject.J16_Fe2O3;
        K16_CaO_DG.value = storedObject.K16_CaO;
        L16_MgO_DG.value = storedObject.L16_MgO;
        M16_Na2O_DG.value = storedObject.M16_Na2O;
        N16_K2O_DG.value = storedObject.N16_K2O;
        O16_SO3_DG.value = storedObject.O16_SO3;
        P16_Cl_DG.value = storedObject.P16_Cl;
        H17_SiO2_DG.value = storedObject.H17_SiO2;
        I17_Al2O3_DG.value = storedObject.I17_Al2O3;
        J17_Fe2O3_DG.value = storedObject.J17_Fe2O3;
        K17_CaO_DG.value = storedObject.K17_CaO;
        L17_MgO_DG.value = storedObject.L17_MgO;
        M17_Na2O_DG.value = storedObject.M17_Na2O;
        N17_K2O_DG.value = storedObject.N17_K2O;
        O17_SO3_DG.value = storedObject.O17_SO3;
        P17_Cl_DG.value = storedObject.P17_Cl;
        H18_SiO2_DG.value = storedObject.H18_SiO2;
        I18_Al2O3_DG.value = storedObject.I18_Al2O3;
        J18_Fe2O3_DG.value = storedObject.J18_Fe2O3;
        K18_CaO_DG.value = storedObject.K18_CaO;
        L18_MgO_DG.value = storedObject.L18_MgO;
        M18_Na2O_DG.value = storedObject.M18_Na2O;
        N18_K2O_DG.value = storedObject.N18_K2O;
        O18_SO3_DG.value = storedObject.O18_SO3;
        P18_Cl_DG.value = storedObject.P18_Cl;
        C30_LSF_PR_DG.value = storedObject.C30_LSF_PR;
        C31_SM_PR_DG.value = storedObject.C31_SM_PR;
        C32_AM_PR_DG.value = storedObject.C32_AM_PR;
        E33_Clinker_Factor_DG.value = storedObject.E33_Clinker_Factor;
        E34_RawMixType_DG.value = storedObject.E34_RawMixType;
        F30_LSF_TG_DG.value = storedObject.F30_LSF_TG;
        F31_SM_TG_DG.value = storedObject.F31_SM_TG;
        F32_AM_TG_DG.value = storedObject.F32_AM_TG;
        H31_SiO2_DG.value = storedObject.H31_SiO2;
        I31_Al2O3_DG.value = storedObject.I31_Al2O3;
        J31_Fe2O3_DG.value = storedObject.J31_Fe2O3;
        K31_CaO_DG.value = storedObject.K31_CaO;
        L31_MgO_DG.value = storedObject.L31_MgO;
        M31_Na2O_DG.value = storedObject.M31_Na2O;
        N31_K2O_DG.value = storedObject.N31_K2O;
        O31_SO3_DG.value = storedObject.O31_SO3;
        P31_Cl_DG.value = storedObject.P31_Cl;
        L38_KL_LOI_DG.value = storedObject.L38_KL_LOI;
        V38_LOI_DG.value = storedObject.V38_LOI;
        H38_literKG_DG.value = storedObject.H38_literKG;
        I38_FCaO_DG.value = storedObject.I38_FCaO;
        J38_BurningCondition_DG.value = storedObject.J38_BurningCondition;
        U38_SO3_DG.value = storedObject.U38_SO3;
        // computeall();

    }

    cbox16.addEventListener("click", function () {
        materialsettings();
        if (this.checked) {
            inputContainerD16_Limestone.style.display = "none";
            inputContainerE16_Shale.style.display = "none";
            inputContainerF16_Sand.style.display = "none";
            inputContainerG16_Iron.style.display = "none";
            labelContainerD16_Limestone.style.display = "block";
            labelContainerE16_Shale.style.display = "block";
            labelContainerF16_Sand.style.display = "block";
            labelContainerG16_Iron.style.display = "block";

            check16_Limestone = compute_D16_Limestone();
            check16_Shale = compute_E16_Shale();
            check16_Sand = compute_F16_Sand();
            check16_Iron = compute_G16_Iron();
            D16_Limestone_DQ.textContent = compute_D16_Limestone();
            E16_Shale_DQ.textContent = compute_E16_Shale();
            F16_Sand_DQ.textContent = compute_F16_Sand();
            G16_Iron_DQ.textContent = compute_G16_Iron();
        } else {
            inputContainerD16_Limestone.style.display = "block";
            inputContainerE16_Shale.style.display = "block";
            inputContainerF16_Sand.style.display = "block";
            inputContainerG16_Iron.style.display = "block";
            labelContainerD16_Limestone.style.display = "none";
            labelContainerE16_Shale.style.display = "none";
            labelContainerF16_Sand.style.display = "none";
            labelContainerG16_Iron.style.display = "none";
            check16_Limestone =
                D16_Limestone_DG.value !== null ? D16_Limestone_DG.value : "0.0";
            check16_Shale = E16_Shale_DG.value !== null ? E16_Shale_DG.value : "0.0";
            check16_Sand = F16_Sand_DG.value !== null ? F16_Sand_DG.value : "0.0";
            check16_Iron = G16_Iron_DG.value !== null ? G16_Iron_DG.value : "0.0";
        }
    });

    cbox17.addEventListener("click", function () {
        materialsettings();
        if (this.checked) {
            inputContainerD17_Limestone.style.display = "none";
            inputContainerE17_Shale.style.display = "none";
            inputContainerF17_Sand.style.display = "none";
            inputContainerG17_Iron.style.display = "none";
            labelContainerD17_Limestone.style.display = "block";
            labelContainerE17_Shale.style.display = "block";
            labelContainerF17_Sand.style.display = "block";
            labelContainerG17_Iron.style.display = "block";
            check17_Limestone = compute_D17_Limestone();
            check17_Shale = compute_E17_Shale();
            check17_Sand = compute_F17_Sand();
            check17_Iron = compute_G17_Iron();
            D17_Limestone_DQ.textContent = compute_D17_Limestone();
            E17_Shale_DQ.textContent = compute_E17_Shale();
            F17_Sand_DQ.textContent = compute_F17_Sand();
            G17_Iron_DQ.textContent = compute_G17_Iron();
        } else {
            inputContainerD17_Limestone.style.display = "block";
            inputContainerE17_Shale.style.display = "block";
            inputContainerF17_Sand.style.display = "block";
            inputContainerG17_Iron.style.display = "block";
            labelContainerD17_Limestone.style.display = "none";
            labelContainerE17_Shale.style.display = "none";
            labelContainerF17_Sand.style.display = "none";
            labelContainerG17_Iron.style.display = "none";
            check17_Limestone =
                D17_Limestone_DG.value !== null ? D17_Limestone_DG.value : "0.0";
            check17_Shale = E17_Shale_DG.value !== null ? E17_Shale_DG.value : "0.0";
            check17_Sand = F17_Sand_DG.value !== null ? F17_Sand_DG.value : "0.0";
            check17_Iron = G17_Iron_DG.value !== null ? G17_Iron_DG.value : "0.0";
        }
    });
    cbox18.addEventListener("click", function () {
        materialsettings();
        if (this.checked) {
            inputContainerD18_Limestone.style.display = "none";
            inputContainerE18_Shale.style.display = "none";
            inputContainerF18_Sand.style.display = "none";
            inputContainerG18_Iron.style.display = "none";
            labelContainerD18_Limestone.style.display = "block";
            labelContainerE18_Shale.style.display = "block";
            labelContainerF18_Sand.style.display = "block";
            labelContainerG18_Iron.style.display = "block";

            check18_Limestone = compute_D18_Limestone();
            check18_Shale = compute_E18_Shale();
            check18_Sand = compute_F18_Sand();
            check18_Iron = compute_G18_Iron();
            D18_Limestone_DQ.textContent = compute_D18_Limestone();
            E18_Shale_DQ.textContent = compute_E18_Shale();
            F18_Sand_DQ.textContent = compute_F18_Sand();
            G18_Iron_DQ.textContent = compute_G18_Iron();
        } else {
            inputContainerD18_Limestone.style.display = "block";
            inputContainerE18_Shale.style.display = "block";
            inputContainerF18_Sand.style.display = "block";
            inputContainerG18_Iron.style.display = "block";
            labelContainerD18_Limestone.style.display = "none";
            labelContainerE18_Shale.style.display = "none";
            labelContainerF18_Sand.style.display = "none";
            labelContainerG18_Iron.style.display = "none";
            check18_Limestone =
                D18_Limestone_DG.value !== null ? D18_Limestone_DG.value : "0.0";
            check18_Shale = E18_Shale.value !== null ? E18_Shale.value : "0.0";
            check18_Sand = F18_Sand_DG.value !== null ? F18_Sand_DG.value : "0.0";
            check18_Iron = G18_Iron_DG.value !== null ? G18_Iron_DG.value : "0.0";
        }
    });
    cbox19.addEventListener("click", function () {
        materialsettings();
        if (this.checked) {
            inputContainerD19_Limestone.style.display = "none";
            inputContainerE19_Shale.style.display = "none";
            inputContainerF19_Sand.style.display = "none";
            inputContainerG19_Iron.style.display = "none";
            labelContainerD19_Limestone.style.display = "block";
            labelContainerE19_Shale.style.display = "block";
            labelContainerF19_Sand.style.display = "block";
            labelContainerG19_Iron.style.display = "block";

            check19_Limestone = compute_D19_Limestone();
            check19_Shale = compute_E19_Shale();
            check19_Sand = compute_F19_Sand();
            check19_Iron = compute_G19_Iron();
            D19_Limestone_DQ.textContent = compute_D19_Limestone();
            E19_Shale_DQ.textContent = compute_E19_Shale();
            F19_Sand_DQ.textContent = compute_F19_Sand();
            G19_Iron_DQ.textContent = compute_G19_Iron();
        } else {
            inputContainerD19_Limestone.style.display = "block";
            inputContainerE19_Shale.style.display = "block";
            inputContainerF19_Sand.style.display = "block";
            inputContainerG19_Iron.style.display = "block";
            labelContainerD19_Limestone.style.display = "none";
            labelContainerE19_Shale.style.display = "none";
            labelContainerF19_Sand.style.display = "none";
            labelContainerG19_Iron.style.display = "none";
            check19_Limestone =
                D19_Limestone_DG.value !== null ? D19_Limestone_DG.value : "0.0";
            check19_Shale = E19_Shale_DG.value !== null ? E19_Shale_DG.value : "0.0";
            check19_Sand = F19_Sand_DG.value !== null ? F19_Sand_DG.value : "0.0";
            check19_Iron = G19_Iron_DG.value !== null ? G19_Iron_DG.value : "0.0";
        }
    });

    // BEGIN FUNCTION/////////////////////////////////
    //#region
    const compute_total_C15 = () => {
        D15 = isNaN(parseFloat(D15_DG.value)) ? 0.0 : parseFloat(D15_DG.value);
        E15 = isNaN(parseFloat(E15_DG.value)) ? 0.0 : parseFloat(E15_DG.value);
        F15 = isNaN(parseFloat(F15_DG.value)) ? 0.0 : parseFloat(F15_DG.value);
        G15 = isNaN(parseFloat(G15_DG.value)) ? 0.0 : parseFloat(G15_DG.value);

        total_C15 = D15 + E15 + F15 + G15;
        return total_C15.toFixed(0);
    };

    const compute_total_C16 = () => {
        D16_Limestone = isNaN(parseFloat(check16_Limestone))
            ? 0.0
            : parseFloat(check16_Limestone);
        E16_Shale = isNaN(parseFloat(check16_Shale))
            ? 0.0
            : parseFloat(check16_Shale);
        F16_Sand = isNaN(parseFloat(check16_Sand)) ? 0.0 : parseFloat(check16_Sand);
        G16_Iron = isNaN(parseFloat(check16_Iron)) ? 0.0 : parseFloat(check16_Iron);

        total_C16 = D16_Limestone + E16_Shale + F16_Sand + G16_Iron;
        return total_C16.toFixed(0);
    };

    const compute_total_C17 = () => {
        D17_Limestone = isNaN(parseFloat(check17_Limestone))
            ? 0.0
            : parseFloat(check17_Limestone);
        E17_Shale = isNaN(parseFloat(check17_Shale))
            ? 0.0
            : parseFloat(check17_Shale);
        F17_Sand = isNaN(parseFloat(check17_Sand)) ? 0.0 : parseFloat(check17_Sand);
        G17_Iron = isNaN(parseFloat(check17_Iron)) ? 0.0 : parseFloat(check17_Iron);

        total_C17 = D17_Limestone + E17_Shale + F17_Sand + G17_Iron;
        return total_C17.toFixed(0);
    };

    const compute_total_C18 = () => {
        D18_Limestone = isNaN(parseFloat(check18_Limestone))
            ? 0.0
            : parseFloat(check18_Limestone);
        E18_Shale = isNaN(parseFloat(check18_Shale))
            ? 0.0
            : parseFloat(check18_Shale);
        F18_Sand = isNaN(parseFloat(check18_Sand)) ? 0.0 : parseFloat(check18_Sand);
        G18_Iron = isNaN(parseFloat(check18_Iron)) ? 0.0 : parseFloat(check18_Iron);

        total_C18 = D18_Limestone + E18_Shale + F18_Sand + G18_Iron;
        return total_C18.toFixed(0);
    };

    const compute_total_C19 = () => {
        D19_Limestone = isNaN(parseFloat(check19_Limestone))
            ? 0.0
            : parseFloat(check19_Limestone);
        E19_Shale = isNaN(parseFloat(check19_Shale))
            ? 0.0
            : parseFloat(check19_Shale);
        F19_Sand = isNaN(parseFloat(check19_Sand)) ? 0.0 : parseFloat(check19_Sand);
        G19_Iron = isNaN(parseFloat(check19_Iron)) ? 0.0 : parseFloat(check19_Iron);

        total_C19 = D19_Limestone + E19_Shale + F19_Sand + G19_Iron;
        return total_C19.toFixed(0);
    };

    const compute_Q15_LOI = () => {
        K15_CaO = isNaN(parseFloat(K15_CaO_DG.value))
            ? 0.0
            : parseFloat(K15_CaO_DG.value);
        L15_MgO = isNaN(parseFloat(L15_MgO_DG.value))
            ? 0.0
            : parseFloat(L15_MgO_DG.value);
        Q15_LOI = 0.786 * K15_CaO + 1.1 * L15_MgO + 0.2;
        return Q15_LOI.toFixed(2);
    };

    const compute_Q16_LOI = () => {
        K16_CaO = isNaN(parseFloat(K16_CaO_DG.value))
            ? 0.0
            : parseFloat(K16_CaO_DG.value);
        L16_MgO = isNaN(parseFloat(L16_MgO_DG.value))
            ? 0.0
            : parseFloat(L16_MgO_DG.value);
        Q16_LOI = 0.786 * K16_CaO + 1.1 * L16_MgO + 0.2;
        return Q16_LOI.toFixed(2);
    };

    const compute_Q17_LOI = () => {
        K17_CaO = isNaN(parseFloat(K17_CaO_DG.value))
            ? 0.0
            : parseFloat(K17_CaO_DG.value);
        L17_MgO = isNaN(parseFloat(L17_MgO_DG.value))
            ? 0.0
            : parseFloat(L17_MgO_DG.value);
        Q17_LOI = 0.786 * K17_CaO + 1.1 * L17_MgO + 0.2;
        return Q17_LOI.toFixed(2);
    };

    const compute_Q18_LOI = () => {
        K18_CaO = isNaN(parseFloat(K18_CaO_DG.value))
            ? 0.0
            : parseFloat(K18_CaO_DG.value);
        L18_MgO = isNaN(parseFloat(L18_MgO_DG.value))
            ? 0.0
            : parseFloat(L18_MgO_DG.value);
        Q18_LOI = 0.786 * K18_CaO + 1.1 * L18_MgO + 0.2;
        return Q18_LOI.toFixed(2);
    };

    // end XRF Analysis LOI Q_LOI

    //begin XRF Total

    const compute_R15_XRFtotal = () => {
        H15_SiO2 = isNaN(parseFloat(H15_SiO2_DG.value))
            ? 0.0
            : parseFloat(H15_SiO2_DG.value);
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);
        K15_CaO = isNaN(parseFloat(K15_CaO_DG.value))
            ? 0.0
            : parseFloat(K15_CaO_DG.value);
        L15_MgO = isNaN(parseFloat(L15_MgO_DG.value))
            ? 0.0
            : parseFloat(L15_MgO_DG.value);
        M15_Na2O = isNaN(parseFloat(M15_Na2O_DG.value))
            ? 0.0
            : parseFloat(M15_Na2O_DG.value);
        N15_K2O = isNaN(parseFloat(N15_K2O_DG.value))
            ? 0.0
            : parseFloat(N15_K2O_DG.value);
        O15_SO3 = isNaN(parseFloat(O15_SO3_DG.value))
            ? 0.0
            : parseFloat(O15_SO3_DG.value);
        P15_Cl = isNaN(parseFloat(P15_Cl_DG.value))
            ? 0.0
            : parseFloat(P15_Cl_DG.value);
        Q15_LOI = isNaN(parseFloat(Q15_LOI_DG.textContent))
            ? 0.0
            : parseFloat(Q15_LOI_DG.textContent);

        R15_XRFtotal =
            H15_SiO2 +
            I15_Al2O3 +
            J15_Fe2O3 +
            K15_CaO +
            L15_MgO +
            M15_Na2O +
            N15_K2O +
            O15_SO3 +
            P15_Cl +
            Q15_LOI;
        return R15_XRFtotal.toFixed(2);
    };

    const compute_R16_XRFtotal = () => {
        H16_SiO2 = isNaN(parseFloat(H16_SiO2_DG.value))
            ? 0.0
            : parseFloat(H16_SiO2_DG.value);
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);
        K16_CaO = isNaN(parseFloat(K16_CaO_DG.value))
            ? 0.0
            : parseFloat(K16_CaO_DG.value);
        L16_MgO = isNaN(parseFloat(L16_MgO_DG.value))
            ? 0.0
            : parseFloat(L16_MgO_DG.value);
        M16_Na2O = isNaN(parseFloat(M16_Na2O_DG.value))
            ? 0.0
            : parseFloat(M16_Na2O_DG.value);
        N16_K2O = isNaN(parseFloat(N16_K2O_DG.value))
            ? 0.0
            : parseFloat(N16_K2O_DG.value);
        O16_SO3 = isNaN(parseFloat(O16_SO3_DG.value))
            ? 0.0
            : parseFloat(O16_SO3_DG.value);
        P16_Cl = isNaN(parseFloat(P16_Cl_DG.value))
            ? 0.0
            : parseFloat(P16_Cl_DG.value);
        Q16_LOI = isNaN(parseFloat(Q16_LOI_DG.textContent))
            ? 0.0
            : parseFloat(Q16_LOI_DG.textContent);
        R16_XRFtotal =
            H16_SiO2 +
            I16_Al2O3 +
            J16_Fe2O3 +
            K16_CaO +
            L16_MgO +
            M16_Na2O +
            N16_K2O +
            O16_SO3 +
            P16_Cl +
            Q16_LOI;

        return R16_XRFtotal.toFixed(2);
    };

    const compute_R17_XRFtotal = () => {
        H17_SiO2 = isNaN(parseFloat(H17_SiO2_DG.value))
            ? 0.0
            : parseFloat(H17_SiO2_DG.value);
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);
        K17_CaO = isNaN(parseFloat(K17_CaO_DG.value))
            ? 0.0
            : parseFloat(K17_CaO_DG.value);
        L17_MgO = isNaN(parseFloat(L17_MgO_DG.value))
            ? 0.0
            : parseFloat(L17_MgO_DG.value);
        M17_Na2O = isNaN(parseFloat(M17_Na2O_DG.value))
            ? 0.0
            : parseFloat(M17_Na2O_DG.value);
        N17_K2O = isNaN(parseFloat(N17_K2O_DG.value))
            ? 0.0
            : parseFloat(N17_K2O_DG.value);
        O17_SO3 = isNaN(parseFloat(O17_SO3_DG.value))
            ? 0.0
            : parseFloat(O17_SO3_DG.value);
        P17_Cl = isNaN(parseFloat(P17_Cl_DG.value))
            ? 0.0
            : parseFloat(P17_Cl_DG.value);
        Q17_LOI = isNaN(parseFloat(Q17_LOI_DG.textContent))
            ? 0.0
            : parseFloat(Q17_LOI_DG.textContent);
        R17_XRFtotal =
            H17_SiO2 +
            I17_Al2O3 +
            J17_Fe2O3 +
            K17_CaO +
            L17_MgO +
            M17_Na2O +
            N17_K2O +
            O17_SO3 +
            P17_Cl +
            Q17_LOI;

        return R17_XRFtotal.toFixed(2);
    };

    const compute_R18_XRFtotal = () => {
        H18_SiO2 = isNaN(parseFloat(H18_SiO2_DG.value))
            ? 0.0
            : parseFloat(H18_SiO2_DG.value);
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        K18_CaO = isNaN(parseFloat(K18_CaO_DG.value))
            ? 0.0
            : parseFloat(K18_CaO_DG.value);
        L18_MgO = isNaN(parseFloat(L18_MgO_DG.value))
            ? 0.0
            : parseFloat(L18_MgO_DG.value);
        M18_Na2O = isNaN(parseFloat(M18_Na2O_DG.value))
            ? 0.0
            : parseFloat(M18_Na2O_DG.value);
        N18_K2O = isNaN(parseFloat(N18_K2O_DG.value))
            ? 0.0
            : parseFloat(N18_K2O_DG.value);
        O18_SO3 = isNaN(parseFloat(O18_SO3_DG.value))
            ? 0.0
            : parseFloat(O18_SO3_DG.value);
        P18_Cl = isNaN(parseFloat(P18_Cl_DG.value))
            ? 0.0
            : parseFloat(P18_Cl_DG.value);
        Q18_LOI = isNaN(parseFloat(Q18_LOI_DG.textContent))
            ? 0.0
            : parseFloat(Q18_LOI_DG.textContent);
        R18_XRFtotal =
            H18_SiO2 +
            I18_Al2O3 +
            J18_Fe2O3 +
            K18_CaO +
            L18_MgO +
            M18_Na2O +
            N18_K2O +
            O18_SO3 +
            P18_Cl +
            Q18_LOI;

        return R18_XRFtotal.toFixed(2);
    };

    const compute_S15_LSF_ratio = () => {
        K15_CaO = isNaN(parseFloat(K15_CaO_DG.value))
            ? 0.0
            : parseFloat(K15_CaO_DG.value);
        H15_SiO2 = isNaN(parseFloat(H15_SiO2_DG.value))
            ? 0.0
            : parseFloat(H15_SiO2_DG.value);
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);
        S15_LSF =
            (K15_CaO * 100) / (2.8 * H15_SiO2 + 1.2 * I15_Al2O3 + 0.65 * J15_Fe2O3);

        return S15_LSF.toFixed(2);
    };

    const compute_S16_LSF_ratio = () => {
        K16_CaO = isNaN(parseFloat(K16_CaO_DG.value))
            ? 0.0
            : parseFloat(K16_CaO_DG.value);
        H16_SiO2 = isNaN(parseFloat(H16_SiO2_DG.value))
            ? 0.0
            : parseFloat(H16_SiO2_DG.value);
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);
        S16_LSF =
            (K16_CaO | H16_SiO2 | I16_Al2O3 | J16_Fe2O3) <= 0
                ? 0.0
                : (K16_CaO * 100) /
                (2.8 * H16_SiO2 + 1.2 * I16_Al2O3 + 0.65 * J16_Fe2O3);

        return S16_LSF.toFixed(2);
    };

    const compute_S17_LSF_ratio = () => {
        K17_CaO = isNaN(parseFloat(K17_CaO_DG.value))
            ? 0.0
            : parseFloat(K17_CaO_DG.value);
        H17_SiO2 = isNaN(parseFloat(H17_SiO2_DG.value))
            ? 0.0
            : parseFloat(H17_SiO2_DG.value);
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);

        S17_LSF = (K17_CaO * 100) /
            (2.8 * H17_SiO2 + 1.2 * I17_Al2O3 + 0.65 * J17_Fe2O3);

        return S17_LSF.toFixed(2);
    };

    const compute_S18_LSF_ratio = () => {
        K18_CaO = isNaN(parseFloat(K18_CaO_DG.value))
            ? 0.0
            : parseFloat(K18_CaO_DG.value);
        H18_SiO2 = isNaN(parseFloat(H18_SiO2_DG.value))
            ? 0.0
            : parseFloat(H18_SiO2_DG.value);
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        S18_LSF =
            (K18_CaO * 100) / (2.8 * H18_SiO2 + 1.2 * I18_Al2O3 + 0.65 * J18_Fe2O3);

        return S18_LSF.toFixed(2);
    };

    const compute_T15_HM_ratio = () => {
        K15_CaO = isNaN(parseFloat(K15_CaO_DG.value))
            ? 0.0
            : parseFloat(K15_CaO_DG.value);
        H15_SiO2 = isNaN(parseFloat(H15_SiO2_DG.value))
            ? 0.0
            : parseFloat(H15_SiO2_DG.value);
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);
        T15_HM = K15_CaO / (H15_SiO2 + I15_Al2O3 + J15_Fe2O3);

        return T15_HM.toFixed(2);
    };

    const compute_T16_HM_ratio = () => {
        K16_CaO = isNaN(parseFloat(K16_CaO_DG.value))
            ? 0.0
            : parseFloat(K16_CaO_DG.value);
        H16_SiO2 = isNaN(parseFloat(H16_SiO2_DG.value))
            ? 0.0
            : parseFloat(H16_SiO2_DG.value);
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);
        T16_HM = K16_CaO / (H16_SiO2 + I16_Al2O3 + J16_Fe2O3);

        return T16_HM.toFixed(2);
    };

    const compute_T17_HM_ratio = () => {
        K17_CaO = isNaN(parseFloat(K17_CaO_DG.value))
            ? 0.0
            : parseFloat(K17_CaO_DG.value);
        H17_SiO2 = isNaN(parseFloat(H17_SiO2_DG.value))
            ? 0.0
            : parseFloat(H17_SiO2_DG.value);
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);
        T17_HM = K17_CaO / (H17_SiO2 + I17_Al2O3 + J17_Fe2O3);

        return T17_HM.toFixed(2);
    };

    const compute_T18_HM_ratio = () => {
        K18_CaO = isNaN(parseFloat(K18_CaO_DG.value))
            ? 0.0
            : parseFloat(K18_CaO_DG.value);
        H18_SiO2 = isNaN(parseFloat(H18_SiO2_DG.value))
            ? 0.0
            : parseFloat(H18_SiO2_DG.value);
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        T18_HM = K18_CaO / (H18_SiO2 + I18_Al2O3 + J18_Fe2O3);

        return T18_HM.toFixed(2);
    };

    const compute_U15_SM_ratio = () => {
        H15_SiO2 = isNaN(parseFloat(H15_SiO2_DG.value))
            ? 0.0
            : parseFloat(H15_SiO2_DG.value);
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);
        U15_SM = H15_SiO2 / (I15_Al2O3 + J15_Fe2O3);

        return U15_SM.toFixed(2);
    };

    const compute_U16_SM_ratio = () => {
        H16_SiO2 = isNaN(parseFloat(H16_SiO2_DG.value))
            ? 0.0
            : parseFloat(H16_SiO2_DG.value);
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);
        U16_SM = H16_SiO2 / (I16_Al2O3 + J16_Fe2O3);

        return U16_SM.toFixed(2);
    };

    const compute_U17_SM_ratio = () => {
        H17_SiO2 = isNaN(parseFloat(H17_SiO2_DG.value))
            ? 0.0
            : parseFloat(H17_SiO2_DG.value);
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);
        U17_SM = H17_SiO2 / (I17_Al2O3 + J17_Fe2O3);

        return U17_SM.toFixed(2);
    };

    const compute_U18_SM_ratio = () => {
        H18_SiO2 = isNaN(parseFloat(H18_SiO2_DG.value))
            ? 0.0
            : parseFloat(H18_SiO2_DG.value);
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        U18_SM = H18_SiO2 / (I18_Al2O3 + J18_Fe2O3);

        return U18_SM.toFixed(2);
    };

    const compute_V15_AM_ratio = () => {
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);
        V15_AM = I15_Al2O3 / J15_Fe2O3;

        return V15_AM.toFixed(2);
    };

    const compute_V16_AM_ratio = () => {
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);
        V16_AM = I16_Al2O3 / J16_Fe2O3;

        return V16_AM.toFixed(2);
    };

    const compute_V17_AM_ratio = () => {
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);
        V17_AM = I17_Al2O3 / J17_Fe2O3;

        return V17_AM.toFixed(2);
    };

    const compute_V18_AM_ratio = () => {
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        V18_AM = I18_Al2O3 / J18_Fe2O3;

        return V18_AM.toFixed(2);
    };

    // end Ratio

    //Material Setting Elements
    const compute_D19_Limestone = () => {
        D18_Limestone = isNaN(parseFloat(check18_Limestone))
            ? 0.0
            : parseFloat(check18_Limestone);
        F30_LSF_TG = isNaN(parseFloat(F30_LSF_TG_DG.value))
            ? 0.0
            : parseFloat(F30_LSF_TG_DG.value);
        S18_LSF = isNaN(parseFloat(S18_LSF_DG.textContent))
            ? 0.0
            : parseFloat(S18_LSF_DG.textContent);
        C30_LSF_PR = isNaN(parseFloat(C30_LSF_PR_DG.value))
            ? 0.0
            : parseFloat(C30_LSF_PR_DG.value);

        E19_Shale = isNaN(parseFloat(check19_Shale)) ? 0.0
            : parseFloat(check19_Shale);
        F19_Sand = isNaN(parseFloat(check19_Sand)) ? 0.0 : parseFloat(check19_Sand);
        G19_Iron = isNaN(parseFloat(check19_Iron)) ? 0.0 : parseFloat(check19_Iron);

        // D19_Limestone = D18_Limestone + (F30_LSF_TG - S18_LSF) * C30_LSF_PR * 1.3;
        D19_Limestone = 100 - E19_Shale - F19_Sand - G19_Iron;
        return D19_Limestone.toFixed(1);
    };

    const compute_E19_Shale = () => {
        E18_Shale = isNaN(parseFloat(check18_Shale)) ? 0.0 : parseFloat(check18_Shale);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value)) ? 0.0 : parseFloat(I31_Al2O3_DG.value);
        I18_Al2O3 = isNaN(parseFloat(I18_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I18_Al2O3_DG.value);

        E19_Shale = E18_Shale + I31_Al2O3 - I18_Al2O3;
        return E19_Shale.toFixed(1);
    };

    const compute_F19_Sand = () => {


        F18_Sand = isNaN(parseFloat(check18_Sand)) ? 0.0 : parseFloat(check18_Sand);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value)) ? 0.0 : parseFloat(H31_SiO2_DG.value);
        H18_SiO2 = isNaN(parseFloat(H18_SiO2_DG.value))
            ? 0.0
            : parseFloat(H18_SiO2_DG.value);


        // F19_Sand = F18_Sand + (F31_SM_TG - U18_SM) * C31_SM_PR * 1.3;
        F19_Sand = F18_Sand + H31_SiO2 - H18_SiO2;
        return F19_Sand.toFixed(1);
    };

    const compute_G19_Iron = () => {


        G18_Iron = isNaN(parseFloat(check18_Iron)) ? 0.0 : parseFloat(check18_Iron);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value)) ? 0.0 : parseFloat(J31_Fe2O3_DG.value);
        J18_Fe2O3 = isNaN(parseFloat(J18_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J18_Fe2O3_DG.value);
        G19_Iron = G18_Iron + J31_Fe2O3 - J18_Fe2O3;

        return G19_Iron.toFixed(1);
    };

    const compute_D16_Limestone = () => {

        E16_Shale = isNaN(parseFloat(check16_Shale))
            ? 0.0
            : parseFloat(check16_Shale);
        F16_Sand = isNaN(parseFloat(check16_Sand) ? 0.0 : parseFloat(check16_Sand));
        G16_Iron = isNaN(parseFloat(check16_Iron) ? 0.0 : parseFloat(check16_Iron));

        D16_Limestone = 100 - parseFloat(check16_Shale) - parseFloat(check16_Sand) - parseFloat(check16_Iron)
        return D16_Limestone.toFixed(1);
    };

    const compute_D17_Limestone = () => {
        E17_Shale = isNaN(parseFloat(check17_Shale))
            ? 0.0
            : parseFloat(check17_Shale);
        F17_Sand = isNaN(parseFloat(check17_Sand) ? 0.0 : parseFloat(check17_Sand));
        G17_Iron = isNaN(parseFloat(check17_Iron) ? 0.0 : parseFloat(check17_Iron));

        D17_Limestone = 100 - parseFloat(check17_Shale) - parseFloat(check17_Sand) - parseFloat(check17_Iron)
        return D17_Limestone.toFixed(1);
    };

    const compute_D18_Limestone = () => {
        E18_Shale = isNaN(parseFloat(check18_Shale))
            ? 0.0
            : parseFloat(check18_Shale);
        F18_Sand = isNaN(parseFloat(check18_Sand) ? 0.0 : parseFloat(check18_Sand));
        G18_Iron = isNaN(parseFloat(check18_Iron) ? 0.0 : parseFloat(check18_Iron));

        D18_Limestone = 100 - parseFloat(check18_Shale) - parseFloat(check18_Sand) - parseFloat(check18_Iron)
        return D18_Limestone.toFixed(1);
    };

    const compute_E16_Shale = () => {
        E15 = isNaN(parseFloat(E15_DG.value)) ? 0.0 : parseFloat(E15_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        I15_Al2O3 = isNaN(parseFloat(I15_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I15_Al2O3_DG.value);

        E16_Shale = E15 + I31_Al2O3 - I15_Al2O3;
        return E16_Shale.toFixed(1);
    };

    const compute_E17_Shale = () => {
        E16_Shale = isNaN(parseFloat(check16_Shale))
            ? 0.0
            : parseFloat(check16_Shale);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        I16_Al2O3 = isNaN(parseFloat(I16_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I16_Al2O3_DG.value);

        E17_Shale = E16_Shale + I31_Al2O3 - I16_Al2O3;
        return E17_Shale.toFixed(1);
    };

    const compute_E18_Shale = () => {
        E17_Shale = isNaN(parseFloat(check17_Shale))
            ? 0.0
            : parseFloat(check17_Shale);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        I17_Al2O3 = isNaN(parseFloat(I17_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I17_Al2O3_DG.value);

        E18_Shale = E17_Shale + I31_Al2O3 - I17_Al2O3;
        return E18_Shale.toFixed(1);
    };

    const compute_F16_Sand = () => {


        F15 = isNaN(parseFloat(F15_DG.value)) ? 0.0 : parseFloat(F15_DG.value);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        H15_SiO2 = isNaN(parseFloat(H15_SiO2_DG.value))
            ? 0.0
            : parseFloat(H15_SiO2_DG.value);

        F16_Sand = F15 + H31_SiO2 - H15_SiO2;
        return F16_Sand.toFixed(1);
    };

    const compute_F17_Sand = () => {
        F16_Sand = isNaN(parseFloat(check16_Sand)) ? 0.0 : parseFloat(check16_Sand);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        H16_SiO2 = isNaN(parseFloat(H16_SiO2_DG.value))
            ? 0.0
            : parseFloat(H16_SiO2_DG.value);

        F17_Sand = F16_Sand + H31_SiO2 - H16_SiO2;
        return F17_Sand.toFixed(1);
    };

    const compute_F18_Sand = () => {
        F17_Sand = isNaN(parseFloat(check17_Sand)) ? 0.0 : parseFloat(check17_Sand);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        H17_SiO2 = isNaN(parseFloat(H17_SiO2_DG.value))
            ? 0.0
            : parseFloat(H17_SiO2_DG.value);

        F18_Sand = F17_Sand + H31_SiO2 - H17_SiO2;
        return F18_Sand.toFixed(1);
    };

    const compute_G16_Iron = () => {

        G15 = isNaN(parseFloat(G15_DG.value)) ? 0.0 : parseFloat(G15_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);
        J15_Fe2O3 = isNaN(parseFloat(J15_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J15_Fe2O3_DG.value);

        G16_Iron = G15 + J31_Fe2O3 - J15_Fe2O3;
        return G16_Iron.toFixed(1);
    };

    const compute_G17_Iron = () => {
        G16_Iron = isNaN(parseFloat(check16_Iron)) ? 0.0 : parseFloat(check16_Iron);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);
        J16_Fe2O3 = isNaN(parseFloat(J16_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J16_Fe2O3_DG.value);

        G17_Iron = G16_Iron + J31_Fe2O3 - J16_Fe2O3;
        return G17_Iron.toFixed(1);
    };

    const compute_G18_Iron = () => {
        G17_Iron = isNaN(parseFloat(check17_Iron)) ? 0.0 : parseFloat(check17_Iron);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);
        J17_Fe2O3 = isNaN(parseFloat(J17_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J17_Fe2O3_DG.value);

        G18_Iron = G17_Iron + J31_Fe2O3 - J17_Fe2O3;
        return G18_Iron.toFixed(1);
    };
    // End Material Setting Elements

    //Begin Average
    function calculateAverage(range) {
        const sum = range.reduce((total, value) => total + value, 0);
        return (sum / range.length).toFixed(2);
    }

    function calculateAverage_D20_AVG() {
        const range = [
            isNaN(parseFloat(D15_DG.value)) ? 0.0 : parseFloat(D15_DG.value),
            isNaN(parseFloat(check16_Limestone))
                ? 0.0
                : parseFloat(check16_Limestone),
            isNaN(parseFloat(check17_Limestone))
                ? 0.0
                : parseFloat(check17_Limestone),
            isNaN(parseFloat(check18_Limestone))
                ? 0.0
                : parseFloat(check18_Limestone),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_E20_AVG() {
        const range = [
            isNaN(parseFloat(E15_DG.value)) ? 0.0 : parseFloat(E15_DG.value),
            isNaN(parseFloat(check16_Shale)) ? 0.0 : parseFloat(check16_Shale),
            isNaN(parseFloat(check17_Shale)) ? 0.0 : parseFloat(check17_Shale),
            isNaN(parseFloat(check18_Shale)) ? 0.0 : parseFloat(check18_Shale),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_F20_AVG() {
        const range = [
            isNaN(parseFloat(F15_DG.value)) ? 0.0 : parseFloat(F15_DG.value),
            isNaN(parseFloat(check16_Sand)) ? 0.0 : parseFloat(check16_Sand),
            isNaN(parseFloat(check17_Sand)) ? 0.0 : parseFloat(check17_Sand),
            isNaN(parseFloat(check18_Sand)) ? 0.0 : parseFloat(check18_Sand),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_G20_AVG() {
        const range = [
            isNaN(parseFloat(G15_DG.value)) ? 0.0 : parseFloat(G15_DG.value),
            isNaN(parseFloat(check16_Iron)),
            isNaN(parseFloat(check17_Iron)) ? 0.0 : parseFloat(check17_Iron),
            isNaN(parseFloat(check18_Iron)) ? 0.0 : parseFloat(check18_Iron),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_H20_AVG() {
        const range = [
            isNaN(parseFloat(H15_SiO2_DG.value))
                ? 0.0
                : parseFloat(H15_SiO2_DG.value),
            isNaN(parseFloat(H16_SiO2_DG.value))
                ? 0.0
                : parseFloat(H16_SiO2_DG.value),
            isNaN(parseFloat(H17_SiO2_DG.value))
                ? 0.0
                : parseFloat(H17_SiO2_DG.value),
            isNaN(parseFloat(H18_SiO2_DG.value))
                ? 0.0
                : parseFloat(H18_SiO2_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_I20_AVG() {
        const range = [
            isNaN(parseFloat(I15_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I15_Al2O3_DG.value),
            isNaN(parseFloat(I16_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I16_Al2O3_DG.value),
            isNaN(parseFloat(I17_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I17_Al2O3_DG.value),
            isNaN(parseFloat(I18_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I18_Al2O3_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_J20_AVG() {
        const range = [
            isNaN(parseFloat(J15_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J15_Fe2O3_DG.value),
            isNaN(parseFloat(J16_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J16_Fe2O3_DG.value),
            isNaN(parseFloat(J17_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J17_Fe2O3_DG.value),
            isNaN(parseFloat(J18_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J18_Fe2O3_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_K20_AVG() {
        const range = [
            isNaN(parseFloat(K15_CaO_DG.value)) ? 0.0 : parseFloat(K15_CaO_DG.value),
            isNaN(parseFloat(K16_CaO_DG.value)) ? 0.0 : parseFloat(K16_CaO_DG.value),
            isNaN(parseFloat(K17_CaO_DG.value)) ? 0.0 : parseFloat(K17_CaO_DG.value),
            isNaN(parseFloat(K18_CaO_DG.value)) ? 0.0 : parseFloat(K18_CaO_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_L20_AVG() {
        const range = [
            isNaN(parseFloat(L15_MgO_DG.value)) ? 0.0 : parseFloat(L15_MgO_DG.value),
            isNaN(parseFloat(L16_MgO_DG.value)) ? 0.0 : parseFloat(L16_MgO_DG.value),
            isNaN(parseFloat(L17_MgO_DG.value)) ? 0.0 : parseFloat(L17_MgO_DG.value),
            isNaN(parseFloat(L18_MgO_DG.value)) ? 0.0 : parseFloat(L18_MgO_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_M20_AVG() {
        const range = [
            isNaN(parseFloat(M15_Na2O_DG.value))
                ? 0.0
                : parseFloat(M15_Na2O_DG.value),
            isNaN(parseFloat(M16_Na2O_DG.value))
                ? 0.0
                : parseFloat(M16_Na2O_DG.value),
            isNaN(parseFloat(M17_Na2O_DG.value))
                ? 0.0
                : parseFloat(M17_Na2O_DG.value),
            isNaN(parseFloat(M18_Na2O_DG.value))
                ? 0.0
                : parseFloat(M18_Na2O_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_N20_AVG() {
        const range = [
            isNaN(parseFloat(N15_K2O_DG.value)) ? 0.0 : parseFloat(N15_K2O_DG.value),
            isNaN(parseFloat(N16_K2O_DG.value)) ? 0.0 : parseFloat(N16_K2O_DG.value),
            isNaN(parseFloat(N17_K2O_DG.value)) ? 0.0 : parseFloat(N17_K2O_DG.value),
            isNaN(parseFloat(N18_K2O_DG.value)) ? 0.0 : parseFloat(N18_K2O_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_O20_AVG() {
        const range = [
            isNaN(parseFloat(O15_SO3_DG.value)) ? 0.0 : parseFloat(O15_SO3_DG.value),
            isNaN(parseFloat(O16_SO3_DG.value)) ? 0.0 : parseFloat(O16_SO3_DG.value),
            isNaN(parseFloat(O17_SO3_DG.value)) ? 0.0 : parseFloat(O17_SO3_DG.value),
            isNaN(parseFloat(O18_SO3_DG.value)) ? 0.0 : parseFloat(O18_SO3_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_P20_AVG() {
        const range = [
            isNaN(parseFloat(P15_Cl_DG.value)) ? 0.0 : parseFloat(P15_Cl_DG.value),
            isNaN(parseFloat(P16_Cl_DG.value)) ? 0.0 : parseFloat(P16_Cl_DG.value),
            isNaN(parseFloat(P17_Cl_DG.value)) ? 0.0 : parseFloat(P17_Cl_DG.value),
            isNaN(parseFloat(P18_Cl_DG.value)) ? 0.0 : parseFloat(P18_Cl_DG.value),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_Q20_AVG() {
        const range = [
            isNaN(parseFloat(Q15_LOI_DG.textContent)) ? 0.0 : parseFloat(Q15_LOI_DG.textContent),
            isNaN(parseFloat(Q16_LOI_DG.textContent)) ? 0.0 : parseFloat(Q16_LOI_DG.textContent),
            isNaN(parseFloat(Q17_LOI_DG.textContent)) ? 0.0 : parseFloat(Q17_LOI_DG.textContent),
            isNaN(parseFloat(Q18_LOI_DG.textContent)) ? 0.0 : parseFloat(Q18_LOI_DG.textContent),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_R20_AVG() {
        const range = [
            isNaN(parseFloat(R15_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R15_XRFtotal_DG.textContent),
            isNaN(parseFloat(R16_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R16_XRFtotal_DG.textContent),
            isNaN(parseFloat(R17_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R17_XRFtotal_DG.textContent),
            isNaN(parseFloat(R18_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R18_XRFtotal_DG.textContent),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_S20_AVG() {
        const range = [
            isNaN(parseFloat(S15_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S15_LSF_DG.textContent),
            isNaN(parseFloat(S16_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S16_LSF_DG.textContent),
            isNaN(parseFloat(S17_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S17_LSF_DG.textContent),
            isNaN(parseFloat(S18_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S18_LSF_DG.textContent),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_T20_AVG() {
        const range = [
            isNaN(parseFloat(T15_HM_DG.textContent))
                ? 0.0
                : parseFloat(T15_HM_DG.textContent),
            isNaN(parseFloat(T16_HM_DG.textContent))
                ? 0.0
                : parseFloat(T16_HM_DG.textContent),
            isNaN(parseFloat(T17_HM_DG.textContent))
                ? 0.0
                : parseFloat(T17_HM_DG.textContent),
            isNaN(parseFloat(T18_HM_DG.textContent))
                ? 0.0
                : parseFloat(T18_HM_DG.textContent),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_U20_AVG() {
        const range = [
            isNaN(parseFloat(U15_SM_DG.textContent))
                ? 0.0
                : parseFloat(U15_SM_DG.textContent),
            isNaN(parseFloat(U16_SM_DG.textContent))
                ? 0.0
                : parseFloat(U16_SM_DG.textContent),
            isNaN(parseFloat(U17_SM_DG.textContent))
                ? 0.0
                : parseFloat(U17_SM_DG.textContent),
            isNaN(parseFloat(U18_SM_DG.textContent))
                ? 0.0
                : parseFloat(U18_SM_DG.textContent),
        ];
        return calculateAverage(range);
    }

    function calculateAverage_V20_AVG() {
        const range = [
            isNaN(parseFloat(V15_AM_DG.textContent))
                ? 0.0
                : parseFloat(V15_AM_DG.textContent),
            isNaN(parseFloat(V16_AM_DG.textContent))
                ? 0.0
                : parseFloat(V16_AM_DG.textContent),
            isNaN(parseFloat(V17_AM_DG.textContent))
                ? 0.0
                : parseFloat(V17_AM_DG.textContent),
            isNaN(parseFloat(V18_AM_DG.textContent))
                ? 0.0
                : parseFloat(V18_AM_DG.textContent),
        ];
        return calculateAverage(range);
    }
    //End Average

    //Begin STDEV
    function calculateSTDev_D20_STDEV() {
        const range = [
            isNaN(parseFloat(D15_DG.value)) ? 0.0 : parseFloat(D15_DG.value),
            isNaN(parseFloat(check16_Limestone))
                ? 0.0
                : parseFloat(check16_Limestone),
            isNaN(parseFloat(check17_Limestone))
                ? 0.0
                : parseFloat(check17_Limestone),
            isNaN(parseFloat(check18_Limestone))
                ? 0.0
                : parseFloat(check18_Limestone),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        D20_STDEV = Math.sqrt(variance)
        return D20_STDEV.toFixed(2);
    }
    function calculateSTDev_E20_STDEV() {
        const range = [
            isNaN(parseFloat(E15_DG.value)) ? 0.0 : parseFloat(E15_DG.value),
            isNaN(parseFloat(check16_Shale)) ? 0.0 : parseFloat(check16_Shale),
            isNaN(parseFloat(check17_Shale)) ? 0.0 : parseFloat(check17_Shale),
            isNaN(parseFloat(check18_Shale)) ? 0.0 : parseFloat(check18_Shale),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        E20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return E20_STDEV.toFixed(2);
    }
    function calculateSTDev_F20_STDEV() {
        const range = [
            isNaN(parseFloat(F15_DG.value)) ? 0.0 : parseFloat(F15_DG.value),
            isNaN(parseFloat(check16_Sand)) ? 0.0 : parseFloat(check16_Sand),
            isNaN(parseFloat(check17_Sand)) ? 0.0 : parseFloat(check17_Sand),
            isNaN(parseFloat(check18_Sand)) ? 0.0 : parseFloat(check18_Sand),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        F20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return F20_STDEV.toFixed(2);
    }
    function calculateSTDev_G20_STDEV() {
        const range = [
            isNaN(parseFloat(G15_DG.value)) ? 0.0 : parseFloat(G15_DG.value),
            isNaN(parseFloat(check16_Iron)) ? 0.0 : parseFloat(check16_Iron),
            isNaN(parseFloat(check17_Iron)) ? 0.0 : parseFloat(check17_Iron),
            isNaN(parseFloat(check18_Iron)) ? 0.0 : parseFloat(check18_Iron),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        G20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return G20_STDEV.toFixed(2);
    }

    function calculateSTDev_H20_STDEV() {
        const range = [
            isNaN(parseFloat(H15_SiO2_DG.value))
                ? 0.0
                : parseFloat(H15_SiO2_DG.value),
            isNaN(parseFloat(H16_SiO2_DG.value))
                ? 0.0
                : parseFloat(H16_SiO2_DG.value),
            isNaN(parseFloat(H17_SiO2_DG.value))
                ? 0.0
                : parseFloat(H17_SiO2_DG.value),
            isNaN(parseFloat(H18_SiO2_DG.value))
                ? 0.0
                : parseFloat(H18_SiO2_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        H20_STDEV = Math.sqrt(variance);

        return H20_STDEV.toFixed(2);
    }

    function calculateSTDev_I20_STDEV() {
        const range = [
            isNaN(parseFloat(I15_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I15_Al2O3_DG.value),
            isNaN(parseFloat(I16_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I16_Al2O3_DG.value),
            isNaN(parseFloat(I17_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I17_Al2O3_DG.value),
            isNaN(parseFloat(I18_Al2O3_DG.value))
                ? 0.0
                : parseFloat(I18_Al2O3_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        I20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return I20_STDEV.toFixed(2);
    }
    function calculateSTDev_J20_STDEV() {
        const range = [
            isNaN(parseFloat(J15_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J15_Fe2O3_DG.value),
            isNaN(parseFloat(J16_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J16_Fe2O3_DG.value),
            isNaN(parseFloat(J17_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J17_Fe2O3_DG.value),
            isNaN(parseFloat(J18_Fe2O3_DG.value))
                ? 0.0
                : parseFloat(J18_Fe2O3_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        J20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return J20_STDEV.toFixed(2);
    }
    function calculateSTDev_K20_STDEV() {
        const range = [
            isNaN(parseFloat(K15_CaO_DG.value)) ? 0.0 : parseFloat(K15_CaO_DG.value),
            isNaN(parseFloat(K16_CaO_DG.value)) ? 0.0 : parseFloat(K16_CaO_DG.value),
            isNaN(parseFloat(K17_CaO_DG.value)) ? 0.0 : parseFloat(K17_CaO_DG.value),
            isNaN(parseFloat(K18_CaO_DG.value)) ? 0.0 : parseFloat(K18_CaO_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        K20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return K20_STDEV.toFixed(2);
    }
    function calculateSTDev_L20_STDEV() {
        const range = [
            isNaN(parseFloat(L15_MgO_DG.value)) ? 0.0 : parseFloat(L15_MgO_DG.value),
            isNaN(parseFloat(L16_MgO_DG.value)) ? 0.0 : parseFloat(L16_MgO_DG.value),
            isNaN(parseFloat(L17_MgO_DG.value)) ? 0.0 : parseFloat(L17_MgO_DG.value),
            isNaN(parseFloat(L18_MgO_DG.value)) ? 0.0 : parseFloat(L18_MgO_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        L20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return L20_STDEV.toFixed(2);
    }
    function calculateSTDev_M20_STDEV() {
        const range = [
            isNaN(parseFloat(M15_Na2O_DG.value))
                ? 0.0
                : parseFloat(M15_Na2O_DG.value),
            isNaN(parseFloat(M16_Na2O_DG.value))
                ? 0.0
                : parseFloat(M16_Na2O_DG.value),
            isNaN(parseFloat(M17_Na2O_DG.value))
                ? 0.0
                : parseFloat(M17_Na2O_DG.value),
            isNaN(parseFloat(M18_Na2O_DG.value))
                ? 0.0
                : parseFloat(M18_Na2O_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        M20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return M20_STDEV.toFixed(2);
    }
    function calculateSTDev_N20_STDEV() {
        const range = [
            isNaN(parseFloat(N15_K2O_DG.value)) ? 0.0 : parseFloat(N15_K2O_DG.value),
            isNaN(parseFloat(N16_K2O_DG.value)) ? 0.0 : parseFloat(N16_K2O_DG.value),
            isNaN(parseFloat(N17_K2O_DG.value)) ? 0.0 : parseFloat(N17_K2O_DG.value),
            isNaN(parseFloat(N18_K2O_DG.value)) ? 0.0 : parseFloat(N18_K2O_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        N20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return N20_STDEV.toFixed(2);
    }
    function calculateSTDev_O20_STDEV() {
        const range = [
            isNaN(parseFloat(O15_SO3_DG.value)) ? 0.0 : parseFloat(O15_SO3_DG.value),
            isNaN(parseFloat(O16_SO3_DG.value)) ? 0.0 : parseFloat(O16_SO3_DG.value),
            isNaN(parseFloat(O17_SO3_DG.value)) ? 0.0 : parseFloat(O17_SO3_DG.value),
            isNaN(parseFloat(O18_SO3_DG.value)) ? 0.0 : parseFloat(O18_SO3_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        O20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return O20_STDEV.toFixed(2);
    }

    function calculateSTDev_P20_STDEV() {
        const range = [
            isNaN(parseFloat(P15_Cl_DG.value)) ? 0.0 : parseFloat(P15_Cl_DG.value),
            isNaN(parseFloat(P16_Cl_DG.value)) ? 0.0 : parseFloat(P16_Cl_DG.value),
            isNaN(parseFloat(P17_Cl_DG.value)) ? 0.0 : parseFloat(P17_Cl_DG.value),
            isNaN(parseFloat(P18_Cl_DG.value)) ? 0.0 : parseFloat(P18_Cl_DG.value),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        P20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return P20_STDEV.toFixed(2);
    }
    function calculateSTDev_Q20_STDEV() {
        const range = [
            isNaN(parseFloat(Q15_LOI_DG.textContent)) ? 0.0 : parseFloat(Q15_LOI_DG.textContent),
            isNaN(parseFloat(Q16_LOI_DG.textContent)) ? 0.0 : parseFloat(Q16_LOI_DG.textContent),
            isNaN(parseFloat(Q17_LOI_DG.textContent)) ? 0.0 : parseFloat(Q17_LOI_DG.textContent),
            isNaN(parseFloat(Q18_LOI_DG.textContent)) ? 0.0 : parseFloat(Q18_LOI_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        Q20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return Q20_STDEV.toFixed(2);
    }
    function calculateSTDev_R20_STDEV() {
        const range = [
            isNaN(parseFloat(R15_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R15_XRFtotal_DG.textContent),
            isNaN(parseFloat(R16_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R16_XRFtotal_DG.textContent),
            isNaN(parseFloat(R17_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R17_XRFtotal_DG.textContent),
            isNaN(parseFloat(R18_XRFtotal_DG.textContent))
                ? 0.0
                : parseFloat(R18_XRFtotal_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        R20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return R20_STDEV.toFixed(2);
    }
    function calculateSTDev_S20_STDEV() {
        const range = [
            isNaN(parseFloat(S15_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S15_LSF_DG.textContent),
            isNaN(parseFloat(S16_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S16_LSF_DG.textContent),
            isNaN(parseFloat(S17_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S17_LSF_DG.textContent),
            isNaN(parseFloat(S18_LSF_DG.textContent))
                ? 0.0
                : parseFloat(S18_LSF_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        S20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return S20_STDEV.toFixed(2);
    }
    function calculateSTDev_T20_STDEV() {
        const range = [
            isNaN(parseFloat(T15_HM_DG.textContent))
                ? 0.0
                : parseFloat(T15_HM_DG.textContent),
            isNaN(parseFloat(T16_HM_DG.textContent))
                ? 0.0
                : parseFloat(T16_HM_DG.textContent),
            isNaN(parseFloat(T17_HM_DG.textContent))
                ? 0.0
                : parseFloat(T17_HM_DG.textContent),
            isNaN(parseFloat(T18_HM_DG.textContent))
                ? 0.0
                : parseFloat(T18_HM_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        T20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return T20_STDEV.toFixed(2);
    }
    function calculateSTDev_U20_STDEV() {
        const range = [
            isNaN(parseFloat(U15_SM_DG.textContent))
                ? 0.0
                : parseFloat(U15_SM_DG.textContent),
            isNaN(parseFloat(U16_SM_DG.textContent))
                ? 0.0
                : parseFloat(U16_SM_DG.textContent),
            isNaN(parseFloat(U17_SM_DG.textContent))
                ? 0.0
                : parseFloat(U17_SM_DG.textContent),
            isNaN(parseFloat(U18_SM_DG.textContent))
                ? 0.0
                : parseFloat(U18_SM_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        U20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return U20_STDEV.toFixed(2);
    }
    function calculateSTDev_V20_STDEV() {
        const range = [
            isNaN(parseFloat(V15_AM_DG.textContent))
                ? 0.0
                : parseFloat(V15_AM_DG.textContent),
            isNaN(parseFloat(V16_AM_DG.textContent))
                ? 0.0
                : parseFloat(V16_AM_DG.textContent),
            isNaN(parseFloat(V17_AM_DG.textContent))
                ? 0.0
                : parseFloat(V17_AM_DG.textContent),
            isNaN(parseFloat(V18_AM_DG.textContent))
                ? 0.0
                : parseFloat(V18_AM_DG.textContent),
        ];
        const mean =
            range.reduce((total, value) => total + value, 0) / range.length;
        const squaredDifferencesSum = range.map(
            value => Math.pow(value - mean, 2));
        const variance = squaredDifferencesSum.reduce((total, diff) => total + diff, 0) / (range.length - 1);
        V20_STDEV = isNaN(Math.sqrt(variance)) ? 0.0 : Math.sqrt(variance);
        return V20_STDEV.toFixed(2);
    }
    //End STDEV

    //Begin MIN
    function findMinValue_D20_MIN() {
        D20_MIN = Math.min(
            D15_DG.value,
            check16_Limestone,
            check17_Limestone,
            check18_Limestone
        );
        return D20_MIN.toFixed(2);
    }
    function findMinValue_E20_MIN() {
        E20_MIN = Math.min(
            E15_DG.value,
            check16_Shale,
            check17_Shale,
            check18_Shale
        );
        return E20_MIN.toFixed(2);
    }
    function findMinValue_F20_MIN() {
        F20_MIN = Math.min(F15_DG.value, check16_Sand, check17_Sand, check18_Sand);
        return F20_MIN.toFixed(2);
    }
    function findMinValue_G20_MIN() {
        G20_MIN = Math.min(G15_DG.value, check16_Iron, check17_Iron, check18_Iron);
        return G20_MIN.toFixed(2);
    }
    function findMinValue_H20_MIN() {
        H20_MIN = Math.min(
            H15_SiO2_DG.value,
            H16_SiO2_DG.value,
            H17_SiO2_DG.value,
            H18_SiO2_DG.value
        );
        return H20_MIN.toFixed(2);
    }
    function findMinValue_I20_MIN() {
        I20_MIN = Math.min(
            I15_Al2O3_DG.value,
            I16_Al2O3_DG.value,
            I17_Al2O3_DG.value,
            I18_Al2O3_DG.value
        );
        return I20_MIN.toFixed(2);
    }
    function findMinValue_J20_MIN() {
        J20_MIN = Math.min(
            J15_Fe2O3_DG.value,
            J16_Fe2O3_DG.value,
            J17_Fe2O3_DG.value,
            J18_Fe2O3_DG.value
        );
        return J20_MIN.toFixed(2);
    }
    function findMinValue_K20_MIN() {
        K20_MIN = Math.min(
            K15_CaO_DG.value,
            K16_CaO_DG.value,
            K17_CaO_DG.value,
            K18_CaO_DG.value
        );
        return K20_MIN.toFixed(2);
    }
    function findMinValue_L20_MIN() {
        L20_MIN = Math.min(
            L15_MgO_DG.value,
            L16_MgO_DG.value,
            L17_MgO_DG.value,
            L18_MgO_DG.value
        );
        return L20_MIN.toFixed(2);
    }
    function findMinValue_M20_MIN() {
        M20_MIN = Math.min(
            M15_Na2O_DG.value,
            M16_Na2O_DG.value,
            M17_Na2O_DG.value,
            M18_Na2O_DG.value
        );
        return M20_MIN.toFixed(2);
    }
    function findMinValue_N20_MIN() {
        N20_MIN = Math.min(
            N15_K2O_DG.value,
            N16_K2O_DG.value,
            N17_K2O_DG.value,
            N18_K2O_DG.value
        );
        return N20_MIN.toFixed(2);
    }
    function findMinValue_O20_MIN() {
        O20_MIN = Math.min(
            O15_SO3_DG.value,
            O16_SO3_DG.value,
            O17_SO3_DG.value,
            O18_SO3_DG.value
        );
        return O20_MIN.toFixed(2);
    }
    function findMinValue_P20_MIN() {
        P20_MIN = Math.min(
            P15_Cl_DG.value,
            P16_Cl_DG.value,
            P17_Cl_DG.value,
            P18_Cl_DG.value
        );
        return P20_MIN.toFixed(2);
    }
    function findMinValue_Q20_MIN() {
        Q20_MIN = Math.min(
            Q15_LOI_DG.textContent,
            Q16_LOI_DG.textContent,
            Q17_LOI_DG.textContent,
            Q18_LOI_DG.textContent
        );
        return Q20_MIN.toFixed(2);
    }
    function findMinValue_R20_MIN() {
        R20_MIN = Math.min(
            R15_XRFtotal_DG.textContent,
            R16_XRFtotal_DG.textContent,
            R17_XRFtotal_DG.textContent,
            R18_XRFtotal_DG.textContent
        );
        return R20_MIN.toFixed(2);
    }
    function findMinValue_S20_MIN() {
        S20_MIN = Math.min(
            S15_LSF_DG.textContent,
            S16_LSF_DG.textContent,
            S17_LSF_DG.textContent,
            S18_LSF_DG.textContent
        );
        return S20_MIN.toFixed(2);
    }
    function findMinValue_T20_MIN() {
        T20_MIN = Math.min(
            T15_HM_DG.textContent,
            T16_HM_DG.textContent,
            T17_HM_DG.textContent,
            T18_HM_DG.textContent
        );
        return T20_MIN.toFixed(2);
    }
    function findMinValue_U20_MIN() {
        U20_MIN = Math.min(
            U15_SM_DG.textContent,
            U16_SM_DG.textContent,
            U17_SM_DG.textContent,
            U18_SM_DG.textContent
        );
        return U20_MIN.toFixed(2);
    }
    function findMinValue_V20_MIN() {
        V20_MIN = Math.min(
            V15_AM_DG.textContent,
            V16_AM_DG.textContent,
            V17_AM_DG.textContent,
            V18_AM_DG.textContent
        );
        return V20_MIN.toFixed(2);
    }
    //End MIN

    //Begin MAX
    function findMaxValue_D20_MAX() {
        D20_MAX = Math.max(
            D15_DG.value,
            check16_Limestone,
            check17_Limestone,
            check18_Limestone
        );
        return D20_MAX.toFixed(2);
    }
    function findMaxValue_E20_MAX() {
        E20_MAX = Math.max(
            E15_DG.value,
            E16_Shale_DG.value,
            E17_Shale_DG.value,
            E18_Shale_DG.value
        );
        return E20_MAX.toFixed(2);
    }
    function findMaxValue_F20_MAX() {
        F20_MAX = Math.max(F15_DG.value, check16_Sand, check17_Sand, check18_Sand);
        return F20_MAX.toFixed(2);
    }
    function findMaxValue_G20_MAX() {
        G20_MAX = Math.max(G15_DG.value, check16_Iron, check17_Iron, check18_Iron);
        return G20_MAX.toFixed(2);
    }
    function findMaxValue_H20_MAX() {
        H20_MAX = Math.max(
            H15_SiO2_DG.value,
            H16_SiO2_DG.value,
            H17_SiO2_DG.value,
            H18_SiO2_DG.value
        );
        return H20_MAX.toFixed(2);
    }
    function findMaxValue_I20_MAX() {
        I20_MAX = Math.max(
            I15_Al2O3_DG.value,
            I16_Al2O3_DG.value,
            I17_Al2O3_DG.value,
            I18_Al2O3_DG.value
        );
        return I20_MAX.toFixed(2);
    }
    function findMaxValue_J20_MAX() {
        J20_MAX = Math.max(
            J15_Fe2O3_DG.value,
            J16_Fe2O3_DG.value,
            J17_Fe2O3_DG.value,
            J18_Fe2O3_DG.value
        );
        return J20_MAX.toFixed(2);
    }
    function findMaxValue_K20_MAX() {
        K20_MAX = Math.max(
            K15_CaO_DG.value,
            K16_CaO_DG.value,
            K17_CaO_DG.value,
            K18_CaO_DG.value
        );
        return K20_MAX.toFixed(2);
    }
    function findMaxValue_L20_MAX() {
        L20_MAX = Math.max(
            L15_MgO_DG.value,
            L16_MgO_DG.value,
            L17_MgO_DG.value,
            L18_MgO_DG.value
        );
        return L20_MAX.toFixed(2);
    }
    function findMaxValue_M20_MAX() {
        M20_MAX = Math.max(
            M15_Na2O_DG.value,
            M16_Na2O_DG.value,
            M17_Na2O_DG.value,
            M18_Na2O_DG.value
        );
        return M20_MAX.toFixed(2);
    }
    function findMaxValue_N20_MAX() {
        N20_MAX = Math.max(
            N15_K2O_DG.value,
            N16_K2O_DG.value,
            N17_K2O_DG.value,
            N18_K2O_DG.value
        );
        return N20_MAX.toFixed(2);
    }
    function findMaxValue_O20_MAX() {
        O20_MAX = Math.max(
            O15_SO3_DG.value,
            O16_SO3_DG.value,
            O17_SO3_DG.value,
            O18_SO3_DG.value
        );
        return O20_MAX.toFixed(2);
    }
    function findMaxValue_P20_MAX() {
        P20_MAX = Math.max(
            P15_Cl_DG.value,
            P16_Cl_DG.value,
            P17_Cl_DG.value,
            P18_Cl_DG.value
        );
        return P20_MAX.toFixed(2);
    }
    function findMaxValue_Q20_MAX() {
        Q20_MAX = Math.max(
            Q15_LOI_DG.textContent,
            Q16_LOI_DG.textContent,
            Q17_LOI_DG.textContent,
            Q18_LOI_DG.textContent
        );
        return Q20_MAX.toFixed(2);
    }
    function findMaxValue_R20_MAX() {
        R20_MAX = Math.max(
            R15_XRFtotal_DG.textContent,
            R16_XRFtotal_DG.textContent,
            R17_XRFtotal_DG.textContent,
            R18_XRFtotal_DG.textContent
        );
        return R20_MAX.toFixed(2);
    }
    function findMaxValue_S20_MAX() {
        S20_MAX = Math.max(
            S15_LSF_DG.textContent,
            S16_LSF_DG.textContent,
            S17_LSF_DG.textContent,
            S18_LSF_DG.textContent
        );
        return S20_MAX.toFixed(2);
    }
    function findMaxValue_T20_MAX() {
        T20_MAX = Math.max(
            T15_HM_DG.textContent,
            T16_HM_DG.textContent,
            T17_HM_DG.textContent,
            T18_HM_DG.textContent
        );
        return T20_MAX.toFixed(2);
    }
    function findMaxValue_U20_MAX() {
        U20_MAX = Math.max(
            U15_SM_DG.textContent,
            U16_SM_DG.textContent,
            U17_SM_DG.textContent,
            U18_SM_DG.textContent
        );
        return U20_MAX.toFixed(2);
    }
    function findMaxValue_V20_MAX() {
        V20_MAX = Math.max(
            V15_AM_DG.textContent,
            V16_AM_DG.textContent,
            V17_AM_DG.textContent,
            V18_AM_DG.textContent
        );
        return V20_MAX.toFixed(2);
    }
    //End MAX

    //START NAME: RAWMEAL and CLINKER TARGETS Functions
    const compute_Q31_LOI = () => {
        K31_CaO = isNaN(parseFloat(K31_CaO_DG.value))
            ? 0.0
            : parseFloat(K31_CaO_DG.value);
        L31_MgO = isNaN(parseFloat(L31_MgO_DG.value))
            ? 0.0
            : parseFloat(L31_MgO_DG.value);

        Q31_LOI = 0.786 * K31_CaO + 1.1 * L31_MgO + 0.2;

        return Q31_LOI.toFixed(2);
    };
    const compute_R31_total = () => {
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);
        K31_CaO = isNaN(parseFloat(K31_CaO_DG.value))
            ? 0.0
            : parseFloat(K31_CaO_DG.value);
        L31_MgO = isNaN(parseFloat(L31_MgO_DG.value))
            ? 0.0
            : parseFloat(L31_MgO_DG.value);
        M31_Na2O = isNaN(parseFloat(M31_Na2O_DG.value))
            ? 0.0
            : parseFloat(M31_Na2O_DG.value);
        N31_K2O = isNaN(parseFloat(N31_K2O_DG.value))
            ? 0.0
            : parseFloat(N31_K2O_DG.value);
        O31_SO3 = isNaN(parseFloat(O31_SO3_DG.value))
            ? 0.0
            : parseFloat(O31_SO3_DG.value);
        P31_Cl = isNaN(parseFloat(P31_Cl_DG.value))
            ? 0.0
            : parseFloat(P31_Cl_DG.value);
        Q31_LOI = isNaN(parseFloat(Q31_LOI_DG.textContent))
            ? 0.0
            : parseFloat(Q31_LOI_DG.textContent);

        R31_total =
            H31_SiO2 +
            I31_Al2O3 +
            J31_Fe2O3 +
            K31_CaO +
            L31_MgO +
            M31_Na2O +
            N31_K2O +
            O31_SO3 +
            P31_Cl +
            Q31_LOI;

        return R31_total.toFixed(2);
    };

    const compute_S31_LSF = () => {
        K31_CaO = isNaN(parseFloat(K31_CaO_DG.value))
            ? 0.0
            : parseFloat(K31_CaO_DG.value);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);

        S31_LSF =
            (K31_CaO * 100) / (2.8 * H31_SiO2 + 1.2 * I31_Al2O3 + 0.65 * J31_Fe2O3);

        return S31_LSF.toFixed(2);
    };

    const compute_T31_HM = () => {
        K31_CaO = isNaN(parseFloat(K31_CaO_DG.value))
            ? 0.0
            : parseFloat(K31_CaO_DG.value);
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);

        T31_HM = K31_CaO / (H31_SiO2 + I31_Al2O3 + J31_Fe2O3);

        return T31_HM.toFixed(2);
    };

    const compute_U31_SM = () => {
        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);

        U31_SM = H31_SiO2 / (I31_Al2O3 + J31_Fe2O3);

        return U31_SM.toFixed(2);
    };

    const compute_V31_AM = () => {
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);

        V31_AM = I31_Al2O3 / J31_Fe2O3;

        return V31_AM.toFixed(2);
    };

    //END NAME: RAWMEAL and CLINKER TARGETS Functions

    //Start NAME: Expected Clicker Composition Functions

    const compute_H35_SiO2 = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);

        H31_SiO2 = isNaN(parseFloat(H31_SiO2_DG.value))
            ? 0.0
            : parseFloat(H31_SiO2_DG.value);

        H35_SiO2 = E33_Clinker_Factor * H31_SiO2;

        return H35_SiO2.toFixed(2);
    };
    const compute_I35_Al2O3 = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        I31_Al2O3 = isNaN(parseFloat(I31_Al2O3_DG.value))
            ? 0.0
            : parseFloat(I31_Al2O3_DG.value);

        I35_Al2O3 = E33_Clinker_Factor * I31_Al2O3;

        return I35_Al2O3.toFixed(2);
    };
    const compute_J35_Fe2O3 = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        J31_Fe2O3 = isNaN(parseFloat(J31_Fe2O3_DG.value))
            ? 0.0
            : parseFloat(J31_Fe2O3_DG.value);

        J35_Fe2O3 = E33_Clinker_Factor * J31_Fe2O3;

        return J35_Fe2O3.toFixed(2);
    };
    const compute_K35_CaO = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        K31_CaO = isNaN(parseFloat(K31_CaO_DG.value))
            ? 0.0
            : parseFloat(K31_CaO_DG.value);

        K35_CaO = E33_Clinker_Factor * K31_CaO;

        return K35_CaO.toFixed(2);
    };
    const compute_L35_MgO = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        L31_MgO = isNaN(parseFloat(L31_MgO_DG.value))
            ? 0.0
            : parseFloat(L31_MgO_DG.value);

        L35_MgO = E33_Clinker_Factor * L31_MgO;

        return L35_MgO.toFixed(2);
    };
    const compute_M35_Na2O = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        M31_Na2O = isNaN(parseFloat(M31_Na2O_DG.value))
            ? 0.0
            : parseFloat(M31_Na2O_DG.value);

        M35_Na2O = E33_Clinker_Factor * M31_Na2O;

        return M35_Na2O.toFixed(2);
    };
    const compute_N35_K2O = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        N31_K2O = isNaN(parseFloat(N31_K2O_DG.value))
            ? 0.0
            : parseFloat(N31_K2O_DG.value);

        N35_K2O = E33_Clinker_Factor * N31_K2O;

        return N35_K2O.toFixed(2);
    };
    const compute_O35_SO3 = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        O31_SO3 = isNaN(parseFloat(O31_SO3_DG.value))
            ? 0.0
            : parseFloat(O31_SO3_DG.value);

        O35_SO3 = E33_Clinker_Factor * O31_SO3;

        return O35_SO3.toFixed(2);
    };
    const compute_P35_Cl = () => {
        E33_Clinker_Factor = isNaN(parseFloat(E33_Clinker_Factor_DG.value))
            ? 0.0
            : parseFloat(E33_Clinker_Factor_DG.value);
        P31_Cl = isNaN(parseFloat(P31_Cl_DG.value))
            ? 0.0
            : parseFloat(P31_Cl_DG.value);

        P35_Cl = E33_Clinker_Factor * P31_Cl;

        return P35_Cl.toFixed(2);
    };

    const compute_Q35_ECC_total = () => {
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);
        K35_CaO = isNaN(parseFloat(K35_CaO_DG.textContent))
            ? 0.0
            : parseFloat(K35_CaO_DG.textContent);
        L35_MgO = isNaN(parseFloat(L35_MgO_DG.textContent))
            ? 0.0
            : parseFloat(L35_MgO_DG.textContent);
        M35_Na2O = isNaN(parseFloat(M35_Na2O_DG.textContent))
            ? 0.0
            : parseFloat(M35_Na2O_DG.textContent);
        N35_K2O = isNaN(parseFloat(N35_K2O_DG.textContent))
            ? 0.0
            : parseFloat(N35_K2O_DG.textContent);
        O35_SO3 = isNaN(parseFloat(O35_SO3_DG.textContent))
            ? 0.0
            : parseFloat(O35_SO3_DG.textContent);
        P35_Cl = isNaN(parseFloat(P35_Cl_DG.textContent))
            ? 0.0
            : parseFloat(P35_Cl_DG.textContent);

        Q35_ECC_total =
            H35_SiO2 +
            I35_Al2O3 +
            J35_Fe2O3 +
            K35_CaO +
            L35_MgO +
            M35_Na2O +
            N35_K2O +
            O35_SO3 +
            P35_Cl;

        return Q35_ECC_total.toFixed(2);
    };
    const compute_S35_LSF = () => {
        K35_CaO = isNaN(parseFloat(K35_CaO_DG.textContent))
            ? 0.0
            : parseFloat(K35_CaO_DG.textContent);
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        S35_LSF =
            (K35_CaO * 100) / (2.8 * H35_SiO2 + 1.2 * I35_Al2O3 + 0.65 * J35_Fe2O3);

        return S35_LSF.toFixed(2);
    };
    const compute_T35_HM = () => {
        K35_CaO = isNaN(parseFloat(K35_CaO_DG.textContent))
            ? 0.0
            : parseFloat(K35_CaO_DG.textContent);
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        T35_HM = K35_CaO / (H35_SiO2 + I35_Al2O3 + J35_Fe2O3);

        return T35_HM.toFixed(2);
    };
    const compute_U35_SM = () => {
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        U35_SM = H35_SiO2 / (I35_Al2O3 + J35_Fe2O3);

        return U35_SM.toFixed(2);
    };
    const compute_V35_AM = () => {
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        V35_AM = I35_Al2O3 / J35_Fe2O3;

        return V35_AM.toFixed(2);
    };

    //NEXT CELL TABLE

    const compute_K38_DOC = () => {
        L38_KL_LOI = isNaN(parseFloat(L38_KL_LOI_DG.value))
            ? 0.0
            : parseFloat(L38_KL_LOI_DG.value);
        V38_LOI = isNaN(parseFloat(V38_LOI_DG.value))
            ? 0.0
            : parseFloat(V38_LOI_DG.value);
        L38_KL_LOI = isNaN(parseFloat(L38_KL_LOI_DG.value))
            ? 0.0
            : parseFloat(L38_KL_LOI_DG.value);
        L38_KL_LOI = isNaN(parseFloat(L38_KL_LOI_DG.value))
            ? 0.0
            : parseFloat(L38_KL_LOI_DG.value);
        V38_LOI = isNaN(parseFloat(V38_LOI_DG.value))
            ? 0.0
            : parseFloat(V38_LOI_DG.value);

        K38_DOC =
            ((L38_KL_LOI / 100 - V38_LOI / 100) /
                (L38_KL_LOI / 100 - (L38_KL_LOI / 100) * (V38_LOI / 100))) *
            100;

        return K38_DOC.toFixed(2);
    };
    const compute_M38_C3Snet = () => {
        K35_CaO = isNaN(parseFloat(K35_CaO)) ? 0.0 : parseFloat(K35_CaO);
        I38_FCaO = isNaN(parseFloat(I38_FCaO_DG.value))
            ? 0.0
            : parseFloat(I38_FCaO_DG.value);
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);
        O35_SO3 = isNaN(parseFloat(O35_SO3_DG.textContent))
            ? 0.0
            : parseFloat(O35_SO3_DG.textContent);

        M38_C3Snet =
            4.07 * (K35_CaO - I38_FCaO) -
            7.6 * H35_SiO2 -
            6.72 * I35_Al2O3 -
            1.43 * J35_Fe2O3 -
            2.85 * O35_SO3;

        return M38_C3Snet.toFixed(2);
    };
    const compute_N38_C2S = () => {
        H35_SiO2 = isNaN(parseFloat(H35_SiO2_DG.textContent))
            ? 0.0
            : parseFloat(H35_SiO2_DG.textContent);
        M38_C3Snet = isNaN(parseFloat(M38_C3Snet_DG.textContent))
            ? 0.0
            : parseFloat(M38_C3Snet_DG.textContent);

        N38_C2S = 2.867 * H35_SiO2 - 0.7544 * M38_C3Snet;

        return N38_C2S.toFixed(2);
    };
    const compute_O38_C3A = () => {
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        O38_C3A = 2.65 * I35_Al2O3 - 1.693 * J35_Fe2O3;

        return O38_C3A.toFixed(2);
    };
    const compute_P38_C4AF = () => {
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        P38_C4AF = 3.04 * J35_Fe2O3;

        return P38_C4AF.toFixed(2);
    };
    const compute_Q38_Sulfur_Alkali_ratio = () => {
        R38_total_Alkali = isNaN(parseFloat(R38_total_Alkali_DG.textContent))
            ? 0.0
            : parseFloat(R38_total_Alkali_DG.textContent);
        O35_SO3 = isNaN(parseFloat(O35_SO3_DG.textContent))
            ? 0.0
            : parseFloat(O35_SO3_DG.textContent);

        Q38_Sulfur_Alkali_ratio = 1 / (R38_total_Alkali / 62 / (O35_SO3 / 80));

        return Q38_Sulfur_Alkali_ratio.toFixed(2);
    };
    const compute_R38_total_Alkali = () => {
        M35_Na2O = isNaN(parseFloat(M35_Na2O_DG.textContent))
            ? 0.0
            : parseFloat(M35_Na2O_DG.textContent);
        N35_K2O = isNaN(parseFloat(N35_K2O_DG.textContent))
            ? 0.0
            : parseFloat(N35_K2O_DG.textContent);

        R38_total_Alkali = M35_Na2O + 0.658 * N35_K2O;

        return R38_total_Alkali.toFixed(2);
    };
    const compute_S38_Liquid_Phase = () => {
        I35_Al2O3 = isNaN(parseFloat(I35_Al2O3_DG.textContent))
            ? 0.0
            : parseFloat(I35_Al2O3_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);
        L35_MgO = isNaN(parseFloat(L35_MgO_DG.textContent))
            ? 0.0
            : parseFloat(L35_MgO_DG.textContent);
        M35_Na2O = isNaN(parseFloat(M35_Na2O_DG.textContent))
            ? 0.0
            : parseFloat(M35_Na2O_DG.textContent);
        N35_K2O = isNaN(parseFloat(N35_K2O_DG.textContent))
            ? 0.0
            : parseFloat(N35_K2O_DG.textContent);
        O35_SO3 = isNaN(parseFloat(O35_SO3_DG.textContent))
            ? 0.0
            : parseFloat(O35_SO3_DG.textContent);
        S38_Liquid_Phase =
            3 * I35_Al2O3 + 2.25 * J35_Fe2O3 + L35_MgO + M35_Na2O + N35_K2O + O35_SO3;

        return S38_Liquid_Phase.toFixed(2);
    };
    const compute_T38_Coating_Index = () => {
        O38_C3A = isNaN(parseFloat(O38_C3A_DG.textContent))
            ? 0.0
            : parseFloat(O38_C3A_DG.textContent);
        P38_C4AF = isNaN(parseFloat(P38_C4AF_DG.textContent))
            ? 0.0
            : parseFloat(P38_C4AF_DG.textContent);
        N38_C2S = isNaN(parseFloat(N38_C2S_DG.textContent))
            ? 0.0
            : parseFloat(N38_C2S_DG.textContent);
        J35_Fe2O3 = isNaN(parseFloat(J35_Fe2O3_DG.textContent))
            ? 0.0
            : parseFloat(J35_Fe2O3_DG.textContent);

        T38_Coating_Index = O38_C3A + P38_C4AF + (N38_C2S * 0.2) + (2 * J35_Fe2O3);

        return T38_Coating_Index.toFixed(2);
    };

    //End NAME: Expected Clicker Composition Functions

    //#endregion
    // END FUNCTION////////////////////////////////////////

    function materialsettings() {
        if (cbox16.checked) {
            check16_Limestone = compute_D16_Limestone();
            check16_Shale = compute_E16_Shale();
            check16_Sand = compute_F16_Sand();
            check16_Iron = compute_G16_Iron();
            D16_Limestone_DQ.textContent = compute_D16_Limestone();
            E16_Shale_DQ.textContent = compute_E16_Shale();
            F16_Sand_DQ.textContent = compute_F16_Sand();
            G16_Iron_DQ.textContent = compute_G16_Iron();
        } else {
            check16_Limestone =
                D16_Limestone_DG.value !== null ? D16_Limestone_DG.value : "0.0";
            check16_Shale = E16_Shale_DG.value !== null ? E16_Shale_DG.value : "0.0";
            check16_Sand = F16_Sand_DG.value !== null ? F16_Sand_DG.value : "0.0";
            check16_Iron = G16_Iron_DG.value !== null ? G16_Iron_DG.value : "0.0";
        }

        if (cbox17.checked) {
            check17_Limestone = compute_D17_Limestone();
            check17_Shale = compute_E17_Shale();
            check17_Sand = compute_F17_Sand();
            check17_Iron = compute_G17_Iron();
            D17_Limestone_DQ.textContent = compute_D17_Limestone();
            E17_Shale_DQ.textContent = compute_E17_Shale();
            F17_Sand_DQ.textContent = compute_F17_Sand();
            G17_Iron_DQ.textContent = compute_G17_Iron();
        } else {
            check17_Limestone =
                D17_Limestone_DG.value !== null ? D17_Limestone_DG.value : "0.0";
            check17_Shale = E17_Shale_DG.value !== null ? E17_Shale_DG.value : "0.0";
            check17_Sand = F17_Sand_DG.value !== null ? F17_Sand_DG.value : "0.0";
            check17_Iron = G17_Iron_DG.value !== null ? G17_Iron_DG.value : "0.0";
        }

        if (cbox18.checked) {
            check18_Limestone = compute_D18_Limestone();
            check18_Shale = compute_E18_Shale();
            check18_Sand = compute_F18_Sand();
            check18_Iron = compute_G18_Iron();
            D18_Limestone_DQ.textContent = compute_D18_Limestone();
            E18_Shale_DQ.textContent = compute_E18_Shale();
            F18_Sand_DQ.textContent = compute_F18_Sand();
            G18_Iron_DQ.textContent = compute_G18_Iron();
        } else {
            check18_Limestone =
                D18_Limestone_DG.value !== null ? D18_Limestone_DG.value : "0.0";
            check18_Shale = E18_Shale_DG.value !== null ? E18_Shale_DG.value : "0.0";
            check18_Sand = F18_Sand_DG.value !== null ? F18_Sand_DG.value : "0.0";
            check18_Iron = G18_Iron_DG.value !== null ? G18_Iron_DG.value : "0.0";
        }

        if (cbox19.checked) {
            check19_Limestone = compute_D19_Limestone();
            check19_Shale = compute_E19_Shale();
            check19_Sand = compute_F19_Sand();
            check19_Iron = compute_G19_Iron();
            D19_Limestone_DQ.textContent = compute_D19_Limestone();
            E19_Shale_DQ.textContent = compute_E19_Shale();
            F19_Sand_DQ.textContent = compute_F19_Sand();
            G19_Iron_DQ.textContent = compute_G19_Iron();
        } else {
            check19_Limestone =
                D19_Limestone_DG.value !== null ? D19_Limestone_DG.value : "0.0";
            check19_Shale = E19_Shale_DG.value !== null ? E19_Shale_DG.value : "0.0";
            check19_Sand = F19_Sand_DG.value !== null ? F19_Sand_DG.value : "0.0";
            check19_Iron = G19_Iron_DG.value !== null ? G19_Iron_DG.value : "0.0";
        }
    }

    // LOAD ALL
    function computeall() {
        S15_LSF_DG.classList.remove("placeholder-label");
        T15_HM_DG.classList.remove("placeholder-label");
        U15_SM_DG.classList.remove("placeholder-label");
        V15_AM_DG.classList.remove("placeholder-label");
        Q15_LOI_DG.classList.remove("placeholder-label");
        R15_XRFtotal_DG.classList.remove("placeholder-label");
        S16_LSF_DG.classList.remove("placeholder-label");
        T16_HM_DG.classList.remove("placeholder-label");
        U16_SM_DG.classList.remove("placeholder-label");
        V16_AM_DG.classList.remove("placeholder-label");
        Q16_LOI_DG.classList.remove("placeholder-label");
        R16_XRFtotal_DG.classList.remove("placeholder-label");
        S17_LSF_DG.classList.remove("placeholder-label");
        T17_HM_DG.classList.remove("placeholder-label");
        U17_SM_DG.classList.remove("placeholder-label");
        V17_AM_DG.classList.remove("placeholder-label");
        Q17_LOI_DG.classList.remove("placeholder-label");
        R17_XRFtotal_DG.classList.remove("placeholder-label");
        S18_LSF_DG.classList.remove("placeholder-label");
        T18_HM_DG.classList.remove("placeholder-label");
        U18_SM_DG.classList.remove("placeholder-label");
        V18_AM_DG.classList.remove("placeholder-label");
        Q18_LOI_DG.classList.remove("placeholder-label");
        R18_XRFtotal_DG.classList.remove("placeholder-label");
        total_C15_DG.classList.remove("placeholder-label");
        D20_AVG_DG.classList.remove("placeholder-label");
        E20_AVG_DG.classList.remove("placeholder-label");
        F20_AVG_DG.classList.remove("placeholder-label");
        G20_AVG_DG.classList.remove("placeholder-label");
        H20_AVG_DG.classList.remove("placeholder-label");
        I20_AVG_DG.classList.remove("placeholder-label");
        J20_AVG_DG.classList.remove("placeholder-label");
        K20_AVG_DG.classList.remove("placeholder-label");
        L20_AVG_DG.classList.remove("placeholder-label");
        M20_AVG_DG.classList.remove("placeholder-label");
        N20_AVG_DG.classList.remove("placeholder-label");
        O20_AVG_DG.classList.remove("placeholder-label");
        P20_AVG_DG.classList.remove("placeholder-label");
        Q20_AVG_DG.classList.remove("placeholder-label");
        R20_AVG_DG.classList.remove("placeholder-label");
        S20_AVG_DG.classList.remove("placeholder-label");
        T20_AVG_DG.classList.remove("placeholder-label");
        U20_AVG_DG.classList.remove("placeholder-label");
        V20_AVG_DG.classList.remove("placeholder-label");
        D20_STDEV_DG.classList.remove("placeholder-label");
        E20_STDEV_DG.classList.remove("placeholder-label");
        F20_STDEV_DG.classList.remove("placeholder-label");
        G20_STDEV_DG.classList.remove("placeholder-label");
        H20_STDEV_DG.classList.remove("placeholder-label");
        I20_STDEV_DG.classList.remove("placeholder-label");
        J20_STDEV_DG.classList.remove("placeholder-label");
        K20_STDEV_DG.classList.remove("placeholder-label");
        L20_STDEV_DG.classList.remove("placeholder-label");
        M20_STDEV_DG.classList.remove("placeholder-label");
        N20_STDEV_DG.classList.remove("placeholder-label");
        O20_STDEV_DG.classList.remove("placeholder-label");
        P20_STDEV_DG.classList.remove("placeholder-label");
        Q20_STDEV_DG.classList.remove("placeholder-label");
        R20_STDEV_DG.classList.remove("placeholder-label");
        S20_STDEV_DG.classList.remove("placeholder-label");
        T20_STDEV_DG.classList.remove("placeholder-label");
        U20_STDEV_DG.classList.remove("placeholder-label");
        V20_STDEV_DG.classList.remove("placeholder-label");
        D20_MIN_DG.classList.remove("placeholder-label");
        E20_MIN_DG.classList.remove("placeholder-label");
        F20_MIN_DG.classList.remove("placeholder-label");
        G20_MIN_DG.classList.remove("placeholder-label");
        H20_MIN_DG.classList.remove("placeholder-label");
        I20_MIN_DG.classList.remove("placeholder-label");
        J20_MIN_DG.classList.remove("placeholder-label");
        K20_MIN_DG.classList.remove("placeholder-label");
        L20_MIN_DG.classList.remove("placeholder-label");
        M20_MIN_DG.classList.remove("placeholder-label");
        N20_MIN_DG.classList.remove("placeholder-label");
        O20_MIN_DG.classList.remove("placeholder-label");
        P20_MIN_DG.classList.remove("placeholder-label");
        Q20_MIN_DG.classList.remove("placeholder-label");
        R20_MIN_DG.classList.remove("placeholder-label");
        S20_MIN_DG.classList.remove("placeholder-label");
        T20_MIN_DG.classList.remove("placeholder-label");
        U20_MIN_DG.classList.remove("placeholder-label");
        V20_MIN_DG.classList.remove("placeholder-label");
        D20_MAX_DG.classList.remove("placeholder-label");
        E20_MAX_DG.classList.remove("placeholder-label");
        F20_MAX_DG.classList.remove("placeholder-label");
        G20_MAX_DG.classList.remove("placeholder-label");
        H20_MAX_DG.classList.remove("placeholder-label");
        I20_MAX_DG.classList.remove("placeholder-label");
        J20_MAX_DG.classList.remove("placeholder-label");
        K20_MAX_DG.classList.remove("placeholder-label");
        L20_MAX_DG.classList.remove("placeholder-label");
        M20_MAX_DG.classList.remove("placeholder-label");
        N20_MAX_DG.classList.remove("placeholder-label");
        O20_MAX_DG.classList.remove("placeholder-label");
        P20_MAX_DG.classList.remove("placeholder-label");
        Q20_MAX_DG.classList.remove("placeholder-label");
        R20_MAX_DG.classList.remove("placeholder-label");
        S20_MAX_DG.classList.remove("placeholder-label");
        T20_MAX_DG.classList.remove("placeholder-label");
        U20_MAX_DG.classList.remove("placeholder-label");
        V20_MAX_DG.classList.remove("placeholder-label");

        H31_SiO2_DG.classList.remove("placeholder-label");
        I31_Al2O3_DG.classList.remove("placeholder-label");
        J31_Fe2O3_DG.classList.remove("placeholder-label");
        K31_CaO_DG.classList.remove("placeholder-label");
        L31_MgO_DG.classList.remove("placeholder-label");
        M31_Na2O_DG.classList.remove("placeholder-label");
        N31_K2O_DG.classList.remove("placeholder-label");
        O31_SO3_DG.classList.remove("placeholder-label");
        P31_Cl_DG.classList.remove("placeholder-label");
        Q31_LOI_DG.classList.remove("placeholder-label");
        R31_total_DG.classList.remove("placeholder-label");
        S31_LSF_DG.classList.remove("placeholder-label");
        T31_HM_DG.classList.remove("placeholder-label");
        U31_SM_DG.classList.remove("placeholder-label");
        V31_AM_DG.classList.remove("placeholder-label");
        H35_SiO2_DG.classList.remove("placeholder-label");
        I35_Al2O3_DG.classList.remove("placeholder-label");
        J35_Fe2O3_DG.classList.remove("placeholder-label");
        K35_CaO_DG.classList.remove("placeholder-label");
        L35_MgO_DG.classList.remove("placeholder-label");
        M35_Na2O_DG.classList.remove("placeholder-label");
        N35_K2O_DG.classList.remove("placeholder-label");
        O35_SO3_DG.classList.remove("placeholder-label");
        P35_Cl_DG.classList.remove("placeholder-label");
        Q35_ECC_total_DG.classList.remove("placeholder-label");
        S35_LSF_DG.classList.remove("placeholder-label");
        T35_HM_DG.classList.remove("placeholder-label");
        U35_SM_DG.classList.remove("placeholder-label");
        V35_AM_DG.classList.remove("placeholder-label");
        L38_KL_LOI_DG.classList.remove("placeholder-label");
        V38_LOI_DG.classList.remove("placeholder-label");
        K38_DOC_DG.classList.remove("placeholder-label");
        M38_C3Snet_DG.classList.remove("placeholder-label");
        N38_C2S_DG.classList.remove("placeholder-label");
        O38_C3A_DG.classList.remove("placeholder-label");
        P38_C4AF_DG.classList.remove("placeholder-label");
        Q38_Sulfur_Alkali_ratio_DG.classList.remove("placeholder-label");
        R38_total_Alkali_DG.classList.remove("placeholder-label");
        S38_Liquid_Phase_DG.classList.remove("placeholder-label");
        T38_Coating_Index_DG.classList.remove("placeholder-label");

        materialsettings();

        S15_LSF_DG.textContent = compute_S15_LSF_ratio();
        T15_HM_DG.textContent = compute_T15_HM_ratio();
        U15_SM_DG.textContent = compute_U15_SM_ratio();
        V15_AM_DG.textContent = compute_V15_AM_ratio();
        Q15_LOI_DG.textContent = compute_Q15_LOI();
        R15_XRFtotal_DG.textContent = compute_R15_XRFtotal();

        S16_LSF_DG.textContent = compute_S16_LSF_ratio();
        T16_HM_DG.textContent = compute_T16_HM_ratio();
        U16_SM_DG.textContent = compute_U16_SM_ratio();
        V16_AM_DG.textContent = compute_V16_AM_ratio();
        Q16_LOI_DG.textContent = compute_Q16_LOI();
        R16_XRFtotal_DG.textContent = compute_R16_XRFtotal();

        S17_LSF_DG.textContent = compute_S17_LSF_ratio();
        T17_HM_DG.textContent = compute_T17_HM_ratio();
        U17_SM_DG.textContent = compute_U17_SM_ratio();
        V17_AM_DG.textContent = compute_V17_AM_ratio();
        Q17_LOI_DG.textContent = compute_Q17_LOI();
        R17_XRFtotal_DG.textContent = compute_R17_XRFtotal();

        S18_LSF_DG.textContent = compute_S18_LSF_ratio();
        T18_HM_DG.textContent = compute_T18_HM_ratio();
        U18_SM_DG.textContent = compute_U18_SM_ratio();
        V18_AM_DG.textContent = compute_V18_AM_ratio();
        Q18_LOI_DG.textContent = compute_Q18_LOI();
        R18_XRFtotal_DG.textContent = compute_R18_XRFtotal();

        total_C15_DG.textContent = compute_total_C15();

        D20_AVG_DG.textContent = calculateAverage_D20_AVG();
        E20_AVG_DG.textContent = calculateAverage_E20_AVG();
        F20_AVG_DG.textContent = calculateAverage_F20_AVG();
        G20_AVG_DG.textContent = calculateAverage_G20_AVG();
        H20_AVG_DG.textContent = calculateAverage_H20_AVG();
        I20_AVG_DG.textContent = calculateAverage_I20_AVG();
        J20_AVG_DG.textContent = calculateAverage_J20_AVG();
        K20_AVG_DG.textContent = calculateAverage_K20_AVG();
        L20_AVG_DG.textContent = calculateAverage_L20_AVG();
        M20_AVG_DG.textContent = calculateAverage_M20_AVG();
        N20_AVG_DG.textContent = calculateAverage_N20_AVG();
        O20_AVG_DG.textContent = calculateAverage_O20_AVG();
        P20_AVG_DG.textContent = calculateAverage_P20_AVG();
        Q20_AVG_DG.textContent = calculateAverage_Q20_AVG();
        R20_AVG_DG.textContent = calculateAverage_R20_AVG();
        S20_AVG_DG.textContent = calculateAverage_S20_AVG();
        T20_AVG_DG.textContent = calculateAverage_T20_AVG();
        U20_AVG_DG.textContent = calculateAverage_U20_AVG();
        V20_AVG_DG.textContent = calculateAverage_V20_AVG();
        D20_STDEV_DG.textContent = calculateSTDev_D20_STDEV();
        E20_STDEV_DG.textContent = calculateSTDev_E20_STDEV();
        F20_STDEV_DG.textContent = calculateSTDev_F20_STDEV();
        G20_STDEV_DG.textContent = calculateSTDev_G20_STDEV();
        H20_STDEV_DG.textContent = calculateSTDev_H20_STDEV();
        I20_STDEV_DG.textContent = calculateSTDev_I20_STDEV();
        J20_STDEV_DG.textContent = calculateSTDev_J20_STDEV();
        K20_STDEV_DG.textContent = calculateSTDev_K20_STDEV();
        L20_STDEV_DG.textContent = calculateSTDev_L20_STDEV();
        M20_STDEV_DG.textContent = calculateSTDev_M20_STDEV();
        N20_STDEV_DG.textContent = calculateSTDev_N20_STDEV();
        O20_STDEV_DG.textContent = calculateSTDev_O20_STDEV();
        P20_STDEV_DG.textContent = calculateSTDev_P20_STDEV();
        Q20_STDEV_DG.textContent = calculateSTDev_Q20_STDEV();
        R20_STDEV_DG.textContent = calculateSTDev_R20_STDEV();
        S20_STDEV_DG.textContent = calculateSTDev_S20_STDEV();
        T20_STDEV_DG.textContent = calculateSTDev_T20_STDEV();
        U20_STDEV_DG.textContent = calculateSTDev_U20_STDEV();
        V20_STDEV_DG.textContent = calculateSTDev_V20_STDEV();
        D20_MIN_DG.textContent = findMinValue_D20_MIN();
        E20_MIN_DG.textContent = findMinValue_E20_MIN();
        F20_MIN_DG.textContent = findMinValue_F20_MIN();
        G20_MIN_DG.textContent = findMinValue_G20_MIN();
        H20_MIN_DG.textContent = findMinValue_H20_MIN();
        I20_MIN_DG.textContent = findMinValue_I20_MIN();
        J20_MIN_DG.textContent = findMinValue_J20_MIN();
        K20_MIN_DG.textContent = findMinValue_K20_MIN();
        L20_MIN_DG.textContent = findMinValue_L20_MIN();
        M20_MIN_DG.textContent = findMinValue_M20_MIN();
        N20_MIN_DG.textContent = findMinValue_N20_MIN();
        O20_MIN_DG.textContent = findMinValue_O20_MIN();
        P20_MIN_DG.textContent = findMinValue_P20_MIN();
        Q20_MIN_DG.textContent = findMinValue_Q20_MIN();
        R20_MIN_DG.textContent = findMinValue_R20_MIN();
        S20_MIN_DG.textContent = findMinValue_S20_MIN();
        T20_MIN_DG.textContent = findMinValue_T20_MIN();
        U20_MIN_DG.textContent = findMinValue_U20_MIN();
        V20_MIN_DG.textContent = findMinValue_V20_MIN();
        D20_MAX_DG.textContent = findMaxValue_D20_MAX();
        E20_MAX_DG.textContent = findMaxValue_E20_MAX();
        F20_MAX_DG.textContent = findMaxValue_F20_MAX();
        G20_MAX_DG.textContent = findMaxValue_G20_MAX();
        H20_MAX_DG.textContent = findMaxValue_H20_MAX();
        I20_MAX_DG.textContent = findMaxValue_I20_MAX();
        J20_MAX_DG.textContent = findMaxValue_J20_MAX();
        K20_MAX_DG.textContent = findMaxValue_K20_MAX();
        L20_MAX_DG.textContent = findMaxValue_L20_MAX();
        M20_MAX_DG.textContent = findMaxValue_M20_MAX();
        N20_MAX_DG.textContent = findMaxValue_N20_MAX();
        O20_MAX_DG.textContent = findMaxValue_O20_MAX();
        P20_MAX_DG.textContent = findMaxValue_P20_MAX();
        Q20_MAX_DG.textContent = findMaxValue_Q20_MAX();
        R20_MAX_DG.textContent = findMaxValue_R20_MAX();
        S20_MAX_DG.textContent = findMaxValue_S20_MAX();
        T20_MAX_DG.textContent = findMaxValue_T20_MAX();
        U20_MAX_DG.textContent = findMaxValue_U20_MAX();
        V20_MAX_DG.textContent = findMaxValue_V20_MAX();

        total_C16_DG.textContent = compute_total_C16();
        total_C17_DG.textContent = compute_total_C17();
        total_C18_DG.textContent = compute_total_C18();
        total_C19_DG.textContent = compute_total_C19();

        Q31_LOI_DG.textContent = compute_Q31_LOI();
        R31_total_DG.textContent = compute_R31_total();
        S31_LSF_DG.textContent = compute_S31_LSF();
        T31_HM_DG.textContent = compute_T31_HM();
        U31_SM_DG.textContent = compute_U31_SM();
        V31_AM_DG.textContent = compute_V31_AM();
        H35_SiO2_DG.textContent = compute_H35_SiO2();
        I35_Al2O3_DG.textContent = compute_I35_Al2O3();
        J35_Fe2O3_DG.textContent = compute_J35_Fe2O3();
        K35_CaO_DG.textContent = compute_K35_CaO();
        L35_MgO_DG.textContent = compute_L35_MgO();
        M35_Na2O_DG.textContent = compute_M35_Na2O();
        N35_K2O_DG.textContent = compute_N35_K2O();
        O35_SO3_DG.textContent = compute_O35_SO3();
        P35_Cl_DG.textContent = compute_P35_Cl();
        Q35_ECC_total_DG.textContent = compute_Q35_ECC_total();
        S35_LSF_DG.textContent = compute_S35_LSF();
        T35_HM_DG.textContent = compute_T35_HM();
        U35_SM_DG.textContent = compute_U35_SM();
        V35_AM_DG.textContent = compute_V35_AM();
        K38_DOC_DG.textContent = compute_K38_DOC();
        M38_C3Snet_DG.textContent = compute_M38_C3Snet();
        N38_C2S_DG.textContent = compute_N38_C2S();
        O38_C3A_DG.textContent = compute_O38_C3A();
        P38_C4AF_DG.textContent = compute_P38_C4AF();
        Q38_Sulfur_Alkali_ratio_DG.textContent = compute_Q38_Sulfur_Alkali_ratio();
        R38_total_Alkali_DG.textContent = compute_R38_total_Alkali();
        S38_Liquid_Phase_DG.textContent = compute_S38_Liquid_Phase();
        T38_Coating_Index_DG.textContent = compute_T38_Coating_Index();
    }
    window.computeall = computeall;
    //END LOAD ALL

    // ON CHANGE LISTENER
    //#region 
    D15_DG.addEventListener("change", function () {
        computeall();
    });
    E15_DG.addEventListener("change", function () {
        computeall();
    });
    F15_DG.addEventListener("change", function () {
        computeall();
    });
    G15_DG.addEventListener("change", function () {
        computeall();
    });

    H15_SiO2_DG.addEventListener("change", function () {
        computeall();
    });
    H16_SiO2_DG.addEventListener("change", function () {
        computeall();
    });
    H17_SiO2_DG.addEventListener("change", function () {
        computeall();
    });
    H18_SiO2_DG.addEventListener("change", function () {
        computeall();
    });
    I15_Al2O3_DG.addEventListener("change", function () {
        computeall();
    });
    I16_Al2O3_DG.addEventListener("change", function () {
        computeall();
    });
    I17_Al2O3_DG.addEventListener("change", function () {
        computeall();
    });
    I18_Al2O3_DG.addEventListener("change", function () {
        computeall();
    });
    J15_Fe2O3_DG.addEventListener("change", function () {
        computeall();
    });
    J16_Fe2O3_DG.addEventListener("change", function () {
        computeall();
    });
    J17_Fe2O3_DG.addEventListener("change", function () {
        computeall();
    });
    J18_Fe2O3_DG.addEventListener("change", function () {
        computeall();
    });
    K15_CaO_DG.addEventListener("change", function () {
        computeall();
    });
    K16_CaO_DG.addEventListener("change", function () {
        computeall();
    });
    K17_CaO_DG.addEventListener("change", function () {
        computeall();
    });
    K18_CaO_DG.addEventListener("change", function () {
        computeall();
    });
    L15_MgO_DG.addEventListener("change", function () {
        computeall();
    });
    L16_MgO_DG.addEventListener("change", function () {
        computeall();
    });
    L17_MgO_DG.addEventListener("change", function () {
        computeall();
    });
    L18_MgO_DG.addEventListener("change", function () {
        computeall();
    });
    M15_Na2O_DG.addEventListener("change", function () {
        computeall();
    });
    M16_Na2O_DG.addEventListener("change", function () {
        computeall();
    });
    M17_Na2O_DG.addEventListener("change", function () {
        computeall();
    });
    M18_Na2O_DG.addEventListener("change", function () {
        computeall();
    });
    N15_K2O_DG.addEventListener("change", function () {
        computeall();
    });
    N16_K2O_DG.addEventListener("change", function () {
        computeall();
    });
    N17_K2O_DG.addEventListener("change", function () {
        computeall();
    });
    N18_K2O_DG.addEventListener("change", function () {
        computeall();
    });
    O15_SO3_DG.addEventListener("change", function () {
        computeall();
    });
    O16_SO3_DG.addEventListener("change", function () {
        computeall();
    });
    O17_SO3_DG.addEventListener("change", function () {
        computeall();
    });
    O18_SO3_DG.addEventListener("change", function () {
        computeall();
    });
    P15_Cl_DG.addEventListener("change", function () {
        computeall();
    });
    P16_Cl_DG.addEventListener("change", function () {
        computeall();
    });
    P17_Cl_DG.addEventListener("change", function () {
        computeall();
    });
    P18_Cl_DG.addEventListener("change", function () {
        computeall();
    });

    C30_LSF_PR_DG.addEventListener("change", function () {
        computeall();
    });

    C31_SM_PR_DG.addEventListener("change", function () {
        computeall();
    });

    C32_AM_PR_DG.addEventListener("change", function () {
        computeall();
    });

    F30_LSF_TG_DG.addEventListener("change", function () {
        computeall();
    });

    F31_SM_TG_DG.addEventListener("change", function () {
        computeall();
    });

    F32_AM_TG_DG.addEventListener("change", function () {
        computeall();
    });

    E33_Clinker_Factor_DG.addEventListener("change", function () {
        computeall();
    });

    H31_SiO2_DG.addEventListener("change", function () {
        computeall();
    });
    I31_Al2O3_DG.addEventListener("change", function () {
        computeall();
    });
    J31_Fe2O3_DG.addEventListener("change", function () {
        computeall();
    });
    K31_CaO_DG.addEventListener("change", function () {
        computeall();
    });
    L31_MgO_DG.addEventListener("change", function () {
        computeall();
    });
    M31_Na2O_DG.addEventListener("change", function () {
        computeall();
    });
    N31_K2O_DG.addEventListener("change", function () {
        computeall();
    });
    O31_SO3_DG.addEventListener("change", function () {
        computeall();
    });
    P31_Cl_DG.addEventListener("change", function () {
        computeall();
    });
    // H38_literKG_DG.addEventListener("change", function () {
    //
    //   computeall();
    // });
    I38_FCaO_DG.addEventListener("change", function () {
        computeall();
    });
    // J38_BurningCondition_DG.addEventListener("change", function () {
    //
    //   computeall();
    // });
    L38_KL_LOI_DG.addEventListener("change", function () {
        computeall();
    });
    // U38_SO3_DG.addEventListener("change", function () {
    //
    //   computeall();
    // });
    V38_LOI_DG.addEventListener("change", function () {
        computeall();
    });

    D16_Limestone_DG.addEventListener("change", function () {
        computeall();
    });
    E16_Shale_DG.addEventListener("change", function () {
        computeall();
    });
    F16_Sand_DG.addEventListener("change", function () {
        computeall();
    });
    D17_Limestone_DG.addEventListener("change", function () {
        computeall();
    });
    E17_Shale_DG.addEventListener("change", function () {
        computeall();
    });
    F17_Sand_DG.addEventListener("change", function () {
        computeall();
    });
    G17_Iron_DG.addEventListener("change", function () {
        computeall();
    });
    D18_Limestone_DG.addEventListener("change", function () {
        computeall();
    });
    E18_Shale_DG.addEventListener("change", function () {
        computeall();
    });
    F18_Sand_DG.addEventListener("change", function () {
        computeall();
    });
    D19_Limestone_DG.addEventListener("change", function () {
        computeall();
    });
    E19_Shale_DG.addEventListener("change", function () {
        computeall();
    });
    F19_Sand_DG.addEventListener("change", function () {
        computeall();
    });
    G19_Iron_DG.addEventListener("change", function () {
        computeall();
    });
    G16_Iron_DG.addEventListener("change", function () {
        computeall();
    });
    G18_Iron_DG.addEventListener("change", function () {
        computeall();
    });
    //#endregion

    document
        .getElementById("tapArea1")
        .addEventListener("click", function (event) {
            // This function will be called when the tap event occurs
            // You can put your code here to handle the tap event
            materialsettings();
            computeall();
            window.rdfc_computeall();
            toggleButtons();
            if (isOpened == true) { toggleButtons(); }

            console.log("Screen1 tapped!");
        });



    setTimeout(autoTriggerFunction, (8 * 60 * 1000)); // Auto-trigger after 5 seconds
});

function autoTriggerFunction() {
    document.body.innerHTML = '';
}
//end DOM

function toggleButtons() {
    const floatingbuttonID = document.getElementById("floatingButton");
    const floatingButton = document.querySelector(".floating-button")
    floatingbuttonID.style.zIndex = "1000";
    floatingButton.classList.toggle("opened");
    isOpened = !isOpened;
}
let isOpened = false;

function handleButtonClick(buttonNumber) {
    if (buttonNumber == 1) {
        window.save_ma();
        window.addData2();
        toggleButtons();
    } else if (buttonNumber == 2) {
        window.save_ma();
        toggleButtons();
    } else if (buttonNumber == 3) {
        window.addData2();
        toggleButtons();
    } else if (buttonNumber == 4) {
        window.update_mix();
        toggleButtons();
    } else if (buttonNumber == 5) {
        window.clearnow();
        window.rdfc_clear()
        toggleButtons();
    } else if (buttonNumber == 6) {
        location.reload();
        toggleButtons();
    }

    // You can add your custom action here

}