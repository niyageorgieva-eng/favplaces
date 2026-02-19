import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  //!!!


function Login() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(""); 


    function handleSubmit(e) {
      e.preventDefault();   // stop refresh

      // console.log(email, password);

    //     fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log("SERVER RESPONSE:", data);
    // });

fetch(`http://localhost:3001/users?email=${email}`)
  .then(res => res.json())
  .then(users => {
    if (users.length === 0) {
      setError("Wrong email or password");
      return;
    }

    const user = users[0];

    if (user.password !== password) {
      setError("Wrong email or password");
      return;
    }

    // success
    localStorage.setItem("currentUser", JSON.stringify(user)); // brouser memory
    navigate("/places");
  });

    }


      return (
        
        <main className="authPage">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>                                  {/*  !!!!! */}
            <div>
              {/* <input type="email" placeholder="Email" /> */}
              <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
              {/* <input type="password" placeholder="Password" /> */}
              <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </div>


            <br />

            <button type="submit">Login</button>
            {error && <p className="authError">{error}</p>}
          </form>  
          
        </main>
      );
}
 
export default Login;
