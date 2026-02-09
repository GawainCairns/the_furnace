import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';


function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Update state on input change
  const updateUsername = (event) => {
    setUsername(event.target.value);
  }
  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  // Form validation
  useEffect(() => {
      const newError = {};
      if (username.length === 0) {
        newError.username = "Username is required.";
      }
      if (password.length === 0) {
        newError.password = "Password is required.";
      }
      setErrors(newError);
      setIsValid(Object.keys(newError).length === 0);
    }, [username, password]);

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log("Login successful!");
    } else {
      console.log("Form validation failed.");
    }
  }

  // Navigation
  const registerPage = () => {
    navigate("/Register");
  }
  return (
    <div>
      <Navbar />
      <main>
        <div className="card-login">
          <h1 className="card-title text-3xl">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="input"
              id="Username"
              placeholder="Username" 
              required value={username} onChange={updateUsername} />
            <input 
              type="password" 
              className="input"
              id="Password"
              placeholder="Password" 
              required value={password} onChange={updatePassword} />
            <button type="submit" disabled={!isValid} className="btn flex w-full justify-center">Login</button>
            <button onClick={registerPage} className="btn flex w-full justify-center">Register</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;