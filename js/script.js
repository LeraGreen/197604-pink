var mainMenuToggler = document.getElementById('main-menu-toggler');
var mainMenuWrapper = document.getElementById('main-menu-wrapper');

mainMenuToggler.onclick = function(event) {
  event.preventDefault();
  mainMenuToggler.classList.toggle('page-header__menu-toggler--close');
  mainMenuWrapper.classList.toggle('page-header__top-line--open');
}
