<script setup>
import BestDeals from "../components/BestDeals.vue";
</script>

<template>
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
  <BestDeals />
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
