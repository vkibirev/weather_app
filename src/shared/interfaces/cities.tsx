type TLinks = {
  'city:item': { href: string };
};

export type TCityFromListObject = {
  matching_full_name: string;
  _links: TLinks;
};

export type TCityTimeProps = {
  link: TLinks;
};

export type TCitiesResponse = {
  _embedded: {
    [key: string]: Array<TCityFromListObject>;
  };
};

export type TCitiyWithTZResponse = {
  _embedded: { [key: string]: { iana_name: string } };
};

export type TCityCardProps = {
  cityName: string;
  link: TLinks;
};
