import { useState } from 'react';

interface IProductCard {
  initialValue: number;
}

export const useProduct = ({ initialValue }: IProductCard) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    counter,
    increaseBy,
  };
};
