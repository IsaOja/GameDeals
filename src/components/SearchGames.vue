<script setup>
import { ref, defineProps } from "vue";
import axios from "axios";

const games = ref([]);
const searchGame = ref("");

const props = defineProps({
  searchGame: {
    required: true,
    type: String,
    default: "",
  },
});
function searchGames() {
  axios
    .get(`https://www.cheapshark.com/api/1.0/games?title=${props.searchGame}`)
    .then((response) => {
      const getGames = response.data;

      getGames.forEach((game) => {
        games.value.push(game);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <div class="games">
    <div class="game" v-for="game in games" :key="game.gameID">
      <div class="game-thumb">
        <img id="game-img" :src="game.thumb" alt="Image missing" />
      </div>
      <div class="game-title">
        <p id="game-gametitle">{{ game.external }}</p>
      </div>
      <div class="game-price">
        <p id="game-salesPrice">{{ game.cheapest }}</p>
      </div>
    </div>
  </div>
</template>
