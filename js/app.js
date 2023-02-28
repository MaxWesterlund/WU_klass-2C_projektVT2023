document.getElementById("burger_menu").addEventListener("click", toggleLinks)
document.getElementById("header_burger_menu").addEventListener("click", toggleLinks)

function toggleLinks() {
    document.getElementById("link_list").classList.toggle("link_list_visible")
}