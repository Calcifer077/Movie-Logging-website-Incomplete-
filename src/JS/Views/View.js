export default class View {
  _data;

  render(data, render = true) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError() {
    const markup = this._generateErrorMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderSpinner() {
    const markup = `<div class="loader-parent"><span class="loader"></span></div>`;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
