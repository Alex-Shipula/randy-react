export class ProductCategoryDTO {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  thumbnail_id: number;
}

export type ProductCategoriesDTO = ProductCategoryDTO[];