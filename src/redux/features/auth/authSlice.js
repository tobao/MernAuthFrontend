import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { toast } from 'react-toastify'

const initialState = {
  isLoggedIn: false,
  user:null,
  users:[],
  twoFactor:false,
  isError:false,
  isSuccess: false,
  isLoading: false,
  message:'',
  verifiedUsers: 0,
  suspendedUsers: 0,
}

//Register User
export const register = createAsyncThunk('auth/register',
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData)
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message ) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.twoFactor=false;
      state.isError=false;
      state.isSuccess= false;
      state.isLoading= false;
      state.message='';
    }
  },
  extraReducers: (builder) => {
    builder
    //Register User 
    .addCase(register.pending, (state,action)=>{
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state,action)=> {
      state.isLoading = false;
      state.isSuccess= true;
      state.isLoggedIn=true;
      state.user= action.payload;
      console.log(action.payload)
      toast.success('Registration successful');
    })
    .addCase(register.rejected, (state,action)=> {
      state.isLoading = false;
      state.isError= true;
      state.message=action.payload;
      state.user= null;
      toast.error(action.payload);
    })
  }
})

export const {RESET} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
//Selector này được sử dụng để trích xuất giá trị của thuộc tính isLoggedIn từ slice "auth" trong Redux store. Selector là một cách tiện lợi để truy xuất dữ liệu từ Redux store mà không cần phải lặp lại nhiều lần cú pháp truy cập state trong các component của bạn.

export default authSlice.reducer