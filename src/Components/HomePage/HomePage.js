import { Component } from "react";
import { NavLink } from "react-router-dom";

import HomePageAPI from "../GetAPI/HomePageAPI";

// const API_KEY = "a073961347bd017bb0d5c7cd6f66c875";
// const BASE_URL = "https://api.themoviedb.org";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const respons = await HomePageAPI();
    this.setState({ movies: respons.data.results });
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
