import { IProductButtons } from '../components/ProductButtons';
import { IProductCard } from '../components/ProductCard';
import { IProductImage } from '../components/ProductImage';
import { IProductTitle } from '../components/ProductTitle';

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
  maxCount?: number;
}

export interface IProductCardHOC {
  ({ children, product }: IProductCard): JSX.Element;
  Title: (props: IProductTitle) => JSX.Element;
  Image: (props: IProductImage) => JSX.Element;
  Buttons: (props: IProductButtons) => JSX.Element;
}

export interface IOnChangeArgs {
  product: IProduct;
  count: number;
}

export interface IProductInCart extends IProduct {
  count: number;
}

export interface IInitialvalues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;
  increaseBy: (value: number) => void;
  reset: () => void;
}
