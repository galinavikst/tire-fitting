export function showHideAnswer(el) {
  const answer = el.lastElementChild;
  const questionBtn = el.firstElementChild.lastElementChild;

  questionBtn.classList.toggle("rotate90");
  answer.classList.toggle("hidden");
  el.classList.toggle("new_before");
  el.classList.toggle("hide_before");
}

export function addBgColor() {
  const questionsArr = document.querySelectorAll(".question_item");
  for (let i = 0; i < questionsArr.length; i++) {
    if (i % 2 === 0) {
      questionsArr[i].classList.add("addition_bg_color");
    }
  }
}
