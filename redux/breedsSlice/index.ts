import { createSlice } from "@reduxjs/toolkit";

const breedsSlice = createSlice({
  name: "cat-breeds",
  initialState: { list: "", loading: true },
  reducers: {
    updateCatBreeds(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
  },
});

export const { updateCatBreeds } = breedsSlice.actions;

export default breedsSlice.reducer;
