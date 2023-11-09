import React from 'react'

export default function CouponInput() {
  return (
    <div>
        <div className="heading">Have a coupon?</div>
        <div className="subheading">Add your code for an instant cart discount</div>
        <form className="inputCoupon">
            <div className="iconAndInput">
                <div className="icon"></div>
                <input type="text" placeholder='Coupon Code' />
            </div>
            <input type="submit" value='Apply'/>
        </form>
    </div>
  )
}
