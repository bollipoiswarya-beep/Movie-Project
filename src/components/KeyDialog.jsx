import { ArrowRight, Check, KeyRound, X } from 'lucide-react';

function KeyDialog({ value, onChange, onSave, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section className="key-dialog" role="dialog" aria-modal="true" aria-labelledby="key-title" onClick={(event) => event.stopPropagation()}>
        <button className="icon-button dialog-close" onClick={onClose} aria-label="Close settings"><X size={18} /></button>
        <span className="dialog-icon"><KeyRound size={20} /></span>
        <p className="eyebrow">YOUR TMDB CONNECTION</p>
        <h2 id="key-title">Bring the whole<br />movie world in.</h2>
        <p className="dialog-copy">Add your TMDB API key to browse live titles, ratings, artwork and cast. Your key stays in this browser.</p>
        <label className="key-label" htmlFor="tmdb-key">API key</label>
        <input id="tmdb-key" className="key-input" type="password" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Paste your TMDB API key" autoComplete="off" />
        <div className="dialog-actions">
          <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noreferrer">Get a free key <ArrowRight size={14} /></a>
          <button className="button button-accent" onClick={onSave}><Check size={15} /> Save key</button>
        </div>
      </section>
    </div>
  );
}

export default KeyDialog;
