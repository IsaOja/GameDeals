<script>
import { createRouter, createWebHashHistory } from "vue-router";

import BestDeals from "./components/BestDeals.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: BestDeals,
      path: "/bestdeals",
    },
  ],
});
</script>
