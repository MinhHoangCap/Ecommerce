import React from 'react'

export const Register = () => {
  function registerUser(){
    
  }
  return (
    <>
    
    <form className='formRegister' onSubmit={registerUser}>
        
        <div className="form__heading">Sign up</div>
            <p>Already have an account? <a href="">Sign in</a></p>
            <input type="text" placeholder='Your name'/>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="checkbox" name="" id="" /> I agree with Privacy Policy and Terms of Use
            <button type="submit">Sign Up</button>
    </form>
    </>
  )
}
