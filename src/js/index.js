import { addEvents } from "./events.js";
import { addBgColor } from "./questions.js";
import { addMask } from "./jquery-mask.js";
import { sliderExamples } from "./work-examples.js";
import { sliderTestimonials } from "./testimonials.js";
import { prevBtnsOnload } from "./slider.js";

addBgColor();

addMask();

addEvents();

prevBtnsOnload(); // disable the previous button onload
sliderExamples();
sliderTestimonials();
