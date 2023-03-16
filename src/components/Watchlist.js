import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const watchlistData = [
  // Replace this mock data with the actual data from your API
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 45000 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3000 },
];

function Watchlist() {
  return (
    <Container>
      <Typography variant="h4">Watchlist</Typography>
      <List>
        {watchlistData.map((crypto) => (
          <ListItem button key={crypto.id}>
            <ListItemText primary={`${crypto.name} (${crypto.symbol})`} secondary={`Price: $${crypto.price}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Watchlist;
