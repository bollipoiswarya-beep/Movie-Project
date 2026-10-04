import { useEffect, useMemo, useState } from 'react';
import { categoryOrder, movies } from './data.js';
import DetailPage from './components/DetailPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import HomePage from './components/HomePage.jsx';
import KeyDialog from './components/KeyDialog.jsx';
import Navbar from './components/Navbar.jsx';
import SearchPage from './components/SearchPage.jsx';
import { adaptMovie } from './utils/movie.js';

const PAGE_SIZE = 8;
const CATEGORIES = [
  { id: 'popular', label: 'Popular' },
  { id: 'top_rated', label: 'Top rated' },
  { id: 'upcoming', label: 'Upcoming' },
];

function App() {
  const [category, setCategory] = useState('popular');
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('reelhouse-tmdb-key') || '');
  const [keyDraft, setKeyDraft] = useState('');
  const [keyDialog, setKeyDialog] = useState(false);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categoryLabel = CATEGORIES.find((item) => item.id === category)?.label || 'Popular';
  const catalog = useMemo(() => categoryOrder[category] || movies, [category]);
  const feature = movies[0];

  useEffect(() => {
    let cancelled = false;
    setError('');
    if (!apiKey) {
      const results = (query ? movies.filter((movie) => `${movie.title} ${movie.genres.join(' ')}`.toLowerCase().includes(query.toLowerCase())) : catalog);
      const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
      setTotalPages(pages);
      setTotalResults(results.length);
      setItems(results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE));
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    const endpoint = query ? 'search/movie' : `movie/${category}`;
    fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${encodeURIComponent(apiKey)}&language=en-US&page=${page}${query ? `&query=${encodeURIComponent(query)}` : ''}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.status === 401 ? 'That API key was not accepted. Check your key in settings.' : 'TMDB could not be reached. Check your connection and try again.');
        return response.json();
      })
      .then((data) => {
        if (cancelled) return;
        setItems((data.results || []).map(adaptMovie));
        setTotalPages(Math.min(data.total_pages || 1, 500));
        setTotalResults(data.total_results || 0);
      })
      .catch((reason) => { if (!cancelled) { setError(reason.message); setItems([]); setTotalPages(1); } })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [apiKey, category, catalog, page, query]);

  function changeCategory(next) {
    setCategory(next);
    setQuery('');
    setDraft('');
    setPage(1);
    setSelected(null);
  }

  function submitSearch(event) {
    event.preventDefault();
    setQuery(draft.trim());
    setCategory('popular');
    setPage(1);
    setSelected(null);
  }

  function saveKey() {
    const nextKey = keyDraft.trim();
    if (nextKey) localStorage.setItem('reelhouse-tmdb-key', nextKey);
    else localStorage.removeItem('reelhouse-tmdb-key');
    setApiKey(nextKey);
    setKeyDialog(false);
    setPage(1);
  }

  function openSettings() {
    setKeyDraft(apiKey);
    setKeyDialog(true);
  }

  return (
    <div className="app-shell">
      <Navbar
        categories={CATEGORIES}
        category={category}
        query={query}
        draft={draft}
        apiKey={apiKey}
        onCategoryChange={changeCategory}
        onDraftChange={setDraft}
        onSearch={submitSearch}
        onClearSearch={() => { setDraft(''); setQuery(''); setPage(1); }}
        onOpenSettings={() => { setKeyDraft(apiKey); setKeyDialog(true); }}
      />

      {selected ? <DetailPage movie={selected} apiKey={apiKey} onBack={() => setSelected(null)} /> : query ? (
        <SearchPage {...{
          feature, query, categoryLabel, apiKey, items, totalResults, error, loading,
          page, totalPages, setSelected, setPage, setKeyDraft, setKeyDialog,
          onOpenSettings: openSettings,
          onClearSearch: () => { setDraft(''); setQuery(''); setPage(1); },
          onHome: () => changeCategory('popular'),
        }} />
      ) : category === 'popular' ? (
        <HomePage {...{
          feature, categoryLabel, apiKey, items, totalResults, error, loading,
          page, totalPages, setSelected, setPage, setKeyDraft, setKeyDialog,
          onOpenSettings: openSettings,
          onHome: () => changeCategory('popular'),
        }} />
      ) : (
        <CategoryPage {...{
          category, categoryLabel, apiKey, items, totalResults, error, loading,
          page, totalPages, setSelected, setPage, setKeyDraft, setKeyDialog,
          onOpenSettings: openSettings,
          onClearSearch: () => { setDraft(''); setQuery(''); setPage(1); },
          onHome: () => changeCategory('popular'),
        }} />
      )}
      {keyDialog && <KeyDialog value={keyDraft} onChange={setKeyDraft} onSave={saveKey} onClose={() => setKeyDialog(false)} />}
    </div>
  );
}

export default App;