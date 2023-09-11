const menulanguage = document.querySelector(".language-btn");
const menuDropDown = document.querySelector(".language-btn__menu");
const iconArrow = document.querySelector(".language-btn__icon-arrow");

menulanguage.addEventListener("click", () => {
  menuDropDown.classList.toggle("language-btn__menu_open");
});

menulanguage.addEventListener("click", () => {
  iconArrow.classList.toggle("language-btn__icon-arrow_rotate");
});

const menuBtn = document.querySelector(".menu__btn-drop-down");
const menuMobile = document.getElementById("menu-list-id");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__btn-drop-down_open");
});
