import { createRouter, createWebHashHistory } from "vue-router";
import MainComponent from "@/components/MainComponent.vue";
import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutUsPage.vue";
import Contact from "@/views/ContactPage.vue";
import ProductsFull from "@/views/ProductsFull.vue";
const routes = [
  {
    path: "/:category?",
    name: "Main Component",
    component: MainComponent,
    children: [
      {
        path: "/:category?",
        name: "Home Page",
        component: HomePage,
      },
      {
        path: "/aboutus",
        name: "About Us",
        component: AboutUs,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "/productFull/:productID",
        name: "Product Full",
        component: ProductsFull,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
