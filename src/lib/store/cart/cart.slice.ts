import { createSlice } from '@reduxjs/toolkit';
import { Cart } from './cart.types';
import { addItemsToCartHandler } from './cart.actions';

const initialState: Cart = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemsToCart: addItemsToCartHandler
  }
})

export const {addItemsToCart} = cartSlice.actions

export default cartSlice.reducer