var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var hNavOpen = document.querySelector('.main-header__top');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--close')) {
    navMain.classList.remove('nav--close');
    navMain.classList.add('nav--open');
  } else {
    navMain.classList.add('nav--close');
    navMain.classList.remove('nav--open');
  }

  if (hNavOpen.classList.contains('main-header-top--nav-open')) {
    hNavOpen.classList.remove('main-header-top--nav-open');
  } else {
    hNavOpen.classList.add('main-header-top--nav-open');
  }
});
