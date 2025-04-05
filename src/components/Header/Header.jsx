import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <div className={css.headerCont}>
        <Logo />
        <nav className={css.navMenu}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
