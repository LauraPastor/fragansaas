import { configureStore } from "@reduxjs/toolkit";
import perfumeReducer from "./perfumeSlice";

export const store = configureStore({
  reducer: {
    perfumes: perfumeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
