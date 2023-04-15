import { Box, Typography } from '@mui/material';
import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="h2" component="h1" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
