<template>
    <nav>
      <ul>
        <li><router-link to="/WeatherGrid">Weather Grid</router-link></li>
        <li><router-link to="/WeatherInfo">Search</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarWeather'
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
  }
  
  li a {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
  }
  </style>
  