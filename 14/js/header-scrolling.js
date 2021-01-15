let headerTop = document.querySelector(".header");

window.addEventListener("scroll", function (evt ) {
  evt.preventDefault();

  if (window.scrollY >= 1) {
    headerTop.classList.add("header--scrolled");
  } else {
    headerTop.classList.remove("header--scrolled");
  }
})
