import { slider, initSlider } from "./slider.js";

export function sliderTestimonials() {
  const testimUl = document.querySelector(".testimonials_list");
  const testimLiArr = testimUl.children;
  const prevBtnTestim = testimUl.nextElementSibling.firstElementChild;
  const nextBtnTestim = testimUl.nextElementSibling.lastElementChild;

  let slideIndexTest = 0;

  initSlider(testimLiArr);

  prevBtnTestim.addEventListener("click", function () {
    slideIndexTest -= 1;
    slider(testimLiArr, prevBtnTestim, nextBtnTestim, slideIndexTest);
  });

  nextBtnTestim.addEventListener("click", function () {
    slideIndexTest += 1;
    slider(testimLiArr, prevBtnTestim, nextBtnTestim, slideIndexTest);
  });
}
