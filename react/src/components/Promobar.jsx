import React from 'react';
import '../assets/css/promobar.css';

const PromoBar = () => {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="promo-bar">
      <div className="promo-content">
        <div className="highlight-container">
          <span className="highlight blink">15% OFF</span>
        </div>
        <span className="promo-text">Online Baking Workshop</span>
      </div>
      <div className="promo-buttons">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="promo-button book-now">
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
};

export default PromoBar;