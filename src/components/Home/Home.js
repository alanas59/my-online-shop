import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  const handleAllReviews = () => {
    navigate("/reviews");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <h1 className="mb-3">Choose Your Best Camera</h1>
            <p>
              Measurement and control sensors are playing an increasingly
              important role in fields including robotics and industrial
              machinery, which are advancing day by day. In the case of encoders
              in these fields, higher precision, higher functionality and higher
              reliability are constantly in demand.
            </p>
            <button className="btn btn-primary">Live Demo</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-psd/camera-mockup_1310-717.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row mt-1">
        <h1 className="text-center my-5">Customer Reviews(3)</h1>
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <div className="text-center mb-4">
        <button onClick={handleAllReviews} className="btn btn-primary mx-auto">
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
