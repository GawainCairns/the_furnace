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
      <nav className="Nav">
        <div className="Navbar">
          <div className="Nav-Brand" onClick={homePage}>
            <Logo className="Nav-Logo" height={40} width={40}/>
            <h1 className="Nav-Title">The Furnace</h1>
          </div>
          <div className="Nav-Links">
            <a className="Nav-Link" onClick={notesPage}>Notes</a>
            <a className="Nav-Link" onClick={calendarPage}>Calendar</a>
            <a className="Nav-Link" onClick={loginPage}>Login</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;  