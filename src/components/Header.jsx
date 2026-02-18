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
          <li className="profile">
  <div className="profileWrap">
<span className="profileIcon">
  <svg
    xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" fill="currentColor" >
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
</span>


   <div className="profileMenu">
    <button>Logout</button>
  </div> 
   </div>
</li>

        </ul>
      </nav>
    </header>
  );
}
export default Header;