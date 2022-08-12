import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import itemReducer from './itemSlice'

// import { apiSlice } from "./api/apiSlice";
// import authReducer from '../auth/authSlice'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    item: itemReducer,

    // [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: true
})

export default store;