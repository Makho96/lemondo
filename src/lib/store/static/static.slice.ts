import { createSlice } from '@reduxjs/toolkit'
import { StaticSliceProps } from './static.types'
import { categories, zones } from '@/lib/static'
import { categoryFilterChangehandler, zoneFilterChangeHandler, toggleFiltersOpen } from './static.actions'

const initialState: StaticSliceProps = {
  categories: categories,
  zones: zones,
  filtersOpen: false
}

const StaticSlice = createSlice({
  name: 'static',
  initialState,
  reducers: {
    categoryFilterchange: categoryFilterChangehandler,
    zoneFilterChange: zoneFilterChangeHandler,
    toggleFilterSidebar: toggleFiltersOpen
  }
})

export const {categoryFilterchange, zoneFilterChange, toggleFilterSidebar} = StaticSlice.actions

export default StaticSlice.reducer