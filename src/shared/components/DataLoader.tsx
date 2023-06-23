import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const DataLoader: React.FC<{}> = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', verticalAlign: 'center' }}>
      <CircularProgress />
    </Box>
  );
};
