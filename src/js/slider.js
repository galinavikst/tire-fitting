const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");

export const itemCount = 4;
let slideIndex = 0;

// disable the previous button on the first page
prevBtns.forEach((el) => {
  if (slideIndex === 0) {
    el.disabled = true;
  } else {
    el.disabled = false;
  }
});

//////////////////////////////
const examUl = document.querySelector(".examples");
const examItemArr = examUl.children;
const prevBtnExam = examUl.nextElementSibling.firstElementChild;
const nextBtnExam = examUl.nextElementSibling.lastElementChild;
console.log(prevBtnExam, nextBtnExam);

initSlider(examItemArr);

prevBtnExam.addEventListener("click", function () {
  slideIndex -= 1;
  slider(examItemArr, prevBtnExam, nextBtnExam);
});

nextBtnExam.addEventListener("click", function () {
  slideIndex += 1;
  slider(examItemArr, prevBtnExam, nextBtnExam);
});
///////////////////////////
const testimUl = document.querySelector(".testimonials_list");
const testimLiArr = testimUl.children;
const prevBtnTestim = testimUl.nextElementSibling.firstElementChild;
const nextBtnTestim = testimUl.nextElementSibling.lastElementChild;
console.log(prevBtnTestim, nextBtnTestim);

initSlider(testimLiArr);

prevBtnTestim.addEventListener("click", function () {
  slideIndex -= 1;
  slider(testimLiArr, prevBtnTestim, nextBtnTestim);
});

nextBtnTestim.addEventListener("click", function () {
  slideIndex += 1;
  slider(testimLiArr, prevBtnTestim, nextBtnTestim);
});
/////////////////////////////

export function initSlider(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i > 3) {
      arr[i].classList.add("hidden");
    }
  }
}

export function slider(arr, prev, next) {
  console.log(arr, prev, next);
  addHidden(arr);

  // determine the start and end index of the visible items
  let startIndex = slideIndex * itemCount;
  let endIndex = startIndex + itemCount;

  console.log(startIndex, endIndex);

  // disable the previous button on the first page
  if (slideIndex === 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  // disable the next button on the last page
  if (endIndex >= arr.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  // show the visible items
  let newVissibleArr = [...arr].slice(startIndex, endIndex);
  console.log(newVissibleArr);
  removeHidden(newVissibleArr);
}

function addHidden(arr) {
  console.log(arr);
  for (let el of arr) {
    el.classList.add("hidden");
  }
}

function removeHidden(arr) {
  for (let el of arr) {
    if (el.classList.contains("hidden")) el.classList.remove("hidden");
  }
}
