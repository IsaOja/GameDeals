<template>
  <div class="content">
    <div class="container1">
      <RouterLink to="/bestdeals" class="best-deals">
        <div class="best-deals-title">
          <h2>Best Deals</h2>
        </div>
        <div class="best-deals-button">
          <h3>Click me</h3>
        </div>
      </RouterLink>
      <RouterLink to="/spesificstore" class="spesific-stors">
        <div class="spesific-store-title">
          <h2>Specific Store</h2>
        </div>
        <div class="spesific-store-button">
          <h3>Click me</h3>
        </div>
      </RouterLink>
      <RouterLink to="/search" class="search">
        <div class="search-title">
          <h2>Search</h2>
        </div>
        <div class="search-button">
          <h3>Click me</h3>
        </div>
      </RouterLink>
      <RouterLink to="/favorites" class="favorits">
        <div class="favorits-title">
          <h2>Favorites</h2>
        </div>
        <div class="favorits-button">
          <h3>Click me</h3>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 0px;
  grid-template-areas:
    "best-deals best-deals best-deals best-deals best-deals"
    "spesific-stors spesific-stors spesific-stors spesific-stors spesific-stors"
    "search search search search search"
    "favorits favorits favorits favorits favorits"
    "Cities Cities Cities Cities Cities";
  justify-content: center;
  align-content: center;
  justify-items: stretch;
  align-items: stretch;
  text-align: center;
}

.best-deals {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". best-deals-title ."
    ". best-deals-button ."
    ". . .";
  grid-area: best-deals;
}

.best-deals-title {
  grid-area: best-deals-title;
  background-color: lightslategray;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
}

.best-deals-button {
  grid-area: best-deals-button;
  background-color: lightslategray;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
}

.spesific-stors {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". spesific-store-title ."
    ". spesific-store-button ."
    ". . .";
  grid-area: spesific-stors;
}

.spesific-store-title {
  grid-area: spesific-store-title;
  background-color: lightslategray;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
}

.spesific-store-button {
  grid-area: spesific-store-button;
  background-color: lightslategray;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
}

.search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". search-title ."
    ". search-button ."
    ". . .";
  grid-area: search;
}

.search-title {
  grid-area: search-title;
  background-color: lightslategray;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
}

.search-button {
  grid-area: search-button;
  background-color: lightslategray;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
}

.favorits {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". favorits-title ."
    ". favorits-button ."
    ". . .";
  grid-area: favorits;
}
.favorits-title {
  grid-area: favorits-title;
  background-color: lightslategray;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
}
.favorits-button {
  grid-area: favorits-button;
  background-color: lightslategray;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
