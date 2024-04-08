<template>
  <div>
    <h2>Weather Details</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">Error: {{ error }}</div>
    <div v-else>
      <p>City: {{ weather.city }}</p>
      <p>Temperature: {{ weather.temperature }} °C</p>
      <p>Description: {{ weather.description }}</p>
      <p>Humidity: {{ weather.humidity }}%</p>
      <p>Wind Speed: {{ weather.windSpeed }} m/s</p>
    </div>
    <input v-model="city" type="text" placeholder="Enter City Name">
    <button @click="getWeather">Get Weather</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weather: {},
      loading: true,
      error: null,
      city: '',
    };
  },
  methods: {
    async getWeather() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`https://localhost:7222/api/Weather/${this.city}`);
        this.weather = response.data;
        this.loading = false;
      } catch (error) {
        console.error('Error fetching weather data:', error);
        this.error = 'Failed to fetch weather data';
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
