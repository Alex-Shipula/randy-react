import { keyBy, reduce } from "lodash";
import { ProductsDTO, ProductDTO } from "./product.dto";
import { Product, ProductCollection } from "./product.models";
import { Filter, initialFIlter } from "./product.reducer";

import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_FAILURE,
  FETCHING_PRODUCTS_SUCCESS
} from "./product.consts";

export interface IProductActions {
  fetchProducts: (filter?: Filter) => void;
}

export const productActions: IProductActions = {
  fetchProducts: (filter = initialFIlter) => {
    return dispatch => {
      dispatch({
        type: FETCHING_PRODUCTS,
        payload: filter
      });
      const queryParams = `page=${filter.page}&per_page=${filter.perPage}`;
      fetch(
        "http://wp-randy.local/wp-json/wp/v2/product?" + queryParams,
        {
          method: "get",
          // body: {
          //   product_cat: 22,
          //   page: 1,
          //   per_page: 50
          // },
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then((items: ProductsDTO) => {
          let products: ProductCollection = items.map(item => ({
            id: item.id,
            date: item.date,
            title: item.title.rendered,
            excerpt: item.excerpt.rendered,
            sku: item._sku,
            price: item._price,
            image: item.image
          }));

          dispatch({
            type: FETCHING_PRODUCTS_SUCCESS,
            payload: products
          });
        })
        .catch(err =>
          dispatch({
            type: FETCHING_PRODUCTS_FAILURE,
            payload: err
          })
        );
    };
  }
};
