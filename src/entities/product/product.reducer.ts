import { AnyAction } from "redux";
import { Product, ProductCollection } from "./product.models";
import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_SUCCESS,
  FETCHING_PRODUCTS_FAILURE
} from "./product.consts";

export class Filter {
  page: number;
  cat1?: number | string;
  cat2?: number | string;
  perPage: number;
}

export interface IProductsState {
  isFetching: boolean;
  error: any;
  items: ProductCollection;
  filter: Filter;
}

export const initialFIlter = { page: 1, perPage: 10 }

const initialState: IProductsState = {
  isFetching: false,
  error: "",
  items: [],
  filter: initialFIlter
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        isFetching: true,
        filter: action.payload
      };
    case FETCHING_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        items: action.payload
      };
    case FETCHING_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
