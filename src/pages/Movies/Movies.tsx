import useFetch from "../../hooks/useFetch";
import MovieList from "../../components/MovieList/MovieList";
import type { Movie } from "../../types";
import { useState, useMemo } from "react";
import SearchBar from "../../components/SerchBar";

export default function Movies() {
  const [search, setSearch] = useState("");
  const {
    data: movies,
    loading,
    error,
  } = useFetch<Movie[]>("https://api.tvmaze.com/shows");

  const filtered = useMemo(() => {
    return (movies ?? []).filter((movie) =>
      movie.name.toLowerCase().startsWith(search.toLowerCase()),
    );
  }, [movies, search]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!movies) return null;

  return (
    <div className="movies-page">
      <h1>Discover Movies</h1>
      <SearchBar value={search} onChange={setSearch} placeholder="🔍Search movies.." />
      {filtered.length === 0 ? (
        <p>No shows match "{search}"</p>
      ) : (
        <MovieList movies={filtered} />
      )}
    </div>
  );
}
