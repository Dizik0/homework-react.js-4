import { Component } from "react";
import { Link } from "react-router-dom";

import MoviesPageAPI from "../GetAPI/MoviesPageAPI";
import style from "./MoviesPage.module.scss";

export default class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
  };

  getMovies = async () => {
    if (this.state.value.trim()) {
      const response = await MoviesPageAPI(this.state.value);
      this.setState({ movies: response.data.results });

      localStorage.setItem("arr", JSON.stringify(this.state.movies));
      localStorage.setItem("value", JSON.stringify(this.state.value));
    }
  };

  screachValueInput = (e) => {
    e.preventDefault();

    this.getMovies();
  };

  componentDidMount() {
    const array = JSON.parse(window.localStorage.getItem("arr"));
    const value = JSON.parse(window.localStorage.getItem("value"));

    this.setState({ movies: array, value: value });
  }

  getValueInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    let movie;
    const { movies, value } = this.state;

    if (movies.length !== 0) {
      movie = movies.map((movie) => (
        <li key={movie.id} className={style.itemBoxFilter}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: {
                from: this.props.location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ));
    } else {
      movie = <p className={style.notMovie}>Movie not found</p>;
    }

    return (
      <div className={style.boxFilter}>
        <form onSubmit={this.screachValueInput} className={style.fromFilter}>
          <input
            value={value}
            type="text"
            onChange={this.getValueInput}
            className={style.inputBoxFilter}
            placeholder="Введите название фильма"
          ></input>
          <button type="submit" className={style.bntBoxFilter}>
            🔍
          </button>
        </form>
        <ul className={style.listFilter}>{movie}</ul>
      </div>
    );
  }
}
