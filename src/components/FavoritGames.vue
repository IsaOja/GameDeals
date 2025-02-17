<script setup>
import { ref, defineEmits } from "vue";

const favorites = ref(JSON.parse(localStorage.getItem("favorites")) || []);

const emit = defineEmits(["updateFavorites"]);

function removeFromFavorites(deal) {
  favorites.value = favorites.value.filter((fav) => fav.dealID !== deal.dealID);
  localStorage.setItem("favorites", JSON.stringify(favorites.value));
  emit("updateFavorites", favorites.value);
}
</script>

<template>
  <div class="games">
    <div class="game" v-for="deal in favorites" :key="deal.dealID">
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
      <div class="game-favorite">
        <button @click="removeFromFavorites(deal)">💔</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.games {
  display: flex;
  flex-direction: column;
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

.game-favorite {
  margin-top: 40px;
  transform: scale(1.5);
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
