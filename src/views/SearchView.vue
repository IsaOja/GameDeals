<script setup>
import SearchGames from "../components/SearchGames.vue";
</script>

<template>
  <div class="container1">
    <div class="search">
      <h2>Search</h2>
      <label for="game"></label>
      <input v-model="searchGame" id="game" placeholder="A good game" />
      <input @click="searchGames" id="send" type="button" value="Search" />
    </div>
    <div class="head">
      <div class="head-thumb">
        <h2>Thumbnail</h2>
      </div>
      <div class="head-title">
        <h2>Title</h2>
      </div>
      <div class="head-price">
        <h2>Price</h2>
      </div>
    </div>
  </div>
  <SearchGames />
</template>

<style scoped>
.container1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 1fr;
  gap: 15px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "search"
    "head"
    "games";
  font-size: large;
  font-weight: bold;
  height: 250px;
}

.search {
  grid-area: search;
  align-items: center;
  text-align: center;
}

.head {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "head-thumb head-title head-price";
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
img {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 200px;
}
</style>
