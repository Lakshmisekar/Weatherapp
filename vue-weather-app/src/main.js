import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import WeatherGrid from './components/WeatherGrid.vue';
import WeatherInfo from './components/WeatherInfo.vue'; 
import WeatherDetails from './components/WeatherDetails.vue';
import NavbarWeather from './components/NavbarWeather.vue';

const routes = [
  {
    path: '/WeatherGrid',
    name: 'WeatherGrid',
    component: WeatherGrid
  },
  {
    path: '/WeatherDetails/:city', 
    name: 'WeatherDetails',
    component: WeatherDetails
  },
  {
    path: '/WeatherInfo',
    name: 'WeatherInfo',
    component: WeatherInfo
  },
  {
    path: '/',
    redirect: '/WeatherGrid'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.component('NavbarWeather', NavbarWeather);
app.mount('#app');
