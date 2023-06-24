type TLinks = {
  'city:item': { href: string };
};

export type TCityFromListObject = {
  matching_full_name: string;
  _links: TLinks;
};

export type TCitiesResponse = {
  _embedded: {
    [key: string]: Array<TCityFromListObject>;
  };
};

export type TCitiyWithTZResponse = {
  _embedded: { [key: string]: { iana_name: string } };
  location: { latlon: { latitude: number; longitude: number } };
};

export type TCityCardProps = {
  cityName: string;
  link: TLinks;
};

export type TCityRouteParams = {
  lat: string;
  lon: string;
  city: string;
};
