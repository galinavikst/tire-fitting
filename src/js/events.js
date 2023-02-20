import { invert } from "./invert-card.js";
import { showHideAnswer } from "./questions.js";

function addEvent(arr, func) {
  arr.forEach((el) => {
    el.addEventListener("click", () => func(el));
  });
}

export function addEvents() {
  const cardsArr = document.querySelectorAll(".service_icon_item");
  const questionsItemArr = document.querySelectorAll(".question_item");

  addEvent(cardsArr, invert);
  addEvent(questionsItemArr, showHideAnswer);
}
