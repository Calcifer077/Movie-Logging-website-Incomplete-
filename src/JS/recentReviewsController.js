import * as model from "./model.js";

import yourRecentReviewsBranchView from "../Views/yourRecentReviewsBranchView.js";

const controlYourReviews = async function () {
  await model.getMoviesData("The batman");
  yourRecentReviewsBranchView.render(model.state.movies);

  await model.getMoviesData("Parasite");
  yourRecentReviewsBranchView.render(model.state.movies);

  await model.getMoviesData("Fall guy");
  yourRecentReviewsBranchView.render(model.state.movies);

  await model.getMoviesData("The killer");
  yourRecentReviewsBranchView.render(model.state.movies);
};

const init = function () {
  controlYourReviews();
};

init();
