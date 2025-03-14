<script setup>
import { ref, onMounted } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const gameID = route.params.gameID;
const game = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchGameDetails = async () => {
  try {
    const response = await axios.get(
      `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
    );
    game.value = response.data;
    const stores = JSON.parse(sessionStorage.getItem("stores"));
    game.value.deals.forEach((deal) => {
      const foundStore = stores.find((store) => store.storeID === deal.storeID);
      deal.storeID = foundStore.storeName;
    });
  } catch (err) {
    error.value = "Failed to fetch game details.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchGameDetails();
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <h1>{{ game.info.title }}</h1>
    <img :src="game.info.thumb" alt="Game Thumbnail" />
    <p>{{ game.info.description }}</p>
    <h2>Deals</h2>
    <ul>
      <li v-for="deal in game.deals" :key="deal.dealID">
        <p>Store: {{ deal.storeID }}</p>
        <p>Price: ${{ deal.price }}</p>
        <p>Retail Price: ${{ deal.retailPrice }}</p>
        <p>Savings: {{ deal.savings }}%</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1em;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1em;
}
</style>
