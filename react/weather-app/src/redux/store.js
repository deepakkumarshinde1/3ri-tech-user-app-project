import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./CombineReducer";
import { rootSaga } from "./saga/rootSaga";

let sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
