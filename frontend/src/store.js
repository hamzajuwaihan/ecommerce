import { configureStore } from "@reduxjs/toolkit";
import featuredProductsReducer from "./features/featuredProductsSlice";

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsReducer,
  },
});

export default store;
