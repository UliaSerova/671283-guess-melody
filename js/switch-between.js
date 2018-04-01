const main = document.querySelector(`.main`);

function showSection(item) {
  if (item) {
    main.innerHTML = ``;
    main.appendChild(item[0].content.cloneNode(true).children[0]);
  }
}
export default showSection;
