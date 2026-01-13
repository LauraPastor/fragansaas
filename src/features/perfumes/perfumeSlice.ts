import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Perfume {
  id: number;
  name: string;
  brand: string;
  price: number;
  notes: string[];
  image: string;
}

interface PerfumeState {
  perfumes: Perfume[];
  filteredPerfumes: Perfume[];
  status: "idle" | "loading" | "succeeded" | "failed";
  filters: {
    brand: string;
    maxPrice: number | null;
    note: string;
  };
}

const initialState: PerfumeState = {
  perfumes: [],
  filteredPerfumes: [],
  status: "idle",
  filters: {
    brand: "",
    maxPrice: null,
    note: "",
  },
};

export const fetchPerfumes = createAsyncThunk(
  "perfumes/fetchPerfumes",
  async () => {
    const response = await fetch("/data/perfumes.json");
    if (!response.ok) throw new Error("Failed to fetch perfumes");
    const data: Perfume[] = await response.json();
    return data;
  }
);

const perfumeSlice = createSlice({
  name: "perfumes",
  initialState,
  reducers: {
    setBrandFilter(state, action: PayloadAction<string>) {
      state.filters.brand = action.payload;
      state.filteredPerfumes = applyFilters(state);
    },
    setPriceFilter(state, action: PayloadAction<number | null>) {
      state.filters.maxPrice = action.payload;
      state.filteredPerfumes = applyFilters(state);
    },
    setNoteFilter(state, action: PayloadAction<string>) {
      state.filters.note = action.payload;
      state.filteredPerfumes = applyFilters(state);
    },
    clearFilters(state) {
      state.filters = { brand: "", maxPrice: null, note: "" };
      state.filteredPerfumes = state.perfumes;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerfumes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPerfumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.perfumes = action.payload;
        state.filteredPerfumes = action.payload;
      })
      .addCase(fetchPerfumes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

function applyFilters(state: PerfumeState) {
  return state.perfumes.filter((p) => {
    const matchesBrand = state.filters.brand
      ? p.brand === state.filters.brand
      : true;
    const matchesPrice = state.filters.maxPrice
      ? p.price <= state.filters.maxPrice
      : true;
    const matchesNote = state.filters.note
      ? p.notes.some((n) =>
          n.toLowerCase().includes(state.filters.note.toLowerCase())
        )
      : true;
    return matchesBrand && matchesPrice && matchesNote;
  });
}

export const { setBrandFilter, setPriceFilter, setNoteFilter, clearFilters } =
  perfumeSlice.actions;
export default perfumeSlice.reducer;
