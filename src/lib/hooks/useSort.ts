import { useCallback, useEffect, useState } from "react";
import { Domain } from "../store/domains/domains.types";
import { useAppDispatch } from "../store/hooks";
import { categoryFilterchange, zoneFilterChange } from "../store/static/static.slice";

type sorts = 'asc' | 'desc'

export interface Sorts {
  sortName: 'name' | 'price' | 'date' | 'expiration',
  sortType: sorts,
  priceFrom: number,
  priceTo: number,
  lengthFrom: number,
  lengthTo: number,
  zoneId: string,
  categoryId: string,
  domain: string
}

const useFilters = (data: Domain[]) => {
  const dispatch = useAppDispatch()
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data])

  const sortByName = useCallback((data: Domain[], sort: sorts) => {
    const innerData = [...data];
    if (sort === 'asc') {
      innerData.sort((a,b) => {
        if ( a.domain < b.domain ){
          return -1;
        }
        if ( a.domain > b.domain ){
          return 1;
        }
        return 0;
      })  
    } else if (sort === 'desc') {
      innerData.sort((a,b) => {
        if ( a.domain < b.domain ){
          return 1;
        }
        if ( a.domain > b.domain ){
          return -1;
        }
        return 0;
      })
    }
    return innerData
  }, [])

  const sortByDate = useCallback((data: Domain[], sort: sorts) => {
    const innerData = [...data]
    if (sort === 'asc') {
      innerData.sort((a, b) => (new Date(a.addDate)).getTime() - (new Date(b.addDate)).getTime())
    } else if (sort === 'desc') {
      innerData.sort((a, b) => (new Date(b.addDate)).getTime() - (new Date(a.addDate)).getTime())
    }
    return innerData
  }, [])

  const sortByPrice = useCallback((data: Domain[], sort: sorts) => {
    const innerData = [...data]
    if (sort === 'asc') {
      innerData.sort((a, b) => a.price - b.price)
    } else if (sort === 'desc') {
      innerData.sort((a, b) => b.price - a.price)
    }
    return innerData
  }, [])

  const sortByExpirationDate = useCallback((data: Domain[], sort: sorts) => {
    const innerData = [...data]
    if (sort === 'asc') {
      innerData.sort((a, b) => (new Date(a.addDate)).getTime() - (new Date(b.addDate)).getTime())
    } else if (sort === 'desc') {
      innerData.sort((a, b) => (new Date(b.addDate)).getTime() - (new Date(a.addDate)).getTime())
    }
    return innerData
  }, [])

  const filterByPriceFrom = useCallback((data: Domain[], minPrice: number) => {
    const innerData = [...data.filter(item => item.price >= +minPrice)]
    return innerData
  }, [])

  const filterByPriceTo = useCallback((data: Domain[], maxPrice: number) => {
    const innerData = [...data.filter(item => item.price <= +maxPrice)]
    return innerData
  }, [])

  const filterByLengthFrom = useCallback((data: Domain[], minLength: number) => {
    const innerData = [...data.filter(item => item.domain.length >= +minLength)]
    return innerData
  }, [])

  const filterByLengthTo = useCallback((data: Domain[], maxLength: number) => {
    const innerData = [...data.filter(item => item.domain.length <= +maxLength)]
    return innerData
  },[])

  const filerByZones = useCallback((data: Domain[], zoneId: string) => {
    const idArray = zoneId.split(',')
    const innerData = [...data.filter(item => idArray.includes(item.zoneId))]
    dispatch(zoneFilterChange({zoneArray: idArray}));
    return innerData
  }, [dispatch])

  const filterByCategoryId = useCallback((data: Domain[], categoryId: string) => {
    const categoryArray = categoryId.split(',')
    const innerData = [...data.filter(item => categoryArray.includes(item.categoryId))]
    dispatch(categoryFilterchange({catArray: categoryArray}));
    return innerData
  }, [dispatch])

  const filterByDomainName = useCallback((data: Domain[], domainName: string) => {
    const innerData = [...data.filter(item => item.domain.toLowerCase().includes(domainName.toLowerCase()))]
    return innerData
  }, [])

  const filter = useCallback((params: Partial<Sorts>) => {
    const {
      sortName,
      sortType,
      priceFrom,
      priceTo,
      lengthFrom,
      lengthTo,
      zoneId,
      categoryId,
      domain
    } = params

    let data = [...localData];

    if (sortName && sortType) {
      if (sortName === 'name') {
        data = sortByName(data, sortType)
      } else if (sortName === 'date') {
        data = sortByDate(data, sortType)
      } else if (sortName === 'price') {
        data = sortByPrice(data, sortType)
      } else if (sortName === 'expiration') {
        data = sortByExpirationDate(data, sortType)
      }
    }

    if(priceFrom) {
      data = filterByPriceFrom(data, priceFrom);
    }

    if (priceTo) {
      data = filterByPriceTo(data, priceTo)
    }

    if (lengthFrom) {
      data = filterByLengthFrom(data, lengthFrom)
    }

    if (lengthTo) {
      data = filterByLengthTo(data, lengthTo)
    }

    if (zoneId) {
      data = filerByZones(data, zoneId)
    } else {
      dispatch(zoneFilterChange({zoneArray: []}))
    }

    if (categoryId) {
      data = filterByCategoryId(data, categoryId);
    } else {
      dispatch(categoryFilterchange({catArray: []}))
    }

    if (domain) {
      data = filterByDomainName(data, domain);
    }

    return data
  }, [dispatch, filerByZones, filterByCategoryId, filterByDomainName, filterByLengthFrom, filterByLengthTo, filterByPriceFrom, filterByPriceTo, localData, sortByDate, sortByExpirationDate, sortByName, sortByPrice])

  return filter
}

export default useFilters