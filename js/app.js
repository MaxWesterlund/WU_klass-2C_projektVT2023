document.getElementById("burger_menu").addEventListener("click", toggleLinks)

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_visible")
    document.getElementById("burger_menu").classList.toggle("burger_menu_selected");
}

window.onscroll = function scroll() {
    var blur_buffer = .05;
    var scroll_dist = window.pageYOffset;
    scroll_dist = Math.min(scroll_dist, 200)

    console.log(scroll_dist);

    document.getElementById("start_background").style.filter = "blur(" + scroll_dist * blur_buffer + "px)";;
}