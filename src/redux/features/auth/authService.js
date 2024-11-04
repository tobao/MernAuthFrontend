import axios from 'axios'  
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const API_URL = `${BACKEND_URL}/api/users/`

//Register User 
const register = async (userData) => {
  //Gửi yêu cầu HTTP POST đến endpoint API_URL + 'register' với dữ liệu userData. (Gửi yêu cầu đăng ký người dùng mới đến server)
  const response = await axios.post(API_URL + 'register', userData)
  return response.data //Chờ phản hồi từ server và trả về dữ liệu phản hồi (response.data).
}

// Tạo đối tượng authService chứa các hàm dịch vụ
const authService = {
  register
}

export default authService