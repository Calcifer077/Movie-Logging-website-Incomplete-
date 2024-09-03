import * as model from "./model.js";

import topMoviesView from "../Views/topMoviesView.js";
import yourRecentReviewsViews from "../Views/yourRecentReviewsViews.js";
import indexView from "../Views/indexView.js";

const controlYourReviews = async function () {
  await model.getMoviesData("The batman");
  yourRecentReviewsViews.render(model.state.movies);

  await model.getMoviesData("Parasite");
  yourRecentReviewsViews.render(model.state.movies);

  await model.getMoviesData("Fall guy");
  yourRecentReviewsViews.render(model.state.movies);

  await model.getMoviesData("The killer");
  yourRecentReviewsViews.render(model.state.movies);
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

const init = function () {
  controlYourReviews();
  controlTopMovies();

  // Index view
  indexView.addHandlerButtons(controlIndex);
  indexView.addHandlerGoingUp(controlIndex);
  indexView.addHandlerGoingUpBackground(controlIndex);
  indexView.addHandlerSearch(controlIndex);
};

init();
