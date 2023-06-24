import React from 'react';

import moment from 'moment-timezone';
import Typography from '@mui/material/Typography';

export const CityTime: React.FC<{ timezone: string }> = ({ timezone }: { timezone: string }) => {
  const dateTime = moment().tz(timezone).format('DD/MM/YYYY hh:mm');
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {dateTime}
    </Typography>
  );
};
