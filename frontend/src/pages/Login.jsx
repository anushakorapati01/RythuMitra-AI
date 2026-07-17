import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  // Stores the mobile number
  const [mobile, setMobile] = useState("");

  // Stores the password
  const [password, setPassword] = useState("");

  // Used to navigate to another page
  const navigate = useNavigate();

  // Runs when Login button is clicked
  const handleLogin = () => {

    if (mobile === "" || password === "") {
      alert("Please enter Mobile Number and Password");
      return;
    }

    alert("Login Successful!");

    // Go to Dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>🌾 Farmer Login</h1>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;