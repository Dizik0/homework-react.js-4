import { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class MoviesPage extends Component {
  state = {
    value: "",
    movies: [],
  };

  screachValueInput = async (e) => {
    e.preventDefault();

    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie/?api_key=a073961347bd017bb0d5c7cd6f66c875&query=${this.state.value}`
    );
    this.setState({ movies: response.data.results });
  };

  getValueInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  render() {
    return (
      <>
        <form onSubmit={this.screachValueInput}>
          <input
            value={this.state.value}
            type="text"
            onChange={this.getValueInput}
          ></input>
          <button type="submit">Поиск</button>
        </form>
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
