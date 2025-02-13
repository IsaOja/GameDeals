<script setup>
import { ref, defineProps } from "vue";
import axios from "axios";

const props = defineProps({
  maxPrice: {
    type: Number,
    default: 15,
  },
});

const deals = ref([]);

function getDeals() {
  axios
    .get("https://www.cheapshark.com/api/1.0/stores")
    .then((response) => {
      sessionStorage.setItem("stores", JSON.stringify(response.data));
      const stores = response.data;
      axios
        .get(`https://www.cheapshark.com/api/1.0/deals?upperPrice=${props.maxPrice}&sortBy=DealRating`)
        .then((response) => {
          const getDeals = response.data;

          getDeals.forEach((deal) => {
            const foundStore = stores.find((store) => store.storeID === deal.storeID);
            deal.store = foundStore.storeName;
            deals.value.push(deal);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
getDeals();
</script>

<template>
  <div class="games">
    <div class="game" v-for="deal in deals" :key="deal.dealID">
      <div class="game-thumb">
        <img id="game-img" :src="deal.thumb" alt="Image missing" />
      </div>
      <div class="game-title">
        <p id="game-gametitle">{{ deal.title }}</p>
      </div>
      <div class="game-price">
        <p id="game-normalPrice">{{ deal.normalPrice }}</p>
        <p id="game-salesPrice">{{ deal.salePrice }}</p>
        <p id="game-savings">{{ deal.savings }}</p>
      </div>
      <div class="game-stores">
        <p id="game-store">{{ deal.store }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
main {
  color: #333;
}
#container2 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  gap: 15px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "head"
    "games";
  font-size: large;
  font-weight: bold;
  height: 150px;
}

.head {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "head-thumb head-title head-price head-stores";
  grid-area: head;
}

.head-thumb {
  grid-area: head-thumb;
}

.head-title {
  grid-area: head-title;
}

.head-price {
  grid-area: head-price;
}

.head-stores {
  grid-area: head-stores;
}

.games {
  display: flex;
  flex-direction: column;
  grid-area: games;
}

.game {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: large;
  font-weight: bold;
}

.game-thumb {
  width: 50%;
}

.game-title {
  width: 50%;
}

.game-price {
  width: 50%;
}

.game-stores {
  width: 50%;
}

#game-normalPrice {
  text-decoration: line-through;
}
img {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 200px;
}
</style>
