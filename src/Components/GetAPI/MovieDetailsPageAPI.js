import Axios from "axios";

import baseUrlApiKey from "../../../src/baseUrlApiKey.json";

const MovieDetailsPageAPI = async (movieId) => {
  const { BASE_URL, API_KEY } = baseUrlApiKey;

  return Axios.get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}`);
};

export default MovieDetailsPageAPI;
