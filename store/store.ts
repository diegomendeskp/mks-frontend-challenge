import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'
import cartSliceReducer from './cartSlice'
import cartMenuSliceReducer from './cartMenuSlice'

export const store = configureStore({
  reducer: {products: productReducer, cart: cartSliceReducer, cartMenu: cartMenuSliceReducer},
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
