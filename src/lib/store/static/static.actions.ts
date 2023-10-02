import { PayloadAction } from "@reduxjs/toolkit";
import { StaticSliceProps } from "./static.types";

export const categoryFilterChangehandler = (state: StaticSliceProps, action: PayloadAction<{catArray: string[]}>) => {
  state.categories = state.categories.map(item => ({...item, active: action.payload.catArray.includes(item.id) }))
}

export const zoneFilterChangeHandler = (state: StaticSliceProps, action: PayloadAction<{zoneArray: string[]}>) => {
  state.zones = state.zones.map(item => ({...item, active: action.payload.zoneArray.includes(item.id) }))
}

export const toggleFiltersOpen = (state: StaticSliceProps) => {
  state.filtersOpen = !state.filtersOpen
}