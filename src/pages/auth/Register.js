import { BiLogIn } from 'react-icons/bi'
import {BsCheck2All} from 'react-icons/bs'
import Card from '../../components/card/Card'
import styles from './auth.module.scss'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { FaTimes } from 'react-icons/fa'

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
}

const Register = () => {
  const [formData, setFormData] = useState(initialState)
  const { name, email, password, password2 } = formData

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

  const loginUser = () => {}

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>

          <h2>Register</h2>

          <form onSubmit={loginUser}>
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
            <Link to="/register">Login</Link>
          </span>

        </div>
      </Card>
    </div>
  )
}

export default Register