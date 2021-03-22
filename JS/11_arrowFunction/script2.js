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

const myMovies = movies.map( (movie) => `${movies.title} - score: ${movie.score}` );
myMovies; // ["undefined - score: 66", "undefined - score: 76", "undefined - score: 80"]