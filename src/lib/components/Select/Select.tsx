import { useState, useEffect, FC } from 'react';
import styles from './Select.module.scss';
import Image from 'next/image';

interface SelectItem {id: string, label: string}

interface Props {
  data: Array<SelectItem>;
  callBack: Function
}

const Select:FC<Props> = ({
  data,
  callBack
}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState('');
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (item: SelectItem) => {
    setSelectedItem(item.id);
    callBack(item)
  }
  
  return (
    <div className={styles['dropdown']}>
      <div className={styles['dropdown-header']} onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem)?.label : "სორტირება"}
        <div className={`${styles['icon']} ${isOpen ? styles['open'] : ''}`}>
          <Image 
            src={'/icons/chevron_down.svg'}
            alt='select icon'
            width={10}
            height={7}
          />
        </div>
      </div>
      <div className={`${styles['dropdown-body']} ${isOpen && styles['open']}`}>
        {items.map(item => (
          <div key={item.id} className={styles["dropdown-item"]} onClick={() => handleItemClick(item)}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select