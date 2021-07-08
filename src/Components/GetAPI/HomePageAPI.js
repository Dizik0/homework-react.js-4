import Axios from "axios";

import baseUrlApiKey from "../../../src/baseUrlApiKey.json";

const HomePageAPI = async () => {
  const { BASE_URL, API_KEY } = baseUrlApiKey;

  return Axios.get(`${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`);
};

export default HomePageAPI;
