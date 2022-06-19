import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartReducer from "./cartSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});