import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Hem</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>Om oss</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/movies"}>Filmer</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Varukorg</NavLink>
        </li>
      </ul>
    </nav>
  );
};
