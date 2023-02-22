import { slider, initSlider } from "./slider.js";

export function sliderExamples() {
  const examUl = document.querySelector(".examples");
  const examItemArr = examUl.children;
  const prevBtnExam = examUl.nextElementSibling.firstElementChild;
  const nextBtnExam = examUl.nextElementSibling.lastElementChild;

  let slideIndexExam = 0;

  initSlider(examItemArr);

  prevBtnExam.addEventListener("click", function () {
    slideIndexExam -= 1;
    slider(examItemArr, prevBtnExam, nextBtnExam, slideIndexExam);
  });

  nextBtnExam.addEventListener("click", function () {
    slideIndexExam += 1;
    slider(examItemArr, prevBtnExam, nextBtnExam, slideIndexExam);
  });
}
