import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { IProductContext, IProductCard } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: IProductCard) => {
  const { counter, increaseBy } = useProduct({ initialValue: 0 });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
