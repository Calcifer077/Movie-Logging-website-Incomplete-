import { API_URL } from "./config.js";

export const state = {
  movies: {},
};

const createMoviesObject = function (data) {
  return {
    title: data.Title,
    year: data.Year,
    releaseDate: data.Released,
    director: data.Director,
    image: data.Poster,
    rating: data.imdbRating,
    id: data.imdbID,
  };
};

export const getMoviesData = async function (id) {
  const query = id.toLowerCase().replace(" ", "+");
  const res = await fetch(`${API_URL}=${query}`);
  const data = await res.json();
  state.movies = createMoviesObject(data);
  // console.log(data);
};
