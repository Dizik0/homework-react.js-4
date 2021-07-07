import { Component } from "react";
import Axios from "axios";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=a073961347bd017bb0d5c7cd6f66c875&language=en-US&page=1`
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    let reviews;
    if (this.state.reviews.length === 0) {
      reviews = <p>We don't have any reviews for this movie</p>;
    } else {
      reviews = this.state.reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h2>Autors: {author}</h2>
          <p>{content}</p>
        </li>
      ));
    }

    return <ul>{reviews}</ul>;
  }
}
