import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const cryptoData = [
  // Replace this mock data with your actual API data
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 45000 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3000 },
];

function CryptoList() {
  return (
    <Container>
      <Typography variant="h4">Cryptocurrencies</Typography>
      <List>
        {cryptoData.map((crypto) => (
          <ListItem button key={crypto.id}>
            <ListItemText primary={`${crypto.name} (${crypto.symbol})`} secondary={`Price: $${crypto.price}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default CryptoList;
