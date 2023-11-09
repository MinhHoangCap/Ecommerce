import React from 'react'

export default function FlyoutCart() {
  return (
    <div className='flyoutCart__wrapper'>
        <div className="OrderSummary">
            <div className="Summary">
                <div className="OrderHeading">
                    <div className="title">
                        Cart
                    </div>
                    <div className="closeIcon">
                        x
                    </div>
                </div>
                <div className="Products">
                    <ul className="ProductList">
                        <li className="ProductElement">
                            <img src="" alt="" />
                            <div className="ProductInfos">
                                <div className="ProductInfo">
                                    <div className="productName">
                                        Tray Table
                                    </div>
                                    <div className="productColor">
                                        Color: Black
                                    </div>
                                    <div className="productCount">
                                        <div>
                                            <div className="plusIcon">+</div>
                                            <div className="countNumber">2</div>
                                            <div className="subtractIcon">-</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProductInfo">
                                    <div className="price">$19.19</div>
                                    <div className="productDeleteIcon">x</div>
                                </div>

                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <div className="Summary">
                <p>Total</p>
                <div className="cart_sum">$234.00</div>
                <button>Checkout</button>
                <a href="">View cart</a>
            </div>
        </div>
    </div>
  )
}
