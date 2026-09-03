export interface Movie {
  id: number;
  name: string;
  genres: string[];
  premiered: string;
  rating: { average: number | null };
  image: { medium: string; original: string } | null;
  summary: string;
}