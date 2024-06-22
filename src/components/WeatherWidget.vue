<template>
    <div class="weather-widget">
      <h2 v-if="weatherData">Cuaca {{ city }}</h2>
      <form @submit.prevent="updateCity">
        <input v-model="inputCity" placeholder="Ketik Kota...." />
        <button type="submit">Cari</button>
      </form>
      <div v-if="weatherData" class="weather-info">
        <p class="temp">{{ weatherData.main.temp }}°C</p>
        <p class="details">Humidity: {{ weatherData.main.humidity }}%</p>
        <p class="details">Condition: {{ weatherData.weather[0].description }}</p>
      </div>
      <p v-else-if="loading" class="loading">Loading...</p>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        inputCity: '',
        weatherData: null,
        apiKey: '4c453c6ecc4a09591f21ac681a88d487', // Ganti dengan API key Anda
        loading: false
      };
    },
    methods: {
      async fetchWeatherData() {
        if (this.city) {
          this.loading = true;
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`;
          try {
            const response = await axios.get(url);
            this.weatherData = response.data;
            this.loading = false;
          } catch (error) {
            console.error("Error fetching weather data:", error);
            this.loading = false;
          }
        }
      },
      updateCity() {
        this.city = this.inputCity;
        this.weatherData = null; // Reset weather data
        this.fetchWeatherData();
      }
    }
  };
  </script>
  <style scoped>
  .weather-widget {
    background: linear-gradient(to bottom, #00c6ff, #0072ff);
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    padding: 20px;
    width: 300px;
    text-align: center;
    margin: 50px auto;
    font-family: 'Roboto', sans-serif;
    transition: transform 0.3s ease;
  }
  
  .weather-widget:hover {
    transform: scale(1.05);
  }
  
  form {
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    width: 60%;
    font-size: 1em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background: #ff4b1f;
    background: linear-gradient(to right, #ff9068, #fd746c);
    color: white;
    font-size: 1em;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.3s ease;
  }
  
  button:hover {
    background: linear-gradient(to right, #fd746c, #ff9068);
  }
  
  .weather-info {
    margin-top: 20px;
    animation: fadeIn 1s ease;
  }
  
  .temp {
    font-size: 2.5em;
    margin: 0;
  }
  
  .details {
    font-size: 1.2em;
    margin: 5px 0;
  }
  
  .loading {
    font-size: 1.2em;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>