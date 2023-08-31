const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const title = item.querySelector(".faq__question");
  const iconPlus = item.querySelector(".faq__icon");
  const iconMinus = item.querySelector(".faq__icon.minus-icon");
  const input = item.querySelector(".faq__input");
  const faqText = item.querySelector(".faq__text");

  title.addEventListener("click", () => {
    if (input.checked) {
      iconPlus.style.display = "inline-block";
      iconMinus.style.display = "none";
      faqText.classList.remove("expanded");
    } else {
      iconPlus.style.display = "none";
      iconMinus.style.display = "inline-block";
      faqText.classList.add("expanded");
    }
  });
});
