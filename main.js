const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(params) {
    desktopMenu.classList.toggle('inactive');
}