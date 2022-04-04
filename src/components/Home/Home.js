import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from '../Review/Review';
import "./Home.css";
const Home = () => {

  const [reviews,setReviews] = useReviews();
  const navigate = useNavigate();

  const handleAllReviews = () =>{
     navigate('/reviews');
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <h1>Your Best Camera</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptas, ut vitae exercitationem voluptatem reprehenderit
              quisquam! Quos impedit quisquam quas magnam maxime. Ea perferendis
              itaque cupiditate rem quaerat veniam omnis.
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
        {
          reviews.slice(0,3).map(review => <Review
          key = {review.id}
          review = {review}
          ></Review>)
        }
      </div>
      <div className="text-center mb-4">
      <button
       onClick={handleAllReviews}
       className="btn btn-primary mx-auto">See All Reviews</button>
      </div>
      
    </div>
  );
};

export default Home;
