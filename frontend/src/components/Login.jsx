import './Login.css'
import * as React from 'react'
import UserDetails from './UserDetails'

export default function Login (props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loggedIn, setLoggedIn] = React.useState(false)

  const submit = async (e) => {
    e.preventDefault()
    console.log('submit')
  }

  if(loggedIn) {
    return <UserDetails />
  }

  return (
    <form className='Login' onSubmit={submit}>
      <h3>Login</h3>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Absenden</button>

      <p onClick={props.onRegisterNav} className='link'>to register</p>
    </form>
  )
}