import { FC } from 'react';
import styles from './Sorts.module.scss';
import { SortData } from '@/lib/static';
import Image from 'next/image';

interface Props {
  data: SortData[],
  handleSortClick: (sort: SortData) => void
}

const Sorts:FC<Props> = ({
  data,
  handleSortClick
}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['sorts-container']}>
        <span className={styles['title']}>სორტირება:</span>
        <ul>
          {data.map(item => (
            <li key={item.sortName}>
              <div className={styles['sort-item']} onClick={() => {handleSortClick(item)}}>
                <span className={styles['sort-name']}>
                  {item.sortTitle}
                </span>
                {(item.sortType === 'asc' || item.sortType === 'desc') && (
                  <div className={`${styles['sort-image']} ${styles[item.sortType]}`}>
                    <Image 
                      src={'/icons/sort.svg'}
                      alt='sort icon'
                      width={18}
                      height={9}
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['url-container']}></div>
    </div>
  )
}

export default Sorts