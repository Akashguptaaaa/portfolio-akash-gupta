import { useState } from "react";
import Logo from "./Logo";

function Navigation({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" className="logo-link">
            <Logo />
            <span>Akash Ashok</span>
          </a>
        </div>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a className="nav-link" onClick={() => handleNavClick("home")}>Home</a>
          <a className="nav-link" onClick={() => handleNavClick("about")}>About</a>
          <a className="nav-link" onClick={() => handleNavClick("experience")}>Experience</a>
          <a className="nav-link" onClick={() => handleNavClick("contact")}>Contact</a>
          <a className="nav-link" onClick={() => handleNavClick("resume")}>Resume</a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
