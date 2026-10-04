import MovieBrowser from './MovieBrowser.jsx';

function CategoryPage({ category, ...browserProps }) {
  return (
    <MovieBrowser
      {...browserProps}
      category={category}
      compact
      onSelect={browserProps.setSelected}
      onPageChange={browserProps.setPage}
      onOpenSettings={browserProps.onOpenSettings}
    />
  );
}

export default CategoryPage;
