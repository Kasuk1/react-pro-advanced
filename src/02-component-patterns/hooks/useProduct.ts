import { useEffect, useRef, useState } from 'react';
import { IOnChangeArgs, IProduct } from '../interfaces/interfaces';

interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: IUseProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
