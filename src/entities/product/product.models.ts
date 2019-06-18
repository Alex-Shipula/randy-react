export class Product {
  id: number;
  date: string;
  title: string;
  excerpt:string;
  sku: string;
  price: number;
  image: string;
}

export type ProductCollection = Product[];