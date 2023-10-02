import { Domain, DomainState } from "./domains.types"
import { PayloadAction } from "@reduxjs/toolkit"

export const addToCartHanlder = (state: DomainState, action: PayloadAction<{id: string}>) => {
  state.data = state.data.map(item => ({
    ...item,
    inCart: item.id === action.payload.id ? !item.inCart : item.inCart 
  }))
}

export const setFiltereData = (state: DomainState, action: PayloadAction<{data: Domain[]}>) => {
  state.filteredData = action.payload.data;
}