import "./SeatMap.css";

const SeatMap = ({ seats, onSelect, selectedSeats, group }) => {
  const handleSeatClick = (seat) => {
    // Check if seat is already selected
    if (selectedSeats.includes(seat)) {
      onSelect(selectedSeats.filter((s) => s !== seat));
    } else {
      onSelect([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-map">
      <h3>🪑 Select Your Seats</h3>
      <div className="screen">Screen This Way</div>
      <div className="seats-container">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${seat.isBooked ? "booked" : ""} ${
              selectedSeats.includes(seat.id) ? "selected" : ""
            }`}
            disabled={seat.isBooked}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatMap;
