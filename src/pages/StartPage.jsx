import "../styles/start.css"; 
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <main className="startGate">
 
      <h2>Welcome to <span className="wild"><br />&nbsp;Wild, travel child</span></h2>
      <p>Please log in or create an account:</p>

<br />

<button onClick={() => navigate("/login")}>
  Log in
</button>

<br /><br />

<button onClick={() => navigate("/register")}>
  Register
</button>

    </main>
  );
}