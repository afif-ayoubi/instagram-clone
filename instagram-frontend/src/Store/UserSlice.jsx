import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../Core/tools/request";
import { requestMethods } from "../Core/Enums/requestMethods";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await sendRequest({
        method: requestMethods.POST,
        route: "/register",
        body: credentials,
      });
      if (resp.data.status === "success") {
        localStorage.setItem("token", resp.data.authorisation.token);
        return resp.data;
      } 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
      try {
        const resp = await sendRequest({
          method: requestMethods.POST,
          route: "/login",
          body: credentials,
        });
        if (resp.data.status === "success") {
          localStorage.setItem("token", resp.data.authorisation.token);
          return resp.data;
        }
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred";
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.payload && action.payload.message) {
          state.error = action.payload.message;
        } else {
          state.error = "An error occurred";
        }
      });
  },
});


export default userSlice.reducer;
