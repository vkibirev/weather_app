import { useQuery } from '@tanstack/react-query';
import { getCitiesList } from '../../../shared/apiService';

import { TQueryResult } from '../../../shared/interfaces/query';

import { TCitiesResponse } from '../../../shared/interfaces/cities';

export const useCitiesList = (): TQueryResult<TCitiesResponse> =>
  useQuery(['citiesList'], () => getCitiesList()) as TQueryResult<TCitiesResponse>;
