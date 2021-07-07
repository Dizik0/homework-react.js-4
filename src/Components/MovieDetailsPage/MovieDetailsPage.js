import { Component } from "react";
import Axios from "axios";
import { Route, NavLink } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    Cast: false,
    Reviews: false,
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a073961347bd017bb0d5c7cd6f66c875`
    );
    this.setState({ movie: response.data });
  }

  OnOffCast = () => {
    this.setState({ Cast: !this.state.Cast });
    // if (this.state.Cast === true) {
    //   this.setState({ Reviews: false, Cast: true });
    // }
  };
  OnOffReviews = () => {
    this.setState({ Reviews: !this.state.Reviews });
    // if (this.state.Reviews === true) {
    //   this.setState({ Cast: false, Reviews: true });
    // }
  };

  // ears = () => {
  //   this.setState({
  //     releaseDate: new Date(this.state.releaseDate).getFullYear(),
  //   });
  //   console.log(this.state.releaseDate);
  // };
  render() {
    const { title, poster_path, release_date, overview } = this.state.movie;

    new Date(release_date).getFullYear();
    return (
      <>
        <h1>
          {title}({new Date(release_date).getFullYear()})
        </h1>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster"
        />
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={`/movies/${this.props.match.params.movieId}/Cast`}
              onClick={this.OnOffCast}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${this.props.match.params.movieId}/Reviews`}
              onClick={this.OnOffReviews}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route
          path="/movies/:movieId/Cast"
          render={() => <Cast Cast={this.state.Cast} property={this.props} />}
        />
        <Route
          path="/movies/:movieId/Reviews"
          render={() => (
            <Reviews Reviews={this.state.Reviews} property={this.props} />
          )}
        />
      </>
    );
  }
}
