<script setup>
import { ref } from "vue";
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
        .get(
          `https://www.cheapshark.com/api/1.0/deals?upperPrice=${props.maxPrice}&sortBy=DealRating`
        )
        .then((response) => {
          const getDeals = response.data;

          getDeals.forEach((deal) => {
            const foundStore = stores.find(
              (store) => store.storeID === deal.storeID
            );
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
