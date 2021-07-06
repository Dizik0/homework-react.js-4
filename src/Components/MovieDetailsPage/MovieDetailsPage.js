import { Component } from "react";
import Axios from "axios";
import { Route, NavLink } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a073961347bd017bb0d5c7cd6f66c875`
    );
    this.setState({ movie: response.data });
  }

  render() {
    const { title, poster_path, release_date, overview } = this.state.movie;

    return (
      <>
        <h1>
          {title}({release_date})
        </h1>
        <img src={poster_path} alt="poster" />
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${this.props.match.params.movieId}/Cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${this.props.match.params.movieId}/Reviews`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path="/movies/:movieId/Cast" component={Cast} />
        <Route path="/movies/:movieId/Reviews" component={Reviews} />
      </>
    );
  }
}
