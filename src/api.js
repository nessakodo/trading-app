// /src/api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace this with your backend server URL

export const fetchCryptocurrencies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cryptocurrencies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
};

// Add more API functions as needed for your app
