import React, { useState } from 'react'
import './Profile.scss'
import Card from '../../components/card/Card'
import profileImg from '../../assets/avatarr.png'
import PageMenu from '../../components/pagemenu/PageMenu'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUsers'

const initialState = {
  name: 'Bao',
  email: 'tobao97@gmail.com',
  phone: '',
  bio: '',
  photo: '',
  role: '',
  isVerified: false
}

const Profile = () => {
  useRedirectLoggedOutUser('/login')

  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {
    
  }

  const handleInputChange = () => {
    
  }

  const saveProfile = () => {

  }

  return (
    <>
      <section>
        <div className='container'>
          <PageMenu/>
          <div className="--flex-center profile">
            <h2>Profile</h2>
          </div>
          
          <div className="--flex-center profile">
            <Card cardClass={'card'}> 
              <div className="profile-photo">
                <div>
                  <img src={profileImg} alt="Profileimg" />
                  <h3>Role: Subscriber</h3>
                </div>
              </div>
              <form onSubmit={saveProfile}>
                <p>
                  <label >Change Photo:</label>
                  <input type="file" accept='image/*' onChange={handleImageChange} />
                </p>
                <p>
                  <label >Name:</label>
                  <input type="text" name='name' value={profile?.name} onChange={handleInputChange} />
                </p>
                <p>
                  <label >Email:</label>
                  <input type="email" name='email' value={profile?.email} onChange={handleInputChange} disabled/>
                </p>
                <p>
                  <label >Phone:</label>
                  <input type="text" name='phone' value={profile?.phone} onChange={handleInputChange}/>
                </p>
                <p>
                  <label >Bio:</label>
                  <textarea name="bio" value={profile?.bio} onChange={handleInputChange} cols='30' rows='10'></textarea>
                </p>
                <button className='--btn --btn-primary --btn-block'>
                  Update Profile
                </button>
              </form>
            </Card>
                    
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Profile