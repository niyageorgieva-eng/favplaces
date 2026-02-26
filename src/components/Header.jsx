import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDisplayName } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import { endSession } from "../auth/auth";
import { getCurrentUser } from "../auth/auth";

// function Header() {
function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  function handleLogout() {
  endSession();          // clean cookie + localStorage
  setCurrentUser(null);  // remove username
  navigate("/");         // Return (login/register)
}

  // useEffect(() => { 
  //   const raw = localStorage.getItem("currentUser");
  //   setCurrentUser(raw ? JSON.parse(raw) : null);
  // }, []);

  // useEffect(() => {
  // const loadUser = () => {
  //   setCurrentUser(getCurrentUser());
  // };
  
useEffect(() => {
  const loadUser = () => {
    const raw = localStorage.getItem("currentUser");
    setCurrentUser(raw ? JSON.parse(raw) : null);
  };

  loadUser();
  window.addEventListener("auth-changed", loadUser);

  return () => window.removeEventListener("auth-changed", loadUser);
}, []);
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
    <div className="profileInfo">
<span className="profileIcon">
  <svg
    xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" fill="currentColor" >
    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
  </svg>
</span>

        {currentUser && (
          <span className="profileName">
            {getDisplayName(currentUser)}
          </span>
        )}
      </div>
  

   <div className="profileMenu">
    {/* <button>Logout</button> */}
    <button onClick={handleLogout}>Logout</button>
  </div> 
   </div>
</li>

        </ul>
      </nav>
    </header>
  );
}
export default Header;