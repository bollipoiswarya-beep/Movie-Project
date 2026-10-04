import { backdropUrl, posterUrl } from '../data.js';

const GENRES = {
  12: 'Adventure', 14: 'Fantasy', 16: 'Animation', 18: 'Drama', 27: 'Horror',
  28: 'Action', 35: 'Comedy', 36: 'History', 37: 'Western', 53: 'Thriller',
  80: 'Crime', 878: 'Sci-Fi', romance: 'Romance', 99: 'Documentary', 9648: 'Mystery',
};

export function adaptMovie(movie) {
  return {
    ...movie,
    year: movie.release_date?.slice(0, 4) || movie.year || '—',
    rating: movie.vote_average ?? movie.rating ?? 0,
    votes: movie.vote_count ? movie.vote_count.toLocaleString() : movie.votes || '—',
    genres: movie.genres?.map((genre) => genre.name) || movie.genre_ids?.map((id) => GENRES[id]).filter(Boolean) || movie.genres || [],
    poster: movie.poster_path ? posterUrl(movie.poster_path) : movie.poster,
    backdrop: movie.backdrop_path ? backdropUrl(movie.backdrop_path) : movie.backdrop,
    overview: movie.overview || 'A little mystery makes a movie night more interesting.',
  };
}
