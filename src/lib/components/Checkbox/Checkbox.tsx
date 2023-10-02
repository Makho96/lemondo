import React, {FC, InputHTMLAttributes, useEffect, useState} from 'react'
import styles from './Checkbox.module.scss';
import Image from 'next/image';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  label?: string,
  change?: (checked: boolean) => void,
  checked: boolean
}

const Checkbox:FC<Props> = ({
  id,
  checked,
  change,
  label
}) => {

  useEffect(() => {
    setLoacalState(checked)
  }, [checked])

  const checkHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoacalState(prevstate => !prevstate)
    change && change(e.target.checked);
  }

  const [localState, setLoacalState] = useState(checked);
  

  return (
    <div className={styles['checkbox-container']}>
      <label htmlFor={id}>
        <input id={id} type={'checkbox'} checked={localState} onChange={checkHanlder}/>
        <div className={styles['check-container']}>
          <Image 
            src={'/icons/checkmark.svg'}
            alt = 'check icon'
            width={18}
            height={18}
          />
        </div>
        {label && <span className={styles['text']}>{label}</span>}
      </label>
    </div>
  )
}

export default Checkbox