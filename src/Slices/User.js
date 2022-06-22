import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const userLogin=createAsyncThunk('loginUser',async(userCredentials,thunkApi)=>{
    let response=await axios.post('/user/login',userCredentials);
    let data=response.data;
    // console.log(data);
    if(data.message=='success'){
        localStorage.setItem('token',data.payload.token);
        return data.userObj;
    }
    else{
        return thunkApi.rejectWithValue(data)
    }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    error: "",
  },
  reducers: {
    clearLogin: (state) => {
      state.userObj = null;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.error = "";
      localStorage.setItem("login", false);
      return state;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.isLoading = true;
      
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userObj = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.errMsg = "";
      localStorage.setItem("login", true);
    },
    [userLogin.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      // state.errMsg = action.payload.message;
    },
  },
});

export const {clearLogin}=userSlice.actions;
export default userSlice.reducer