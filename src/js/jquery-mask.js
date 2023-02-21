export function addMask() {
  const inputPhone = document.querySelectorAll(".input_phone_number");

  inputPhone.forEach((el) => {
    $(document).ready(function () {
      $(el).inputmask("+38 (999) 999-9999");
    });
  });
}
