import { invert, invertBack } from "./invert-card.js";
import { showHideAnswer } from "./questions.js";

function addEvent(arr, event, func) {
  arr.forEach((el) => {
    el.addEventListener(event, (ev) => {
      // ev.stopPropagation();
      func(el);
    });
  });
}

export function addEvents() {
  const cardsArr = document.querySelectorAll(".service_icon_item");
  const questionsItemArr = document.querySelectorAll(".question_item");

  addEvent(cardsArr, "mouseover", invert);
  addEvent(cardsArr, "mouseleave", invertBack);

  addEvent(questionsItemArr, "click", showHideAnswer);
}
