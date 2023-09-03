//* Подключение библиотеки
// npm i aos --save-dev
import AOS from 'aos';
//* Подключение набора стилей
// import "aos/dist/aos.css";

//* Подключение списка активных модулей
import { flsModules } from '../files/modules.js';
flsModules.animos = AOS.init({
  // Global settings:
  disable: 'phone',
  offset: 30,
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
