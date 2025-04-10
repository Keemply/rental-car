import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  status: {
    brand: "",
    price: "",
    carMileage: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
});

export default filtersSlice.reducer;
