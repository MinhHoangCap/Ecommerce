import React from 'react'
import PageHeader from '../template/PageHeader'
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/esm/Col'
import Quantity from '../template/Quantity'
export default function ShoppingCart() {
  return (
    <div>
        <PageHeader/>
        <Container>
            <Row>
                <Col>
                    <table>
                        <th>
                            <td>Product</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Subtotal</td>
                        </th>
                        <tr>
                            <td>
                                <div className="productImage">
                                    <img src="" alt="" />
                                    <div className="productInfomation">
                                        <div className="productName">Tray Table</div>
                                        <div className="productColor">
                                            Color: Black
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><Quantity/></td>
                            <td><div className="productPrice">Price</div></td>
                            <td><div className="subTotal">$38.00</div></td>
                        </tr>
                    </table>
                </Col>
                <Col>
                    <div className="cartSummary">
                        <div className="radioChoice">
                            <div className="paymentMethod">
                                <input type="radio" name="" id="" /> Free Shipping
                                <input type="radio" name="" id="" /> Express Shipping
                                <input type="radio" name="" id="" /> Pickup
                            </div>
                        </div>
                        <div className="subTotal">
                            <div className="heading">Subtotal</div>
                            <div className="content"></div>
                        </div>
                        <div className="total">
                            <div className="heading">Total</div>
                            <div className="content"></div>
                        </div>
                        <input type="submit" value={Checkout} />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
