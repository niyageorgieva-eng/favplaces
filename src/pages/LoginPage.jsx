import "../styles/login.css";

function Login() {


  return (
    <main className="authPage">
      <h2>Login</h2>
        <form >
        <div>
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>


        <br />

        <button type="submit">Login</button>
      </form>  
      
    </main>
  );
}
 
export default Login;
