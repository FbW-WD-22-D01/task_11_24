import * as React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [mode, setMode] = React.useState('register')
  return (
    <div className='App'>
      {mode === 'login' && <Login onRegisterNav={() => setMode('register')}/>}
      {mode === 'register' && <Register onLoginNav={() => setMode('login')}/>}
    </div>
  )
}

export default App
