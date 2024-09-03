import * as model from "./model.js";
import topMoviesBranchView from "../Views/topMoviesBranchView.js";

const controlTopMovies = async function () {
  await model.getMoviesData("Deadpool");
  topMoviesBranchView.render(model.state.movies);

  await model.getMoviesData("Fight club");
  topMoviesBranchView.render(model.state.movies);

  await model.getMoviesData("La la land");
  topMoviesBranchView.render(model.state.movies);

  await model.getMoviesData("The truman show");
  topMoviesBranchView.render(model.state.movies);
};

const init = function () {
  controlTopMovies();
};

init();
