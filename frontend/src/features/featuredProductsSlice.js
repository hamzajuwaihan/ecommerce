import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  featuredProducts: [],
  loading: false,
  error: null,
};

const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetchFeaturedProducts",
  async () => {
    const response = await fetch(
      `http://localhost:3001/api/products`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  builders: {
    [fetchFeaturedProducts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchFeaturedProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.featuredProducts = action.payload;
    },
    [fetchFeaturedProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export { fetchFeaturedProducts }; // Exporting the thunk separately
export default featuredProductsSlice.reducer;
