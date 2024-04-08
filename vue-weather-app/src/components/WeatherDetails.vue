<template>
    <div>
      <h2>Weather Details</h2>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="error">Error: {{ error }}</div>
      <div v-else>
        <div class="card">
          <h3>{{ weather.city }}</h3>
          <p>Temperature: {{ weather.temperature }} °C</p>
          <p>Description: {{ weather.description }}</p>
          <p>Humidity: {{ weather.humidity }}%</p>
          <p>Wind Speed: {{ weather.windSpeed }} m/s</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        weather: {},
        loading: true,
        error: null
      };
    },
    created() {
      this.getWeatherDetails();
    },
    methods: {
      async getWeatherDetails() {
        const city = this.$route.params.city;
        try {
          const response = await axios.get(`https://localhost:7222/api/Weather/${city}`);
          this.weather = response.data;
          this.loading = false;
        } catch (error) {
          console.error('Error fetching weather details:', error);
          this.error = 'Failed to fetch weather details';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: #f9f9f9;
  }
  </style>
  