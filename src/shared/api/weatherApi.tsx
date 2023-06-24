import axios from 'axios';

const WEATHER_APP_ID = '2951f773a417f657feea05413e3933b8'; // bad practice to save keys in code, but let it be because it is testing project
const WEATHER_API = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});
const getForecast = (lat: number, lon: number): Promise<void> => {
  return WEATHER_API.get(
    `onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&cnt=3&appid=${WEATHER_APP_ID}&units=metric`
  ).then((res) => res.data);
};

export { getForecast };
