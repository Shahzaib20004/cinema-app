import React, { useEffect, useState } from "react";
import { getMovies } from "../services/movieService";
import { useNavigate, useLocation } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const cinemaId = location.state?.cinemaId;

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await getMovies();
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  const handleSelect = (movieId) => {
    navigate("/seats", { state: { cinemaId, movieId } });
  };

  return (
    <div>
      <h2>Select a Movie</h2>
      {movies.map((movie) => (
        <div key={movie._id}>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <button onClick={() => handleSelect(movie._id)}>Select Seats</button>
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
