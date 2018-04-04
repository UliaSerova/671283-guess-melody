const main = document.querySelector(`.main`);

function showSection(item, handler) {
  if (item[0]) {
    main.innerHTML = ``;
    main.appendChild(item[0]);
  }
  if (handler) {
    handler();
  }
}
export default showSection;
