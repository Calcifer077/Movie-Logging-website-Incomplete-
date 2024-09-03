import View from "./View.js";

class topMoviesBranchView extends View {
  _parentElement = document.querySelector(".top-movies-container");

  _generateMarkup() {
    return `
        <div class="top-movies-items">
          <div class="top-movies-items-image-container">
            <img
              src="${this._data.image}"
              alt=""
              class="top-movies-image"
            />
          </div>
          <div class="top-movies-items-desc">
            <div class="top-movies-items-name">${this._data.title}</div>
            <span class="special-text">IN</span>
            <div class="top-movies-items-year">${this._data.year}</div>
            <span class="special-text">BY</span>
            <div class="top-movies-items-director">${this._data.director}</div>
          </div>
        </div>
        <!-- First item ends here -->
    `;
  }
}

export default new topMoviesBranchView();
