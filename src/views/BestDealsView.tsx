import React from "react";
import BestDeals from "../components/BestDeals";
import "../styles/BestDeals.css";

const BestDealsView: React.FC = () => {
  return (
    <>
      <div id="container2" data-testid="games-header">
        <div className="head">
          <div className="head-thumb">
            <h2>Thumbnail</h2>
          </div>
          <div className="head-title">
            <h2>Title</h2>
          </div>
          <div className="head-price">
            <h2>Price</h2>
          </div>
          <div className="head-stores">
            <h2>Store</h2>
          </div>
        </div>
      </div>
      <BestDeals />
    </>
  );
};

export default BestDealsView;
