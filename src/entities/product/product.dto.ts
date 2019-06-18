export class ProductDTO {
  id: number;
  date: string;
  title: {
    rendered: string;
  }
  excerpt:{
    rendered: string;
  }
  _sku: string;
  _price: number;
  image: string;
}

export type ProductsDTO = ProductDTO[];