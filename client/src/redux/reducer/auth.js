import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

// Async thunk for fetching user data
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    console.log("Credential data", response.data);
    return response.data; // Assuming your API returns some data on successful user retrieval
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Handle error
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user; // Set the user data from API response
        state.isAuthenticated = action.payload.success; // Set isAuthenticated based on success field
        state.loading = false;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
