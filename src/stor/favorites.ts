import { create } from "zustand";
import type{ Movie } from "../types";

type favoritesStor = {
  favorites: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
};

export const useFavoritesStore = create<favoritesStor>((set) => ({
  favorites: [],
  add: (movie) => set((state) => ({ favorites: [...state.favorites, movie] })),
  remove: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((m) => m.id !== id),
    })),
}));
