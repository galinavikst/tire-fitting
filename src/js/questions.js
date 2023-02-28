export function showHideAnswer(el) {
  const answer = el.lastElementChild;
  const questionBtn = el.firstElementChild.lastElementChild;

  questionBtn.classList.toggle("rotate90");
  answer.classList.toggle("hidden");
  el.classList.toggle("new_before");
  el.classList.toggle("hide_before");
}
