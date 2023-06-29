import { ActionTypes } from "../constants/action-types"

const initialState1 = {
    numberCart1 : 0,
    carts1: [],
}

export const favReducer = ( state = initialState1, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_TO_FAVOURITE :
            if(state.numberCart1 === 0) {
                let item = {
                    ...payload,
                    quantity: 1,
                };
                state.carts1.push(item);
            } else {
                let check = false
                state.carts1.map((item, index) => {
                    if(item.id === payload.id) {
                        state.carts1[index].quantity++
                        check = true
                    }
                })
                if(!check) {
                    let _item = {
                        ...payload,
                        quantity: 1
                    }
                    state.carts1.push(_item)
                }
            }
            return {
                ...state,
                numberCart: state.numberCart1 + 1
              
                
            };

        case ActionTypes.DELETE_ITEM : 
            state.carts1.map((item) => {
                if(item.id === payload.id) {
                    state.carts1.pop(item)
                }
            })
            return {
                ...state,
                numberCart1: state.numberCart1 - 1
            }
        ;

        
        default:
            return state
    }
}