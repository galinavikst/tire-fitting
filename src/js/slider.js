export const itemCount = 4;

export function prevBtnsOnload() {
  const prevBtns = document.querySelectorAll(".prev");
  const slideIndex = 0;
  prevBtns.forEach((el) => {
    if (slideIndex === 0) {
      el.disabled = true;
    } else {
      el.disabled = false;
    }
  });
}

export function initSlider(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i > 3) {
      arr[i].classList.add("hidden");
    }
  }
}

export function slider(arr, prev, next, slideIndex) {
  addHidden(arr);

  // determine the start and end index of the visible items
  // let startIndex = slideIndex * itemCount;
  // let endIndex = startIndex + itemCount;
  let startIndex = slideIndex + 1;
  let endIndex = startIndex + 4;

  // disable the previous button on the first page
  if (slideIndex < 0) {
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
