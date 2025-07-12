import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ change this if your backend URL is different
});

// Example: Get all cinemas
export const getCinemas = () => api.get("/cinemas");

// Example: Get all movies
export const getMovies = () => api.get("/movies");

// Example: Get showtimes for a movie
export const getShowtimes = (movieId) => api.get(`/movies/${movieId}/showtimes`);

// Example: Get seats for a showtime
export const getSeats = (showtimeId) => api.get(`/showtimes/${showtimeId}/seats`);

// Example: Book seats
export const bookSeats = (bookingData) => api.post("/bookings", bookingData);

// Example: User login
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// Example: User signup
export const signupUser = (data) => api.post("/auth/signup", data);

// Example: Any custom request
export const customRequest = (url, method = "get", data = {}) =>
  api({ url, method, data });

export default api;
