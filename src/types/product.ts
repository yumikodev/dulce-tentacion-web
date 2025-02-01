export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  description: string;
  details: string[];
}

export type Products = Product[];
