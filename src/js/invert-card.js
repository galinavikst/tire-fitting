const cardsArr = document.querySelectorAll(".service_icon_item");

function addEvent(arr, func) {
  arr.forEach((el) => {
    el.addEventListener("click", () => func(el));
  });
}

function invert(el) {
  if (!el.classList.contains("invert_out")) {
    el.classList.add("invert_out");
  } else {
    el.classList.toggle("invert_back");
  }

  [...el.children].forEach((el) => {
    setTimeout(() => {
      el.classList.toggle("hidden");
    }, 300);
  });
}

addEvent(cardsArr, invert);
