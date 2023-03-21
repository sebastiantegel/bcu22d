import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/?apikey=416ed51a&s=";

export const getMovies = async () => {
  try {
    // let response = await fetch(BASE_URL + "star");
    // let data = await response.json();

    // return data.Search;

    let response = await axios.get(`${BASE_URL}star`);
    return response.data.Search;
  } catch {
    return [];
  }

  // fetch("https://www.omdbapi.com/?apikey=416ed51a&s=star")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setMovies(data.Search);
  //   });
};

export const getMoviesByTitle = async (title) => {
  try {
    let response = await axios.get(`${BASE_URL}${title}`);
    return response.data.Search;
  } catch {
    return [];
  }
};
