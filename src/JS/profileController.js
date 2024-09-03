import * as model from "./model.js";

import profileView from "../Views/profileView.js";

const controlYourProfileReviews = async function () {
  await model.getMoviesData("The batman");
  profileView.render(model.state.movies);
};

const init = function () {
  controlYourProfileReviews();
};

init();
