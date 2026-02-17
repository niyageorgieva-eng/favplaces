import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <section>
        <h1 className="title">wild, travel child</h1>
      </section>

      <nav>
        <ul>
          
            <li><NavLink to="/places">Places</NavLink></li>
              

          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;