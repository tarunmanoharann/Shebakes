import React from 'react';
import '../assets/css/footer.css';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailAddress = "info@shebakes.com";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About SheBakes</h3>
          <p>Crafting delicious, custom-made cakes and treats for all your special occasions.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@shebakes.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Cake Street, Sweetville, CA 90210</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href={`mailto:${emailAddress}`} className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SheBakes. All rights reserved.</p>
        <p>Designed and Created by <a href="https://onevision-delta.vercel.app/" target="_blank" rel="noopener noreferrer">Onevision</a></p>
      </div>
    </footer>
  );
};

export default Footer;