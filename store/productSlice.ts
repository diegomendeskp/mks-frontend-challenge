import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from './store'
import { Item } from '../interface/Item'
import { productService } from '../service';

// Define a type for the slice state
interface ProductState {
  loading: boolean;
  products: Item[];
  error: boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  loading: true,
  products: [],
  error: false,
}

export const productSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loading:(state) =>{
      state.loading = true
      state.error = false
    },
    success:(state,action: PayloadAction<Item[]>)=>{
      state.loading = false
      state.products = action.payload
    },
    fail:(state) =>{
      state.loading = false
      state.error = true
    },
  },
})

export const { loading, success, fail} = productSlice.actions

export const getProducts = ()=> async (dispatch: AppDispatch)=> {
    dispatch(loading())
    const data = await productService.get(
      '/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    );
    dispatch(success(data?.data.products))

  
}
export default productSlice.reducer