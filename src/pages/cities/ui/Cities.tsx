import React from 'react';

import Grid from '@mui/material/Grid';

import { useCitiesList } from '../model/useCitiesList';
import { CityCard } from './CityCard';
import { TCityFromListObject } from '../../../shared/interfaces/cities';

export const Cities: React.FC<{}> = () => {
  const { isLoading, error, data } = useCitiesList();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { _embedded } = data;

  return (
    <Grid container spacing={4}>
      {_embedded['city:search-results'].map((itm: TCityFromListObject) => (
        <CityCard cityName={itm.matching_full_name} key={itm.matching_full_name} />
      ))}
    </Grid>
  );
};
