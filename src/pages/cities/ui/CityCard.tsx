import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import { CityTime } from './CityTime';
import { DataLoader } from '../../../shared/components/DataLoader';

import { useCityTimezone } from '../model/useCityTimezone';

import { TCityCardProps } from '../../../shared/interfaces/cities';

export const CityCard: React.FC<TCityCardProps> = ({ cityName, link }: TCityCardProps) => {
  const { isLoading, data } = useCityTimezone(link['city:item'].href);

  let lat = 0;
  let lon = 0;
  let tz = '';

  // TODO create selector for useQuery
  if (!isLoading) {
    const {
      _embedded,
      location: { latlon },
    } = data;

    lat = latlon.latitude;
    lon = latlon.longitude;
    tz = _embedded['city:timezone'].iana_name;
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {cityName}
          </Typography>
          {isLoading ? <DataLoader /> : <CityTime timezone={tz} />}
        </CardContent>
        <CardActions>
          <Button disabled={isLoading} size="small" component={Link} to={`cityWeather/${cityName}/${lat}/${lon}`}>
            See Weather
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
