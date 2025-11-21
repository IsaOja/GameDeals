import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeView.css";

const HomeView: React.FC = () => {
  return (
    <div className="content">
      <div className="container1">
        <Link to="/bestdeals" className="best-deals">
          <div className="best-deals-title">
            <h2>Best Deals</h2>
          </div>
          <div className="best-deals-button">
            <h3>Click me</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
