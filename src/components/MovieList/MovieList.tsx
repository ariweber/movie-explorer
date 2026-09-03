import type { Movie } from "../../types";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"
export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
