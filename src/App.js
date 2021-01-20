import React, { useEffect, useState } from "react";
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=2bf56b4e029ff5fca38a61a671156184&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=" + FEATURED_API + "&query="

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      <header>
        <input type="text" placehoder="Search..." />s
      </header>
      {movies.length > 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default App;
