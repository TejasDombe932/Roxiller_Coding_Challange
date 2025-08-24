import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-container">
      <h2>Store-One</h2>
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <FaStar
              key={index}
              size={30}
              color={currentRating <= rating ? "#ffc107" : "#e4e5e9"}
              onClick={() => setRating(currentRating)}
              style={{ cursor: "pointer", marginRight: "5px" }}
            />
          );
        })}
      </div>
      <p>Your Rating: {rating} / 5</p>
    </div>
  );
};

export default Rating;
