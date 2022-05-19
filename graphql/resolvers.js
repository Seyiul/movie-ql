import { getMovies, getMovie, getSuggestions, searchMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    searching: (_, { keyword }) => searchMovie(keyword),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
