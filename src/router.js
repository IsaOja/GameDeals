import { createRouter, createWebHashHistory } from "vue-router";

import BestDeals from "./views/BestDealsView.vue";
import FavoritsView from "./views/FavoritsView.vue";
import SearchView from "./views/SearchView.vue";
import SpesificStoreView from "./views/SpesificStoreView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: BestDeals,
      path: "/bestdeals",
    },
    {
      component: FavoritsView,
      path: "/favorits",
    },
    {
      component: SearchView,
      path: "/search",
    },
    {
      component: SpesificStoreView,
      path: "/spesificstore",
    },
    {
      component: HomeView,
      path: "/",
    },
  ],
});
