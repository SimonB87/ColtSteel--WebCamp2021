const movies = [
  {
    title: "Alice",
    score: 66
  },
  {
    title: "Pretty",
    score: 76
  },
  {
    title: "The Kong",
    score: 80
  },
];

const myMovies = movies.filter( (movie) => movie.score > 75 );
myMovies; // only movies with score higher 75 are present - two items

const chainMovies = movies
  .filter( (movie) => movie.score > 75 )
  .map( (movie) => `${movie.title} - score: ${movie.score}` );