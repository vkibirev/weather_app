import React from 'react';

import { useParams } from 'react-router-dom';

import { DataLoader } from '../../../shared/components/DataLoader';
import { CityWeatherDetails } from './CityWeatherDetails';

import { useCityWeather } from '../model/useCityWeather';

import { TCityRouteParams } from '../../../shared/interfaces/cities';

export const CityWeather: React.FC<{}> = () => {
  const { lat, lon, city } = useParams<TCityRouteParams>() as TCityRouteParams;

  const { isLoading, data } = useCityWeather(+lat, +lon);

  if (isLoading) return <DataLoader />;

  return <CityWeatherDetails lat={lat} lon={lon} city={city} data={data} />;
};
