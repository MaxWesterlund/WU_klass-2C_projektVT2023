document.getElementById("burger_menu").addEventListener("click", toggleLinks);
document.getElementById("games").addEventListener("click", toggleLinks);

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_closed")
}

window.addEventListener("resize", resize);

function resize() {
    if (window.innerWidth < 600) {
        toggleGames(document.getElementById("othello").classList.contains("hide"));
    }
}