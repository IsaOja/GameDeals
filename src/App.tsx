import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import BestDealsView from "./views/BestDealsView";
import SearchView from "./views/SearchView";

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <h1>Game Deals</h1>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/bestdeals" element={<BestDealsView />} />
          <Route path="/searchgame" element={<SearchView />} />
        </Routes>
      </main>
      <footer>
        <p>Contact</p>
        <p>Q & A</p>
      </footer>
    </Router>
  );
};

export default App;
