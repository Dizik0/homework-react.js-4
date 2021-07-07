import Axios from "axios";

const MoviesPageAPI = async (e) => {
  return Axios.get(
    `https://api.themoviedb.org/3/search/movie/?api_key=a073961347bd017bb0d5c7cd6f66c875&query=${e}`
  );
};

export default MoviesPageAPI;
