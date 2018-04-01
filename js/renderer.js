function getElementFromTemplate(s) {
  const doc = new DOMParser().parseFromString(s, `text/html`).getElementsByTagName(`template`);
  return doc;
}
export default getElementFromTemplate;
