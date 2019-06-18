export class ProductCategory {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  parentID: number;
  parent?: ProductCategory;
  thumbnailID: number;
  children?: ProductCategoryCollection;
}

export interface ProductCategoryCollection {
  [id: number]: ProductCategory;
}
