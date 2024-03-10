import React, { useState, useEffect } from "react";
import { url } from "../utils/url";
import { FaSearch } from "react-icons/fa";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);
  const [choose, setChoose] = useState("movie");
  const [currentPages, setCurrentPages] = useState(1);
  const [error, setError] = useState(null);

  choose === "" && setChoose("movie");

  const dataMovies = async () => {
    try {
      const response = await fetch(`${url}${choose}&page=${currentPages}`);
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setError(null);
        setMovies(data.Search);
      }
    } catch (error) {
      setMovies([]);
    }
  };

  useEffect(() => {
    dataMovies();
  }, [currentPages]);
  return (
    <div className="mt-[6rem]">
      <div className="my-4 px-6 flex items-center">
        <input
          className="rounded-tl-md rounded-bl-md border p-2 outline-none"
          type="text"
          placeholder="search movies"
          onChange={(e) => setChoose(e.target.value)}
        />
        <button
          className=" text-white p-[0.7rem] hover:bg-slate-700 bg-slate-800 rounded-tr-md rounded-br-md"
          onClick={dataMovies}
        >
          <FaSearch size={20} />
        </button>
      </div>

      {error && (
        <div className="h-[70dvh] text-xl flex justify-center items-center font-semibold">
          Sorry {error} :( Please enter the right name's of movies
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="border p-4 flex flex-col gap-2 text-white bg-slate-800 rounded-md"
          >
            <h1 className="text-lg text-center font-bold">{movie.Title}</h1>

            <div>
              <img className="w-full" src={movie.Poster} alt="" />
            </div>

            <p className="text-md font-light">Type : {movie.Type}</p>
            <p>Year : {movie.Year}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center items-center gap-4 py-6">
        <button
          onClick={() =>
            currentPages !== 1 && setCurrentPages((prev) => prev - 1)
          }
          className="px-3 text-xl rounded-md bg-slate-800 text-white hover:bg-slate-700"
        >
          -
        </button>
        <p>{currentPages}</p>
        <button
          onClick={() => setCurrentPages((prev) => prev + 1)}
          className="px-3 text-xl rounded-md bg-slate-800 text-white hover:bg-slate-700"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ListMovies;
