import { Link } from "react-router";
import { useFavoritesStore } from "../../stor/favorites";
import "./Header.css";

export default function Header() {
  const favorites = useFavoritesStore((state) => state.favorites);
  return (
    <header className="header">
      <Link to={"/movies"} className="logo">
        🎬 Movie Explorer
      </Link>
      <nav>
        <Link to="/favorites" className="nav-button">
          Favorites ({favorites.length})
        </Link>
        <Link to="/movies" className="nav-button">
          Movies
        </Link>
        <Link to="/favorites" className="nav-button">
          Favorites
        </Link>
      </nav>
    </header>
  );
}
