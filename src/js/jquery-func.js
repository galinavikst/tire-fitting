export function addMask() {
  const inputPhone = document.querySelectorAll(".input_phone_number");

  inputPhone.forEach((el) => {
    $(document).ready(function () {
      $(el).inputmask("+38 (999) 999-9999");
    });
  });
}

export function slider(elementClass, prevBtnClass, nextBtnClass) {
  $(document).ready(function () {
    $(elementClass).slick({
      arrows: false,
      dots: true,
      dotsClass: `slick-dots slick-dots-three`,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: `<button class=${prevBtnClass}>&#10216;</button>`,
      nextArrow: `<button class=${nextBtnClass}>&#10217;</button>`,
    });
  });

  $(prevBtnClass).click(function () {
    $(elementClass).slick("slickPrev");
  });

  $(nextBtnClass).click(function () {
    $(elementClass).slick("slickNext");
  });
}

export function responsivSlider(elementClass) {
  $(window).on("resize", function () {
    var windowWidth = $(window).width();
    if (windowWidth < 494) {
      // mobile devices
      $(elementClass).slick("slickSetOption", {
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else if (windowWidth >= 680 && windowWidth < 1159) {
      // tablets
      $(elementClass).slick("slickSetOption", {
        slidesToShow: 2,
        slidesToScroll: 2,
      });
    } else if (windowWidth >= 680 && windowWidth < 1159) {
      // desktops
      $(elementClass).slick("slickSetOption", {
        slidesToShow: 3,
        slidesToScroll: 3,
      });
    }
  });
}
