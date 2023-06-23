import React from 'react';
import { ErrorBoundary } from '../../shared/components/ErrorBoundary';

const withErrorBoundary =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement =>
    (
      <ErrorBoundary>
        <Cmp {...props} />
      </ErrorBoundary>
    );

export { withErrorBoundary };
