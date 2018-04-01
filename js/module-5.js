import getElementFromTemplate from "./renderer.js";
import showSection from "./switch-between.js";
import {moduleOneElement, addHendlerFirst} from "./module-1.js";
const moduleFiveElement = getElementFromTemplate(`<template><section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section></template>`);

export const addHendlerFive = function () {
  document.querySelector(`.main-replay`).addEventListener(`click`, function () {
    showSection(moduleOneElement);
    addHendlerFirst();
  });
}
export {moduleFiveElement};


