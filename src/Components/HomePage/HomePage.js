import { Component } from "react";
import { NavLink } from "react-router-dom";

import HomePageAPI from "../GetAPI/HomePageAPI";

import style from "./HomePage.module.scss";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const respons = await HomePageAPI();

    this.setState({ movies: respons.data.results });
  }

  render() {
    return (
      <div className={style.boxTrending}>
        <h1 className={style.titleTrending}>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id} className={style.itemTrending}>
              <NavLink
                to={{
                  pathname: `movies/${movie.id}`,
                  state: {
                    from: this.props.location,
                  },
                }}
              >
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
