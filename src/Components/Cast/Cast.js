import { Component } from "react";

import CastApi from "../GetAPI/CastApi";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const response = await CastApi(this.props.match.params.movieId);
    this.setState({ cast: response.data.cast });
  }
  render() {
    return (
      <ul>
        {this.state.cast.map(({ profile_path, id, name }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt="author"
              />
            ) : (
              <img
                src="https://diemmecaffe.ru/images/image-not-found.png"
                alt="not found"
              />
            )}
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    );
  }
}

// {
//   profile_path ? (
//     <img
//       src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
//       alt="author"
//     />
//   ) : (
//     <img
//       src="https://diemmecaffe.ru/images/w200/image-not-found.png"
//       alt="not found"
//     />
//   );
// }

/* {(profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt="author"
              />
            )) || (
              <img
                src=" https://diemmecaffe.ru/images/w200/image-not-found.png"
                alt="not found"
              />
            )} */

/* https://diemmecaffe.ru/images/w200/image-not-found.png */

// let img;
// if (
//   this.state.cast.map(({ profile_path }) =>
//     this.setState({ urlImg: profile_path })
//   )
// ) {
//   img = (
//     <img
//       src="https://diemmecaffe.ru/images/w200/image-not-found.png"
//       alt="not found"
//     />
//   );
// } else {
//   img = (
//     <img
//       src={`https://image.tmdb.org/t/p/w200/${this.state.urlImg}`}
//       alt="author"
//     />
//   );
// }
