import { ReactElement } from 'react';

export interface IProductCard {
  children?: ReactElement | ReactElement[];
  product: IProduct;
}

export interface IProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContext {
  counter: number;
  increaseBy: (value: number) => void;
  product: IProduct;
}

export interface IProductCardHOC {
  ({ children, product }: IProductCard): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
