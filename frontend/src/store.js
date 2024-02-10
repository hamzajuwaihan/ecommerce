import { configureStore } from "@reduxjs/toolkit";
import featuredProductsReducer from "./features/featuredProductsSlice";
import categoriesReducer from "./features/categoriesSlice";

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsReducer,
    categories: categoriesReducer,
  },
});

export default store;
