import React, { useState } from 'react'
import Reset from './Reset';
import Login from './Login';
import Register from './Register';

import "./AuthContainer.css";

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false
  })
  // const [login,setLogin] = useState(true)
  // const [register,setRegister] = useState(false)
  // const [reset,setReset] = useState(false)

  const handleRegister = () => {
    setAuth({
      login: false,
      register: true,
      reset: false
    })
    //  setLogin(false);
    //  setRegister(true)
    //  setReset(false)
  }
  const handlereset = () => {
    setAuth({ 
      login: false,
      register: false,
      reset: true
    })
    // setLogin(false)
    // setReset(true)
    // setRegister(false)
  }
  const handlelogin = () => {
    setAuth({ 
      login: true,
      register: false,
      reset: false})
    // setLogin(true)
    // setRegister(false)
    // setReset(false)
  }
  return (
    <section className='main-container --flex-center --100vh --bg-grey'>
        <div className='container box'>
              { auth.login && <Login onRegister={handleRegister} onReset={handlereset} /> }
              { auth.register && <Register onLogin={handlelogin}/> }
              { auth.reset && <Reset onLogin={handlelogin}/> }
        </div>
      
    </section>
  )
}

export default AuthContainer
