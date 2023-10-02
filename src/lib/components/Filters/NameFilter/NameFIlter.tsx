import {useState, useEffect, useRef} from 'react';
import {useSearchParams, useRouter, usePathname} from 'next/navigation';
import Input from '../../Input/Input';
import styles from  './NameFilter.module.scss';
import { Sorts as Params } from '@/lib/hooks/useSort';

const NameFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue === ref?.current?.value) {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (ref.current.value.length >= 1) {
          current.set('domain', ref.current.value);
  
        } else {
          current.set('domain', '');
          setSearchValue('')
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
    
        router.push(`${pathname}${query}`);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, ref, searchParams, router, pathname]);

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams.entries()]) as unknown as Params
    setSearchValue(currentParams.domain);

  }, [searchParams])
  

  return (
    <div className={styles['name-filter-container']}>
      <Input
        ref = {ref}
        defaultValue={searchValue}
        placeholder='სახელით ძიება'
        inputSize={'lg'}
        change={(e) => {setSearchValue(e)}}
      />
    </div>
  ) 
}

export default NameFilter