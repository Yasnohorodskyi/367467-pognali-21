let header = document.querySelector(".header");
let headerMenu = header.querySelector(".header__menu");
let menuToggle = header.querySelector(".header__menu-toggle");

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuToggle.classList.contains("header__menu-toggle--opened")) {
    menuToggle.classList.add("header__menu-toggle--closed");
    menuToggle.classList.remove("header__menu-toggle--opened");
    header.classList.remove("header--opened");
    headerMenu.classList.remove("header__menu--opened");
    headerMenu.classList.add("header__menu--closed");
  } else {
    menuToggle.classList.remove("header__menu-toggle--closed");
    menuToggle.classList.add("header__menu-toggle--opened");
    header.classList.add("header--opened");
    headerMenu.classList.add("header__menu--opened");
    headerMenu.classList.remove("header__menu--closed");
  }
})
