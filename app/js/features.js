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
