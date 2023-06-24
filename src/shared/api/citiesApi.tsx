import axios from 'axios';

const BASE_URL_CITIES = 'https://api.teleport.org/api/';

const getCitiesList = (): Promise<void> => {
  return axios.get(`${BASE_URL_CITIES}cities`).then((res) => res.data);
};

const getCityTimeZone = (url: string): Promise<void> => {
  return axios.get(`${url}?embed=city:timezone`).then((res) => res.data);
};

export { getCitiesList, getCityTimeZone };
