<template>
  <div id="app">
    <NavbarWeather />
    <router-view />
  </div>
</template>

<script>
import NavbarWeather from './components/NavbarWeather.vue';

export default {
  components: {
    NavbarWeather
  }
};
</script>


