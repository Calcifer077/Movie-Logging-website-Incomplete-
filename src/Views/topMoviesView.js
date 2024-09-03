import View from "./View.js";

class TopMoviesView extends View {
  // _item = document.querySelector(".section-3-top-movies-items-desc");
  _parentElement = document.querySelector(".section-3-container");

  _generateMarkup() {
    return `
          <div class="section-3-top-movies-items">
            <div class="section-3-top-movies-items-image-container">
              <img
                src="${this._data.image}"
                alt=""
                class="section-3-top-movies-image"
              />
            </div>
            <div class="section-3-top-movies-items-desc">
              <div class="section-3-top-movies-items-name">${this._data.title}</div>
              <span class="special-text">IN</span>
              <div class="section-3-top-movies-items-year">${this._data.year}</div>
              <span class="special-text">BY</span>
              <div class="section-3-top-movies-items-director">${this._data.director}</div>
            </div>
          </div>
          <!-- First item ends here -->
      `;
  }
}

export default new TopMoviesView();
