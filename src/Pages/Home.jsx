import React from 'react'
import { Button, Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 6, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
            Hi, I'm Deval Garg
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Engineering Student | Software Developer | Fitness Enthusiast
      </Typography>

      <Button
        variant="contained"
        color='primary'
        sx={{ mt: 4 }}
      >
        View Projects
      </Button>
    </Container>
  );
};

export default Home
