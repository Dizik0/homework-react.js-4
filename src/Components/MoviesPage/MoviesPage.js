import { Component } from "react";
import { Link } from "react-router-dom";

import MoviesPageAPI from "../GetAPI/MoviesPageAPI";
import style from "./MoviesPage.module.scss";

export default class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
  };

  screachValueInput = async (e) => {
    e.preventDefault();
    if (this.state.value.trim()) {
      const response = await MoviesPageAPI(this.state.value);
      this.setState({ movies: response.data.results });
    }
  };

  getValueInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  render() {
    return (
      <div className={style.boxFilter}>
        <form onSubmit={this.screachValueInput} className={style.fromFilter}>
          <input
            value={this.state.value}
            type="text"
            onChange={this.getValueInput}
            className={style.inputBoxFilter}
            placeholder="Введите название фильма"
          ></input>
          <button type="submit" className={style.bntBoxFilter}>
            🔍
          </button>
        </form>
        <ul className={style.listFilter}>
          {this.state.movies.map((movie) => (
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
          ))}
        </ul>
      </div>
    );
  }
}
