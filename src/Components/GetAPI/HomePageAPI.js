import Axios from "axios";

const HomePageAPI = async () => {
  return Axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=a073961347bd017bb0d5c7cd6f66c875`
  );
};

export default HomePageAPI;
