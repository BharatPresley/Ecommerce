import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";
import { useDispatch } from "react-redux";
// import { ADD_TO_CART } from "../reduxToolkit/cartSlice";
import { addToCart } from "../redux/actions/cart-actions";


const ProductList = () => {
    const [productList, setProductList] = useState([])

    const dispatch = useDispatch()

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
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

   

    return (
        <div className="container">
            <h2 className="text-center">All Products</h2>
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
    )
}

export default ProductList