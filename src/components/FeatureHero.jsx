import { Play } from 'lucide-react';
import Rating from './Rating.jsx';

function FeatureHero({ movie, onSelect }) {
  return (
    <section className="feature" style={{ '--feature-backdrop': `url("${movie.backdrop}")` }}>
      <div className="feature-shade" />
      <div className="feature-content">
        <p className="eyebrow feature-eyebrow"><span className="eyebrow-rule" /> REELHOUSE SPOTLIGHT</p>
        <h1>{movie.title}</h1>
        <div className="feature-meta"><span>{movie.year}</span><span className="meta-dot">·</span><span>{movie.genres.join(' / ')}</span><span className="meta-dot">·</span><span>{movie.runtime}</span></div>
        <Rating value={movie.rating} votes={movie.votes} />
        <p className="feature-description">A journey beyond the familiar. Discover the films everyone’s talking about, and the ones you’ll want to keep to yourself.</p>
        <button className="button button-accent feature-button" onClick={() => onSelect(movie)}><Play size={14} fill="currentColor" /> Discover the film</button>
      </div>
      <div className="feature-index"><span>01</span><i /><span>03</span></div>
      <span className="feature-caption">A FILM BY DENIS VILLENEUVE</span>
    </section>
  );
}

export default FeatureHero;
