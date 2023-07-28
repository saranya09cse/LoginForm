import React from 'react';
import {AiOutlineClose} from "react-icons/ai"

const Reset = ({ onLogin }) => {
  return (
    <div className='main --flex-center'>
    <div className='form-container reset'>
      <form className='--form-control'>
          <h2 className='--color-danger'>Reset Password</h2>
           <input type="email" className='--width-100'
          placeholder='Enter an email'/>
          <button className='--btn --btn-primary --btn-block' onClick={onLogin}>Reset Password</button>
          <span className='--text-sm.--block'> <a href="#" className='--text-sm'>We will send you a reset link!!</a></span>
          <div className='close' onClick={onLogin}>
            <AiOutlineClose />
          </div>
      </form>
    </div>
  </div>
  )
}

export default Reset
