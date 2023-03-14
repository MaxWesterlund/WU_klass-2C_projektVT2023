document.getElementById("burger_menu").addEventListener("click", toggleLinks);
document.getElementById("games").addEventListener("click", toggleLinks);

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_closed")
    document.getElementById("burger_menu").classList.toggle("burger_menu_selected");
}

document.getElementById("games").addEventListener("mouseover", () => { toggleGames(document.getElementById("othello").classList.contains("hide")) });
document.getElementById("contact").addEventListener("mouseover", () => { toggleGames(document.getElementById("othello").classList.contains("sublink")) });



function toggleGames(a) {
    if (arguments[0] == true) {
        document.getElementById("othello").classList.toggle("hide");
        document.getElementById("othello").classList.toggle("sublink");
        document.getElementById("terrain").classList.toggle("hide");
        document.getElementById("terrain").classList.toggle("sublink");
    }
}

window.onscroll = function scroll() {
    var blur_buffer = .05;
    var scroll_dist = window.pageYOffset;
    scroll_dist = Math.min(scroll_dist, 1000);

    var background = document.getElementById("start_background");
    background.style.filter = "blur(" + scroll_dist * blur_buffer + "px)";
}