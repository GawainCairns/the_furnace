import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  
  // Update state on input change
  const updateUsername = (event) => {
    setUsername(event.target.value);
  }
  const updatePassword = (event) => {
    setPassword(event.target.value);
  }
  const updateConPassword = (event) => {
    setConPassword(event.target.value);
  }
  const updateEmail = (event) => {
    setEmail(event.target.value);
  }
  const updatePhone = (event) => {
    setPhone(event.target.value);
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
    if (password !== conPassword) {
      newError.conPassword = "Passwords do not match.";
    }
    if (email.length === 0) {
      newError.email = "Email is required.";
    }
    if (phone.length === 0) {
      newError.phone = "Phone number is required.";
    }
    setErrors(newError);
    setIsValid(Object.keys(newError).length === 0);
  }, [username, password, conPassword, email, phone]);
  
  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      console.log("Registration successful!");
    } else {
      console.log("Form validation failed.");
    }
  }

  // Navigation
  const loginPage = () => {
    navigate("/Login");
  } 

  return (
    <div>
      <Navbar />
      <main>
        <div className="card-register">
          <h1 className="card-title">Register</h1>
          <form className="form-login" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="input"
              id="username" 
              placeholder="Username" 
              required value={username} onChange={updateUsername} />
            <input 
              type="password" 
              className="input"
              id="password" 
              placeholder="Password" 
              required value={password} onChange={updatePassword} />
            <input 
              type="password" 
              className="input"
              id="conPassword" 
              placeholder="Confirm Password" 
              required value={conPassword} onChange={updateConPassword} />
            <input 
              type="text" 
              className="input"
              id="email" 
              placeholder="Email" 
              required value={email} onChange={updateEmail} />
            <input 
              type="text" 
              className="input"
              id="phone" 
              placeholder="Phone" 
              required value={phone} onChange={updatePhone} />
            <button type="submit" disabled={!isValid} className="btn-auth">Register</button>
            <button onClick={loginPage} className="btn-auth">Login</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Register;