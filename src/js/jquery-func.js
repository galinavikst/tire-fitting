export function addMask() {
  const inputPhone = document.querySelectorAll(".input_phone_number");

  inputPhone.forEach((el) => {
    $(document).ready(function () {
      $(el).inputmask("+38 (999) 999-9999");
    });
  });
}

export function slider(elementClass) {
  $(document).ready(function () {
    $(elementClass).slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slider_btn prev">&#10216;</button>',
      nextArrow: '<button class="slider_btn next">&#10217;</button>',
    });
  });
}
