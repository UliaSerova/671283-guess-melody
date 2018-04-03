import getElementFromTemplate from "./renderer.js";
import showSection from "./switch-between.js";
import {moduleStartElement, addHandlerStart} from "./module-start.js";
const moduleLoseElement = getElementFromTemplate(`<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`);

export const addHandlerLose = function () {
  document.querySelector(`.main-replay`).addEventListener(`click`, function () {
    showSection(moduleStartElement, addHandlerStart);
  });
};
export {moduleLoseElement};


