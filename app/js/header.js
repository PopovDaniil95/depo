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

const menuItems = document.querySelectorAll("#menu-list-id li a");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

let header = document.querySelector(".header_js");
let headerH = document.querySelector(".header_js").clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerH) {
    header.classList.add("fixed");
    document.body.style.paddingTop = headerH + "px";
  } else {
    header.classList.remove("fixed");
    document.body.removeAttribute("style");
  }
};
