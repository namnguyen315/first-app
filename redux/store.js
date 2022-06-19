import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "./cartSlide";
import cartReducer from "./cartSlide";

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})