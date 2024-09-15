import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router';

import Home from '@/pages/Home.vue';
const Convert = () => import('@/pages/Convert.vue');

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash };
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
};


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/convert',
    name: 'convert',
    component: Convert,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});




export default router; 
