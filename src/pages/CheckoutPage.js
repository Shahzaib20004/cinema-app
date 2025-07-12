import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createBooking } from "../services/bookingService";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId, selectedSeats, userInfo } = location.state || {};

  const handlePayment = async () => {
    const bookingData = {
      movieId,
      seats: selectedSeats,
      user: userInfo,
      paymentMethod: "easypaisa", // example
    };

    try {
      await createBooking(bookingData);
      navigate("/confirmation");
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Movie ID: {movieId}</p>
      <p>Seats: {selectedSeats.join(", ")}</p>
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default CheckoutPage;
