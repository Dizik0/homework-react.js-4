import { Component } from "react";

import ReviewsApi from "../GetAPI/ReviewsApi";
import style from "./Reviews.module.scss";

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await ReviewsApi(movieId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    let review;
    const { reviews } = this.state;

    if (reviews.length === 0) {
      review = (
        <p className={style.noReviews}>
          We don't have any reviews for this movie
        </p>
      );
    } else {
      review = reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2 className={style.author}>Autors: {author}</h2>
          <p className={style.reviews}>{content}</p>
        </li>
      ));
    }

    return <ul>{reviews}</ul>;
  }
}
