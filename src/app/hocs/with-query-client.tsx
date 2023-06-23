import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const withQueryClient =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <QueryClientProvider client={queryClient}>
        <Cmp {...props} />
      </QueryClientProvider>
    );
  };
