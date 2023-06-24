import { useQuery } from '@tanstack/react-query';

import { getForecast } from '../../../shared/api/weatherApi';

import { TQueryResult } from '../../../shared/interfaces/query';
import { TCityWeatherResponse } from '../../../shared/interfaces/cities';

export const useCityWeather = (lat: number, lon: number): TQueryResult<TCityWeatherResponse> => {
  return useQuery(['cityWeather'], () => getForecast(lat, lon)) as TQueryResult<TCityWeatherResponse>;
};
