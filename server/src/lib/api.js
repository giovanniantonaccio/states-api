import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/',
});

export const apiPopulation = axios.create({
  baseURL: 'http://jurema-server2:3333/',
});
