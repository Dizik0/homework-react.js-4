import Axios from "axios";

const MovieDetailsPageAPI = async (e) => {
  return Axios.get(
    `https://api.themoviedb.org/3/movie/${e}?api_key=a073961347bd017bb0d5c7cd6f66c875`
  );
};

export default MovieDetailsPageAPI;
