import React, { useState, useEffect } from 'react';
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
    <nav className="fixed top-16 md:top-24 left-0 right-0 bg-white bg-opacity-90 h-[70px] flex justify-center items-center text-lg z-50 shadow-md rounded-lg transition-all duration-300">
      <div className="flex justify-between items-center w-full max-w-[1500px] px-5 md:px-12 h-20">
        <div className="flex items-center">
          <h1 className="text-pink-400 text-4xl md:text-5xl font-['Pacifico'] cursor-pointer shadow-sm relative hidden md:block">
            <span className="she">She</span>
            <span className="bakes">Bakes</span>
            <span className="absolute -top-2.5 -right-5 text-2xl animate-[flutter_2s_ease-in-out_infinite]">🦋</span>
          </h1>
          <img src={logo} alt="SheBakes Logo" className="h-10 w-auto block md:hidden" />
        </div>
        
        {isMobile && (
          <div className="cursor-pointer" onClick={toggleMenu}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        )}
        
        <ul className={`${
          isMobile 
            ? `flex flex-col w-full absolute top-20 transition-all duration-500 bg-white bg-opacity-90 z-10 
              ${isMenuOpen ? 'left-0 opacity-100' : '-left-full opacity-0'}`
            : 'flex items-center'
        }`}>
          <li className="px-4 py-4 md:py-0">
            <a 
              href="#cakes" 
              className="flex items-center text-gray-800 font-semibold hover:text-pink-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {isMobile ? <FaBirthdayCake className="text-2xl" /> : "Cakes"}
            </a>
          </li>
          <li className="px-4 py-4 md:py-0">
            <a 
              href="#brownies" 
              className="flex items-center text-gray-800 font-semibold hover:text-pink-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {isMobile ? <FaCookie className="text-2xl" /> : "Brownies"}
            </a>
          </li>
          <li className="px-4 py-4 md:py-0">
            <a 
              href="#cupcakes" 
              className="flex items-center text-gray-800 font-semibold hover:text-pink-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {isMobile ? <FaMugHot className="text-2xl" /> : "Cupcakes"}
            </a>
          </li>
        </ul>
        
        <button className="bg-pink-400 text-white font-bold py-2.5 px-5 rounded-full cursor-pointer text-base transition-all duration-300 shadow hover:bg-pink-500 hover:-translate-y-0.5 hover:shadow-lg">
          Customize
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// Add this to your tailwind.config.js file to support the butterfly animation:
/*
module.exports = {
  // ... other config
  theme: {
    extend: {
      keyframes: {
        flutter: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(5deg)' },
          '75%': { transform: 'translateY(5px) rotate(-5deg)' },
        }
      },
      animation: {
        'flutter': 'flutter 2s ease-in-out infinite',
      },
    },
  },
}
*/