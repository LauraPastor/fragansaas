import { configureStore } from "@reduxjs/toolkit";
import perfumeReducer from "./perfumeSlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    perfumes: perfumeReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
