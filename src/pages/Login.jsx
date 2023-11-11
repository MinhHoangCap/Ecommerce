import React from 'react'

export const Login = () => {
  function loginSubmit(){

  }
  return (
    <form onSubmit={loginSubmit} className='pageLogin'>
      <div className="formLogin">
        <h3>Sign up</h3>
        <div className="line">
          <p>Already have an account?</p>
          <a href="">Sign in</a>
        </div>
        <input type="text" placeholder='Your Name' name="name" />
        <input type="text" placeholder='Username' name="name" />
        <input type="email" placeholder='Email address' name="email"/>
        <input type="password" placeholder='Password' name="password" id="" />
        <div className="line">
          <input type="checkbox" name="isAgree" id="" />
          <p>I agree with Privacy Policy and Terms of Use</p>
        </div>
        <button className='submit_btn' type="submit">Sign Up</button>
      </div>
    </form>
  )
}
