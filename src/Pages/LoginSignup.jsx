import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email"  placeholder='Enter Email'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continues</button>
        <p className='loginsignup-login'>Already have an Account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
        
    </div>
  )
}

export default LoginSignup