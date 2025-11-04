import { configureStore } from "@reduxjs/toolkit";
import perfumeReducer from "./perfumeSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    perfumes: perfumeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
