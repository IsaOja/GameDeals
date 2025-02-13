<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <router-link to="/">
    <header>
      <h1>Game Deals</h1>
    </header>
  </router-link>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>Contact</p>
    <p>Q & A</p>
  </footer>
</template>

<style>
a {
  text-decoration: none;
}
</style>
