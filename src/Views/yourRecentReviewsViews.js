import View from "./View.js";

class YourRecentReviewsView extends View {
  _parentElement = document.querySelector(".section-2-container");

  _generateMarkup() {
    return `
            <div class="section-2-recent-reviews-items">
              <div class="section-2-recent-reviews-items-image-container">
                <img
                  src="${this._data.image}"
                  alt=""
                  class="section-2-recent-reviews-items-image"
                />
              </div>
              <!-- Items desc starts here -->
              <div class="section-2-recent-reviews-items-desc">
                <div class="section-2-recent-reviews-items-name">${this._data.title}</div>
                <span class="special-text">IN</span>
                <div class="section-2-recent-reviews-items-year">${this._data.year}</div>
                <span class="special-text">BY</span>
                <div class="section-2-recent-reviews-items-director">
                  ${this._data.director}
                </div>
              </div>
              <!-- Item desc ends here -->
            </div>
            <!-- First item ends here -->
    `;
  }
}

export default new YourRecentReviewsView();
