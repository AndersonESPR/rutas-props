import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Invoices from "@/views/Invoices.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  

  {
    path: '/invoices', // Ruta para `/invoices`
    name: 'InvoicesList',
    component: Invoices,
  },
  {
    path: '/invoices/:id', // Ruta dinámica para `/invoices/:id`
    name: 'InvoiceDetail',
    component: Invoices,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;