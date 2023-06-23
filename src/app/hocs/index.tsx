import { compose } from '../../shared/compose';

import { withQueryClient } from './with-query-client';
import { withTheme } from './withTheme';

export const withHocs = compose(withTheme, withQueryClient);
