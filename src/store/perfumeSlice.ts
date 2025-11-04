import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PerfumeState = {
  perfumes: [],
  status: "idle",
  error: null
};

// Async thunk to fetch perfumes
export const fetchPerfumes = createAsyncThunk("perfumes/fetchPerfumes", async () => {
  const res = await fetch("/data/perfumes.json");
  if (!res.ok) throw new Error("Failed to fetch perfumes");
  return (await res.json()) as Perfume[];
});

const perfumeSlice = createSlice({
  name: "perfumes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPerfumes.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchPerfumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.perfumes = action.payload;
      })
      .addCase(fetchPerfumes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error fetching perfumes";
      });
  }
});

export default perfumeSlice.reducer;
