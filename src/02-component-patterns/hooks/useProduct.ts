import { useEffect, useRef, useState } from 'react';
import {
  IInitialvalues,
  IOnChangeArgs,
  IProduct,
} from '../interfaces/interfaces';

interface IUseProductArgs {
  product: IProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialvalues;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: IUseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (valueToOperate: number) => {
    let newValue = Math.max(counter + valueToOperate, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    reset,
  };
};
