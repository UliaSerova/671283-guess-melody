window.onload = function () {
  let count = 0;
  const template = document.querySelector(`#templates`);
  const sections = template.content.querySelectorAll(`section`);
  const main = document.querySelector(`.main`);

  function showSection(item) {
    if (sections[item]) {
      main.innerHTML = ``;
      main.appendChild(sections[item]);
    }
  }
  showSection(0);

  document.addEventListener(`keydown`, function (event){
    if (event.altKey && event.keyCode === 39) {
      count++;
    }
    if (event.altKey && event.keyCode === 37) {
      count--;
    }
    showSection(count);
  });
}
