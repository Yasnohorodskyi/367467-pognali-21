let profile = document.querySelector(".profile");

let profileModalOpen = profile.querySelector(".button-business");
let profileModal = profile.querySelector(".profile__modal");
let profileModalClose = profileModal.querySelector(".button-profile");

profileModalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileModal.classList.add("profile__modal--opened");
})

profileModalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileModal.classList.remove("profile__modal--opened");
})
