import React from 'react';

import moment from 'moment-timezone';
import Typography from '@mui/material/Typography';

import { DataLoader } from '../../../shared/components/DataLoader';

import { useCityTimezone } from '../model/useCityTimezone';

import { TCityTimeProps } from '../../../shared/interfaces/cities';

export const CityTime: React.FC<TCityTimeProps> = ({ link }: TCityTimeProps) => {
  const { isLoading, data } = useCityTimezone(link['city:item'].href);
  if (isLoading) return <DataLoader />;

  const { _embedded } = data;
  const dateTime = moment().tz(_embedded['city:timezone'].iana_name).format('DD/MM/YYYY hh:mm');
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {dateTime}
    </Typography>
  );
};
