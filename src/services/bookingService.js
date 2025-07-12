import api from "./api";

// Create a new booking
export const createBooking = (bookingData) => api.post("/bookings", bookingData);

// Get all bookings for a user (if needed)
export const getUserBookings = (userId) => api.get(`/bookings/user/${userId}`);

// Get booking by ID
export const getBookingById = (bookingId) => api.get(`/bookings/${bookingId}`);

// Cancel booking (if feature added)
export const cancelBooking = (bookingId) => api.delete(`/bookings/${bookingId}`);
