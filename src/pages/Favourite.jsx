import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import favStore from '../redux/favStore'
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/actions/cart-actions";


const Favourite = () => {
    const [cartItems, setCartItems] = useState([])
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const shipping = 5
    const tax = 5
    const orderTotal = amount + shipping + tax

    const carts1 = useSelector((state) => state.carts1)

    console.log(carts1)

    const getPrice = () => {
        setCartItems(carts1)
    }

    useEffect(() => {
        getPrice()
    }, [carts1])

    return (
        <>
            <Navbar />
            <div className="cart-wrapper">
                <div className="col-md-9" >
                    <div className="cart-sec-1">
                        <ul>
                            { carts1?.length > 0 ?
                                carts1.map((item) => {
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

                                                
                                            </div>
                                        </li>
                                    )
                                }) :
                                <div>Favourite is empty</div>
                            }
                        </ul>
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default Favourite