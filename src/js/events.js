import { showHideAnswer } from "./questions.js";

function addEvent(arr, event, func) {
  arr.forEach((el) => {
    el.addEventListener(event, () => {
      func(el);
    });
  });
}

export function addEvents() {
  const questionsItemArr = document.querySelectorAll(".question_item");
  addEvent(questionsItemArr, "click", showHideAnswer);
}
