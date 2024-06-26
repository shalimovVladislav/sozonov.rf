import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/slices/index';

interface authenticationState {
  isAuth: boolean
}

const initialState: authenticationState = {
  isAuth: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuth(state) {
      state.isAuth = true;
    },
    clearAuth(state) {
      state.isAuth = false;
    },
  },
});

export const { setAuth, clearAuth } = authenticationSlice.actions;

export const selectAuthentication = (state: RootState) => state.authentication.isAuth

export default authenticationSlice.reducer;