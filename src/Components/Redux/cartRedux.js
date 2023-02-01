import {createSlice} from '@reduxjs/toolkit'

const cartslice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0
    },
    reducers:{
        addproduct:(state,action)=>{
            state.quantity +=1;
            state.product.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        },
        removeproduct:(state)=>{
            state.quantity = 0
            state.product=[]
            state.total = 0 
        }
    }

})

export const {addproduct,removeproduct} = cartslice.actions
export default cartslice.reducer