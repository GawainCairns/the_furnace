import React from "react";
import { Logo2 } from "./logos";
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();

  // Navigation
  const aboutPage = () => {
    navigate("/about");
  }
  return (
    <footer>
      <div className="footer">
        <div className="footer-text">
          <p>© 2024 The Furnace. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a className="footer-link" onClick={aboutPage}>About</a>
        </div>
        <Logo2 width={32} height={32} color="blue" />
      </div>
    </footer>
  );
}

export default Footer;