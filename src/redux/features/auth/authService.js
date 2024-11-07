import axios from 'axios'  
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const API_URL = `${BACKEND_URL}/api/users/`

// Validate email
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

//Register User 
const register = async (userData) => {
  //Gửi yêu cầu HTTP POST đến endpoint API_URL + 'register' với dữ liệu userData. (Gửi yêu cầu đăng ký người dùng mới đến server)
  const response = await axios.post(API_URL + 'register', userData)
  return response.data //Chờ phản hồi từ server và trả về dữ liệu phản hồi (response.data).
}

//Login User 
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  return response.data 
}

//Get Login Status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + 'getLoginStatus')
  return response.data
}

//Logout User
const logout = async () => {
  const response = await axios.get(API_URL + 'logout')
  return response.data.message
}

//Get user profile
const getUser = async () => {
  const response = await axios.get(API_URL + 'getUser')
  return response.data
}

//Update profile
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + 'updateUser', userData)
  return response.data
}

// Tạo đối tượng authService chứa các hàm dịch vụ
const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  updateUser
}

export default authService