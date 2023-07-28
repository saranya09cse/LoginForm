import React from 'react';
import './AuthContainer';

const Register = ({onLogin}) => {
  return (
    <div className='main --flex-center'>
      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger'>Register</h2>
            <input type="text" className='--width-100'
            placeholder='Username'/>
             <input type="email" className='--width-100'
            placeholder='Enter an email'/>
            <input type="password" className='--width-100'
            placeholder='Password'/>
            <button className='--btn --btn-primary --btn-block' >Register</button>
            <span className='--text-sm.--block'>Have an account? <a href="#" className='--text-sm' onClick={onLogin}>Login</a></span>
        </form>
      </div>
    </div>
  )
}

export default Register
