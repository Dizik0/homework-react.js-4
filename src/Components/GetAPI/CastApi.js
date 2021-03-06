import Axios from "axios";

import baseUrlApiKey from "../../../src/baseUrlApiKey.json";

const CastApi = async (movieId) => {
  const { BASE_URL, API_KEY } = baseUrlApiKey;

  return Axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export default CastApi;
