export function invert(el) {
  const img = el.querySelector("img");
  const text = el.querySelector("p");

  if (!el.classList.contains("invert_out_item")) {
    el.classList.add("invert_out_item");
    img.classList.add("invert_out_img");
    text.classList.add("invert_out_text");
  } else {
    el.classList.toggle("invert_out_item");
    img.classList.toggle("invert_out_img");
    text.classList.toggle("invert_out_text");
  }

  // [...el.children].forEach((el) => {
  //   setTimeout(() => {
  //     el.classList.toggle("hidden");
  //   }, 300);
  // });
}

export function invertBack(el) {
  const img = el.querySelector("img");
  const text = el.querySelector("p");

  el.classList.toggle("invert_out_item");
  setTimeout(() => {
    img.classList.toggle("invert_out_img");
    text.classList.toggle("invert_out_text");
  }, 300);
}
