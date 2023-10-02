import { FC } from 'react';
import styles from  './ListItem.module.scss';
import Image from 'next/image';

interface Props {
  text: string,
  priceGEL: string,
  priceUSD: string,
  isInCart: boolean
  addToCart: () => void,
}

const ListItem:FC<Props> = ({
  text,
  priceGEL,
  priceUSD,
  isInCart,
  addToCart
}) => {
  return (
    <div className={styles['list-item-container']}>
      <div className={styles['left']}>
        <button className={styles['button']}>
          <Image
            src='/icons/chevron_down.svg'
            alt='chevron icon'
            width={10}
            height={6}
          />
        </button>
        <span className={styles['domain-name']}>
          {text}
        </span>
      </div>
      <div className={styles['right']}>
        <div className={styles['prices']}>
          <h3 className={styles['price-gel']}>
            {priceGEL}
          </h3>
          <span className={styles['price-usd']}>
            {priceUSD}
          </span>
        </div>
        <div className={styles['status']}>
          {isInCart ? (
            <div className={styles['added']}>
              <div className={styles['check-mark']}>
                <Image 
                  src={'/icons/checkmark.svg'}
                  alt='check icon'
                  width={14}
                  height={14}
                />
              </div>
              <span className={styles['text']}>კალათაშია</span>
            </div>
          ) : (
            <button className={styles['add-button']} onClick={addToCart}>
              <span className={styles['text']}>
                დამატება
              </span>
              <div className={styles['icon-container']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.94" height="18.594" viewBox="0 0 21.94 18.594">
                  <path id="Fill_932" data-name="Fill 932" d="M18.329,18.594h-.917a1.069,1.069,0,0,1-.916-1.171,1.069,1.069,0,0,1,.916-1.171h.917a1.069,1.069,0,0,1,.916,1.171A1.069,1.069,0,0,1,18.329,18.594Zm-7.332,0h-.916a1.069,1.069,0,0,1-.916-1.171,1.069,1.069,0,0,1,.916-1.171H11a1.069,1.069,0,0,1,.917,1.171A1.069,1.069,0,0,1,11,18.594Zm6.817-4.148H10.547A2.755,2.755,0,0,1,7.9,12.478L5,2.465a.923.923,0,0,0-.882-.66H.916A.911.911,0,0,1,0,.9.911.911,0,0,1,.916,0h3.2A2.757,2.757,0,0,1,6.76,1.968l.477,1.643H19.189a2.745,2.745,0,0,1,2.182,1.059,2.669,2.669,0,0,1,.485,2.308L20.482,12.4A2.74,2.74,0,0,1,17.814,14.446ZM7.762,5.417l1.9,6.565a.92.92,0,0,0,.881.659h7.267a.914.914,0,0,0,.89-.687l1.375-5.417a.887.887,0,0,0-.163-.767.916.916,0,0,0-.728-.353Z" fill="#92929d"/>
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListItem;