import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/defaultproducts.css';

const productCategories = [
  {
    category: "Cakes",
    products: [
      { id: 1, name: "Chocolate Delight", image: "../assets/placeholder.jpg", soldLast10Days: 25, originalPrice: 35, discountedPrice: 30 },
      { id: 2, name: "Vanilla Dream", image: "../assets/placeholder.jpg", soldLast10Days: 20, originalPrice: 32, discountedPrice: 28 },
      { id: 3, name: "Strawberry Bliss", image: "../assets/placeholder.jpg", soldLast10Days: 18, originalPrice: 34, discountedPrice: 29 },
      { id: 4, name: "Red Velvet", image: "../assets/placeholder.jpg", soldLast10Days: 22, originalPrice: 36, discountedPrice: 31 },
      { id: 5, name: "Lemon Zest", image: "../assets/placeholder.jpg", soldLast10Days: 15, originalPrice: 33, discountedPrice: 28 },
      { id: 6, name: "Carrot Cake", image: "../assets/placeholder.jpg", soldLast10Days: 17, originalPrice: 35, discountedPrice: 30 },
      { id: 7, name: "Black Forest", image: "../assets/placeholder.jpg", soldLast10Days: 21, originalPrice: 38, discountedPrice: 33 }
    ]
  },
  {
    category: "Cupcakes",
    products: [
      { id: 1, name: "Chocolate Chip", image: "../assets/placeholder.jpg", soldLast10Days: 40, originalPrice: 3.5, discountedPrice: 3 },
      { id: 2, name: "Vanilla Swirl", image: "../assets/placeholder.jpg", soldLast10Days: 35, originalPrice: 3.2, discountedPrice: 2.8 },
      { id: 3, name: "Blueberry Burst", image: "../assets/placeholder.jpg", soldLast10Days: 30, originalPrice: 3.4, discountedPrice: 2.9 },
      { id: 4, name: "Caramel Delight", image: "../assets/placeholder.jpg", soldLast10Days: 38, originalPrice: 3.6, discountedPrice: 3.1 },
      { id: 5, name: "Mint Chocolate", image: "../assets/placeholder.jpg", soldLast10Days: 28, originalPrice: 3.3, discountedPrice: 2.8 },
      { id: 6, name: "Red Velvet", image: "../assets/placeholder.jpg", soldLast10Days: 33, originalPrice: 3.5, discountedPrice: 3 },
      { id: 7, name: "Lemon Meringue", image: "../assets/placeholder.jpg", soldLast10Days: 25, originalPrice: 3.4, discountedPrice: 2.9 }
    ]
  },
  {
    category: "Cookies",
    products: [
      { id: 1, name: "Chocolate Chip", image: "../assets/placeholder.jpg", soldLast10Days: 60, originalPrice: 2.5, discountedPrice: 2 },
      { id: 2, name: "Oatmeal Raisin", image: "../assets/placeholder.jpg", soldLast10Days: 45, originalPrice: 2.3, discountedPrice: 1.8 },
      { id: 3, name: "Peanut Butter", image: "../assets/placeholder.jpg", soldLast10Days: 50, originalPrice: 2.4, discountedPrice: 1.9 },
      { id: 4, name: "Sugar Cookie", image: "../assets/placeholder.jpg", soldLast10Days: 55, originalPrice: 2.2, discountedPrice: 1.7 },
      { id: 5, name: "Double Chocolate", image: "../assets/placeholder.jpg", soldLast10Days: 48, originalPrice: 2.6, discountedPrice: 2.1 },
      { id: 6, name: "White Chocolate Macadamia", image: "../assets/placeholder.jpg", soldLast10Days: 42, originalPrice: 2.7, discountedPrice: 2.2 },
      { id: 7, name: "Snickerdoodle", image: "../assets/placeholder.jpg", soldLast10Days: 47, originalPrice: 2.3, discountedPrice: 1.8 }
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
            <img src={product.image} alt={product.name} />
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