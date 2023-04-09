import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', py: 0.5 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {new Date().getFullYear()} Josh Lichty - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
