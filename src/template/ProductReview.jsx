import React from 'react'
import RatingStar from './RatingStar'

export default function ProductReview() {
  return (
    <>
        <div className="ProductRating">
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
            <RatingStar/>
        </div>
        <div className="ReviewCount">
            <div className="ReviewNumber"></div> Reviews
        </div>
    </>
  )
}
