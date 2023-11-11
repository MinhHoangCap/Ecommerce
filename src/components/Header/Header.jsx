import React from 'react'
import { NotificationBar } from '../NotificationBar/NotificationBar'
import { HeroSlider } from '../HeroSlider/HeroSlider'
// import from ''
// import {Container,Row,Col} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormPopUp from '../../pages/FormPopUp/FormPopUp'
import NavigationBar from '../NavigationBar/NavigationBar'
// import HeaderCss from "./Header.module.css"
export const Header = (props) => {
    //logo
  return (
    <header className='header'>
        <NotificationBar/>
        <NavigationBar logo={props.logo}/>
        <FormPopUp isLogin={true} isShow={false} logo={props.logo} img_form={props.img_form}/>
        
    </header>
  )
}
