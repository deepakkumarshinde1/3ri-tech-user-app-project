import { all } from "redux-saga/effects";
import {
  getProductDetailsWatcher,
  getWeatherDetailsByCityWatcher,
} from "./weatherWatcher";

export function* rootSaga() {
  let watchersArray = [
    getWeatherDetailsByCityWatcher(),
    getProductDetailsWatcher(),
  ];
  yield all(watchersArray);
}
