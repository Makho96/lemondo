import styles from './Domains.module.scss';
import Wrapper from '@/lib/UI/wrapper';
import DomainsList from '@/lib/components/DomainsList';
import Filters from '@/lib/components/Filters/Filters';
import { useAppSelector } from '@/lib/store/hooks';
import { filtersOpen } from '@/lib/store/static/static.selectors';
const Domains = () => {
  const isOpen = useAppSelector(filtersOpen)
  return (
    <section className={styles['domain-page']}>
      <Wrapper>
        <div className={styles['container']}>
          <div className={`${styles['filter-container']} ${isOpen ? styles['open'] : ''}`}>
            <Filters />
          </div>
          <div className={styles['domain-list-container']}>
            <DomainsList />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Domains;