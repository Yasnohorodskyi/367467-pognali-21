let routeSelect = document.querySelector(".route-module__select");
let alphabet = document.querySelector(".alphabet");

routeSelect.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (routeSelect.classList.contains("route-module__select--active")) {
    routeSelect.classList.remove("route-module__select--active");
    alphabet.classList.remove("alphabet--show");
  } else {
    routeSelect.classList.add("route-module__select--active");
    alphabet.classList.add("alphabet--show");
  }
})
