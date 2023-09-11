const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((header) => {
  const iconPlus = header.querySelector(".accordion__icon-plus");
  const iconMinus = header.querySelector(".accordion__icon-minus");

  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    if (header.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      iconMinus.style.display = "inline-block";
      iconPlus.style.display = "none";
    } else {
      content.style.maxHeight = "0";
      iconMinus.style.display = "none";
      iconPlus.style.display = "inline-block";
    }
  });
});

const menuRussia = document.querySelector(".country__menu-russia");
const russiaContent = document.querySelector(".country__map-russia");

const menuUkraine = document.querySelector(".country__menu-ukraine");
const ukraineContent = document.querySelector(".country__map-ukraine");

const menuTurkey = document.querySelector(".country__menu-turkey");
const turkeyContent = document.querySelector(".country__map-turkey");

const menuKazakhstan = document.querySelector(".country__menu-kazakhstan");
const kazakhstanContent = document.querySelector(".country__map-kazakhstan");

const menuBelarus = document.querySelector(".country__menu-belarus");
const belarusContent = document.querySelector(".country__map-belarus");

menuRussia.addEventListener("mouseenter", () => {
  russiaContent.style.opacity = "1";
});

menuRussia.addEventListener("mouseleave", () => {
  russiaContent.style.opacity = "0.5";
});

menuUkraine.addEventListener("mouseenter", () => {
  ukraineContent.style.opacity = "1";
});

menuUkraine.addEventListener("mouseleave", () => {
  ukraineContent.style.opacity = "0.5";
});

menuBelarus.addEventListener("mouseenter", () => {
  belarusContent.style.opacity = "1";
});

menuBelarus.addEventListener("mouseleave", () => {
  belarusContent.style.opacity = "0.5";
});

menuTurkey.addEventListener("mouseenter", () => {
  turkeyContent.style.opacity = "1";
});

menuTurkey.addEventListener("mouseleave", () => {
  turkeyContent.style.opacity = "0.5";
});

menuKazakhstan.addEventListener("mouseenter", () => {
  kazakhstanContent.style.opacity = "1";
});

menuKazakhstan.addEventListener("mouseleave", () => {
  kazakhstanContent.style.opacity = "0.5";
});

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

// Функция для переноса блока .feature__top

function moveFeatureTop() {
  let featureTop = document.querySelector(".feature__top");
  let featureCellsSteps = document.querySelector(".feature__cells-steps");
  let features = document.querySelector(".features");

  if (window.innerWidth < 1250) {
    featureCellsSteps.insertBefore(
      featureTop,
      featureCellsSteps.firstElementChild
    );
  } else {
    features.insertBefore(featureTop, featureCellsSteps);
  }
}

moveFeatureTop();

window, addEventListener("resize", moveFeatureTop);

function moveCountryMenu() {
  let countryContent = document.querySelector(".country__content");
  let countryMenu = document.querySelector(".country__menu");
  let countryMap = document.querySelector(".country__map");

  if (window.innerWidth < 1000) {
    countryMap.insertAdjacentElement("afterend", countryMenu);
  }
}

moveCountryMenu();

window.addEventListener("resize", moveCountryMenu);
