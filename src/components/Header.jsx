import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <section>
        <h1 className="title">wild, travel child</h1>
      </section>

      <nav>
        <ul>
          <li>
            <NavLink to="/places" className={({ isActive }) => (isActive ? "active" : "")}>
              Places
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
