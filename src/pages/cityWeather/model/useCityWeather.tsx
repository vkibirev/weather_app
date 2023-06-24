import { useQuery } from '@tanstack/react-query';

import { getForecast } from '../../../shared/api/weatherApi';

import { TQueryResult } from '../../../shared/interfaces/query';

export const useCityWeather = (lat: number, lon: number): TQueryResult<any> => {
  return useQuery(['cityWeather'], () => getForecast(lat, lon)) as TQueryResult<any>;
};
