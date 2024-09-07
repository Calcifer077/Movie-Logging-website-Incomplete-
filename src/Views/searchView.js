import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".navbar-search");

  // DOM elements
  _searchField = this._parentElement.querySelector(
    ".navbar-search-input-field"
  );
  _searchIcon = this._parentElement.querySelector(".navbar-search-search");

  getQuery() {
    const query = this._searchField.value;
    console.log(query);
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._searchField.value = "";
  }

  addHandlerSearch(handler) {
    this._searchIcon.addEventListener("click", () => {
      handler();
    });
  }
}

export default new SearchView();
