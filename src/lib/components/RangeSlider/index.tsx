import React, { useCallback, useEffect, useState, useRef, FC } from "react";
import styles from  "./RangeSlider.module.scss";
import Input from "../Input/Input";

interface Props {
  min: number; 
  max: number; 
  onChange?: (min: number, max: number) => void;
  TotalMin?: number;
  TotalMax?: number
}

const RangeSlider:FC<Props> = ({ min, max, onChange, TotalMin, TotalMax }) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMinVal(min)
    setMaxVal(max)
  }, [min, max])

  useEffect(() => {
    const max = TotalMax || maxVal
    const minPercent = (minVal / max) * 100;
    const maxPercent = (maxVal / max) * 100

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [TotalMax, maxVal, minVal]);


  useEffect(() => {
    const max = TotalMax || maxVal
    const minPercent = (minVal / max) * 100;
    const maxPercent = (maxVal / max) * 100

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [TotalMax, minVal, maxVal]);


  useEffect(() => {
    onChange && onChange(minVal, maxVal);
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles['container']}>
      <div className={styles['inputs-container']}>
        <Input defaultValue={minVal?.toString()} change={(e) => setMinVal(+e)}/>
        <Input defaultValue={maxVal?.toString()} change={(e) => setMaxVal(+e)}/>
      </div>
      <div className={styles["slider-container"]}>
        <input
          type="range"
          min={0}
          max={TotalMax || max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className={`${styles["thumb"]} ${styles["thumb-left"]}`}
          style={{ zIndex: 5 }}
        />
        <input
          type="range"
          min={0}
          max={TotalMax || max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className={`${styles["thumb"]} ${styles["thumb-right"]}`}
        />

        <div className={styles["slider"]}>
          <div className={styles["slider-track"]} />
          <div ref={range} className={styles["slider-range"]} />
        </div>
      </div>
    </div>
    
  );
};

export default RangeSlider;
