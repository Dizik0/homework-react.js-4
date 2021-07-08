import { Component } from "react";

import CastApi from "../GetAPI/CastApi";
import style from "./Cast.module.scss";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const response = await CastApi(this.props.match.params.movieId);
    this.setState({ cast: response.data.cast });
  }
  render() {
    let cast;
    if (this.state.cast.length === 0) {
      cast = (
        <p className={style.noInformationText}>No information on authors</p>
      );
    } else {
      cast = this.state.cast.map(({ profile_path, id, name, character }) => (
        <li key={id} className={style.autorItem}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : "https://diemmecaffe.ru/images/image-not-found.png"
            }
            alt="author"
            className={style.autorImg}
          />
          <h3 className={style.autorName}>{name}</h3>
          {character && <p className={style.autorName}>{character}</p>}
        </li>
      ));
    }
    return <ul className={style.castList}>{cast}</ul>;
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
