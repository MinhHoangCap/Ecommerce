import React from 'react'
import "./NotificationBar.css"
import Right_Arrow from '../../template/Right_Arrow'
export const NotificationBar = () => {
  return (
    <div className="NotificationBar">
        <div className="PercentIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.0181 14.8356L20.7727 15.5444H20.7727L21.0181 14.8356ZM21.0181 9.16437L21.2635 9.8731V9.8731L21.0181 9.16437ZM2.98189 14.8356L3.22727 15.5444H3.22727L2.98189 14.8356ZM2.98189 9.16437L2.73652 9.8731L2.73652 9.8731L2.98189 9.16437ZM15.5303 9.53033C15.8232 9.23744 15.8232 8.76256 15.5303 8.46967C15.2374 8.17678 14.7626 8.17678 14.4697 8.46967L15.5303 9.53033ZM8.46967 14.4697C8.17678 14.7626 8.17678 15.2374 8.46967 15.5303C8.76256 15.8232 9.23744 15.8232 9.53033 15.5303L8.46967 14.4697ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 3.75C19.7949 3.75 21.25 5.20507 21.25 7H22.75C22.75 4.37665 20.6234 2.25 18 2.25V3.75ZM6 2.25C3.37665 2.25 1.25 4.37665 1.25 7H2.75C2.75 5.20507 4.20507 3.75 6 3.75V2.25ZM21.2635 14.1269C20.3815 13.8216 19.75 12.9836 19.75 12H18.25C18.25 13.6424 19.3054 15.0363 20.7727 15.5444L21.2635 14.1269ZM19.75 12C19.75 11.0164 20.3815 10.1784 21.2635 9.8731L20.7727 8.45565C19.3054 8.96367 18.25 10.3576 18.25 12H19.75ZM4.25 12C4.25 12.9836 3.61845 13.8216 2.73652 14.1269L3.22727 15.5444C4.69461 15.0363 5.75 13.6424 5.75 12H4.25ZM2.73652 9.8731C3.61845 10.1784 4.25 11.0164 4.25 12H5.75C5.75 10.3576 4.69462 8.96367 3.22727 8.45565L2.73652 9.8731ZM22.75 8V7H21.25V8H22.75ZM21.25 16V17H22.75V16H21.25ZM1.25 16V17H2.75V16H1.25ZM2.75 8V7H1.25V8H2.75ZM18 20.25H6V21.75H18V20.25ZM18 2.25H6V3.75H18V2.25ZM2.73652 14.1269C2.05785 14.3619 1.25 14.9975 1.25 16H2.75C2.75 15.9441 2.77081 15.8708 2.85172 15.7813C2.9366 15.6873 3.06974 15.5989 3.22727 15.5444L2.73652 14.1269ZM21.2635 9.8731C21.9422 9.63813 22.75 9.00246 22.75 8H21.25C21.25 8.05587 21.2292 8.12917 21.1483 8.21871C21.0634 8.31265 20.9303 8.40111 20.7727 8.45565L21.2635 9.8731ZM3.22727 8.45565C3.06974 8.40111 2.9366 8.31265 2.85172 8.21871C2.77081 8.12917 2.75 8.05587 2.75 8H1.25C1.25 9.00246 2.05785 9.63813 2.73652 9.8731L3.22727 8.45565ZM20.7727 15.5444C20.9303 15.5989 21.0634 15.6873 21.1483 15.7813C21.2292 15.8708 21.25 15.9441 21.25 16H22.75C22.75 14.9975 21.9422 14.3619 21.2635 14.1269L20.7727 15.5444ZM9.25 9C9.25 9.13807 9.13807 9.25 9 9.25V10.75C9.9665 10.75 10.75 9.9665 10.75 9H9.25ZM9 9.25C8.86193 9.25 8.75 9.13807 8.75 9H7.25C7.25 9.9665 8.0335 10.75 9 10.75V9.25ZM8.75 9C8.75 8.86193 8.86193 8.75 9 8.75V7.25C8.0335 7.25 7.25 8.0335 7.25 9H8.75ZM9 8.75C9.13807 8.75 9.25 8.86193 9.25 9H10.75C10.75 8.0335 9.9665 7.25 9 7.25V8.75ZM15.25 15C15.25 15.1381 15.1381 15.25 15 15.25V16.75C15.9665 16.75 16.75 15.9665 16.75 15H15.25ZM15 15.25C14.8619 15.25 14.75 15.1381 14.75 15H13.25C13.25 15.9665 14.0335 16.75 15 16.75V15.25ZM14.75 15C14.75 14.8619 14.8619 14.75 15 14.75V13.25C14.0335 13.25 13.25 14.0335 13.25 15H14.75ZM15 14.75C15.1381 14.75 15.25 14.8619 15.25 15H16.75C16.75 14.0335 15.9665 13.25 15 13.25V14.75ZM14.4697 8.46967L8.46967 14.4697L9.53033 15.5303L15.5303 9.53033L14.4697 8.46967Z" fill="#141718"/>
            </svg>
        </div>
        <div className="NotificationContent">30% off storewide — Limited time!</div>
        <a className='linkToShop' href="">
            Shop Now <Right_Arrow/> 
        </a>
    </div>
  )
}
