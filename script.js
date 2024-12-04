var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
const themeToggler = document.querySelector(".theme-toggler");

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});