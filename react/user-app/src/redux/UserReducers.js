/// user reducer
import { createSlice } from "@reduxjs/toolkit";

let userDefaultData = {
  fullName: "",
  email: "",
  mobile: "",
  address: "",
  gender: "",
  city: "",
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    newUser: { ...userDefaultData },
  },
  reducers: {},
});
