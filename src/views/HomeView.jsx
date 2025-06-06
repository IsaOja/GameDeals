import { Link } from "react-router-dom";
import "./HomeView.css"; // Copy your CSS here

export default function HomeView() {
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
        <Link to="/spesificstore" className="spesific-stors">
          <div className="spesific-store-title">
            <h2>Specific Store</h2>
          </div>
          <div className="spesific-store-button">
            <h3>Click me</h3>
          </div>
        </Link>
        <Link to="/search" className="search">
          <div className="search-title">
            <h2>Search</h2>
          </div>
          <div className="search-button">
            <h3>Click me</h3>
          </div>
        </Link>
        <Link to="/favorites" className="favorits">
          <div className="favorits-title">
            <h2>Favorites</h2>
          </div>
          <div className="favorits-button">
            <h3>Click me</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
