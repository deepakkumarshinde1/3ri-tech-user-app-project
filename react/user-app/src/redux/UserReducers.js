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
  reducers: {
    inputChange: (state, action) => {
      let { name, value } = action.payload;
      console.log(name, value);
      state.newUser[name] = value;
    },
    saveUser: (state) => {
      state.users.push({ ...state.newUser }); // added user
    },
    resetFrom: (state) => {
      state.newUser = { ...userDefaultData };
    },
    deleteUser: (state, action) => {
      let { id } = action.payload;
      state.users.splice(id, 1); // index , deleteCount
    },
  },
});

export default UserSlice.reducer;
export const { inputChange, saveUser, resetFrom, deleteUser } =
  UserSlice.actions;
