import { BiLogIn } from 'react-icons/bi'
import Card from '../../components/card/Card'
import styles from './auth.module.scss'

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { validateEmail } from '../../redux/features/auth/authService'
import { login, RESET } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'

const initialState = {
  email:"",
  password:"",
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const {email,password} = formData

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  };

  // Khai báo biến dispatch để gửi action lên Redux store
  const dispatch = useDispatch()
  //Khai báo biến navigate để điều hướng trang
  const navigate = useNavigate()

  //Trích xuất các trạng thái từ Redux store
  const {isLoading, isLoggedIn, isSuccess, message, isError , twoFactor} = useSelector((state) => state.auth)
  

  const loginUser = async (e) => {
    e.preventDefault() 

    if( !email || !password){
      return toast.error('All fields are required')
    }
    if(!validateEmail){
      return toast.error('Please enter a valid email')
    }

    //Tạo đối tượng userData chứa thông tin người dùng
    const userData = {
      email,password
    }

    // Gửi action login với userData lên Redux store
    await dispatch(login(userData))
  }

  // Hook useEffect để theo dõi sự thay đổi của các trạng thái isSuccess và isLoggedIn
  useEffect(() => {
    if(isSuccess && isLoggedIn){
      // Điều hướng đến trang profile
      navigate('/profile')
    }

    // Gửi action RESET để reset trạng thái trong Redux store
    dispatch(RESET())
  },[isLoggedIn, isSuccess, dispatch, navigate, isError, twoFactor, email ]) // Các biến mà useEffect phụ thuộc

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader/>}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>

          <h2>Login</h2>

          <div className="--flex-center">
            <button className="--btn --btn-google">
              Login with Google
            </button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />

            <PasswordInput 
              placeholder="Password" 
              name="password" 
              value={password} 
              onChange={handleInputChange} 
            />

            {/* <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            /> */}
            
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>

          <Link to="/forgot">Forgot Password</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p>&nbsp; Don't have an account? &nbsp; </p>
            <Link to="/register">Register</Link>
          </span>

        </div>
      </Card>
    </div>
  )
}

export default Login
