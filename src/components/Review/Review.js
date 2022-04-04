import React from "react";
import "./Review.css";
import { StarIcon } from '@heroicons/react/solid'

const Review = (props) => {

  const { review } = props;
  const { name, image, text, rating } = review;
 
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img className="card-img-top" src={image} alt = {name}/>
        <div className="card-body text-center">
          <h2>{name}</h2>
          <p className="card-text">{text}</p>
          <StarIcon className="icon"></StarIcon>
          <h5>Rating : {rating}</h5>
        </div>
      </div>
    </div>
  );
};

export default Review;
