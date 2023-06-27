import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./slices/courseReducer";

export const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});
