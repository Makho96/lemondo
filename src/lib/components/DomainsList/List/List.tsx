import {FC} from 'react';
import { USD_TO_GEL } from '@/lib/static';
import ListItem from './ListItem';

import styles from './Index.module.scss';
import { Domain } from '@/lib/store/domains/domains.types';
import Image from 'next/image';

interface Props {
  data: Domain[],
  handleItemAddToCart: (domain: Domain) => void
}

const List:FC<Props> = ({data, handleItemAddToCart}) => {
  return (
    <>
      {data?.length > 0 ? (
        <div className={styles['list-container']}>
          <nav>
            <ul>
              {data.map(domain => {
                return (
                  <li key={domain.id}>
                    <ListItem
                      text={domain.domain}
                      priceGEL={`${domain.price} ₾`}
                      priceUSD={`${(domain.price / USD_TO_GEL).toFixed(2)} $`}
                      addToCart={() => handleItemAddToCart(domain)}
                      isInCart={domain.inCart}
                    />
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <div className={styles['no-data']}>
          <div className={styles['image-container']}>
            <Image 
              src={'/not-found.svg'}
              alt='not found'
              width={195}
              height={170}
            />
          </div>
          <div className={styles['text']}>
            <h3>დომენი ვერ მოიძებნა</h3>
            <p>
              მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default List