import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    // Inside the Header component
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'text.secondary' }}
        >
          Logo
        </Typography>
        <Button color="inherit" sx={{ color: 'text.secondary' }}>
          Portfolio
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
