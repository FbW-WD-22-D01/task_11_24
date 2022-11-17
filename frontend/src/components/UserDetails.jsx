import * as React from 'react'
import './UserDetails.css'

export default function UserDetails () {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  if(loading) return (
    <div className='UserDetails'>
      <h3>loading...</h3>
    </div>
  )

  if(!isLoggedIn) return (
    <div className='UserDetails'>
      <h3>Du bist nicht eingeloggt</h3>
    </div>
  )

  if(hasError) return (
    <div className='UserDetails'>
      <h3>Etwas ist schief gelaufen</h3>
    </div>
  )

  return (
    <div className='UserDetails'>
      <h3>User-Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}