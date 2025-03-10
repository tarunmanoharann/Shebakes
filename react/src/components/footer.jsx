import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailAddress = "info@shebakes.com";

  return (
    <footer className="bg-pink-400 text-white py-10 px-5">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 lg:w-1/4 min-w-[200px] mb-5 pr-4">
          <h3 className="text-lg font-semibold mb-4">About SheBakes</h3>
          <p>Crafting delicious, custom-made cakes and treats for all your special occasions.</p>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 min-w-[200px] mb-5 pr-4">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#home" className="text-white hover:underline">Home</a></li>
            <li className="mb-2"><a href="#about" className="text-white hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#products" className="text-white hover:underline">Our Products</a></li>
            <li className="mb-2"><a href="#contact" className="text-white hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 min-w-[200px] mb-5 pr-4">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Email: info@shebakes.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Address: 123 Cake Street, Sweetville, CA 90210</p>
        </div>
        
        <div className="w-full md:w-1/2 lg:w-1/4 min-w-[200px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-10 h-10 text-pink-400 bg-white rounded-full border-2 border-white transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-10 h-10 text-pink-400 bg-white rounded-full border-2 border-white transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
            >
              <FaWhatsapp />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-10 h-10 text-pink-400 bg-white rounded-full border-2 border-white transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
            <a 
              href={`mailto:${emailAddress}`}
              className="flex items-center justify-center w-10 h-10 text-pink-400 bg-white rounded-full border-2 border-white transition-all duration-300 hover:bg-pink-500 hover:text-white hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-5 pt-5 border-t border-white border-opacity-30">
        <p className="my-1">&copy; 2024 SheBakes. All rights reserved.</p>
        <p className="my-1">
          Designed and Created by <a href="https://onevision-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-pink-100">Onevision</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;