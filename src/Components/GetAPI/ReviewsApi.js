import Axios from "axios";

import baseUrlApiKey from "../../../src/baseUrlApiKey.json";

const ReviewsApi = async (movieId) => {
  const { BASE_URL, API_KEY } = baseUrlApiKey;
  return Axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export default ReviewsApi;
