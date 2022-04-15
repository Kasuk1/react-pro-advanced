import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  IProductContext,
  IProduct,
  IOnChangeArgs,
  IInitialvalues,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import { IProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContext);
const { Provider } = ProductContext;
export interface IProductCard {
  //children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers) => JSX.Element;
  product: IProduct;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialvalues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProductCard) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      product,
      onChange,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          reset,
          increaseBy,
          product,
        })}
      </div>
    </Provider>
  );
};
