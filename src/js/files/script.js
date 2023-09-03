// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

import Typed from 'typed.js';

// const getRandom = function (min, max) {
//   min = Math.ceil(min);
//   return Math.floor(Math.random() * (Math.floor(max) - min) + min);
// };

// const titleTag = document.querySelector('.hero__title span:first-child');
// const titleText = titleTag.textContent;
// const titleHeight = titleTag.offsetHeight;
// titleTag.textContent = '';

// const printTitle = function (text) {
//   titleTag.classList.add('_init');
//   titleTag.style.minHeight = `${titleHeight}px`;
//   let count = 0;

//   const typeText = function () {
//     titleTag.classList.add('_typing');
//     let interval = setTimeout(() => {
//       titleTag.insertAdjacentText('beforeend', `${text[count]}`);
//       count++;

//       if (count == text.length) {
//         clearInterval(interval);
//         titleTag.classList.remove('_typing');
//         titleTag.style.minHeight = '0';
//         return true;
//       }
//       typeText();
//     }, getRandom(50, 150));
//   };
//   typeText();
// };

document.addEventListener('DOMContentLoaded', () => {
  const titleTag = document.querySelector('.hero__title span:first-child');
  const titleText = titleTag.textContent;
  const titleHeight = titleTag.offsetHeight;
  titleTag.style.minHeight = `${titleHeight}px`;
  titleTag.textContent = '';

  const typer = new Typed(titleTag, {
    strings: [titleText],
    typeSpeed: 50,
    showCursor: false,
    onBegin: (self) => {
      titleTag.classList.add('_typing');
      titleTag.classList.add('_init');
    },
    onComplete: (self) => {
      setTimeout(() => titleTag.classList.remove('_typing'), 500);
    },
  });
});
