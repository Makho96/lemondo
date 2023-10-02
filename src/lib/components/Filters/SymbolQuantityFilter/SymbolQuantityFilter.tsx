import RangeSlider from "../../RangeSlider"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { Sorts as Params } from '@/lib/hooks/useSort'
import styles from './SymbolQuantityFilter.module.scss';

const SymbolQuantityFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);

  const [filterMin, setFilterMin] = useState(0);
  const [filterMax, setFilterMax] = useState(0)

  const handleChange = useCallback((min: number, max: number) => {
    setFilterMin(min)
    setFilterMax(max);
  }, [])

  const handleClick = useCallback(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('lengthFrom', filterMin.toString())
    current.set('lengthTo', filterMax.toString())
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }, [filterMax, filterMin, pathname, router, searchParams])

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams.entries()]) as unknown as Params
    if (currentParams.lengthFrom) {
      setMinValue(+currentParams.lengthFrom)
    }
    if (currentParams.lengthTo) {
      setMaxValue(+currentParams.lengthTo)
    }

  }, [searchParams])

  
  return <div className={styles['container']}>
  <RangeSlider min={minValue} max={maxValue} TotalMin={0} TotalMax={50} onChange={handleChange} />
  <button className={styles['filter-button']} onClick={handleClick}>გაფილტვრა</button>
</div>
}

export default SymbolQuantityFilter