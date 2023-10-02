import React, { useCallback } from 'react';
import {useSearchParams, useRouter, usePathname} from 'next/navigation';
import { useAppSelector } from '@/lib/store/hooks';
import styles from './ZoneFilter.module.scss';
import Checkbox from '../../Checkbox';
import { zoneSelector } from '@/lib/store/static/static.selectors';

const ZoneFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const zones = useAppSelector(zoneSelector);

  const handleZoneFilter = useCallback((checked: boolean, id: string, filter: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const filters = current.get(filter);
    if (checked) {
      current.set(filter, `${filters ? filters + ',' : ''}${id}`)
    } else {
      if (filters) {
        let zones = filters.split(',').filter(zone => zone !== id);
        current.set(filter, zones.join(','))
      }
    }

     const search = current.toString();
     const query = search ? `?${search}` : "";
 
     router.push(`${pathname}${query}`);
  }, [pathname, router, searchParams])
  return (
    <div className={styles['chekbox-filter']}>
      <ul>
        {zones.map(item => {
          return (
            <li key={item.id}>
              <Checkbox 
                id={item.id}
                checked={item.active}
                label={item.text}
                change={(e) => {handleZoneFilter(e, item.id, 'zoneId')}}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ZoneFilter