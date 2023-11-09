import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footer_content">
            <div className="logo_slogan">
                <div className="logo"></div>
                <p className="slogan">
                    Gift & Decoration Store
                </p>
            </div>
           
                <ul className="footer_nav__list">
                    <li className="footer_nav__item">
                        <a href="">Home</a>
                    </li>
                    <li className="footer_nav__item">
                        <a href="">Shop</a>
                    </li>
                    <li className="footer_nav__item">
                        <a href="">Product</a>
                    </li>
                    <li className="footer_nav__item">
                        <a href="">Blog</a>
                    </li>
                    <li className="footer_nav__item">
                        <a href="">Contact Us</a>
                    </li>
                </ul>
           
        </div>
        <div className="bottom_bar">
            <div className="copy_right">
                <div className="copy_right__caption">
                    Copyright © 2023 3legant. All rights reserved
                </div>
                <div className="privacy">
                    Privacy Policy
                </div>
                <div className="termOfUse">
                    Terms of Use
                </div>
            </div>
            <div className="social_icons">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
                        <circle cx="18" cy="6" r="1" fill="#FEFEFE"/>
                        <circle cx="12" cy="12" r="5" stroke="#FEFEFE" stroke-width="1.5"/>
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="3" width="20" height="18" rx="4" stroke="#FEFEFE" stroke-width="1.5"/>
                        <path d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
  )
}
