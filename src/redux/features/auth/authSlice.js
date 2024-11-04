import { createSlice } from '@reduxjs/toolkit'

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
  }
});

export const {RESET} = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
//Selector này được sử dụng để trích xuất giá trị của thuộc tính isLoggedIn từ slice "auth" trong Redux store. Selector là một cách tiện lợi để truy xuất dữ liệu từ Redux store mà không cần phải lặp lại nhiều lần cú pháp truy cập state trong các component của bạn.

export default authSlice.reducer