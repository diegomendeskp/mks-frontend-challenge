import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from './store'
import { Item } from '../interface/Item'
import { productService } from '../service';

// Define a type for the slice state
interface CartMenuState {
  state: string;
  cartDrawerVisible: boolean;
}

// Define the initial state using that type
const initialState: CartMenuState = {
  state: 'none',
  cartDrawerVisible:false
}

export const cartMenuSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
      OpenMenu: (state) =>{
        state.state = 'flex'
      },
      CloseMenu: (state) =>{
        state.state = 'none'
      },
      toggle: (state)=>{
        state.cartDrawerVisible = ! state.cartDrawerVisible;
      }
  },
})

export const {CloseMenu,OpenMenu,toggle} = cartMenuSlice.actions

export default cartMenuSlice.reducer