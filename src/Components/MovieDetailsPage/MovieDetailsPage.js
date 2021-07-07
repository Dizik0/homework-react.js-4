import { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import MovieDetailsPageAPI from "../GetAPI/MovieDetailsPageAPI";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {},
    // Cast: false,
    // Reviews: false,
  };
  async componentDidMount() {
    const response = await MovieDetailsPageAPI(this.props.match.params.movieId);
    this.setState({ movie: response.data });
  }

  // OnOffCast = () => {
  //   this.setState({ Cast: !this.state.Cast });
  //   if (this.state.Cast === true) {
  //     return this.setState({ Reviews: !this.state.Cast });
  //   }
  // };
  // OnOffReviews = () => {
  //   this.setState({ Reviews: !this.state.Reviews });
  //   if (this.state.Reviews === true) {
  //     return this.setState({ Cast: !this.state.Reviews });
  //   }
  // };

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

        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="poster"
          />
        ) : (
          <img
            src="https://diemmecaffe.ru/images/image-not-found.png"
            alt="not found"
          />
        )}

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
