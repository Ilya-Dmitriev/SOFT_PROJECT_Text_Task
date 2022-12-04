import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
  isLoading: false,
  error: "",
};

export const authSlise = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
    },
    authFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.authToken = action.payload;
    },
    authFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearAuthTocken(state) {
      state.authToken = "";
    },
  },
});

export default authSlise.reducer;
