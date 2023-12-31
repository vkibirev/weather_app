import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export const withTheme =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Link href="/" color="inherit" variant="h6" underline="none">
              Weather App
            </Link>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 0 }} maxWidth="xl">
            <Cmp {...props} />
          </Container>
        </Box>
      </ThemeProvider>
    );
  };
