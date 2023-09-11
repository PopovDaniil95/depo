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

function moveCountryMenu() {
  let country = document.querySelector(".country");
  let countryContent = document.querySelector(".country__content");
  let countryMenu = document.querySelector(".country__menu");
  let countryMap = document.querySelector(".country__map");

  if (window.innerWidth < 1000) {
    countryContent.insertBefore(
      countryMap,
      countryContent.lastElementChild.nextSibling
    );
    countryContent.insertBefore(
      countryMenu,
      countryContent.lastElementChild.nextSibling
    );
  } else {
    country.insertBefore(countryMap, countryContent.nextSibling);
    countryContent.insertBefore(countryMenu, countryContent.lastElementChild);
  }
}

moveCountryMenu();

window.addEventListener("resize", moveCountryMenu);
