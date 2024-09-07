import View from "./View.js";

class IndexView extends View {
  // DOM
  // DOM - Sections
  _navbar = document.querySelector(".navbar-links");
  _section1 = document.querySelector(".section-1");
  _section2 = document.querySelector(".section-2-recent-reviews");
  _section3 = document.querySelector(".section-3-top-movies");

  // DOM - Section element
  _profileBtn = document.querySelector(".navbar-links-profile");
  _reviewBtn = document.querySelector(".navbar-links-log-review");
  _searchIcon = document.querySelector(".navbar-links-search-icon");

  _searchField = document.querySelector(".navbar-search-input");
  _cross = document.querySelector(".navbar-search-cross");
  _search = document.querySelector(".navbar-search-search");

  _searchFieldCards = document.querySelector(".search-field");

  _section1Btns = document.querySelector(".section-1-left-buttons");

  _footerEmailField = document.querySelector(".footer-email-input-field");
  _footerEmailIcon = document.querySelector(".footer-email-icon");

  _goUp = document.querySelector(".go-up");
  _goUpBackground = document.querySelector(".go-up-background");

  // Helper functions

  // The below functions toggles classlist.
  // It usually accepts an array of elements but it can also be used for a single element.
  _changeBackground(element, className) {
    // Using this function for a single element
    if (!Array.isArray(element) && !(element instanceof NodeList)) {
      element = [element]; // Convert single element to array
    }
    element.forEach((element) => {
      element.classList.toggle(className);
    });
  }
  // constructor() {
  //   super();

  //   this._initObserver();
  // }

  // _initObserver() {
  //   // Use an arrow function to maintain 'this' context within the callback
  //   const obsCallback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       // You can add more logic here to handle when the section comes into view
  //       if (entry.isIntersecting) {
  //         this._navbar.style.position = "fixed"; // Example action
  //       } else {
  //         this._navbar.style.position = "static"; // Example action
  //       }
  //     });
  //   };
  //   const obsOptions = { root: null, threshold: [0.5, 0.9] };

  //   const observer = new IntersectionObserver(obsCallback, obsOptions);

  //   // Use 'this._section2' to reference the class property
  //   observer.observe(this._section2);
  //   observer.observe(this._section3);
  // }

  addHandlerButtons(handler) {
    this._section1Btns.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.classList.contains("section-1-left-buttons-btn1")) {
        this._section2.scrollIntoView({
          behavior: "smooth",
        });
      } else if (e.target.classList.contains("section-1-left-buttons-btn2")) {
        this._section3.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  addHandlerGoingUp(handler) {
    this._goUp.addEventListener("click", (e) => {
      e.preventDefault();

      this._navbar.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  addHandlerGoingUpBackground(handler) {
    this._goUp.addEventListener("mouseenter", () => {
      this._changeBackground(this._goUpBackground, "hidden");
    });

    this._goUp.addEventListener("mouseout", () => {
      this._changeBackground(this._goUpBackground, "hidden");
    });
  }

  addHandlerSearchField(handler) {
    this._searchIcon.addEventListener("click", () => {
      this._changeBackground(
        [
          this._profileBtn,
          this._reviewBtn,
          this._searchIcon,
          this._searchField,
          this._cross,
          this._search,
        ],
        "hidden"
      );
    });

    this._cross.addEventListener("click", () => {
      this._changeBackground(
        [
          this._profileBtn,
          this._reviewBtn,
          this._searchIcon,
          this._searchField,
          this._cross,
          this._search,
        ],
        "hidden"
      );
    });
  }

  addHandlerFooterEmail(handler) {
    this._footerEmailIcon.addEventListener("click", () => {
      this._footerEmailField.value = "";
    });
  }
}

export default new IndexView();
