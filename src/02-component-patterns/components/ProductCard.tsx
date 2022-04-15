import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IProductContext,
  IProduct,
  IOnChangeArgs,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;
export interface IProductCard {
  children?: ReactElement | ReactElement[];
  product: IProduct;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: IProductCard) => {
  const { counter, increaseBy } = useProduct({
    product,
    onChange,
    value,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
