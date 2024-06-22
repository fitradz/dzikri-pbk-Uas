import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'; // Pastikan jalur ini benar
import Home from '../pages/Home.vue'; // Pastikan jalur ini benar
import Pertemuan1 from '../pages/Pertemuan1.vue'; // Pastikan jalur ini benar
import Pertemuan2 from '../pages/Pertemuan2.vue';
import Pertemuan3 from '../pages/Pertemuan3.vue';
import Pertemuan4 from '../pages/Pertemuan4.vue';
import Pertemuan5 from '../pages/Pertemuan5.vue';
import Pertemuan6 from '../pages/Pertemuan6.vue';
import Pertemuan7 from '../pages/Pertemuan7.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'pertemuan1', component: Pertemuan1 },
      { path: 'pertemuan2', component: Pertemuan2 },
      { path: 'pertemuan3', component: Pertemuan3 },
      { path: 'pertemuan4', component: Pertemuan4 },
      { path: 'pertemuan5', component: Pertemuan5 },
      { path: 'pertemuan6', component: Pertemuan6 },
      { path: 'pertemuan7', component: Pertemuan7 },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
