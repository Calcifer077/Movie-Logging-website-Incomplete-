import View from "./View.js";

class yourRecentReviewsBranchViews extends View {
  _parentElement = document.querySelector(".recent-reviews-container");

  _generateMarkup() {
    return `
            <!-- First item starts here -->
            <div class="recent-reviews-items">
            <div class="recent-reviews-items-image-container">
                <img
                src="${this._data.image}"
                alt=""
                class="recent-reviews-image"
                />
            </div>
            <div class="recent-reviews-items-desc">
                <div class="recent-reviews-items-name">${this._data.title}</div>
                <span class="special-text">IN</span>
                <div class="recent-reviews-items-year">${this._data.year}</div>
                <span class="special-text">BY</span>
                <div class="recent-reviews-items-director">${this._data.director}</div>
            </div>
            </div>
            <!-- First item ends here -->
        `;
  }
}

export default new yourRecentReviewsBranchViews();
