// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.getElementById('toTop');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function hamburgerNav() {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}
hamburgerNav();

// Klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});