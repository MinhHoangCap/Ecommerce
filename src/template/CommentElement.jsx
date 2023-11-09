import React from 'react'
import RatingStar from './RatingStar'

export default function CommentElement() {
  return (
    <div>
        <div className="UserImage">
            <img src="" alt="" />
        </div>
        <div className="CommentContent">
            <div className="UserName">
                Name
            </div>
            <div className="UserRating">
                <RatingStar/>
                <RatingStar/>
                <RatingStar/>
                <RatingStar/>
                <RatingStar/>
            </div>
            <div className="CommentOther">
                <div className="CommentTime">
                    About 1 hours
                </div>
                <div className="LikeBtn">

                </div>
                <div className="ReplyBtn">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
