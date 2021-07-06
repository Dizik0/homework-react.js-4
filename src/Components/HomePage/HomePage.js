import { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
export default class HomePage extends Component {
  state = {
    movies: [],
  };
  API_KEY = "a073961347bd017bb0d5c7cd6f66c875";
  async componentDidMount() {
    const response = await Axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=a073961347bd017bb0d5c7cd6f66c875"
    );

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
