import { ArrowRight, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import MovieCard from './MovieCard.jsx';

function MovieBrowser({
  category,
  categoryLabel,
  query = '',
  apiKey,
  items,
  totalResults,
  error,
  loading,
  page,
  totalPages,
  onSelect,
  onPageChange,
  onOpenSettings,
  onClearSearch,
  onHome,
  compact = false,
}) {
  const sectionEyebrow = query
    ? 'A GOOD PLACE TO START'
    : category === 'popular'
      ? 'CURATED FOR YOUR NEXT MOVIE NIGHT'
      : category === 'top_rated'
        ? 'THE ONES THAT STAY WITH YOU'
        : 'COMING SOON TO A SCREEN NEAR YOU';

  function changePage(nextPage) {
    onPageChange(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className={`browse-content ${compact ? 'browse-content-compact' : ''}`}>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{sectionEyebrow}</p>
          <h2>{query ? <>Results for <span className="search-phrase">“{query}”</span></> : `${categoryLabel} films`}</h2>
        </div>
        {!query && <span className="result-count">{apiKey ? `${totalResults.toLocaleString()} titles` : 'Sample titles · Connect for live data'}</span>}
      </div>

      {error && <div className="error-banner" role="alert"><span>{error}</span><button onClick={onOpenSettings}>Check settings</button></div>}
      {loading ? <div className="loading-state"><span className="loader" />Finding your next favorite…</div> : items.length ? <>
        <div className="movie-grid">{items.map((movie, index) => <MovieCard key={`${movie.id}-${index}`} movie={movie} onSelect={onSelect} index={index} />)}</div>
        <div className="pagination">
          <span className="page-caption">PAGE <strong>{String(page).padStart(2, '0')}</strong><span> / {String(totalPages).padStart(2, '0')}</span></span>
          <div className="page-controls">
            <button className="page-arrow" onClick={() => changePage(Math.max(page - 1, 1))} disabled={page <= 1} aria-label="Previous page"><ChevronLeft size={17} /></button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
              const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));
              const pageNumber = firstPage + index;
              return <button className={`page-number ${pageNumber === page ? 'current' : ''}`} key={pageNumber} onClick={() => changePage(pageNumber)}>{String(pageNumber).padStart(2, '0')}</button>;
            })}
            <button className="page-arrow" onClick={() => changePage(Math.min(page + 1, totalPages))} disabled={page >= totalPages} aria-label="Next page"><ChevronRight size={17} /></button>
          </div>
          <span className="page-caption page-total">{totalResults} <span>FILMS</span></span>
        </div>
      </> : <div className="empty-state">
        <span className="empty-icon"><Search size={21} /></span>
        <h3>No films found</h3>
        <p>Try another title, or clear your search to explore the collection.</p>
        <button className="text-button" onClick={query ? onClearSearch : onHome}>{query ? 'Clear search' : 'Browse popular films'} <ArrowRight size={15} /></button>
      </div>}
      <footer className="site-footer"><a className="footer-brand" href="#" onClick={(event) => { event.preventDefault(); onHome(); }}>reelhouse<span className="brand-period">.</span></a><span>Made for the love of the next great film.</span><span>Data &amp; images via TMDB</span></footer>
    </main>
  );
}

export default MovieBrowser;
