import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";
import MoviesPage from "./Components/MoviesPage/MoviesPage";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
import NotFoundPages from "./Components/NotFoundPages/NotFoundPages";

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFoundPages} />
        </Switch>
      </>
    );
  }
}
