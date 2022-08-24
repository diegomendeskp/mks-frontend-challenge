import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from './store'
import { Item } from '../interface/Item'
import { productService } from '../service';
export interface CartItem extends Item{
  cartQuantity: number;
}
interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmont: number;
}

const initialState:CartState ={
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmont: 0,
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
      addToCart:(state, action: PayloadAction<CartItem>) => {

        const itemIndex = state.cartItems.findIndex(item => item.id ===action.payload.id);
        if(itemIndex >= 0){
          state.cartItems[itemIndex].cartQuantity += 1
         
        }else{const tempProduct = {...action.payload, cartQuantity:1}
        state.cartItems.push(tempProduct);}
        
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
      },
      subTotals:(state) => {
        let {total, quantity} = 
        state.cartItems.reduce((cartTotal, cartItem)=>{
          const {price, cartQuantity} = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal;
        },{
          total: 0,
          quantity: 0,
        })
        state.cartTotalQuantity = quantity;
        state.cartTotalAmont = total;
      },
      decreaseCart:(state, action: PayloadAction<CartItem>) => {
        const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)

        if(state.cartItems[itemIndex].cartQuantity > 1){
          state.cartItems[itemIndex].cartQuantity -= 1
          
        }else if(state.cartItems[itemIndex].cartQuantity === 1){
          const nextCartItems = state.cartItems.filter(
          (cartItem)=> cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItem",JSON.stringify(state.cartItems));
      },
      removeFromCart:(state, action: PayloadAction<CartItem>) => {
        const nextCartItems = state.cartItems.filter(
          (cartItem)=> cartItem.id !== action.payload.id
          );

          state.cartItems = nextCartItems;
          
          localStorage.setItem("cartItem",JSON.stringify(state.cartItems));

      },
  },
})

export const { addToCart, subTotals, decreaseCart ,removeFromCart} = cartSlice.actions

 

export default cartSlice.reducer