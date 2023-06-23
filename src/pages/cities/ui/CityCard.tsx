import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom';
import { CityTime } from './CityTime';

import { TCityCardProps } from '../../../shared/interfaces/cities';

export const CityCard: React.FC<TCityCardProps> = ({ cityName, link }: TCityCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {cityName}
          </Typography>
          <CityTime link={link} />
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to="cityWeather/">
            See Weather
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
