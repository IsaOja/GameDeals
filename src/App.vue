<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <header>
    <router-link to="/">
      <h1>Game Deals</h1>
    </router-link>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>Contact</p>
    <p>Q & A</p>
  </footer>
</template>

<style></style>
