import getElementFromTemplate from "./renderer.js";
import showSection from "./switch-between.js";
import {addHandlerQuestions, moduleQuestionsElement} from "./module-questions.js";

const moduleStartElement = getElementFromTemplate(`<section class="main main--welcome">
               <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
               <button class="main-play">Начать игру</button>
               <h2 class="title main-title">Правила игры</h2>
               <p class="text main-text">
                Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
                Ошибиться можно 3 раза.<br>
                Удачи!
               </p>
             </section>`);


document.querySelector(`.main`).appendChild(moduleStartElement[0]);

export const addHandlerStart = function () {
  document.querySelector(`button.main-play`).addEventListener(`click`, function () {
    showSection(moduleQuestionsElement, addHandlerQuestions);
  });
};
addHandlerStart();
export {moduleStartElement};


