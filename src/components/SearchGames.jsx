import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SearchGames() {
  const [searchGame, setSearchGame] = useState("");
  const [games, setGames] = useState([]);

  const searchGames = () => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?title=${searchGame}`)
      .then((response) => setGames(response.data))
      .catch(console.error);
  };

  return (
    <div className="container1">
      <div className="search">
        <h2>Search</h2>
        <input
          value={searchGame}
          onChange={(e) => setSearchGame(e.target.value)}
          placeholder="A good game"
        />
        <input type="button" value="Search" onClick={searchGames} />
      </div>
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
      </div>
      <div className="games">
        {games.map((game) => (
          <div className="game" key={game.gameID}>
            <Link to={`/singlegame/${game.gameID}`}>
              <div className="game-thumb">
                <img src={game.thumb} alt="Image missing" />
              </div>
              <div className="game-title">
                <p>{game.external}</p>
              </div>
              <div className="game-price">
                <p>{game.cheapest}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
