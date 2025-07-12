import React from "react";
import "./CinemaPage.css";

const CinemaPage = ({ cinemas, onCinemaSelect }) => {
  return (
    <div className="cinema-page">
      <h2>🎥 Select a Cinema</h2>
      <div className="cinema-list">
        {cinemas.map((cinema) => (
          <div
            key={cinema._id}
            className="cinema-card"
            onClick={() => onCinemaSelect(cinema)}
          >
            <img src={cinema.imageUrl} alt={cinema.name} />
            <div className="cinema-card__content">
              <h3>{cinema.name}</h3>
              <p>{cinema.location}</p>
              <p>{cinema.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaPage;
