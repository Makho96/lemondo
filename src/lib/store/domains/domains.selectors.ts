import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types"; 

const domains = (state: RootState) => state.domain;

export const domainsSelector = createSelector([domains], (domains) => domains.data);
export const domainsCount = createSelector([domains], (domains) => domains.filteredData.length);
export const maxPriceSelector = createSelector([domains], (domains) => {
  let max = 0;
  for (let i = 0; i <domains.data.length; i++) {
    if (domains.data[i].price > max) {
      max = domains.data[i].price
    }
  }
  return max
})
