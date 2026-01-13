import { configureStore } from "@reduxjs/toolkit";
import perfumeReducer from "../features/perfumes/perfumeSlice";
import cartReducer from "../features/cart/cartSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    perfumes: perfumeReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
