import React from 'react';
import moment from 'moment-timezone';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

import { Tooltip } from '@mui/material';

import { TCityWeatherDetailsProps, TWeatherItem } from '../../../shared/interfaces/cities';

export const CityWeatherDetails: React.FC<TCityWeatherDetailsProps> = ({
  lat,
  lon,
  city,
  data,
}: TCityWeatherDetailsProps) => {
  const { daily } = data;
  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        {city}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Latitude: {lat}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Longitude: {lon}
      </Typography>

      <Grid container spacing={2}>
        {daily.map((itm: TWeatherItem) => (
          <Grid item xs={6} key={itm.dt}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Tooltip title={itm.weather[0].description}>
                  <img src={`http://openweathermap.org/img/w/${itm.weather[0].icon}.png`} alt="weather" />
                </Tooltip>

                <Typography>Date: {moment.unix(itm.dt).format('DD/MM/YYYY')}</Typography>
                <Typography>Morning Temperature: {itm.temp.morn}</Typography>
                <Typography>Day Temperature: {itm.temp.day}</Typography>
                <Typography>Evening Temperature: {itm.temp.eve}</Typography>
                <Typography>Night Temperature: {itm.temp.night}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
