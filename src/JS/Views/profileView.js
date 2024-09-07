import View from "./View.js";

class ProfileViews extends View {
  _parentElement = document.querySelector(".profile-recent-reviews");

  _generateMarkup() {
    return `
        <div class="profile-recent-reviews-items">
            <div class="profile-recent-reviews-items-image-container">
                <img
                src="${this._data.image}"
                alt=""
                class="profile-recent-reviews-items-image"
                />
                <div class="profile-recent-reviews-items-ratings hidden">
                <div class="profile-recent-reviews-items-ratings-star">
                    <img
                    src="./src/Images/Icons/icons8-star-48-filled.png"
                    alt=""
                    class="profile-rating-stars"
                    />
                    <img
                    src="./src/Images/Icons/icons8-star-48-filled.png"
                    alt=""
                    class="profile-rating-stars"
                    />
                    <img
                    src="./src/Images/Icons/icons8-star-48-filled.png"
                    alt=""
                    class="profile-rating-stars"
                    />
                    <img
                    src="./src/Images/Icons/icons8-star-48-filled.png"
                    alt=""
                    class="profile-rating-stars"
                    />
                    <img
                    src="./src/Images/Icons/icons8-star-48-filled.png"
                    alt=""
                    class="profile-rating-stars"
                    />
                </div>
                </div>
            </div>

            <!-- Items desc starts here -->
            <div class="profile-recent-reviews-items-desc">
                <div class="profile-recent-reviews-items-name">${this._data.title}</div>
                <span class="special-text">IN</span>
                <div class="profile-recent-reviews-items-year">${this._data.year}</div>
                <span class="special-text">BY</span>
                <div class="profile-recent-reviews-items-director">${this._data.director}</div>
            </div>
            <!-- Item desc ends here -->

            <div class="profile-recent-reviews-review hidden">
                This is your review. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita, sit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Officiis, reiciendis?Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ea, nihil. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Dicta, iusto! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Neque fuga ab quaerat
                incidunt maiores odit placeat voluptatibus unde aliquam eius, Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis iure
                voluptates necessitatibus placeat illum odio quibusdam modi.
                Reiciendis, animi.
            </div>
        </div>
        <!-- First item ends here -->
    `;
  }
}

export default new ProfileViews();
