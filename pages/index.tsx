import Head from 'next/head';
import React from 'react';
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import PortfolioButton from '@/Components/PortfolioButton';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: theme.custom.radialGradients.primary,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
            border: '8px solid',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            width: isMobile ? '90%' : '66.6%',
            aspectRatio: isMobile ? '9 / 16' : '16 / 9',
            overflow: 'hidden',
            backdropFilter: 'saturate(125%) brightness(1.25)',
            boxShadow: `
              0 -1px 2px rgba(157, 217, 255, 0.2),
              inset 0 1px 2px rgba(157, 217, 255, 0.2),
              0 -4px 16px rgba(98, 195, 255, 0.05),
              inset 0 4px 8px rgba(98, 195, 255, 0.05),
              0 96px 128px rgba(0, 0, 0, 1)`,
            position: 'relative',
            '&::after': {
              content: "''",
              position: 'absolute',
              top: -6,
              left: -6,
              right: -6,
              bottom: -6,
              zIndex: -1,
              borderRadius: '8px',
              opacity: '50%',
              background: theme.custom.radialGradients.primary,
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              pl: '64px',
              alignItems: 'center',
            }}
          >
            <Box sx={{ mr: 8, height: '100%', width: '150%' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '67%',
                }}
              >
                <Typography
                  variant="h5"
                  component="p"
                  gutterBottom
                  color="text.secondary"
                >
                  Josh Lichty
                </Typography>
                <Typography variant="h2" component="h1">
                  Portfolio
                </Typography>
              </Box>
              <Box sx={{ height: '33%' }}>
                <Button
                  sx={{ borderRadius: 0, px: 8, py: 1 }}
                  color="secondary"
                  variant="outlined"
                >
                  Contact
                </Button>
              </Box>
            </Box>
            <PortfolioButton
              title="Programming"
              description="A brief description"
              link="portfolio"
            />
            <PortfolioButton
              title="Knifemaking"
              description="A brief description"
              link="portfolio"
            />
            {/* <PortfolioButton
              title="Other stuff"
              description="A brief description"
              link="portfolio"
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
}
