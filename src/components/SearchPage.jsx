import HomePage from './HomePage.jsx';

function SearchPage({ feature, ...browserProps }) {
  return <HomePage feature={feature} {...browserProps} />;
}

export default SearchPage;
