import { useState } from "react";
import "./style.css";

function Auth({ setIsLoggedIn, setShowAuth,setNavSelection }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Registration Successful");
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      setIsLoggedIn(true);
      setShowAuth(false);
      setNavSelection("Home");

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
        
      <form
        className="box"
        onSubmit={isLogin ? handleLogin : handleRegister}
      >
        <div className="header">
        <div>🍽️</div>
        <h1 className="name-text"> Meal Planner</h1>
        </div>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button>{isLogin ? "Login" : "Register"}</button>

        <p className="text">
          {isLogin ? "No account?" : "Already registered?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Register" : " Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
