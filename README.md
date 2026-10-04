# Reelhouse

A responsive movie browser with popular, top-rated, upcoming, search, and movie-detail views.

## Pages and components

- `src/components/HomePage.jsx` shows the popular movies landing page.
- `src/components/CategoryPage.jsx` displays the top-rated and upcoming collections.
- `src/components/DetailPage.jsx` shows a selected movie and its cast.
- `src/components/SearchPage.jsx` presents search results using the home-page layout.
- `src/components/Navbar.jsx` provides global category navigation, movie search, and TMDB settings.
- `src/components/MovieBrowser.jsx` shares the movie grid, pagination, empty state, and footer across browse pages.

## Run locally

```sh
npm install
npm run dev
```

The app starts with a small sample catalog. To load live TMDB results, open **Connect** in the navigation and enter an API key from [TMDB API settings](https://www.themoviedb.org/settings/api). The key is saved in this browser's local storage; do not commit it to the project.

## Build

```sh
npm run build
```