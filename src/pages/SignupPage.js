import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await signupUser(formData);
      navigate("/login");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
