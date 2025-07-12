import api from "./api";

// Login user
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// Signup user
export const signupUser = (data) => api.post("/auth/signup", data);

// Logout (example — usually frontend only, or can hit backend if needed)
export const logoutUser = () => {
  localStorage.removeItem("cinema_user");
};

// Get current user from local storage
export const getCurrentUser = () => {
  const user = localStorage.getItem("cinema_user");
  return user ? JSON.parse(user) : null;
};
