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
  const titleHeight = titleTag.getBoundingClientRect().height;
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
      setTimeout(() => {
        titleTag.style.minHeight = '0';
        titleTag.classList.remove('_typing');
      }, 500);
    },
  });

  const mapURL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.092759726847!2d55.272557374916786!3d25.200094131584237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42816493e4a1%3A0x9991d05586e972fd!2sBoulevard%20Plaza%2C%20Tower%201%20-%20Downtown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sru!4v1693866506674!5m2!1sen!2sru';
  const map = document.getElementById('map');

  const observeHandler = function (entries, watcher) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.src = mapURL;
        watcher.unobserve(target);
      }
    });
  };

  const observer = new IntersectionObserver(observeHandler, {
    root: null,
    threshold: 0.1,
  });
  observer.observe(map);
});
