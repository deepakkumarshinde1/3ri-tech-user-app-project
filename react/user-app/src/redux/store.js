// create store

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CombineReducer";

const store = configureStore({
  reducer: reducer,
});

export default store;
