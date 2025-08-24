import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let url = "";
      if (email === "admin@example.com") {
        // Call admin login endpoint
        url = "http://localhost:4000/admin/login";
      } else {
        // Call user login endpoint
        url = "http://localhost:4000/auth/login";
      }

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (email === "admin@example.com") {
          navigate("/Admin"); // Admin dashboard
        } else if (data.user) {
          navigate("/User"); // User dashboard
        } else {
          alert(data.message || "Invalid credentials");
        }
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="register-link">
        Don’t have an account?{" "}
        <span onClick={() => navigate("/register")} className="link">
          Register here
        </span>
      </p>
    </div>
  );
}

export default Login;
