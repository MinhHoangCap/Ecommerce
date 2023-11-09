import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import RatingStar from '../template/RatingStar'
import Quantity from '../template/Quantity'
import AddToWishListIcon from '../template/AddToWishListIcon'
import ProductReview from '../template/ProductReview'
import CommentElement from '../template/CommentElement'
import Newsletter from '../template/Newsletter'

export default function ProductPage() {
  return (
    <>
        <div className="linkGroup">
            <ul>
                <li>
                    <div className="linkName">Home </div> <p>&gt;</p>
                </li>
            </ul>
        </div>
        <div className="ProductDetail">
            <Container>
                <Row>
                    <Col>
                    <div className="ProductCard__element">
                        {/* Slide image */}
                        <div className="ProductCard__image">
                            <img src="" alt="" />
                        </div>
                        <button>Add to cart</button>
                        
                        <div className="badges">
                            <div className="badge_medium">New</div>
                            <div className="badge_medium">-50%</div>

                        </div>
                    </div>
                    {/* Small slide */}
                    </Col>
                    <Col>
                        {/* show total rating */}
                        <ProductReview/>
                        <div className="ProductName">Tray Table</div>
                        <div className="ProductDescription">
                            Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.
                        </div>
                        <div className="ProductsPrices">
                            <div className="ProductPrice sold">
                                $199.00
                            </div>
                            <div className="ProductPrice organial">
                                $400.00
                            </div>
                        </div>
                        <div className="SaleTime">
                            <div className="title">
                                Offer expires in:
                                <ul className="SaleTimeList">
                                    <li className="SaleTimeItem">
                                        <div className="SaleTimeNumber">02</div>
                                        <div className="SaleTimeDescription">
                                            Days
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ProductProperties">
                            <div className="ProductProperties__heading">Measurements</div>
                            <div className="ProductProperties__content">
                                17 1/2x20 5/8 "
                            </div>
                        </div>
                        <div className="ProductProperties color">
                            <div className="ProductProperties__heading">Measurements</div>
                            <div className="ProductProperties__content">
                                <div className="ProductColor__name">Black</div>
                            </div>
                            <ul className="ProductColorList">
                                {/* if disable??? */}
                                <li className="ProductColorItem">
                                    <img src="" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="ProductCountAndWishlist">
                            <Quantity/>
                            <button><AddToWishListIcon/></button>
                        </div>
                        <button>Add to cart</button>
                        <div className="ProductMainProperty">
                            <div className="ProductId">
                                {/* width 123 */}
                                <div className="title">SKU</div>
                                {/* id */}
                                <div className="content">1117</div>
                            </div>
                            <div className="ProductCategory">
                                <div className="title">CATEGORY</div>
                                {/* id */}
                                <div className="content">Living Room, Bedroom</div>
                            </div>
                        </div>
                    </Col>

                </Row>
                
            </Container>

        </div>
        <div className="Other">
            <div className="AdditionalInfo">

            </div>
            <div className="Questions"></div>
            <div className="Reviews">
                <div className="ReviewSection">
                    <div className="Review">
                        <ProductReview/>
                    </div>
                    <div>
                        Be the first to review
                    </div>
                </div>
                <div className="OtherReviews">

                </div>
            </div>
            <div className="FeedbackForm">
                <form action="">
                    <input type="text" placeholder='Share your thoughts'/>
                    {/* emoji button to put icons */}
                    <button>Write reviews</button>
                </form>
            </div>
            <div className="CommentSection">
                <div className="CommentTitle">
                    <div className="CommentHeadline">
                        <div className="CommentNumber">
                            11 Reviews
                        </div>
                        <div className="SortBy">
                            {/* Dropdown */}
                            Newest
                        </div>
                    </div>
                </div>
                <div className="Comments">
                    <CommentElement/>
                    <CommentElement/>
                    <CommentElement/>
                    <CommentElement/>
                    <button>Load more</button>
                </div>
            </div>
        </div>
        <Newsletter/>
    </>
  )
}
