import { AnyAction } from 'redux'
import { ProductCategory, ProductCategoryCollection } from './product-category.models';
import { FETCHING_PRODUCT_CATEGORIES, FETCHING_PRODUCT_CATEGORIES_SUCCESS, FETCHING_PRODUCT_CATEGORIES_FAILURE } from './product-category.consts';

export interface IProductCategoryState {
  isFetching: boolean;
  error: any;
  items: ProductCategoryCollection;
}

const initialState: IProductCategoryState = {
  isFetching: false,
  error: "",
  items: {}
};

export const productCategoryReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCHING_PRODUCT_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_PRODUCT_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        items: action.payload
      };
    case FETCHING_PRODUCT_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
