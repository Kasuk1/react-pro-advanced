import { useState } from 'react';
import { IOnChangeArgs, IProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: IOnChangeArgs) => {
    setShoppingCart((prev) => {
      const productInCart: IProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      // Delete product
      const { [product.id]: toDelete, ...rest } = prev;
      return rest;

      /* if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return { ...rest }; // or just return rest
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      }; */
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
