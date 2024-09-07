import View from "./View.js";

class SearchResultView extends View {
  _parentElement = document.querySelector(".search-field");
  _cross = document.querySelector(".navbar-search-cross");
  _errorMessage = "Nothing found";

  addHandlerClose(handler) {
    this._cross.addEventListener("click", function () {
      document.querySelector(".search-field").classList.add("hidden");
    });
  }
  _generateMarkup() {
    return `
      <div class="search-field-items">
        <div class="search-field-items-img">
          <img src="${this._data.image}" alt="" class="search-field-items-image">
        </div>
        <div class="search-field-items-desc">
          <div class="search-field-items-desc-name">${this._data.title}</div>
          <div class="search-field-items-desc-director-and-year">
            <div class="search-field-items-desc-director">
              ${this._data.director}
            </div>
            <div class="search-field-items-desc-year">${this._data.year}</div>
          </div>
        </div>
      </div> 
      `;
  }

  _generateErrorMarkup(message = this._errorMessage) {
    return `
      <div class="search-field-items">
      <div class="search-field-items-error">${message}</div>
      </div>
    `;
  }
}

export default new SearchResultView();
