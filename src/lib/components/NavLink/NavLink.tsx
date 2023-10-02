import React, {FC} from 'react';
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import styles from './Navlink.module.scss';

interface Props extends LinkProps {
  children: React.ReactNode,
  classNames?: string,
  style?: React.CSSProperties;
}

const ActiveLink: FC<Props> = ({
  children,
  classNames,
  ...rest
 }) => {
   const { href } = rest;
   const pathName = usePathname();

   const isActive = pathName === href;
     return (
       <Link 
          {...rest}
          className={`${styles['nav-link']} ${isActive ? styles['active'] : ""} ${classNames}`}
          >
         {children}
       </Link>
   );
  };

export default ActiveLink;