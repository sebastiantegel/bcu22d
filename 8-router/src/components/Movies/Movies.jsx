import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://omdbapi.com/?apikey=416ed51a&s=star");
      let data = await response.json();

      setMovies(data.Search);
    };

    if (movies.length === 0) getData();
  });

  const html = movies.map((movie) => {
    return (
      <div
        className="movie"
        key={movie.imdbID}
        onClick={() => {
          navigate("/movie/" + movie.imdbID); // http://localhost:3000/movie/tt12345
        }}
      >
        <h3>{movie.Title}</h3>
        <div className="img-wrapper">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </div>
    );
  });

  return <div className="movies">{html}</div>;
};
