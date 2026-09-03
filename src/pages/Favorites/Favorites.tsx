import MovieList from "../../components/MovieList/MovieList";
import { useFavoritesStore } from "../../stor/favorites";

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <h1>My Favorites</h1>
        <p>No favorites yet - go add some!</p>
      </div>
    );
  }
  return (
    <div className="favorites-page">
      <h1>My Favorites</h1>
      <MovieList movies={favorites} />
    </div>
  )
}
