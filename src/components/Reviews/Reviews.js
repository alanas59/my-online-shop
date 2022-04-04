import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">What our customers say!</h2>
      <div className="row">
        {
            reviews.map((review) => (
            <Review 
            key={review.id} 
            review={review}></Review>
            ))
        }
      </div>
    </div>
  );
};

export default Reviews;
