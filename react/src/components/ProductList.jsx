import React from 'react';
import '../assets/css/productlist.css';
import cakeImage from '../assets/photos/cake.png';
import cupcakesImage from '../assets/photos/cupcake.jpg';
import cookiesImage from '../assets/photos/cookie.jpg';

const products = [
  {
    id: 1,
    name: "Custom Cakes",
    description: "Your dream cake, crafted to perfection",
    image: cakeImage,
    customizationOptions: ["Flavor", "Frosting", "Toppings", "Shape"]
  },
  {
    id: 2,
    name: "Cupcakes",
    description: "Delightful cupcakes for any occasion",
    image: cupcakesImage,
    customizationOptions: ["Flavor", "Frosting", "Sprinkles", "Toppers"]
  },
  {
    id: 3,
    name: "Cookies",
    description: "Irresistible cookies, just the way you like",
    image: cookiesImage,
    customizationOptions: ["Flavor", "Add-ins", "Icing", "Shape"]
  },
  {
    id: 4,
    name: "Brownies",
    description: "Rich, fudgy brownies tailored to your taste",
    image: cakeImage,
    customizationOptions: ["Flavor", "Toppings", "Filling", "Cut"]
  }
];


const ProductList = () => {
  const whatsappNumber = "6380255375"; // Replace with your actual WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="product-list">
      <h2>Our Customizable Treats</h2>
      <p className="customization-intro">Explore our range of delicious treats. Each item can be personalized to your liking. Contact us to discuss your custom order!</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="customization-options">
              <h4>Customization Ideas:</h4>
              <ul>
                {product.customizationOptions.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-button">
              Contact to Customize
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;