var menuIcon = document.querySelector(".menuIcon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toogle("large-container");
}