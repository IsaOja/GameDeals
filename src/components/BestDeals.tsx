import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/BestDeals.css";

interface ApiDeal {
  dealID: string;
  storeID: string;
  title: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  thumb: string;
}

interface Store {
  storeID: string;
  storeName: string;
}

interface DealWithStore extends ApiDeal {
  store: string;
}

interface BestDealsProps {
  maxPrice?: number;
}

const BestDeals: React.FC<BestDealsProps> = ({ maxPrice = 15 }) => {
  const [deals, setDeals] = useState<DealWithStore[]>([]);

  useEffect(() => {
    async function getDeals() {
      try {
        const storesRes = await axios.get<Store[]>(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        sessionStorage.setItem("stores", JSON.stringify(storesRes.data));
        const stores = storesRes.data;

        const dealsRes = await axios.get<ApiDeal[]>(
          `https://www.cheapshark.com/api/1.0/deals?upperPrice=${maxPrice}&sortBy=DealRating`
        );

        const dealsWithStore: DealWithStore[] = dealsRes.data.map((deal) => {
          const foundStore = stores.find(
            (store) => store.storeID === deal.storeID
          );
          return {
            ...deal,
            store: foundStore ? foundStore.storeName : "Unknown",
          };
        });

        setDeals(dealsWithStore);
      } catch (error) {
        console.log(error);
      }
    }
    getDeals();
  }, [maxPrice]);

  return (
    <div className="games" data-testid="games-list">
      {deals.map((deal: DealWithStore) => (
        <div className="game" data-testid="game-items" key={deal.dealID}>
          <div className="game-thumb" data-testid="game-thumb">
            <img id="game-img" src={deal.thumb} alt="Image missing" />
          </div>
          <div className="game-title" data-testid="game-title">
            <p id="game-gametitle">{deal.title}</p>
          </div>
          <div className="game-price" data-testid="game-price">
            <p id="game-normalPrice">${deal.normalPrice}</p>
            <p id="game-salesPrice">${deal.salePrice}</p>
            <p id="game-savings">{Math.round(parseFloat(deal.savings))}%</p>
          </div>
          <div className="game-stores" data-testid="game-store">
            <p id="game-store">{deal.store}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDeals;
