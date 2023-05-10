import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "417e5e47e007f7938b48ffa2581405b0";
const UNIT = "metric";

export const getWeatherDetailsByCity = async (city = "") => {
  let url = `${BASE_URL}q=${city}&appid=${API_KEY}&units=${UNIT}`;
  return axios.get(url);
};

export const getProductDetailsService = async () => {
  let url = `https://fakestoreapi.com/products`;
  return axios.get(url);
};
