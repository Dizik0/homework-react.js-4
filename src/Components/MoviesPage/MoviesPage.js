import { Component } from "react";
import { Link } from "react-router-dom";

import MoviesPageAPI from "../GetAPI/MoviesPageAPI";

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
    // let noMovie;
    // if (this.state.value.length !== 0 && this.state.movies.length === 0) {
    //   noMovie = <p>Нет такого фильма</p>;
    // }

    return (
      <>
        <form onSubmit={this.screachValueInput}>
          <input
            value={this.state.value}
            type="text"
            onChange={this.getValueInput}
          ></input>
          <button type="submit">
            {/* <Link to={`movies/${movie.id}/query=${this.state.value}`}></Link> */}
            Поиск
          </button>
        </form>
        {/* {noMovie} */}
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

//  to={`MovieDetailsPage/${movie.id}`
