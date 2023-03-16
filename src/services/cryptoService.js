const API_BASE_URL = 'http://localhost:5000/api';

async function getCryptoList() {
  const response = await fetch(`${API_BASE_URL}/cryptos`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch crypto list');
  }
}

async function getCryptoDetails(id) {
  const response = await fetch(`${API_BASE_URL}/cryptos/${id}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to fetch crypto details');
  }
}

async function getWatchlist()
