import React from 'react';

import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { DataLoader } from '../../../shared/components/DataLoader';

import { useCityWeather } from '../model/useCityWeather';

import { TCityRouteParams } from '../../../shared/interfaces/cities';

export const CityWeather: React.FC<{}> = () => {
  const { lat, lon, city } = useParams<TCityRouteParams>() as TCityRouteParams;

  const { isLoading, data } = useCityWeather(+lat, +lon);

  if (isLoading) return <DataLoader />;

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        {city}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Some other city data
      </Typography>
    </Container>
  );
};
