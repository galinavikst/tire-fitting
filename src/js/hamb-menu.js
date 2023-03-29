const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const phoneNumberBlock = document.querySelector(".phone_number_block");
const nav = document.querySelector("nav");
const navContactBlock = document.querySelector(".nav_contact");
const headerBlock = document.querySelector(".header");
const pageOverlay = document.querySelector(".page_overlay");

export function showMobileHeader() {
  if (matchMedia("(max-width: 850px)").matches) {
    closeHambMenu();
    navContactBlock.classList.add("hidden");
    navContactBlock.onclick = hambMenu;
    hamburger.classList.add("flex");
  } else {
    navContactBlock.onclick = null;
  }
}

export function hideMobileHeader() {
  if (matchMedia("(min-width: 851px)").matches) {
    navContactBlock.classList.remove("hidden");

    hamburger.classList.remove("flex");
  }
}

function closeHambMenu() {
  navContactBlock.classList.remove("hidden");
  nav.classList.remove("hamb_nav_column");
  phoneNumberBlock.classList.remove("hidden");
  headerBlock.classList.remove("block");
  header.classList.remove("header_hamb_open");
  hamburger.classList.remove("active");
  pageOverlay.classList.remove("block");
}

export function hambMenu() {
  navContactBlock.classList.toggle("hidden");
  nav.classList.toggle("hamb_nav_column");
  phoneNumberBlock.classList.toggle("hidden");
  headerBlock.classList.toggle("block");
  header.classList.toggle("header_hamb_open");
  hamburger.classList.toggle("active");
  pageOverlay.classList.toggle("block");
}
