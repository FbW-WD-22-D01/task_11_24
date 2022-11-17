import * as React from 'react'
import './Register.css'

export default function Register (props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const submit = async (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form className='Register' onSubmit={submit}>
      <h3>Registrieren</h3>
      <input type='text' placeholder='Name...' value={name} onChange={e => setName(e.target.value)}/>
      <input type='email' placeholder='email...' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' placeholder='Password...' value={password} onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Absenden</button>

      <p onClick={props.onLoginNav} className='link'>to login</p>
    </form>
  )
}