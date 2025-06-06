import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import BestDealsView from "./views/BestDealsView";
import FavoritesView from "./views/FavoritesView";
import SearchView from "./views/SearchView";
import SpesificStoreView from "./views/SpesificStoreView";
import SingleGameView from "./views/SingleGameView";

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
          <Route path="/favorites" element={<FavoritesView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/spesificstore" element={<SpesificStoreView />} />
          <Route path="/singlegame/:gameID" element={<SingleGameView />} />
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
