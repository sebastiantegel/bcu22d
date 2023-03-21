import { useEffect, useState } from "react";
import { getMovies, getMoviesByTitle } from "../../services/movieService";
import "./Movies.scss";

export const Movies = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      let data = await getMovies();
      setMovies(data);
      localStorage.setItem("movies", JSON.stringify(data));
    };

    if (movies.length > 0) return;
    getData();
  });

  const handleClick = async () => {
    let data = await getMoviesByTitle(searchText);
    setMovies(data);
    localStorage.setItem("movies", JSON.stringify(data));
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const html = movies.map((movie) => {
    return (
      <div key={movie.imdbID}>
        <h3>{movie.Title}</h3>
        <div className="image-container">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    );
  });

  console.log(movies);

  return (
    <section className="movies">
      <input value={searchText} onChange={handleChange} />
      <button onClick={handleClick}>Sök</button>
      <div>{html}</div>
    </section>
  );
};
