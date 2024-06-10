import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <Container>
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        
      </Typography>
      <ContactForm />
    </Box>
  </Container>
);

export default Contact;
