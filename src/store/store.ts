import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice.ts";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});
