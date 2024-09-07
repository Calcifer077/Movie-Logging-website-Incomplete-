import * as model from "./model.js";

import topMoviesView from "../Views/topMoviesView.js";
import yourRecentReviewsViews from "../Views/yourRecentReviewsViews.js";
import indexView from "../Views/indexView.js";
import searchView from "../Views/searchView.js";
import searchResultView from "../Views/searchResultView.js";

const controlYourReviews = async function () {
  try {
    // yourRecentReviewsViews.renderSpinner();

    await model.getMoviesData("The batman");
    yourRecentReviewsViews.render(model.state.movies);

    await model.getMoviesData("Parasite");
    yourRecentReviewsViews.render(model.state.movies);

    await model.getMoviesData("Fall guy");
    yourRecentReviewsViews.render(model.state.movies);

    await model.getMoviesData("The killer");
    yourRecentReviewsViews.render(model.state.movies);
  } catch (error) {
    console.log(error);
  }
};

const controlTopMovies = async function () {
  await model.getMoviesData("Deadpool");
  topMoviesView.render(model.state.movies);

  await model.getMoviesData("Fight club");
  topMoviesView.render(model.state.movies);

  await model.getMoviesData("La la land");
  topMoviesView.render(model.state.movies);

  await model.getMoviesData("The truman show");
  topMoviesView.render(model.state.movies);
};

const controlIndex = function () {
  console.log("Something");
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;

    await model.getMoviesData(query);

    if (model.state.movies.title === undefined) {
      searchResultView.renderError();
      return;
    }
    searchResultView.render(model.state.movies);

    console.log(query);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  controlYourReviews();
  controlTopMovies();

  // Index view
  indexView.addHandlerButtons(controlIndex);
  indexView.addHandlerGoingUp(controlIndex);
  indexView.addHandlerGoingUpBackground(controlIndex);
  indexView.addHandlerSearchField(controlIndex);
  indexView.addHandlerFooterEmail(controlIndex);
  searchView.addHandlerSearch(controlSearchResults);
  searchResultView.addHandlerClose(controlSearchResults);
};

init();
