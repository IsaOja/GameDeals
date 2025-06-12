import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import BestDealsView from "./views/BestDealsView";

function App() {
  return (
    <Router>
      <Link to="/">
        <header>
          <h1>Game Deals</h1>
        </header>
      </Link>
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/bestdeals" element={<BestDealsView />} />
        </Routes>
      </main>
      <footer>
        <p>Contact</p>
        <p>Q & A</p>
      </footer>
    </Router>
  );
}

export default App;
