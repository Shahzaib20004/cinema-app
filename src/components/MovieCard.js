import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onBook }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} className="movie-card__image" />
      <div className="movie-card__content">
        <h3>{movie.title}</h3>
        <p>{movie.genre} • {movie.duration} mins</p>
        <p className="movie-card__price">Rs. {movie.price}</p>
        <button onClick={() => onBook(movie)} className="movie-card__button">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
