import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
           <h2 className="my-4 text-center">My line chart</h2>
           <MyLineChart></MyLineChart>
        </div>
        <div className="col-lg-6">
           <h2 className="my-4 text-center">My bar chart</h2>
           <MyBarChart></MyBarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
