import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const getPlanets = (page = 1) => {
  return instance.get(`planets/?page=${page}`).then(response => response.data);
};
