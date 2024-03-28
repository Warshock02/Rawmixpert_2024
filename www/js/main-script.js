
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

})

document.addEventListener("DOMContentLoaded", function () {

    function logout() {
        localStorage.removeItem('lastActivity');
        localStorage.removeItem('userName');

        // Redirect the user to the login page
        cordova.InAppBrowser.open("index.html", "_self");
    }
    const offbtn = document.getElementById("offBtn");
    offbtn.addEventListener("click", () => {
        const result = confirm("Are you sure to logout?");
        if (result) {
            logout();
        }
    });

})
