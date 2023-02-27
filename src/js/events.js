import { showHideAnswer } from "./questions.js";
import { showMobileHeader, hideMobileHeader, hambMenu } from "./hamb-menu.js";

export function addEvents() {
  const hamburger = document.querySelector(".hamburger");
  const navContactBlock = document.querySelector(".nav_contact");
  const questionsItemArr = document.querySelectorAll(".question_item");
  const pageOverlay = document.querySelector(".page_overlay");

  window.addEventListener("resize", showMobileHeader);
  window.addEventListener("resize", hideMobileHeader);
  hamburger.onclick = hambMenu;
  navContactBlock.onclick = hambMenu;
  pageOverlay.onclick = hambMenu;

  questionsItemArr.forEach((el) => {
    el.onclick = function () {
      showHideAnswer(el);
    };
  });
}
