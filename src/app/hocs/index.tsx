import { compose } from '../../shared/compose';

import { withQueryClient } from './with-query-client';
import { withTheme } from './with-theme';
import { withErrorBoundary } from './with-error-boundary';

export const withHocs = compose(withErrorBoundary, withTheme, withQueryClient);
