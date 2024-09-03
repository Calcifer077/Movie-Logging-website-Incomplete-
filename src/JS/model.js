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
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=3d1173ac&t=${query}`
  );
  const data = await res.json();
  state.movies = createMoviesObject(data);
  // console.log(data);
};
