import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { posterUrl } from '../data.js';
import { adaptMovie } from '../utils/movie.js';
import Rating from './Rating.jsx';

function DetailPage({ movie, apiKey, onBack }) {
  const [detail, setDetail] = useState(movie);
  const [cast, setCast] = useState((movie.cast || []).map((person) => typeof person === 'string' ? { name: person, character: 'Cast member', profile: null } : person));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!apiKey) return undefined;
    let cancelled = false;
    setLoading(true);
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${encodeURIComponent(apiKey)}&language=en-US`).then((response) => {
        if (!response.ok) throw new Error('Could not load this movie.');
        return response.json();
      }),
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${encodeURIComponent(apiKey)}&language=en-US`).then((response) => response.ok ? response.json() : { cast: [] }),
    ]).then(([movieData, credits]) => {
      if (cancelled) return;
      setDetail(adaptMovie({ ...movie, ...movieData }));
      setCast((credits.cast || []).slice(0, 12).map((person) => ({
        name: person.name, character: person.character, profile: person.profile_path ? posterUrl(person.profile_path, 'w185') : null,
      })));
    }).catch(() => {}).finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [apiKey, movie]);

  const genres = detail.genres?.map((genre) => typeof genre === 'string' ? genre : genre.name) || [];
  return (
    <main className="detail-page">
      <section className="detail-hero" style={{ '--detail-backdrop': detail.backdrop ? `url("${detail.backdrop}")` : 'none' }}>
        <div className="detail-hero-shade" />
        <button className="back-button" onClick={onBack}><ArrowLeft size={16} /> <span>All movies</span></button>
        <div className="detail-content">
          <div className="detail-poster">{detail.poster && <img src={detail.poster} alt={`${detail.title} poster`} />}</div>
          <div className="detail-info">
            <p className="eyebrow detail-eyebrow">THE FEATURE PRESENTATION</p>
            <h1>{detail.title}</h1>
            <div className="detail-meta"><span>{detail.year}</span><i />{detail.runtime && <><span>{detail.runtime}</span><i /></>}<span>{genres.slice(0, 3).join(' · ') || 'Feature film'}</span></div>
            <Rating value={detail.rating} votes={detail.votes} />
            <p className="detail-overview">{detail.overview}</p>
            <button className="button button-accent" onClick={onBack}><ArrowLeft size={15} /> Back to browsing</button>
          </div>
        </div>
      </section>
      <section className="cast-section">
        <div className="section-heading cast-heading"><div><p className="eyebrow">THE PEOPLE BEHIND THE STORY</p><h2>Cast &amp; crew</h2></div><span className="cast-count">{loading ? 'Loading…' : `${cast.length} featured`}</span></div>
        {cast.length ? <div className="cast-row">{cast.map((person, index) => (
          <article className="cast-member" key={`${person.name}-${index}`}>
            <div className={`cast-avatar cast-avatar-${index % 5}`}>{person.profile ? <img src={person.profile} alt={person.name} loading="lazy" /> : <span>{person.name.split(' ').map((name) => name[0]).slice(0, 2).join('')}</span>}</div>
            <strong>{person.name}</strong><span>{person.character}</span>
          </article>
        ))}</div> : <p className="empty-cast">Cast details are available when connected to TMDB.</p>}
      </section>
    </main>
  );
}

export default DetailPage;
