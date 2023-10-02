import { useAppSelector, useAppDispatch } from '@/lib/store/hooks';
import { domainsCount as domainsCountSelector } from '@/lib/store/domains/domains.selectors';
import { toggleFilterSidebar } from '@/lib/store/static/static.slice';
import NameFilter from './NameFilter/NameFIlter';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';


import styles from './Filters.module.scss';
import ZoneFilter from './ZoneFilter';
import SymbolQuantityFilter from './SymbolQuantityFilter';
import Image from 'next/image';

const Filters = () => {
  const domainsCount = useAppSelector(domainsCountSelector);
  const dispatch = useAppDispatch();

  return (
    <div className={styles['filters-container']}>
      <div className={styles['filters-header']}>
        <span className={styles['text']}>
          ფილტრი
        </span>
        <button className={styles['close-button']} onClick={() => dispatch(toggleFilterSidebar())}>
          <Image 
            src={'/icons/close.svg'}
            alt='close icon'
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={styles['market-count']}>
        <span className={styles['text']}>
          დომენები მარკეტზე:
        </span>
        <span className={styles['count']}>
          {' '}
          {domainsCount}
        </span>
      </div>
      <div className={styles['filters']}>
        <div className={styles['single-filter']}>
          <NameFilter />
        </div>
        <div className={styles['single-filter']}>
          <h4 className={styles["filer-name"]}>ფასი</h4>
          <PriceFilter />
        </div>
        <div className={styles['single-filter']}>
        <h4 className={styles["filer-name"]}>სიმბოლოების რაოდენობა</h4>
          <SymbolQuantityFilter />
        </div>
        <div className={styles['single-filter']}>
          <h4 className={styles["filer-name"]}>კატეგორიები</h4>
            <CategoryFilter />
        </div>
        <div className={styles['single-filter']}>
          <h4 className={styles["filer-name"]}>დომენის ზონა</h4>
          <ZoneFilter />
        </div>
      </div>
      <div className={styles['filter-footer']}>
        <button className={styles['button']} onClick={() => dispatch(toggleFilterSidebar())}>
          ძიება
        </button>
      </div>
    </div>
  )
}

export default Filters