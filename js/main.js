window.onload = function () {
  let count = 0;
  const keys = {
    keyLeft: 37,
    keyRight: 39
  }
  const template = document.querySelector(`#templates`);
  const sections = template.content.querySelectorAll(`section`);
  const sectionsLen = sections.length;
  const main = document.querySelector(`.main`);

  function showSection(item) {
    if (sections[item]) {
      main.innerHTML = ``;
      main.appendChild(sections[item]);
    }
  }
  showSection(0);

  document.addEventListener(`keydown`, function (event) {
    if (!event.altKey) {
      return;
    }
    if (event.keyCode === keys.keyRight && count < sectionsLen) {
      count++;
      showSection(count);
    }
    if (event.keyCode === keys.keyLeft && count > 0) {
      count--;
      showSection(count);
    }
  });
}
