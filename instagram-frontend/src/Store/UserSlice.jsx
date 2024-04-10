import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendRequest } from "../Core/tools/request";
import { requestMethods } from "../Core/Enums/requestMethods"; 

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials) => {
    const resp = await sendRequest({
      method: requestMethods.POST,
      route: "/register",
      body: credentials,
    });
    if (resp.data.status === "success") {
      localStorage.setItem("token", resp.data.authorisation.token);
    }
    return resp.data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers:(builder) =>{
    builder.addCase(signupUser.pending,(state)=>{
        state.loading=true;
        state.user=null;
        state.error=null;
    })
    builder.addCase(signupUser.fulfilled,(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.error=null;
    })
    builder.addCase(signupUser.rejected,(state,action)=>{
        state.loading=false;
        state.user=null;
        console.log(action.error.message);
        if(action.error.message==="Request failed with status code 400"){
            state.error="Email already exists";
            return;
        }else if(action.error.message==="Request failed with status code 401"){
            state.error="Invalid email or password";
            return;
        }
        else{
            state.error=action.error.message;

        }
    })
  }
});

export default userSlice.reducer;
