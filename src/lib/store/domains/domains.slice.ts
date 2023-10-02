import { createSlice } from "@reduxjs/toolkit"
import { DomainState } from "./domains.types"
import { DomainsData } from "@/lib/static"
import * as actions from './domains.actions';

const initialState: DomainState = {
  data: DomainsData,
  filteredData: DomainsData
}

const domainsSlice = createSlice({
  name: 'domains',
  initialState,
  reducers: {
    addToCart: actions.addToCartHanlder,
    setFilteredData: actions.setFiltereData
  }
})

export const { addToCart, setFilteredData } = domainsSlice.actions


export default domainsSlice.reducer