import React, { CSSProperties, FC, InputHTMLAttributes, useState, ChangeEvent, useEffect } from 'react';
import styles from './Input.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
  style?: CSSProperties;
  defaultValue: string;
  change: (value: string) => void;
  inputSize?: 'lg' | 'md',
  rightSideElement?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const {
      classname,
      style,
      defaultValue,
      change,
      inputSize = 'md',
      rightSideElement,
      ...rest
    } = props
    const [value, setValue] = useState(defaultValue);
  
    useEffect(() => {
      setValue(defaultValue)
    }, [defaultValue])
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      change(e.target.value);
    }
  
    return (
      <div 
        className={`${styles['input-container']} ${classname}`}
        data-size={inputSize}
        style={style}
        >
        <input
          ref={ref}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {rightSideElement && (
          <div className={styles['right-side-element']}>
            {rightSideElement}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input;