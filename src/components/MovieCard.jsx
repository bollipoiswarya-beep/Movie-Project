import { Clapperboard, Play, Star } from 'lucide-react';

function MovieCard({ movie, onSelect, index }) {
  return (
    <button className="movie-card" onClick={() => onSelect(movie)} style={{ '--card-index': index }} aria-label={`View ${movie.title}`}>
      <span className="poster-wrap">
        {movie.poster ? <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" /> : <span className="poster-placeholder"><Clapperboard size={25} />No poster yet</span>}
        <span className="poster-shade" />
        <span className="card-rating"><Star size={12} fill="currentColor" /> {Number(movie.rating || 0).toFixed(1)}</span>
        <span className="card-open"><Play size={15} fill="currentColor" /></span>
      </span>
      <span className="movie-card-copy">
        <span className="movie-card-title">{movie.title}</span>
        <span className="movie-card-meta">{movie.year} <span className="meta-dot">·</span> {movie.genres?.[0] || 'Film'}</span>
      </span>
    </button>
  );
}

export default MovieCard;
