import { Button, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';

interface PortfolioButtonProps {
  title: string;
  description: string;
  link: string;
}

const PortfolioButton = ({
  title,
  description,
  link,
}: PortfolioButtonProps) => {
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  return (
    <Button
      variant="outlined"
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '0',
        borderRadius: 0,
        borderLeft: '1px solid rgba(0,0,0,0)',
        borderTop: '1px solid rgba(0,0,0,0)',
        borderBottom: '1px solid rgba(0,0,0,0)',
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        '&:hover': {
          borderLeft: '1px solid rgba(0,0,0,0)',
          borderTop: '1px solid rgba(0,0,0,0)',
          borderBottom: '1px solid rgba(0,0,0,0)',
          borderRight: `1px solid ${theme.palette.secondary.main}`,
        },
        '&:last-child': {
          borderRight: '1px solid rgba(0,0,0,0)',
        },
        '&:nth-child(2)': {
          borderLeft: `1px solid ${theme.palette.secondary.main}`,
        },
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      color="secondary"
      href={link}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>
      {hover && (
        <Typography variant="body1" color="text.secondary" paragraph>
          {description}
        </Typography>
      )}
    </Button>
  );
};

export default PortfolioButton;
