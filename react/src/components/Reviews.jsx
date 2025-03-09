// src/components/Reviews.jsx
import React, { useState, useEffect } from 'react';
import '../assets/css/reviews.css';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely amazing! The cake was not only beautiful but delicious too. SheBakes made my daughter's birthday extra special."
  },
  {
    id: 2,
    name: "John D.",
    rating: 5,
    text: "Fantastic service and incredible attention to detail. The custom design was exactly what we wanted. Highly recommend!"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "The cupcakes were a hit at our office party. Fresh, flavorful, and gorgeously decorated. Will definitely order again!"
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    text: "SheBakes went above and beyond for our wedding cake. It was a showstopper and tasted even better than it looked!"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className="reviews-carousel">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;