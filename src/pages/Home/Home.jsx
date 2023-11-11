import React, { Component } from 'react'
import { Header } from '../../components/Header/Header'
import { HeroSlider } from '../../components/HeroSlider/HeroSlider'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Right_Arrow from '../../template/Right_Arrow'
import ProductCard from '../../template/ProductCard'
import Footer from '../../template/Footer/Footer'
import FormPopUp from '../FormPopUp/FormPopUp'
import Newsletter from '../../template/Newsletter/Newsletter'
import BlogSection from '../../template/BlogSection/BlogSection'
import Values from '../../components/Values/Values'
import Slider from 'react-slick'
import './Home.css'

export default class Home extends Component {
    
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <>
            
            <HeroSlider/>
            
            <div className="Slogans">
                <div className="Slogan">
                    Simply Unique / Simply Better . 
                </div>
                <div className='Slogan__other'>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </div>
            </div>
    
                
            
            <div className="Category">
                        <div className="CategoryItem big">
                            <img src="https://s3-alpha-sig.figma.com/img/0f43/7165/6ca10f875e8bb034a37e0bc949675849?Expires=1700438400&Signature=RC09rYuFVMwRQSIHAldPpBGsz3JxVJPg6eh1ry7XDAI60ssvk~hZLrm4kJqkrxdWqTrRnKphCBxADU64XYx91yioO6cysIy~RW~xK3bDo6FNOxFQ-kzV165s3bTcM2J1fayaTQEKuhVXSTsqOAxjQdKELFdS9pQvrGmufxGwbKtgFgqyVjPXDDUYt5sDlqI2FHIZCr~wvtD8JOK8Xx4Bk5Vgakwy-i4a-WjwbEs5fIv3XvhpZB0aZG1HznlxfbzWW7VPsDB2VaCJhWs4CrDeJSTFdTAbMdACoyORuEnAgIJreZ-OGVUehwsHd-lMqgoNRxVc1rBZSNG-d45hjDb1zQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            <div className="content">
                                <div className="category_title">Living Room</div>
                                <a href="">
                                    Shop Now <Right_Arrow/>
                                </a>
                            </div>
                        </div>
                        <div className="CategoryItem small">
                            <img src="https://s3-alpha-sig.figma.com/img/c898/ffe2/c0350fd22c758331418f9169ec926583?Expires=1700438400&Signature=l0GYWKVSxiLN3lTrABv3Q4LAmXw-vnpJdjI7y-CUcP3QzpYX28uWpyzrGamNoWKI-sOH~cL7FBafNoOkGHjvZfGQ95wMGsk1z0cbg6uC1FDojFGgbUKmZs6WITbbCZOB0jWfHplrSYsPgKY3jwXrAFOYFwkvMZz9FMD75DdtdXlF5UwOtXQVRtwy30ZBypDeddvNbPK~SDvcJwi3XSWXTHXisCZI8Qp79LGRLQ~8vQ4ZlttEyxDRoc43TbrEFLRkpfcFwT9pfHtdTFuAzjzkrwEXLXTNeS~an5wG-lEZ3i5vZcL3iEUMQ9epaCLdzYkXGnbFukFuXmXVn~QPeauung__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            <div className="content">
                                <h5 className="category_title">Living Room</h5>
                                <a href="">
                                    Shop Now <Right_Arrow/>
                                </a>
                            </div>
                        </div>
                        <div className="CategoryItem small">
                            <img src="https://s3-alpha-sig.figma.com/img/2434/6c06/3eeb4bae1ece56d9ba8a20ca64ab2791?Expires=1700438400&Signature=nA7nJiXfCbI9Gz2oW-Ckid29JiIzfMYh-588jPvsUHaXDOtUA7WUEpBOp55HIgw5ftWNF25XJepAzG--iR7Ld~QRkc24b3fU-RzmFZgGpKmK~mWhH0gO2nqpQbsdkYqyBT6mW6o5CXD51dJfFwPgexyh6M--b-xkTf6sw~G74qVVOHF8XmQtz~98TuQNIERMtWHfGA1-2zSvHWuLMnfTngVLxmOk63o86iCP-KfzgDjCu81UwmuhT8mqrlsLhui8YLRsZcjRPnNdZcWSK3hpYkSR-W46EWvZ6rRXhaysxcTTmZME~q-Nedyuz23NE1tc1Pm6N~SCPdNLZuZPe1UCOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            <div className="content">
                                <div className="category_title">Living Room</div>
                                <a href="">
                                    Shop Now <Right_Arrow/>
                                </a>
                            </div>
                        </div>
            </div>
            {/* New Product slide */}
            <div className="Slide">
                <div className="slideHeading">
                    <div className="slideHeading__title">New Arrivals</div>
                    <a href="">More Produccts <Right_Arrow/></a>
                </div>
                {/* Slick */}
                <Slider {...settings}>
                    {/* <div className="ProductSlide"> */}
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    {/* </div> */}
                </Slider>
            </div>
            <Values/>
            <div className="Banner">
                <div className="Banner__image">
                    <img src="https://s3-alpha-sig.figma.com/img/9f9e/fb2e/4439d804a7b6bed916b72b3bda48939a?Expires=1700438400&Signature=dl73WvUUY9edViBtNoS0LVENyJo4oPQJeK7bNGqS~SmsiNHAxAhg1VjLmp5audKj00bOPoGLTr4ujFwTb6AVJChiFvddoTtsys6jhf6ArKjjIg-b59F71VNcH5liH~NH8FXdQOZ-wGrDf4J4xOY84rHGRZUQpaP4~TBJYyuexcOsD-BO4WZ5PDRQi6qZlHv9bQyYrhHBwC3kHKrBLFc7vece2iJk0ErROZTzYU1m6WdchnmHlXnXEb2k5UwVMR~oBhYk~su3Whm8SJQC1rTkgcUPTpw9WGQ8yF2zaeiD2xqzO67qpKppsb0W2URhrEqAD2eauRk-57t~r8EfXyFVlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
                <div className="Banner__content">
                    <div className="Banner__title">
                        <p className="sale_infomation">
                            SALE UP TO 35% OFF
                        </p>
                        <div className="Banner__heading">
                        HUNDREDS of 
                        New lower prices!   
                        </div>
                        <div className="Banner__content">
                            It’s more affordable than ever to give every room in your home a stylish makeover
                        </div>
                    </div>
                    <a href="">Shop Now <Right_Arrow/></a>
                </div>
                
            </div>
            <BlogSection/>
            <Newsletter/>
            {/* <Footer/> */}
        </>
    )
  }
}
