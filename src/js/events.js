import { invert } from "./invert-card.js";
import { showHideAnswer } from "./questions.js";

function addEvent(arr, func) {
  arr.forEach((el) => {
    el.addEventListener("click", () => func(el));
  });
}

export function addEvents() {
  const cardsArr = document.querySelectorAll(".service_icon_item");
  const questionsBtnsArr = document.querySelectorAll(".question_btn");

  addEvent(cardsArr, invert);
  addEvent(questionsBtnsArr, showHideAnswer);
}
