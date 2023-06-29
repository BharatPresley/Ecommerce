import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "../component/Product";
import { useDispatch } from "react-redux";

import { addToCart, addToFavourite } from "../redux/actions/cart-actions";
import Navbar from "../component/Navbar";


const Mensclothing = () => {
    const [productList, setProductList] = useState([])

    const dispatch = useDispatch()

    const getData = () => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            .then((response) => {
                console.log(response.data)
                setProductList(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])

    const displayProduct = (product) => {
        dispatch(addToCart(product))
    }

    const displayFavourite = (product) => {
        dispatch(addToFavourite(product))
    }

 

    return (
        <><Navbar/>
        <div className="container">
            <h2 className="text-center"></h2>
            <div className="row">
                {
                    productList.map((product) => {
                    return <Product
                     product={product}
                     rating = {product.rating}
                     price = {product.price}
                     image= {product.image}
                     title={product.title}
                     id={product.id} 
                     displayProduct= {displayProduct}
                    
                    /> 
                })
                }

            </div>
        </div>
        </>
    )
}

export default Mensclothing;