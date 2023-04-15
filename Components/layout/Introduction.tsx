import { Box, Typography } from '@mui/material';
import React from 'react';

interface IntroductionProps {
  text: string;
}

const Introduction = ({ text }: IntroductionProps) => {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="h5" component="p" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};

export default Introduction;
