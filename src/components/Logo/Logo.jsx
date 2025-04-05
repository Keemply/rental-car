import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
export default function Logo() {
  return (
    <NavLink to="/">
      <div>
        <svg className={css.logoCont}>
          <use
            className={css.svgLogo}
            href="/src/assets/RentalCar.svg#logo"
          ></use>
        </svg>
      </div>
    </NavLink>
  );
}
