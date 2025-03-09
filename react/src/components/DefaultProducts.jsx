// src/components/DefaultProducts.js
import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/defaultproducts.css';


const productCategories = [
  {
    category: "Cakes",
    products: [
      { id: 1, name: "Chocolate Delight", image:"../assets/photos/cake.png", soldLast10Days: 25, originalPrice: 35, discountedPrice: 30 },
      { id: 2, name: "Vanilla Dream", image: "vanilla-cake.jpg", soldLast10Days: 20, originalPrice: 32, discountedPrice: 28 },
      { id: 3, name: "Strawberry Bliss", image: "strawberry-cake.jpg", soldLast10Days: 18, originalPrice: 34, discountedPrice: 29 },
      { id: 4, name: "Red Velvet", image: "red-velvet-cake.jpg", soldLast10Days: 22, originalPrice: 36, discountedPrice: 31 },
      { id: 5, name: "Lemon Zest", image: "lemon-cake.jpg", soldLast10Days: 15, originalPrice: 33, discountedPrice: 28 },
      { id: 6, name: "Carrot Cake", image: "carrot-cake.jpg", soldLast10Days: 17, originalPrice: 35, discountedPrice: 30 },
      { id: 7, name: "Black Forest", image: "black-forest-cake.jpg", soldLast10Days: 21, originalPrice: 38, discountedPrice: 33 },
      { id: 8, name: "Pineapple Upside Down", image: "pineapple-cake.jpg", soldLast10Days: 14, originalPrice: 34, discountedPrice: 29 },
      { id: 9, name: "Coconut Cream", image: "coconut-cream-cake.jpg", soldLast10Days: 16, originalPrice: 36, discountedPrice: 31 },
      { id: 10, name: "Tiramisu", image: "tiramisu-cake.jpg", soldLast10Days: 19, originalPrice: 37, discountedPrice: 32 },
      { id: 11, name: "German Chocolate", image: "german-chocolate-cake.jpg", soldLast10Days: 13, originalPrice: 35, discountedPrice: 30 },
      { id: 12, name: "Marble Cake", image: "marble-cake.jpg", soldLast10Days: 23, originalPrice: 33, discountedPrice: 28 },
    ]
  },
  {
    category: "Cupcakes",
    products: [
      { id: 1, name: "Chocolate Chip", image: "chocolate-chip-cupcake.jpg", soldLast10Days: 40, originalPrice: 3.5, discountedPrice: 3 },
      { id: 2, name: "Vanilla Swirl", image: "vanilla-swirl-cupcake.jpg", soldLast10Days: 35, originalPrice: 3.2, discountedPrice: 2.8 },
      { id: 3, name: "Blueberry Burst", image: "blueberry-cupcake.jpg", soldLast10Days: 30, originalPrice: 3.4, discountedPrice: 2.9 },
      { id: 4, name: "Caramel Delight", image: "caramel-cupcake.jpg", soldLast10Days: 38, originalPrice: 3.6, discountedPrice: 3.1 },
      { id: 5, name: "Mint Chocolate", image: "mint-chocolate-cupcake.jpg", soldLast10Days: 28, originalPrice: 3.3, discountedPrice: 2.8 },
      { id: 6, name: "Red Velvet", image: "red-velvet-cupcake.jpg", soldLast10Days: 33, originalPrice: 3.5, discountedPrice: 3 },
      { id: 7, name: "Lemon Meringue", image: "lemon-meringue-cupcake.jpg", soldLast10Days: 25, originalPrice: 3.4, discountedPrice: 2.9 },
      { id: 8, name: "Peanut Butter Cup", image: "peanut-butter-cupcake.jpg", soldLast10Days: 37, originalPrice: 3.7, discountedPrice: 3.2 },
      { id: 9, name: "Coconut Dream", image: "coconut-cupcake.jpg", soldLast10Days: 22, originalPrice: 3.3, discountedPrice: 2.8 },
      { id: 10, name: "Strawberry Shortcake", image: "strawberry-shortcake-cupcake.jpg", soldLast10Days: 31, originalPrice: 3.6, discountedPrice: 3.1 },
      { id: 11, name: "Cookies and Cream", image: "cookies-cream-cupcake.jpg", soldLast10Days: 36, originalPrice: 3.5, discountedPrice: 3 },
      { id: 12, name: "Salted Caramel", image: "salted-caramel-cupcake.jpg", soldLast10Days: 29, originalPrice: 3.4, discountedPrice: 2.9 },
    ]
  },
  {
    category: "Cookies",
    products: [
      { id: 1, name: "Chocolate Chip", image: "chocolate-chip-cookie.jpg", soldLast10Days: 60, originalPrice: 2.5, discountedPrice: 2 },
      { id: 2, name: "Oatmeal Raisin", image: "oatmeal-raisin-cookie.jpg", soldLast10Days: 45, originalPrice: 2.3, discountedPrice: 1.8 },
      { id: 3, name: "Peanut Butter", image: "peanut-butter-cookie.jpg", soldLast10Days: 50, originalPrice: 2.4, discountedPrice: 1.9 },
      { id: 4, name: "Sugar Cookie", image: "sugar-cookie.jpg", soldLast10Days: 55, originalPrice: 2.2, discountedPrice: 1.7 },
      { id: 5, name: "Double Chocolate", image: "double-chocolate-cookie.jpg", soldLast10Days: 48, originalPrice: 2.6, discountedPrice: 2.1 },
      { id: 6, name: "White Chocolate Macadamia", image: "white-chocolate-macadamia-cookie.jpg", soldLast10Days: 42, originalPrice: 2.7, discountedPrice: 2.2 },
      { id: 7, name: "Snickerdoodle", image: "snickerdoodle-cookie.jpg", soldLast10Days: 47, originalPrice: 2.3, discountedPrice: 1.8 },
      { id: 8, name: "Gingerbread", image: "gingerbread-cookie.jpg", soldLast10Days: 40, originalPrice: 2.5, discountedPrice: 2 },
      { id: 9, name: "Lemon Crinkle", image: "lemon-crinkle-cookie.jpg", soldLast10Days: 38, originalPrice: 2.4, discountedPrice: 1.9 },
      { id: 10, name: "Almond Biscotti", image: "almond-biscotti-cookie.jpg", soldLast10Days: 35, originalPrice: 2.8, discountedPrice: 2.3 },
      { id: 11, name: "Coconut Macaroon", image: "coconut-macaroon-cookie.jpg", soldLast10Days: 43, originalPrice: 2.6, discountedPrice: 2.1 },
      { id: 12, name: "Thumbprint", image: "thumbprint-cookie.jpg", soldLast10Days: 41, originalPrice: 2.5, discountedPrice: 2 },
    ]
  }
];

const ProductRow = ({ category, products }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScroll();

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleOrderClick = (product) => {
    const whatsappNumber = "6380255375";
    const message = encodeURIComponent(`I'd like to order the ${product.name} for $${product.discountedPrice}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  // Duplicate products to create a seamless loop
  const loopedProducts = [...products, ...products];

  return (
    <div className="product-row">
      <h3>{category}</h3>
      <div 
        className="product-scroll" 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {loopedProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.soldLast10Days} sold in last 10 days</p>
            <div className="price">
              <span className="original-price">${product.originalPrice}</span>
              <span className="discounted-price">${product.discountedPrice}</span>
            </div>
            <button className="order-button" onClick={() => handleOrderClick(product)}>Place Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const DefaultProducts = () => {
  return (
    <section className="default-products">
      <div className="tagline">
        <h2>Celebrate Life's Sweet Moments With Us</h2>
        <p>From festivals to everyday joys, we've got the perfect treat for every occasion</p>
      </div>
      <h3 className="section-title">Our Popular Products</h3>
      {productCategories.map((category, index) => (
        <ProductRow key={index} category={category.category} products={category.products} />
      ))}
    </section>
  );
};

export default DefaultProducts;