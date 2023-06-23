import axios from 'axios';

const CITIES_API = axios.create({
  baseURL: 'https://api.teleport.org/api/',
});

const getCitiesList = (): Promise<any> => {
  return CITIES_API.get('cities').then((res) => res.data);
};

export { getCitiesList };
