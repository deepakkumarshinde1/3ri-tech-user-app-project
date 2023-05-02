// combine reducers

import { combineReducers } from "@reduxjs/toolkit";
import UserReducers from "./UserReducers";

let reducer = combineReducers({
  user: UserReducers,
});

export default reducer;
