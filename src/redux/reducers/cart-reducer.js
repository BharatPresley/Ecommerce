import { ActionTypes } from "../constants/action-types"

const initialState = {
    numberCart : 0,
    carts: [],
    carts1:[]
}


export const cartReducer = ( state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_TO_CART :
            if(state.numberCart === 0) {
                let item = {
                    ...payload,
                    quantity: 1,
                };
                state.carts.push(item);
            } else {
                let check = false
                state.carts.map((item, index) => {
                    if(item.id === payload.id) {
                        state.carts[index].quantity++
                        check = true
                    }
                })
                if(!check) {
                    let _item = {
                        ...payload,
                        quantity: 1
                    }
                    state.carts.push(_item)
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
              
                
            };
            case ActionTypes.ADD_TO_FAVOURITE :
                if(state.numberCart === 0) {
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
                    numberCart: state.numberCart + 1
                  
                    
                };
    
        case ActionTypes.DELETE_ITEM : 
            state.carts.map((item) => {
                if(item.id === payload.id) {
                    state.carts.push(item)
                }
            })
            return {
                ...state,
                numberCart: state.numberCart - 1
            }
        ;

        
        default:
            return state
    }
}