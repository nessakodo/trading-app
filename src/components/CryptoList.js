import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CryptoList() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/cryptocurrencies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCryptocurrencies(data);
      })
      .catch((error) => {
        console.error('Error fetching cryptocurrencies:', error);
      });
  }, []);

  return (
    <div>
      {cryptocurrencies.map((crypto) => (
        <div key={crypto.id}>
          <Link to={`/crypto/${crypto.id}`}>
            <h3>{crypto.name}</h3>
          </Link>
          <p>Price: ${crypto.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CryptoList;
