import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  id: number;
  name: string;
  brand: string;
  image: string;
  price?: number;
  notes?: string[];
}

interface FavoritesState {
  items: FavoriteItem[];
}

const storedFavorites = localStorage.getItem("favorites");
const initialState: FavoritesState = {
  items: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<FavoriteItem>) {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
