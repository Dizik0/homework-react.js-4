import "./App.css";
import { Component, Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import style from "./App.module.scss";

import { Navigation } from "./Components/Navigation";

const HomePage = lazy(() =>
  import("./Components/HomePage/HomePage" /*webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "./Components/MoviesPage/MoviesPage" /*webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Components/MovieDetailsPage/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage" */
  )
);

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<h1 className={style.loading}>Loaging...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />,
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}
