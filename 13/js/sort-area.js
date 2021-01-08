let sortAreas = document.querySelectorAll(".sort__area");
let sortButton = document.querySelectorAll(".sort__area-toggle");

for (let i = 0; i < sortButton.length; i++) {
  sortButton[i].addEventListener("click", function (evt) {
    sortAreas[i].classList.toggle("sort__area--show");
  })
}
