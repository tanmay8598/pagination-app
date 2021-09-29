import React from 'react'

const User = ({ login, html_url, avatar_url }) => {
  return (
    <div className='user'>
      <img src={avatar_url} alt='' />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>
        View Profile
      </a>
    </div>
  )
}

export default User
