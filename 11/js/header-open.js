let header = document.querySelector(".header");
let headerMenu = header.querySelector(".header__menu");
let menuToggle = header.querySelector(".header__menu-toggle");
let headerLogo = header.querySelector(".header__logo-link");
let headerContacts = header.querySelector(".header__contacts");
let headerSocial = header.querySelector(".header__social");

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  header.classList.toggle("header--opened");
  headerMenu.classList.toggle("header__menu--opened");
  headerLogo.classList.toggle("header__logo-link--opened");
  menuToggle.classList.toggle("header__menu-toggle--opened");
  headerContacts.classList.toggle("header__contacts--opened");
  headerSocial.classList.toggle("header__social--opened");
})
