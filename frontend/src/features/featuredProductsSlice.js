import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  featuredProducts: [],
  loading: false,
  error: null,
};

const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetchFeaturedProducts",
  async () => {
    const response = await fetch(`http://localhost:3001/api/products`);
    const data = await response.json();

    return data;
  }
);

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredProducts = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export { fetchFeaturedProducts }; // Exporting the thunk separately
export default featuredProductsSlice.reducer;
