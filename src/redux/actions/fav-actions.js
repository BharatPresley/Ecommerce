import { ActionTypes } from "../constants/action-types"

export const addToFavourite = (product) => {
    return{
        type: ActionTypes.ADD_TO_FAVOURITE,
        payload: product
    }
}