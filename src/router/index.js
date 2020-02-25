import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import LocationPage from "../views/LocationPage";
import MenuFishDishesPage from "../views/MenuFishDishesPage";
import MenuMeatDishesPage from "../views/MenuMeatDishesPage";
import OffersPage from "../views/OffersPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
    {
        path: "/location",
        name: "LocationPage",
        component: LocationPage
    },
    {
        path: "/menu/meat-dishes",
        name: "MenuMeatDishes",
        component: MenuMeatDishesPage
    },
    {
        path: "/menu/fish-dishes",
        name: "MenuFishDishesPage",
        component: MenuFishDishesPage
    },
    {
        path: "/offers",
        name: "Offers",
        component: OffersPage
    }
];

const router = new VueRouter({
  routes
});

export default router;
