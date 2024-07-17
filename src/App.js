import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://imdb-top-100-movies.p.rapidapi.com/";
const API_HOST = "imdb-top-100-movies.p.rapidapi.com";
const API_KEY = "2778d821e1mshd863dba774cb813p19b466jsn7d78af511b46";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies();
  }, []);

  const fetchTopMovies = async (title) => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
      }
    };

    try {
      const response = await fetch(`${API_URL}${title ? `?search=${title}` : ""}`, options);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div className="app">
      <h1>World Movies</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchTopMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.rank} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
