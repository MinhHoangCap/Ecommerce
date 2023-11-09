import React from 'react'
import { Login } from './Login'
import { Register } from './Register'

export default function FormPopUp(props) {
  return (
    
      
          <div className="PopUP">
          {(props.isLogin)?(
            <Login/>
          ):(<Register/>)}
          </div>

    )
}
