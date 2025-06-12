import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BestDeals.css";

export default function BestDeals({ maxPrice = 15 }) {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getDeals() {
      try {
        const storesRes = await axios.get("https://www.cheapshark.com/api/1.0/stores");
        sessionStorage.setItem("stores", JSON.stringify(storesRes.data));
        const stores = storesRes.data;

        const dealsRes = await axios.get(
          `https://www.cheapshark.com/api/1.0/deals?upperPrice=${maxPrice}&sortBy=DealRating`
        );
        const getDeals = dealsRes.data;

        const dealsWithStore = getDeals.map((deal) => {
          const foundStore = stores.find((store) => store.storeID === deal.storeID);
          return { ...deal, store: foundStore ? foundStore.storeName : "Unknown" };
        });

        setDeals(dealsWithStore);
      } catch (error) {
        console.log(error);
      }
    }
    getDeals();
  }, [maxPrice]);

  return (
    <div className="games">
      {deals.map((deal) => (
        <div className="game" key={deal.dealID}>
          <div className="game-thumb">
            <img id="game-img" src={deal.thumb} alt="Image missing" />
          </div>
          <div className="game-title">
            <p id="game-gametitle">{deal.title}</p>
          </div>
          <div className="game-price">
            <p id="game-normalPrice">${deal.normalPrice}</p>
            <p id="game-salesPrice">${deal.salePrice}</p>
            <p id="game-savings">{deal.savings}%</p>
          </div>
          <div className="game-stores">
            <p id="game-store">{deal.store}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
