import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filtersSlise";
const initialState = {
  brands: [],
  filters: {
    brand: "",
    price: "",
    carMileage: "",
  },
  favourites: [],
};

export const store = configureStore({
  reducer: filterSlice,
});
