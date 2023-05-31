const dracula = {
    "name":"dracula",
    "main":"rgb(40, 42, 54)",
    "mainTransparent":"rgba(40, 42, 54, .8)",
    "background":"rgb(68, 71, 90)",
    "text1":"rgb(248, 248, 242)",
    "textHighLight1":"rgb(189, 147, 249)",
    "accent1":"rgb(154, 252, 179)",
    "accent1Transparent":"rgba(154, 252, 179, .2)",
    "accent2":"rgb(255, 121, 198)"
}

const palenight = {
    "name":"palenight",
    "main":"rgb(54, 60, 80)",
    "mainTransparent":"rgba(54, 60, 80, .8)",
    "background":"rgb(86, 85, 122)",
    "text1":"rgb(255, 255, 255)",
    "textHighLight1":"rgb(233, 128, 131)",
    "accent1":"rgb(255, 212, 126)",
    "accent1Transparent":"rgba(255, 212, 126, .2)",
    "accent2":"rgb(147, 187, 255)"
}

if (document.getElementById("dracula_1") != null) {
    initTheme(dracula);
    initTheme(palenight);
}

switchTheme(loadTheme());

function initTheme(theme) {
    document.getElementById(theme.name + "_1").style.backgroundColor = theme.main;
    document.getElementById(theme.name + "_2").style.backgroundColor = theme.accent1;

    var themeObj = document.getElementById(theme.name + "_theme");
    themeObj.addEventListener("click", function() {
        switchTheme(theme);
    });
}

function switchTheme(theme) {
    var root = document.querySelector(":root");
    root.style.setProperty("--main-color", theme.main);
    root.style.setProperty("--main-color-transparent", theme.mainTransparent);
    root.style.setProperty("--background-color", theme.background);
    root.style.setProperty("--text-color-1", theme.text1);
    root.style.setProperty("--text-highlight-color-1", theme.textHighLight1);
    root.style.setProperty("--accent-color-1", theme.accent1);
    root.style.setProperty("--accent-color-1-transparent", theme.accent1Transparent);
    root.style.setProperty("--accent-color-2", theme.accent2);

    saveTheme(theme);
}

function saveTheme(theme) {
    sessionStorage.setItem("theme", JSON.stringify(theme));
}

function loadTheme() {
    var theme = JSON.parse(sessionStorage.getItem("theme"));
    if (theme != null) {
        return theme;
    }
    else {
        return dracula;
    }
}