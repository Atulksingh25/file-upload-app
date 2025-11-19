import React, { useState } from "react";
import axios from "axios";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${query}`);
    setMovies(res.data.Search || []);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🎬 Movie Search</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movie..." className="border p-2" />
      <button onClick={searchMovie} className="bg-blue-500 text-white px-3 py-2 ml-2 rounded">Search</button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {movies.map((movie, i) => (
          <div key={i} className="border p-2 rounded">
            <img src={movie.Poster} alt={movie.Title} className="h-48 w-full object-cover" />
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
