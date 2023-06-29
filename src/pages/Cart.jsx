import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/actions/cart-actions";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const shipping = 5
    const tax = 5
    const orderTotal = amount + shipping + tax
    const carts = useSelector((state) => state.carts)

    const getPrice = () => {
        setCartItems(carts)
    }

    useEffect(() => {
        getPrice()
    }, [carts])


    const totalOrder = () => {
        var total = 0
        cartItems.map((item) => {
            total += item.price * item.quantity
        })
        
        setAmount(total.toFixed(2))
    }

    useEffect(() => {
        totalOrder()
    }, [totalOrder])


    const deleteTask = (item) => {
        dispatch(deleteItem(item))
    }

    // const total = {carts[0].price}
    // console.log(total)

    return (
        <>
            <Navbar />
            <div className="cart-wrapper">
                <div className="col-md-9" >
                    <div className="cart-sec-1">
                        <ul>
                            {
                                carts.map((item) => {
                                    return (
                                        <li>
                                            <div>
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    height={'150px'}
                                                    width={'100px'} />
                                            </div>
                                            <div>
                                                <h5>Brand</h5>
                                                <p>{item.title}</p>
                                                <p>{item.description}</p>

                                                
                                                <p>
                                                    <span style={{ fontSize: 20 }}>&#36; </span>
                                                    <small style={{ fontSize: 20 }}>{item.price}</small>
                                                </p>

                                                <p>
                                                    <small>Quantity: </small> <small>{item.quantity}</small>
                                                </p>

                                                
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                 {carts.length > 0 ? 
                  <div className="cart-sec-2">
                        <h3>Order Summary</h3>
                        <hr />
                        <div className="orderSummary">
                            <p>Subtotal</p>
                            <p>
                                <span style={{ fontSize: 15 }}>&#36; </span>
                                <small style={{ fontSize:  15 }}>{amount}</small>
                            </p>
                        </div>

                        <div className="orderSummary">
                            <p>Shipping Estimate</p>
                            <p>
                                <span style={{ fontSize: 15 }}>&#36; </span>
                                <small style={{ fontSize: 15 }}>{shipping}</small>
                            </p>
                        </div>

                        <div className="orderSummary">
                            <p>Tax Estimate</p>
                            <p>
                                <span style={{ fontSize: 15 }}>&#36; </span>
                                <small style={{ fontSize: 15 }}>{tax}</small>
                            </p>
                            
                        </div>

                        <div className="orderSummary">
                            <p>Order Total</p>
                            <p>
                                <span style={{ fontSize: 15 }}>&#36; </span>
                                <small style={{ fontSize: 15 }}>{orderTotal}</small>
                            </p>    
                            
                        </div>
                    </div> :
                    <div className="cart-text">
                        <h1>Your cart is empty</h1>
                        <Link to={'/'}>Continue Shopping</Link>
                    </div>
        }
                </div>
            </div>
        </>
    )
}

export default Cart