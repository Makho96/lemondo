import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

const staticData = (state: RootState) => state.static

export const categoriesSelector = createSelector([staticData], (staticData) => staticData.categories)
export const zoneSelector = createSelector([staticData], (staticData) => staticData.zones)
export const filtersOpen = createSelector([staticData], (staticData) => staticData.filtersOpen);
