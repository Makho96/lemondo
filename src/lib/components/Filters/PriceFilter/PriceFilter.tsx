import RangeSlider from "../../RangeSlider"
import { useAppSelector } from "@/lib/store/hooks"
import { maxPriceSelector } from "@/lib/store/domains/domains.selectors"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { Sorts as Params } from '@/lib/hooks/useSort'
import styles from './Pricefilter.module.scss';

const PriceFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const maxPrice = useAppSelector(maxPriceSelector)
  
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const [filterMin, setFilterMin] = useState(0);
  const [filterMax, setFilterMax] = useState(0)
  

  const handleChange = useCallback((min: number, max: number) => {
    setFilterMin(min)
    setFilterMax(max);
  }, [])

  const handleClick = useCallback(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('priceFrom', filterMin.toString())
    current.set('priceTo', filterMax.toString())
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }, [filterMax, filterMin, pathname, router, searchParams])

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams.entries()]) as unknown as Params
    if(currentParams.priceFrom) {
      setMinValue(+currentParams.priceFrom)
    }

    if(currentParams.priceTo) {
      setMaxValue(+currentParams.priceTo)
    }

  }, [searchParams])

  return <div className={styles['container']}>
    <RangeSlider min={minValue} max={maxValue} TotalMin={0} TotalMax={maxPrice} onChange={handleChange} />
    <button className={styles['filter-button']} onClick={handleClick}>გაფილტვრა</button>
  </div>
}

export default PriceFilter