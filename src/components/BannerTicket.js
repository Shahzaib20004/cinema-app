import React from "react";
import "./BannerTicket.css"; // Optional: style file

const BannerTicket = ({ cinemaName, movieTitle, timeSlot, seats, price, userName }) => {
  return (
    <div className="ticket-banner">
      <h2>🎟️ Your Ticket Summary</h2>
      <p><strong>Cinema:</strong> {cinemaName}</p>
      <p><strong>Movie:</strong> {movieTitle}</p>
      <p><strong>Time:</strong> {timeSlot}</p>
      <p><strong>Seats:</strong> {seats.join(", ")}</p>
      <p><strong>Total Price:</strong> Rs. {price}</p>
      <p><strong>Booked by:</strong> {userName}</p>
    </div>
  );
};

export default BannerTicket;
