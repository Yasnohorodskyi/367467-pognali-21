let filter = document.querySelector(".filter");

let filterToggle = filter.querySelector(".filter__toggle");
let filterContinentList = filter.querySelector(".filter__continent-list");
let filterContent = filter.querySelector(".filter__content-wrapper");

filterToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  filter.classList.toggle("filter--opened");

  filterContent.classList.toggle("filter__content-wrapper--opened");
  filterContinentList.classList.toggle("filter__continent-list--show");

  if (filterContent.classList.contains("filter__content-wrapper--closed")) {
    filterContent.classList.remove("filter__content-wrapper--closed");
  } else {
    filterContent.classList.add("filter__content-wrapper--closed");
  }
})
