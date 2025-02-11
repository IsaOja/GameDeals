<script setup>
import { ref, defineProps } from "vue";
import axios from "axios";

// Define props
const props = defineProps({
  maxPrice: {
    type: Number,
    default: 15,
  },
});

const deals = ref([]);
const stores = ref([]);

const fetchData = async () => {
  try {
    const storesResponse = await axios.get("https://www.cheapshark.com/api/1.0/stores");
    stores.value = storesResponse.data;
    sessionStorage.setItem("stores", JSON.stringify(stores.value));

    const dealsResponse = await axios.get(
      `https://www.cheapshark.com/api/1.0/deals?upperPrice=${props.maxPrice}&sortBy=DealRating`
    );
    const fetchedDeals = dealsResponse.data;

    fetchedDeals.forEach((deal) => {
      deal.store = stores.value.find((store) => store.storeID === deal.storeID);
    });
    deals.value = fetchedDeals;
  } catch (error) {
    console.log(error);
  }
};

fetchData();
</script>

<template>
  <div class="games">
    <div class="game" v-for="deal in deals" :key="deal.dealID">
      <div class="game-thumb"><img class="game-img" :src="deal.thumb" alt="Image missing" /></div>
      <div class="game-title">{{ deal.title }}</div>
      <div class="game-price">
        <p id="game-normalPrice">{{ deal.normalPrice }}</p>
        <p id="game-salesPrice">{{ deal.salePrice }}</p>
        <p id="game-savings">{{ deal.savings }}</p>
      </div>
      <div class="game-stores">
        <p id="game-store">{{ deal.store.storeName }}</p>
      </div>
    </div>
  </div>
</template>
