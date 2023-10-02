import { configureStore } from '@reduxjs/toolkit';
import DomainReducer from './domains/domains.slice';
import CartReducer from './cart/cart.slice';
import StaticReducer from './static/static.slice';

export const store = configureStore({
  reducer: {
    domain: DomainReducer,
    cart: CartReducer,
    static: StaticReducer
  }
})
