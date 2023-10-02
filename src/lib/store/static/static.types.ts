export interface Category {
  id: string,
  text: string,
  active: boolean
}

export interface StaticSliceProps {
  categories: Category[],
  zones: Category[],
  filtersOpen: boolean
}