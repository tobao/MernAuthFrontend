import React from 'react'
import PageMenu from '../../components/pagemenu/PageMenu'
import './UserLists.scss'
import UserStats from '../../components/userStats/UserStats'

const UserLists = () => {
  return (
    <section>
      <div className="container">
        <PageMenu/>
        <UserStats/>
      </div>
    </section>
  )
}

export default UserLists