import getElementFromTemplate from "./renderer.js";
import showSection from "./switch-between.js";
import {addHendlerTwo, moduleTwoElement} from "./module-2.js";

const moduleOneElement = getElementFromTemplate(`<template><section class="main main--welcome">
               <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
               <button class="main-play">Начать игру</button>
               <h2 class="title main-title">Правила игры</h2>
               <p class="text main-text">
                Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
                Ошибиться можно 3 раза.<br>
                Удачи!
               </p>
             </section></template>`);

document.querySelector(`.main`).appendChild(moduleOneElement[0].content.cloneNode(true).children[0]);

export const addHendlerFirst = function () {
  document.querySelector(`button.main-play`).addEventListener(`click`, function () {
    showSection(moduleTwoElement);
    addHendlerTwo();
  });
}
addHendlerFirst();
export {moduleOneElement};


