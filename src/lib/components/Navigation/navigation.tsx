import Wrapper from "@/lib/UI/wrapper";
import { page_navigation, domain_navigation } from "@/lib/static/navigation";

import styles from './navigation.module.scss';
import ActiveLink from "../NavLink";

const Navigation = () => {
  return (
    <div className={styles['outer-container']}>
      <Wrapper>
        <div className={styles['inner-container']}>
          <nav>
            <ul className={styles['domain-navigation']}>
              {domain_navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <ActiveLink classNames={styles['nav-link']} href={item.url}>
                      {item.title}
                    </ActiveLink>
                  </li>
                )
              })}
            </ul>
            <ul className={styles['page-navigation']}>
              {page_navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <ActiveLink classNames={styles['nav-link']} href={item.url}>
                      {item.title}
                    </ActiveLink>
                  </li>
                )
              })}

            </ul>
          </nav>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navigation;