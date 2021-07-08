import { Component } from "react";

import ReviewsApi from "../GetAPI/ReviewsApi";
import style from "./Reviews.module.scss";
export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const response = await ReviewsApi(this.props.match.params.movieId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    let reviews;
    if (this.state.reviews.length === 0) {
      reviews = (
        <p className={style.noReviews}>
          We don't have any reviews for this movie
        </p>
      );
    } else {
      reviews = this.state.reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2 className={style.author}>Autors: {author}</h2>
          <p className={style.reviews}>{content}</p>
        </li>
      ));
    }

    return <ul>{reviews}</ul>;
  }
}
