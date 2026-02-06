import React from "react";
import { useNavigate } from "react-router-dom";
import {Logo} from './logos.jsx';

function Navbar() {
  const navigate = useNavigate();

  // Navigation
  const homePage = () => {
    navigate("/home");
  }
  const notesPage = () => {
    navigate("/notes");
  }
  const calendarPage = () => {
    navigate("/calendar");
  }
  const loginPage = () => {
    navigate("/login");
  }
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo" onClick={homePage}>
          <Logo className="navbar-logo-icon" height={40} width={40} color="var(--primary)"/>
          <h1 className="navbar-title">The Furnace</h1>
        </div>
        <a className="navbar-links" onClick={notesPage}>Notes</a>
        <a className="navbar-links" onClick={calendarPage}>Calendar</a>
        <a className="navbar-links-right" onClick={loginPage}>Login</a>
      </nav>
    </header>
  );
}

export default Navbar;  