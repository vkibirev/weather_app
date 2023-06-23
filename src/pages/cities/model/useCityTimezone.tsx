import { useQuery } from '@tanstack/react-query';
import { getCityTimeZone } from '../../../shared/apiService';

import { TQueryResult } from '../../../shared/interfaces/query';

import { TCitiyWithTZResponse } from '../../../shared/interfaces/cities';

export const useCityTimezone = (url: string): TQueryResult<TCitiyWithTZResponse> =>
  useQuery([url], () => getCityTimeZone(url)) as TQueryResult<TCitiyWithTZResponse>;
