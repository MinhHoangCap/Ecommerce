import React from 'react'
import { Login } from '../Login'
import { Register } from '../Register'
import "./FormPopUp.css"
export default function FormPopUp(props) {
  return (
          <div className="PopUp">
            <div className="img_form">
              <div className="logo">
                <img src={props.logo} alt="" />
              </div>
              <img src={props.img_form} alt="" loading='lazy'/>
            </div>
            {(props.isLogin)?(
              <Login/>
            ):(<Register/>)}
          </div>

    )
}
