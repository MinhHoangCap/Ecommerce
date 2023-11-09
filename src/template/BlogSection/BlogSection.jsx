import React from 'react'
import Right_Arrow from '../Right_Arrow'
import Slider from 'react-slick'
import "./BlogSection.css"
export default function BlogSection() {
    const values_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    
    <div className="Blog_Section">
        <div className="Blog_heading">
            <div className="heading">Articles</div>
            <a href="">More Action <Right_Arrow/></a>
        </div>
        <div className="Blog_slides">
            <Slider {...values_settings}>
                <div className="Blog__element">
                    <div className="Blog__image">
                        <img src="" alt="" />
                    </div>
                    <div className="Blog__info">
                        <div className="Blog__title">
                        7 ways to decor your home
                        </div>
                        <a href="">Read more <Right_Arrow/></a>
                    </div>
                </div>
                <div className="Blog__element">
                    <div className="Blog__image">
                        <img src="" alt="" />
                    </div>
                    <div className="Blog__info">
                        <div className="Blog__title">
                        7 ways to decor your home
                        </div>
                        <a href="">Read more <Right_Arrow/></a>
                    </div>
                </div>
                <div className="Blog__element">
                    <div className="Blog__image">
                        <img src="" alt="" />
                    </div>
                    <div className="Blog__info">
                        <div className="Blog__title">
                        7 ways to decor your home
                        </div>
                        <a href="">Read more <Right_Arrow/></a>
                    </div>
                </div>
                <div className="Blog__element">
                    <div className="Blog__image">
                        <img src="" alt="" />
                    </div>
                    <div className="Blog__info">
                        <div className="Blog__title">
                        7 ways to decor your home
                        </div>
                        <a href="">Read more <Right_Arrow/></a>
                    </div>
                </div>
                <div className="Blog__element">
                    <div className="Blog__image">
                        <img src="" alt="" />
                    </div>
                    <div className="Blog__info">
                        <div className="Blog__title">
                        7 ways to decor your home
                        </div>
                        <a href="">Read more <Right_Arrow/></a>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
