import { ActionTypes } from "../constants/action-types"

export const addToCart = (product) => {
    return{
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const addToFavourite = (product) => {
    return{
        type: ActionTypes.ADD_TO_FAVOURITE,
        payload: product
    }
}

export const deleteItem = (product) => {
    return{
        type: ActionTypes.DELETE_ITEM,
        payload: product
    }
}


