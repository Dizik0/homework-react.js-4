import { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import MovieDetailsPageAPI from "../GetAPI/MovieDetailsPageAPI";
import style from "./MovieDetailsPage.module.scss";

import imgNotFound from "../../img/123588579.jpg";

export default class MovieDetailsPage extends Component {
  state = {
    title: null,
    poster_path: null,
    release_date: null,
    overview: null,
    genres: null,
    vote_average: null,
    location: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { location } = this.props;

    const response = await MovieDetailsPageAPI(movieId);
    this.setState({ ...response.data, location: location });
  }
  BtnBack = () => {
    const { history } = this.props;
    const { location } = this.state;
    const { from } = location.state;

    if (location.state && from) {
      history.push(from);
    } else {
      history.push("/");
    }
  };

  render() {
    const { title, poster_path, release_date, overview, genres, vote_average } =
      this.state;
    const { movieId } = this.props.match.params;

    return (
      <div className={style.boxDetail}>
        <button
          type="button"
          onClick={this.BtnBack}
          className={style.btnDetail}
        >
          ← Back
        </button>

        <div className={style.boxMovie}>
          <div className={style.boxImg}>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="poster"
                className={style.posterImg}
              />
            ) : (
              <img
                src={imgNotFound}
                alt="not found"
                className={style.posterError}
              />
            )}
          </div>

          <div className={style.boxInformation}>
            {release_date && (
              <h1 className={style.titleDetail}>
                {title} ({new Date(release_date).getFullYear()})
              </h1>
            )}
            {vote_average && (
              <p className={style.textDetail}>User Score: {vote_average} </p>
            )}

            <h2 className={style.titleDetail}>Overview</h2>
            <p className={style.textDetail}>{overview}</p>
            <h2 className={style.titleDetail}>Genres</h2>
            <ul>
              {genres && genres.length !== 0 ? (
                genres.map((i) => (
                  <li key={i.id} className={style.textDetail}>
                    {i.name}
                  </li>
                ))
              ) : (
                <li>No information</li>
              )}
            </ul>
          </div>
        </div>
        <h2 className={style.Additional}>Additional information</h2>
        <ul className={style.navLinkList}>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/Cast`,
                state: {
                  from: this.props.location,
                },
              }}
              className={style.navLinkDetail}
              activeClassName={style.active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${movieId}/Reviews`,
                state: {
                  from: this.props.location,
                },
              }}
              className={style.navLinkDetail}
              activeClassName={style.active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path="/movies/:movieId/Cast" component={Cast} />
        <Route path="/movies/:movieId/Reviews" component={Reviews} />
      </div>
    );
  }
}
