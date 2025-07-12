import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onBook }) => {
  return (
    <div style={styles.listContainer}>
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onBook={onBook} />
      ))}
    </div>
  );
};

const styles = {
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
};

export default MovieList;
