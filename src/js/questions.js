const questionsArr = document.querySelectorAll(".question_item");

export function addBgColor() {
  for (let i = 0; i < questionsArr.length; i++) {
    if (i % 2 === 0) {
      questionsArr[i].classList.add("addition_bg_color");
    }
  }
}

function showHideAnswer(el) {
  const answer = el.parentElement.nextElementSibling;
  const liBefore = el.parentElement.parentElement;

  el.classList.toggle("rotate90");
  answer.classList.toggle("hidden");
  liBefore.classList.toggle("new_before");
  liBefore.classList.toggle("hide_before");
}

export function addEventToQuestionBtn() {
  const questionsBtnsArr = document.querySelectorAll(".question_btn");
  questionsBtnsArr.forEach((el) =>
    el.addEventListener("click", () => showHideAnswer(el))
  );
}
