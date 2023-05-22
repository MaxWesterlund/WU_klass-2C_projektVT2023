
const dracula = {
    "name":"dracula",
    "main":"rgb(40, 42, 54)",
    "mainTransparent":"rgba(40, 42, 54, .8)",
    "background":"rgb(68, 71, 90)",
    "text1":"rgb(248, 248, 242)",
    "textHighLight1":"rgb(154, 252, 179)",
    "accent1":"rgb(189, 147, 249)",
    "accent1Transparent":"rgba(189, 147, 249, .2)"
}

const palenight = {
    "name":"palenight",
    "main":"rgb(54, 60, 80)",
    "mainTransparent":"rgba(54, 60, 80, .8)",
    "background":"rgb(86, 85, 122)",
    "text1":"rgb(255, 255, 255)",
    "textHighLight1":"rgb(255, 212, 126)",
    "accent1":"rgb(233, 128, 131)",
    "accent1Transparent":"rgba(233, 128, 131, .2)"
}

initTheme(dracula);
initTheme(palenight);

function initTheme(theme) {
    document.getElementById(theme.name + "_1").style.backgroundColor = theme.main;
    document.getElementById(theme.name + "_2").style.backgroundColor = theme.accent1;

    var themeObj = document.getElementById(theme.name + "_theme");
    themeObj.addEventListener("click", function() {
        switchTheme(theme);
    });
    themeObj.addEventListener("mouseover", function() {
        themeObj.style.borderColor = theme.text1;
    });
    themeObj.addEventListener("mouseleave", function(){
        themeObj.style.borderColor = themeObj.style.getPropertyValue("--main-color");
    });
}

switchTheme(dracula);

function switchTheme(theme) {
    var root = document.querySelector(":root");
    root.style.setProperty("--main-color", theme.main);
    root.style.setProperty("--main-color-transparent", theme.mainTransparent);
    root.style.setProperty("--background-color", theme.background);
    root.style.setProperty("--text-color-1", theme.text1);
    root.style.setProperty("--text-highlight-color-1", theme.textHighLight1);
    root.style.setProperty("--accent-color-1", theme.accent1);
    root.style.setProperty("--accent-color-1-transparent", theme.accent1Transparent);
}