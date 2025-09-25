import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'
import LandingView from '../views/landing-view.vue'
import CurationDetailsView from '../views/curation/details-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/curation/:id',
      name: 'details',
      component: CurationDetailsView,
    },
  ],
})

export default router
