export interface Domain {
  id: string,
  domain: string,
  price: number,
  categoryId: string,
  zoneId: string,
  inCart: boolean,
  addDate: ReturnType<typeof Date>
  expirationDate: ReturnType<typeof Date>
}

export interface DomainState {
  data: Domain[],
  filteredData: Domain[]
}