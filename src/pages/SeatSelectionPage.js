import React, { useEffect, useState } from "react";
import { getSeats } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

const SeatSelectionPage = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = location.state || {};

  useEffect(() => {
    const fetchSeats = async () => {
      const res = await getSeats(movieId); 
      setSeats(res.data);
    };
    fetchSeats();
  }, [movieId]);

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
    );
  };

  const handleNext = () => {
    navigate("/userform", { state: { movieId, selectedSeats } });
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      {seats.map((seat) => (
        <button
          key={seat._id}
          onClick={() => toggleSeat(seat._id)}
          style={{
            backgroundColor: selectedSeats.includes(seat._id) ? "green" : "gray",
            margin: "5px",
          }}
        >
          {seat.number}
        </button>
      ))}
      <div>
        <button onClick={handleNext} disabled={selectedSeats.length === 0}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
