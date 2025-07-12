import api from "./api";

// Get all movies
export const getMovies = () => api.get("/movies");

// Get a single movie by ID
export const getMovieById = (movieId) => api.get(`/movies/${movieId}`);

// Get showtimes for a specific movie
export const getMovieShowtimes = (movieId) => api.get(`/movies/${movieId}/showtimes`);

// Create a new movie (admin feature, optional)
export const createMovie = (movieData) => api.post("/movies", movieData);

// Update a movie (admin feature, optional)
export const updateMovie = (movieId, movieData) => api.put(`/movies/${movieId}`, movieData);

// Delete a movie (admin feature, optional)
export const deleteMovie = (movieId) => api.delete(`/movies/${movieId}`);
