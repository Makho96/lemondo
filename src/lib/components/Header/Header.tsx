import styles from './Header.module.scss';
import Info from './Components/info';

const Header = () => {
  return (
    <header className={styles.header}>
      <Info />
    </header>
  )
}

export default Header