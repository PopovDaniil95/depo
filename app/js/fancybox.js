const btnModalConnect = document.querySelector(".btn_modal-connect");

btnModalConnect.addEventListener("click", () => {
  Fancybox.close();
  Fancybox.bind(document.getElementById("modal-connect-2"), "[data-fancybox]", {
    // Your custom options
  });
});
