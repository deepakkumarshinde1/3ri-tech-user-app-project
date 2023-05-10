import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {
    saveProductDetails: (state, action) => {
      state.productList = action.payload;
    },
    getProductDetails: () => {},
  },
});

export default ProductSlice.reducer;
export const { saveProductDetails, getProductDetails } = ProductSlice.actions;
