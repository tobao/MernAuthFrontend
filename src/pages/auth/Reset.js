import React, { useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import { MdPassword } from 'react-icons/md'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import { Link } from 'react-router-dom'

const initialState = {
  password:"",
  password2:"",
}

const Reset = () => {

  const [formData, setFormData] = useState(initialState)
  //formData, setFormData: Quản lý trạng thái của các trường nhập liệu trong form.

  const {password, password2} = formData
  //Destructuring formData: Lấy ra các giá trị password, và password2 từ formData.

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const reset = () => {
    
  }

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>

          <div className="--flex-center">
            <MdPassword size={35} color='#999'/>
          </div>

          <h2>Reset Password</h2>

          <form onSubmit={reset}>
            <PasswordInput placeholder='Password' name='password' value={password} onChange={handleInputChange} />
            <PasswordInput placeholder='Confirm Password' name='password2' value={password2} onChange={handleInputChange} />

            <button type='submit' className="--btn --btn-primary --btn-block">
              Reset Password
            </button>

            <div className={styles.links}>
              <p>
                <Link to='/'>-Home</Link>
              </p>
              <p>
                <Link to='/login'>Login-</Link>
              </p>
          </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Reset