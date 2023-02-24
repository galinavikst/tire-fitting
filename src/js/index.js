import { addEvents } from "./events.js";
import { addBgColor } from "./questions.js";
import { addMask, slider } from "./jquery-func.js";

addBgColor();

addEvents();

addMask();
slider(".testimonials_list");
slider(".examples");
