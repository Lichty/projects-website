import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{ paddingTop: 4, paddingBottom: 4, flexGrow: 1 }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
