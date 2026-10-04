import { Clapperboard, Search, Settings2, X } from 'lucide-react';

function Navbar({
  categories,
  category,
  query,
  draft,
  apiKey,
  onCategoryChange,
  onDraftChange,
  onSearch,
  onClearSearch,
  onOpenSettings,
}) {
  return (
    <header className="topbar">
      <a className="brand" href="#" onClick={(event) => { event.preventDefault(); onCategoryChange('popular'); }} aria-label="Reelhouse home">
        <span className="brand-mark"><Clapperboard size={20} strokeWidth={1.8} /></span><span>reelhouse<span className="brand-period">.</span></span>
      </a>
      <nav className="main-nav" aria-label="Movie categories">
        {categories.map((item) => <button key={item.id} onClick={() => onCategoryChange(item.id)} className={`nav-link ${category === item.id && !query ? 'active' : ''}`}>{item.label}</button>)}
      </nav>
      <form className="search-form" onSubmit={onSearch} role="search">
        <Search size={17} aria-hidden="true" />
        <input aria-label="Search movies" placeholder="Find a film..." value={draft} onChange={(event) => onDraftChange(event.target.value)} />
        {draft && <button className="search-clear" type="button" onClick={onClearSearch} aria-label="Clear search"><X size={15} /></button>}
        <kbd>↵</kbd>
      </form>
      <button className={`settings-button ${apiKey ? 'connected' : ''}`} onClick={onOpenSettings} aria-label="TMDB API settings" title={apiKey ? 'TMDB connected' : 'Connect TMDB'}>
        {apiKey ? <span className="connected-dot" /> : <Settings2 size={18} />}<span className="settings-label">{apiKey ? 'Connected' : 'Connect'}</span>
      </button>
    </header>
  );
}

export default Navbar;
