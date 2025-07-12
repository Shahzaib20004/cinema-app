import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      await loginUser(credentials);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
