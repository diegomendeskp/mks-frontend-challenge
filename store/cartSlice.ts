import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from './store'
import { Item } from '../interface/Item'
import { productService } from '../service';

// Define a type for the slice state
interface CartState {
  loading: boolean;
  products: Item[];
  error: boolean;
  value: number

}

// Define the initial state using that type
const initialState: CartState = {
  loading: true,
  products: [],
  error: false,
  value: 1,

}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
  },
})

export const { increment, decrement, incrementByAmount} = cartSlice.actions

// export const getProducts = ()=> async (dispatch: AppDispatch)=> {
//     dispatch(loading())
//     const data = await productService.get(
//       '/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
//     );
//     dispatch(success(data?.data.products))

  
// }
export default cartSlice.reducer