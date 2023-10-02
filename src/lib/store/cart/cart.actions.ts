import { PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "./cart.types";
import { Domain } from "../domains/domains.types";

export const addItemsToCartHandler = (state: Cart, action: PayloadAction<{item: Domain}>) => {
  state.items.push(action.payload.item);
}