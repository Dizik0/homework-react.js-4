import { Component } from "react";

import CastApi from "../GetAPI/CastApi";
import style from "./Cast.module.scss";
import imgNotFound from "../../img/123588579.jpg";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await CastApi(movieId);
    this.setState({ cast: response.data.cast });
  }
  render() {
    const { cast } = this.state;
    let casts;

    if (cast.length === 0) {
      casts = (
        <li className={style.noInformationText}>No information on authors</li>
      );
    } else {
      casts = cast.map(({ profile_path, id, name, character }) => (
        <li key={id} className={style.autorItem}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                : imgNotFound
            }
            alt="author"
            className={style.autorImg}
          />
          <h3 className={style.autorName}>{name}</h3>
          {character && <p className={style.autorName}>{character}</p>}
        </li>
      ));
    }
    return <ul className={style.castList}>{casts}</ul>;
  }
}
