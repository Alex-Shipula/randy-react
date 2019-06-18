import { IProductCategoryActions,IProductActions } from "@actions";
import { IProductsState } from "@entities/product/product.reducer";



export type IHomeComponentProps = {
  products: IProductsState
} & IProductActions;

