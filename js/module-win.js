import getElementFromTemplate from "./renderer.js";
import showSection from "./switch-between.js";
import {moduleStartElement, addHandlerStart} from "./module-start.js";

const moduleWinElement = getElementFromTemplate(`<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`);

export const addHandlerWin = function () {
  document.querySelector(`.main-replay`).addEventListener(`click`, function () {
    showSection(moduleStartElement, addHandlerStart);
  });
};

export {moduleWinElement};


