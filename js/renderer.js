function getElementFromTemplate(s) {
  return new DOMParser().parseFromString(s, `text/html`).getElementsByTagName(`section`);
}
export default getElementFromTemplate;
