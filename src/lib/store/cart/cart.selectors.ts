import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

const cart = (state: RootState) => state.cart;

export const countSelector = createSelector([cart], (cart) => cart.items.length);
