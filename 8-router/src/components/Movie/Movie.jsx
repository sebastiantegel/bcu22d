import "./Movie.css";
import { useParams, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Movie = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const { addToCart } = useOutletContext();

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://omdbapi.com/?apikey=416ed51a&i=" + id);
      let data = await response.json();

      console.log(data);

      setMovie(data);
    };

    if (!movie) getData();
  }, [id]);

  const handleClick = () => {
    addToCart(movie);
  };

  return (
    <div className="movie-details">
      <h3>{movie?.Title}</h3>
      <p>{movie?.Plot}</p>
      <p>{movie?.Director}</p>
      <button onClick={handleClick}>Lägg i varukorg</button>
    </div>
  );
};
