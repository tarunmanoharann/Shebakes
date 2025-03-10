// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/photos/shebakes.jpg';
import { FaBirthdayCake, FaCookie, FaMugHot } from 'react-icons/fa'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>
            <span className="she">She</span>
            <span className="bakes">Bakes</span>
            <span className="butterfly">🦋</span>
          </h1>
          <img src={logo} alt="SheBakes Logo" className="logo-img" />
        </div>
        {isMobile && (
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        )}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#cakes" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              {isMobile ? <FaBirthdayCake /> : "Cakes"}
            </a>
          </li>
          <li className="nav-item">
            <a href="#brownies" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              {isMobile ? <FaCookie /> : "Brownies"}
            </a>
          </li>
          <li className="nav-item">
            <a href="#cupcakes" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              {isMobile ? <FaMugHot /> : "Cupcakes"}
            </a>
          </li>
        </ul>
        <button className="explore-button">
          Customize
        </button>
      </div>
    </nav>
  );
};

export default Navbar;