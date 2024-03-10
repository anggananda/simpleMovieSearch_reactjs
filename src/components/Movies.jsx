import React, { useEffect, useState } from "react";
import { url } from "../utils/url";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("movie");
  const [error, setError] = useState(null)
  const [currentPages, setCurrentPages] = useState(1)

  category === "" && setCategory("movie");

  const dataMovies = async () => {
    try {
      const response = await fetch(`${url}${category}&page=${currentPages}`);
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error)
        setMovies([]);
      } else {
        setError(null)
        setMovies(data.Search);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    dataMovies();
  }, [currentPages]);

  console.log(movies);
  return (
    <>
      <h1>Movies</h1>

      <input
        type="text"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={dataMovies}>Search</button>

        <div>
        {error && <div>Error: {error}</div>}
        </div>

        <div className="flex justify-center items-center gap-6">
            <button onClick={() => setCurrentPages(prev => prev + 1)} className="px-3 py-2 rounded-md bg-slate-800 text-white">+</button>
            <p>{currentPages}</p>
            <button onClick={() => currentPages !== 1 && setCurrentPages(prev => prev - 1)} className="px-3 py-2 rounded-md bg-slate-800 text-white">-</button>
        </div>

      <div className="grid grid-cols-4 gap-4 px-4">
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <h1>{movie.Title}</h1>

            <div>
              <img src={movie.Poster} alt="" />
            </div>

            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
