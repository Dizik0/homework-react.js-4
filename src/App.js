import "./App.css";
import { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";

export default class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </>
    );
  }
}
