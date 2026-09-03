import useFetch from "../../hooks/useFetch";
import { useParams, Link } from "react-router";
import type { Movie } from "../../types";
import "./MovieDetails.css";
import { useFavoritesStore } from "../../stor/favorites";
import { useCallback } from "react";
import { resume } from "react-dom/server";

export default function MovieDetails() {
  const { id } = useParams();
  const {
    data: movie,
    loading,
    error,
  } = useFetch<Movie>(`https://api.tvmaze.com/shows/${id}`);

  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.add);
  const removeFavorite = useFavoritesStore((state) => state.remove);

  const toggleFavorite = useCallback(
    (m: Movie, isFav: boolean) => {
      if (isFav) {
        removeFavorite(m.id);
      } else {
        addFavorite(m);
      }
    },
    [addFavorite, removeFavorite],
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!movie) return null;

  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="movie-details">
      <Link to="/movies" className="back-link">
        ← Back to movies
      </Link>
      <div className="content">
        {movie.image && <img src={movie.image.original} alt={movie.name} />}
        <div className="text">
          <h1>{movie.name}</h1>
          {movie.rating.average && (
            <p className="rating">⭐ {movie.rating.average}</p>
          )}
          <button
            className="fav-btn"
            onClick={() => toggleFavorite(movie, isFavorite)}>
              {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
          </button>
          <p className="summary">{movie.summary}</p>
          <p className="premiered">{movie.premiered}</p>
        </div>
      </div>
    </div>
  );
}
