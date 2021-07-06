import { Component } from "react";
import Axios from "axios";

export default class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=a073961347bd017bb0d5c7cd6f66c875&language=en-US`
    );
    this.setState({ cast: response.data.cast });
  }
  render() {
    return (
      <ul>
        {this.state.cast.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    );
  }
}
