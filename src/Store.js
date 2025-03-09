import { configureStore } from "@reduxjs/toolkit";
import formSlice from './Redux/FormSlice'

export const store = configureStore({
  reducer: {
    form: formSlice,
  },
});
