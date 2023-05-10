import { call, put } from "redux-saga/effects";
import {
  getProductDetailsService,
  getWeatherDetailsByCity,
} from "./weatherService";
import { saveWeatherDetails } from "../reducers/WeatherReducer";
import { saveProductDetails } from "../reducers/ProductReducer";

export function* getWeatherDetailsByCityHandler(action) {
  console.log(action);
  // call
  try {
    let { data } = yield call(getWeatherDetailsByCity, action.payload);
    // put
    yield put(saveWeatherDetails(data));
  } catch (error) {
    yield put(saveWeatherDetails(null));
    console.log(error);
  }
}

export function* getProductDetailsHandler() {
  // call
  try {
    let { data } = yield call(getProductDetailsService);
    // put
    yield put(saveProductDetails(data));
  } catch (error) {
    yield put(saveProductDetails([]));
    console.log(error);
  }
}
// call , bind ,apply
