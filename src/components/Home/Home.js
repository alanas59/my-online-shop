import React from "react";
import useReviews from "../../hooks/useReviews";
import "./Home.css";
const Home = () => {
  
  const [reviews,setReviews] = useReviews();

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
      
    </div>
  );
};

export default Home;
