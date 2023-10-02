import styles from './Banner.module.scss';
import Wrapper from '@/lib/UI/wrapper';

const Banner = () => {
  return (
    <section className={styles['banner-container']}>
      <Wrapper>
        <div className={styles['inner-container']}>
          <h1 className={styles['banner-text']}>
            გაყიდე და იყიდე დომენი მარტივად
          </h1>
        </div>
      </Wrapper>
    </section>
  )
}

export default Banner;