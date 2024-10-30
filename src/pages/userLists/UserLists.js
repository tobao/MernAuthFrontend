import React from 'react'
import PageMenu from '../../components/pagemenu/PageMenu'
import './UserLists.scss'
import UserStats from '../../components/userStats/UserStats'
import Search from '../../components/search/Search'

const UserLists = () => {
  return (
    <section>
      <div className="container">
        <PageMenu/>
        <UserStats/>
        <div className="user-list">
          <div className="--flex-between">
            <span>
              <h3>All Users</h3>
            </span>
            <span>
              <Search/>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserLists