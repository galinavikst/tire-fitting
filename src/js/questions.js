export function showHideAnswer(el) {
  const answer = el.parentElement.nextElementSibling;
  const liBefore = el.parentElement.parentElement;

  el.classList.toggle("rotate90");
  answer.classList.toggle("hidden");
  liBefore.classList.toggle("new_before");
  liBefore.classList.toggle("hide_before");
}

export function addBgColor() {
  const questionsArr = document.querySelectorAll(".question_item");
  for (let i = 0; i < questionsArr.length; i++) {
    if (i % 2 === 0) {
      questionsArr[i].classList.add("addition_bg_color");
    }
  }
}
