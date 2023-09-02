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

const menuBtn = document.querySelector(".language-btn");
const menuMobile = document.querySelector(".language-btn__menu");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});
