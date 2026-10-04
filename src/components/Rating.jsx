import { Star } from 'lucide-react';

function Rating({ value, votes }) {
  return <span className="rating-line"><Star size={16} fill="currentColor" /> <strong>{Number(value || 0).toFixed(1)}</strong><span>/ 10</span>{votes && <small>{votes} ratings</small>}</span>;
}

export default Rating;
