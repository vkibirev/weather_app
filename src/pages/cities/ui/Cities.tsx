import React from 'react';

import Grid from '@mui/material/Grid';

import { useCitiesList } from '../model/useCitiesList';

import { CityCard } from './CityCard';
import { DataLoader } from '../../../shared/components/DataLoader';

import { TCityFromListObject } from '../../../shared/interfaces/cities';

export const Cities: React.FC<{}> = () => {
  const { isLoading, data } = useCitiesList();
  if (isLoading) return <DataLoader />;

  const { _embedded } = data;
  return (
    <Grid container spacing={4}>
      {_embedded['city:search-results'].map((itm: TCityFromListObject) => (
        // eslint-disable-next-line no-underscore-dangle
        <CityCard cityName={itm.matching_full_name} link={itm._links} key={itm.matching_full_name} />
      ))}
    </Grid>
  );
};
