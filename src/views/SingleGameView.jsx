import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SingleGameView() {
  const { gameID } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
      .then((res) => setGame(res.data))
      .catch(() => setError("Failed to fetch game details."))
      .finally(() => setLoading(false));
  }, [gameID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!game) return null;

  return (
    <div>
      <h1>{game.info.title}</h1>
      <img src={game.info.thumb} alt="Game Thumbnail" />
      <p>{game.info.description}</p>
      <h2>Deals</h2>
      <ul>
        {game.deals.map((deal) => (
          <li key={deal.dealID}>
            <p>Store: {deal.storeID}</p>
            <p>Price: ${deal.price}</p>
            <p>Retail Price: ${deal.retailPrice}</p>
            <p>Savings: {deal.savings}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
