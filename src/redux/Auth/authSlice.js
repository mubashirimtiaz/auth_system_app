import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, ThunkApi) => {
    const { email, password } = payload;
    const response = await axios.post("/login", {
      email,
      password,
    });
    const data = await response.data;
    return data;
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [login.fulfilled]: (state, action) => {
      const {
        user_type,
        data: { token },
      } = action.payload;
      state.user = user_type;
      state.token = token;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { login } = authSlice.actions;

export default authSlice.reducer;
