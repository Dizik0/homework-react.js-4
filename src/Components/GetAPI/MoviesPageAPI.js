import Axios from "axios";

import baseUrlApiKey from "../../../src/baseUrlApiKey.json";

const MoviesPageAPI = async (value) => {
  const { BASE_URL, API_KEY } = baseUrlApiKey;
  return Axios.get(
    `${BASE_URL}/3/search/movie/?api_key=${API_KEY}&query=${value}`
  );
};

export default MoviesPageAPI;
