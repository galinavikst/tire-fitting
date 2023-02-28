import { addEvents } from "./events.js";
import { addMask, slider, responsivSlider } from "./jquery-func.js";
import { showMobileHeader } from "./hamb-menu.js";

showMobileHeader();

addEvents();

addMask();

slider(".testimonials_list", ".prev_testimonial", ".next_testimonial");
slider(".examples", ".prev_examples", ".next_examples");
responsivSlider(".testimonials_list");
responsivSlider(".examples");
