<script setup>
import { ref, computed } from "vue";
import FavoritsView from "../components/FavoritGames.vue";

const showSavings = ref(false);

const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);

const totalSavings = computed(() => {
  let total = 0;
  for (const favorite of favorites.value) {
    const normalPrice = parseFloat(favorite.normalPrice);
    const salePrice = parseFloat(favorite.salePrice);
    const savings = normalPrice - salePrice;
    total += isNaN(savings) ? 0 : savings;
  }
  return total;
});

const calculateSavings = () => {
  showSavings.value = true;
};

const formattedTotalSavings = computed(() => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalSavings.value);
});

const updateFavorites = (updatedFavorites) => {
  favorites.value = updatedFavorites;
};
</script>

<template>
  <div class="savings">
    <label for="game">Calculate total savings: </label>
    <input
      @click="calculateSavings"
      id="game"
      type="button"
      value="Calculate"
    />
    <div v-if="showSavings">
      <p>Total Savings: {{ formattedTotalSavings }}</p>
    </div>
  </div>
  <div id="container2">
    <div class="head">
      <div class="head-thumb">
        <h2>Thumbnail</h2>
      </div>
      <div class="haed-title">
        <h2>Title</h2>
      </div>
      <div class="head-price">
        <h2>Price</h2>
      </div>
      <div class="head-store">
        <h2>Store</h2>
      </div>
    </div>
  </div>
  <FavoritsView @updateFavorites="updateFavorites" />
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

.savings {
  align-items: center;
  text-align: center;
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
