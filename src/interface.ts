export interface MovieBanner {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}
export interface MovieDetails {
  id: number;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  title: string;
}
