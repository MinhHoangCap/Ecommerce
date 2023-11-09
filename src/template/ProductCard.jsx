import React from 'react'
import AddToWishListIcon from './AddToWishListIcon'
import RatingStar from './RatingStar'
import Right_Arrow from './Right_Arrow'

export default function ProductCard() {
  return (
    <div className="ProductCard">
        <div className="ProductCard__element">
            <div className="ProductCard__image">
                <img src="" alt="" />
            </div>
            <button>Add to cart</button>
            <button><AddToWishListIcon/></button>
            <div className="badges">
                <div className="badge_medium">New</div>
                <div className="badge_medium">-50%</div>

            </div>
        </div>
        <div className="ProductCard__element">
            <div className="ProductCard__infomation">
                <div className="ProductCard__name">Loveseat Sofa</div>
                <div className="ProductCard__rating">
                    <RatingStar/>
                    <RatingStar/>
                    <RatingStar/>
                    <RatingStar/>
                    <RatingStar/>
                </div>
                <div className="ProductCard__prices">
                    <div className="ProductCard__price">
                        $199.00
                    </div>
                    <div className="ProductCard__price sale">
                        $400.00
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}
