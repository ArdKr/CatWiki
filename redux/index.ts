import { configureStore } from "@reduxjs/toolkit";

import BreedsReducer from "./breedsSlice";

export const store = configureStore({
  reducer: {
    catBreeds: BreedsReducer,
  },
});
