import FeatureHero from './FeatureHero.jsx';
import MovieBrowser from './MovieBrowser.jsx';

function HomePage({ feature, ...browserProps }) {
  return (
    <>
      <FeatureHero movie={feature} onSelect={browserProps.setSelected} />
      <MovieBrowser
        {...browserProps}
        category="popular"
        compact={false}
        onSelect={browserProps.setSelected}
        onPageChange={browserProps.setPage}
        onOpenSettings={browserProps.onOpenSettings}
      />
    </>
  );
}

export default HomePage;
