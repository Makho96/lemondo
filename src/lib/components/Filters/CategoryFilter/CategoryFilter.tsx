import React, { useCallback } from 'react';
import {useSearchParams, useRouter, usePathname} from 'next/navigation';
import { categoriesSelector } from '@/lib/store/static/static.selectors';
import { useAppSelector } from '@/lib/store/hooks';
import styles from './CategroryFilter.module.scss';
import Checkbox from '../../Checkbox';

const CategoryFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const categories = useAppSelector(categoriesSelector);

  const handleCategoryFilter = useCallback((checked: boolean, id: string, filter: string) => {
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
        {categories.map(item => {
          return (
            <li key={item.id}>
              <Checkbox 
                id={item.id}
                checked={item.active}
                label={item.text}
                change={(e) => {handleCategoryFilter(e, item.id, 'categoryId')}}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(CategoryFilter)