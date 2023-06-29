// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     numberCart : 0,
//     carts: []
// }

// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         ADD_TO_CART : (state, action) => {if(state.numberCart === 0) {
//             let item = {
//                 ...payload,
//                 quantity: 1
//             };
//             state.carts.push(item);
//         } else {
//             let check = false
//             state.carts.map((item, index) => {
//                 if(item.id === payload.id) {
//                     state.carts[index].quantity++
//                     check = true
//                 }
//             })
//             if(!check) {
//                 let _item = {
//                     ...payload,
//                     quantity: 1
//                 }
//                 state.carts.push(_item)
//             }
//         }
//         return {
//             ...state,
//             numberCart: state.numberCart + 1
            
//         }
//       }
//     }
// })

// export const { ADD_TO_CART } = cartSlice.actions

// export default cartSlice.reducer