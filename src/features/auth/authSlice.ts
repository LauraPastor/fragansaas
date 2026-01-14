import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  showLoginModal: boolean;
  status: "idle" | "loading" | "authenticated" | "error";
  error: string | null;
}

/**
 * Optional: restore session from localStorage
 * (safe even if you remove it later)
 */
const storedUser = localStorage.getItem("auth_user");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!storedUser,
  showLoginModal: false,
  status: storedUser ? "authenticated" : "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.status = "loading";
      state.error = null;
    },

    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.showLoginModal = false;
      state.status = "authenticated";
      state.error = null;

      localStorage.setItem("auth_user", JSON.stringify(action.payload));
    },

    loginFailure(state, action: PayloadAction<string>) {
      state.status = "error";
      state.error = action.payload;
      state.user = null;
      state.isAuthenticated = false;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;

      localStorage.removeItem("auth_user");
    },
    openLoginModal(state) {
      state.showLoginModal = true;
    },
    closeLoginModal(state) {
      state.showLoginModal = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  openLoginModal,
  closeLoginModal,
} = authSlice.actions;

export default authSlice.reducer;
