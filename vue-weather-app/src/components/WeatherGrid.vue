<template>
    <div>
      <h2>Weather Grid</h2>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="error">Error: {{ error }}</div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°C)</th>
              <th>Description</th>
              <th>Humidity (%)</th>
              <th>Wind Speed (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cityWeather in citiesWeather" :key="cityWeather.city" @click="redirectToDetails(cityWeather.city)">
              <td>{{ cityWeather.city }}</td>
              <td>{{ cityWeather.temperature }}</td>
              <td>{{ cityWeather.description }}</td>
              <td>{{ cityWeather.humidity }}</td>
              <td>{{ cityWeather.windSpeed }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        citiesWeather: [],
        loading: true,
        error: null
      };
    },
    mounted() {
      this.fetchWeatherData();
    },
    methods: {
      async fetchWeatherData() {
        try {
          const response = await fetch('https://localhost:7222/api/Weather');
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          this.citiesWeather = await response.json();
          this.loading = false;
        } catch (error) {
          console.error('Error fetching weather data:', error);
          this.error = error.message;
          this.loading = false;
        }
      },
      redirectToDetails(city) {
        this.$router.push({ name: 'WeatherDetails', params: { city } });
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  </style>
  