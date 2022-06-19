import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload)
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state)=>{
            state = initialState;
        },
    },
});

export const {addProduct,reset} = carSlice.actions;
export default carSlice.reducer;