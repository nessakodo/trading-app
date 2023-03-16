import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function CryptoDetails() {
  const { id } = useParams();

  // Replace this with actual data from your API
  const crypto = {
    id,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 45000,
    support: 44000,
    resistance: 46000,
  };

  return (
    <Container>
      <Typography variant="h4">{`${crypto.name} (${crypto.symbol})`}</Typography>
      <Typography variant="h6">{`Price: $${crypto.price}`}</Typography>
      <Typography variant="h6">{`Support: $${crypto.support}`}</Typography>
      <Typography variant="h6">{`Resistance: $${crypto.resistance}`}</Typography>
      {/* Add TradingView window integration here */}
    </Container>
  );
}

export default CryptoDetails;
