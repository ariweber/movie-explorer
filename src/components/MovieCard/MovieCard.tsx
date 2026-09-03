import { memo } from "react";
import type { Movie } from "../../types";
import { Link } from "react-router";
import "./MovieCard.css";



export default memo(function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="MovieCard">
      <Link to={`/movies/${movie.id}`}>
        {movie.image ? (
          <img src={movie.image.medium} alt={movie.name} />
        ) : (
          <div className="no-poster">🎬</div>
        )}
      </Link>
      <h3>{movie.name}</h3>
      <Link to={`/movies/${movie.id}`}>View</Link>
    </div>
  );
})

