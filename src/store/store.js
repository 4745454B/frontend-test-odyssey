import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js'
import productsReducer from './productsSlice.js'
import productCategoriesReducer from './productCategoriesSlice.js'

export default configureStore({
    reducer: {
        user: userReducer,
        product: productsReducer,
        category: productCategoriesReducer
    }
})