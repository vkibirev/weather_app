export type TCitiesResponse = {
  _embedded: {
    [key: string]: Array<{ matching_full_name: string }>;
  };
};

export type TCityFromListObject = {
  matching_full_name: string;
};

export type TCityCardProps = {
  cityName: string;
};
