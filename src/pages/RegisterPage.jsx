import "../styles/register.css";

function Register() {
  return (
    <main className="authPage">
      <h2>Register</h2>
 
    <form >
        <div>
          <input type="email" placeholder="Email" />
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>

        <div>
          <input type="password" placeholder="Repeat password" />
        </div>

        <br />

        <button type="submit">Register</button>
      </form>
    </main>
  );

}
export default Register;


