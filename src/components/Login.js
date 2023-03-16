import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
<form onSubmit={handleSubmit}>
<TextField
       label="Email"
       type="email"
       fullWidth
       margin="normal"
       required
     />
<TextField
       label="Password"
       type="password"
       fullWidth
       margin="normal"
       required
     />
<Button
type="submit"
variant="contained"
color="primary"
fullWidth
sx={{ marginTop: 2 }}
>
Login
</Button>
</form>
</Container>
);
}

export default Login;
