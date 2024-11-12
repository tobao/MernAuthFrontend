import {TiUserAddOutline} from 'react-icons/ti'
import {BsCheck2All} from 'react-icons/bs'
import Card from '../../components/card/Card'
import styles from './auth.module.scss'

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { validateEmail } from '../../redux/features/auth/authService'

import {useDispatch, useSelector} from "react-redux"
import { RESET, register, sendVerificationEmail } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)
  const { name, email, password, password2 } = formData

    // Khai báo biến dispatch để gửi action lên Redux store
    const dispatch = useDispatch()
    //Khai báo biến navigate để điều hướng trang
    const navigate = useNavigate()

      //Trích xuất các trạng thái từ Redux store
  const {isLoading, isLoggedIn, isSuccess} = useSelector((state) => state.auth)

  const [uCase, setUCase] = useState(false)
  const [num, setNum] = useState(false)
  const [sChar, setSChar] = useState(false)
  const [passLenghth, setPassLenghth] = useState(false)

  const timesIcon = <FaTimes color='red' size={15} />
  const checkIcon = <BsCheck2All color='green' size={15} />

  const switchIcon = (condition) => {
    if(condition){
      return checkIcon
    }
    return timesIcon
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(()=>{
    //Check Lower and Uppercase: match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUCase(true)      
    } else {
      setUCase(false)
    }
    //Check for numbers: match(/([0-9])/) 
    if (password.match(/([0-9])/)) {
      setNum(true)
    } else {
      setNum(false)
    }
    //Check for special character: match(/([!,%,&,@,#,$,^,*,?,_,~])/)
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true)
    } else {
      setSChar(false)
    }
    //Check for password LENGTH
    if (password.length>5) {
      setPassLenghth(true)
    } else {
      setPassLenghth(false)
    }
  },[password])

  //Hàm registerUser được gọi khi form đăng ký được submit.
  const registerUser = async (e) => {
    e.preventDefault() //Ngăn chặn hành vi mặc định của form (ngăn không cho trang reload khi submit).

    if(!name|| !email || !password){
      return toast.error('All fields are required')
    }
    if(password.length<6){
      return toast.error('Password must be up to 6 characters')
    }
    if(!validateEmail(email)){
      return toast.error('Please enter a valid email')
    }
    if(password !== password2 ){
      return toast.error('Password do not match')
    }

    //Tạo đối tượng userData chứa thông tin người dùng
    const userData = {
      name,email,password
    }

    // console.log(userData)
    // Gửi action register với userData lên Redux store
    await dispatch(register(userData))
    await dispatch(sendVerificationEmail())
  }

// Hook useEffect để theo dõi sự thay đổi của các trạng thái isSuccess và isLoggedIn
useEffect(() => {
  console.log("isSuccess:", isSuccess);
  console.log("isLoggedIn:", isLoggedIn);
  // Nếu đăng ký thành công và đã đăng nhập
  if(isSuccess && isLoggedIn){
    // Điều hướng đến trang profile
    navigate('/profile')
  }
  // Gửi action RESET để reset trạng thái trong Redux store
  dispatch(RESET())
},[isLoggedIn, isSuccess, dispatch, navigate]) // Các biến mà useEffect phụ thuộc
  
  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader/>}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>

          <h2>Register</h2>

          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />

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

            <PasswordInput 
              placeholder="Confirm Password" 
              name="password2" 
              value={password2} 
              onChange={handleInputChange} 
              onPaste={(e) => {
                e.preventDefault()
                toast.error('Cannot paste into field')
                return false
              }} 
            />

            {/*Password Strength */}
            <Card cardClass={styles.group}>
              <ul className='form-list'>
                <li>
                  <span className={styles.indicator}>
                    
                    {/* {uCase?checkIcon:timesIcon} */}
                    {switchIcon(uCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(num)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(sChar)}
                    &nbsp; Special Character (!@#%^&8)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passLenghth)}
                    &nbsp; At least 6 Characters
                  </span>
                </li>
              </ul>
            </Card>
            
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p>&nbsp; Already have an account? &nbsp; </p>
            <Link to="/login">Login</Link>
          </span>

        </div>
      </Card>
    </div>
  )
}

export default Register