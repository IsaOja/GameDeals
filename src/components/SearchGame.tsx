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

interface searchGamesProps {
  searchGame?: string;
}

const SearchGames: React.FC<searchGamesProps> = ({
  searchGame: initialSearchGame,
}) => {
  const [deals, setSearch] = useState<DealWithStore[]>([]);
  const [searchaGame, setSearchaGame] = useState(initialSearchGame || "");
  const [currentSearch, setCurrentSearch] = useState(initialSearchGame || "");

  useEffect(() => {
    if (!currentSearch) return;
    async function getSearch() {
      try {
        const storesRes = await axios.get<Store[]>(
          "https://www.cheapshark.com/api/1.0/stores"
        );
        sessionStorage.setItem("stores", JSON.stringify(storesRes.data));
        const stores = storesRes.data;

        const dealsRes = await axios.get<ApiDeal[]>(
          `https://www.cheapshark.com/api/1.0/deals?title=${currentSearch}&sortBy=DealRating`
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

        setSearch(dealsWithStore);
      } catch (error) {
        console.log(error);
      }
    }
    getSearch();
  }, [currentSearch]);

  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentSearch(searchaGame);
        }}
      >
        <div className="search-bar">
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search games..."
            value={searchaGame}
            onChange={(e) => setSearchaGame(e.target.value)}
          />
          <button type="submit" data-testid="search-button">
            Search
          </button>
        </div>
      </form>
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
      <div className="games" data-testid="games-list">
        {deals.map((deal: DealWithStore) => (
          <div className="game" data-testid="game-items" key={deal.dealID}>
            <div className="game-thumb">
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
    </>
  );
};

export default SearchGames;
