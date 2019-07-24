import Vue from "vue";
import Router from "vue-router";
import BleutestBuy from "./views/BleutestBuy.vue";
import Compare from "./views/Compare.vue";
import Remittance from "./views/Remittance.vue";
import Exchanges from "./views/Exchanges.vue";
import ExchangesFees from "./views/ExchangesFees.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "BleutestBuy",
      component: BleutestBuy
    },
    {
      path: "/compare",
      name: "Compare",
      component: Compare
    },
    {
      path: "/remittance",
      name: "Remittance",
      component: Remittance
    },
    {
      path: "/exchanges",
      name: "Exchanges",
      component: Exchanges
    },
    {
      path: "/exchangesfees",
      name: "ExchangesFees",
      component: ExchangesFees
    }
  ]
});
