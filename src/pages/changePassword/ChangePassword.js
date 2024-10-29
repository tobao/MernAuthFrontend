import React, { useState } from 'react'
import './ChangePassword.scss'
import PageMenu from '../../components/pagemenu/PageMenu'
import Card from '../../components/card/Card'
import PasswordInput from '../../components/passwordInput/PasswordInput'

const initialState = {
  oldPassword:'',
  password:'',
  password2:'',
}

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState)
  const {oldPassword, password, password2} = formData

  const handleInputChange = () => {

  }
  return (
    <>
      <section>
        <div className='container'>
          <PageMenu/>
          <div div className="--flex-center profile">
            <h2>Change Password </h2>
          </div>

          <div className="--flex-center change-password">
            <Card cardClass={'card'}>
              <form>
                <p>
                  <label>Current Password:</label>
                  <PasswordInput placeholder="Old Password" name="oldPassword" value={oldPassword} onChange={handleInputChange} />
                </p>

                <p>
                  <label>New Password:</label>
                  <PasswordInput placeholder="New Password" name="password" value={password} onChange={handleInputChange} />
                </p>

                <p>
                  <label>Confirm New Password:</label>
                  <PasswordInput placeholder="Confirm Password" name="password2" value={password2} onChange={handleInputChange} />
                </p>

                <button className="--btn --btn-danger --btn-block">
                  Change Password
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChangePassword