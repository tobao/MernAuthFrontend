import './Header.scss'
import { BiLogIn } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout, RESET } from '../../redux/features/auth/authSlice'

const activeLink = ({isActive}) => (isActive?'ative':'')

const Header = () => {
  const navigate = useNavigate()

  //Sử dụng hook useNavigate để lấy hàm navigate dùng để điều hướng.
  const dispatch = useDispatch()

  const goHome = () => {
    navigate('/')
  }

  const logoutuser = async () => {
    dispatch(RESET())
    await dispatch(logout())
    navigate('/login')
  }
  
  return (
    <header className="header">
    <nav>
      <div className="logo" onClick={goHome}>
        <BiLogIn size={35} />
        <span>AUTH:Z</span>
      </div>

      <ul className="home-links">
        <li className="--flex-center">
          <FaUserCircle size={20} />
        </li>
        <p className="--color-white">Hi, Bao To</p>
        <li>
          <button className="--btn --btn-primary">
            <Link to="/login">Login</Link>
          </button>
        </li>
        <li>
          <NavLink to="/profile" className={activeLink}>
            Profile
          </NavLink>
        </li>
        <li>
          <button onClick={logoutuser} className="--btn --btn-secondary">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header