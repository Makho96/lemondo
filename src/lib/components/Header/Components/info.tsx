import Image from 'next/image';
import { useAppSelector } from '@/lib/store/hooks';
import { countSelector } from '@/lib/store/cart/cart.selectors';

import Wrapper from '@/lib/UI/wrapper';
import styles from './info.module.scss';

const Info = () => {
  const itemsInCart = useAppSelector(countSelector);
  return (
    <div className={styles['outer-container']}>
      <Wrapper>
        <div className={styles['inner-container']}>
          <div className={styles['left-container']}>
            <div className={styles['burger']}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles['logo-container']}>
              <Image 
                src={'/logo.svg'}
                alt='logo'
                width={183}
                height={32}
              />
            </div>
          </div>
          <div className={styles['info-container']}>
            <div className={styles['info-element']}>
              <Image 
                src={'/icons/notification.svg'}
                alt='notification icon'
                width={17}
                height={21}
              />
            </div>
            <div className={styles['info-element']}>
              <Image 
                src={'/icons/cart.svg'}
                alt='cart icon'
                width={17}
                height={21}
              />
              {itemsInCart > 0 && (<span className={styles['item-count']}>{itemsInCart}</span>)}
            </div>
            <div className={styles['info-element']}>
              <div className={styles['user-data']}>
                <Image 
                  src={'/icons/user.svg'}
                  alt='user icon'
                  width={20}
                  height={21}
                />
                <span className={styles['user']}>Makho Gelashvili</span>
                <span className={styles['arrow']}>
                  <Image 
                    src={'./icons/chevron_down.svg'}
                    alt='chevron icon'
                    width={8}
                    height={5}
                  />
                </span>
              </div>
            </div>
            <div className={styles['info-element']}>
              <Image 
                src={'/icons/flag.svg'}
                alt='flag icon'
                width={29}
                height={21}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Info;