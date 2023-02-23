export function invert(el) {
  const img = el.querySelector("img");
  const text = el.querySelector("p");

  if (!el.classList.contains("rotate_out")) {
    el.classList.add("rotate_out");
    setTimeout(() => {
      el.classList.add("invert_out_item");
      el.classList.add("shadow");
      img.classList.add("invert_out_img");
      text.classList.add("invert_out_text");
    }, 300);
  }
}

export function invertBack(el) {
  const img = el.querySelector("img");
  const text = el.querySelector("p");

  el.classList.remove("rotate_out");
  setTimeout(() => {
    el.classList.remove("invert_out_item");
    el.classList.remove("shadow");
    img.classList.remove("invert_out_img");
    text.classList.remove("invert_out_text");
  }, 300);
}
