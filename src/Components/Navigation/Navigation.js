import { NavLink } from "react-router-dom";

import style from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={style.boxNav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink
            exact
            to="/"
            className={style.navigation}
            activeClassName={style.active}
          >
            Home
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/movies"
            className={style.navigation}
            activeClassName={style.active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
