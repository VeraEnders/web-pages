const body = document.querySelector('body');
const headerHamburger = document.querySelector('.header__hamburger');
const main = document.querySelector('main');
const nav = document.querySelector('.navigation');
const headerNav = document.querySelector('.header__navigation');
const navLink = document.querySelectorAll('.navigation__link');

function toggleMenu() {
  body.classList.toggle('lock-scroll');
  headerHamburger.classList.toggle('active');
  main.classList.toggle('menu-opened');
  nav.classList.toggle('active');
  headerNav.classList.toggle('active');
}

function closeMenu() {
  body.classList.remove('lock-scroll');
  headerHamburger.classList.remove('active');
  main.classList.remove('menu-opened');
  nav.classList.remove('active');
  headerNav.classList.remove('active');
}

function preventScroll(e) {
  if (nav.classList.contains('active')) {
    e.preventDefault();
    e.stopPropagation();
  }  
}

headerHamburger.addEventListener('click', toggleMenu);
main.addEventListener('click', closeMenu);
navLink.forEach(link => link.addEventListener('click', closeMenu));
body.addEventListener('wheel', preventScroll);