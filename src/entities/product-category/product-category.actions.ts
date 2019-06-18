import { keyBy, reduce } from 'lodash';
import { ProductCategoriesDTO, ProductCategoryDTO } from './product-category.dto';
import { ProductCategory, ProductCategoryCollection } from './product-category.models';

import {
  FETCHING_PRODUCT_CATEGORIES,
  FETCHING_PRODUCT_CATEGORIES_FAILURE,
  FETCHING_PRODUCT_CATEGORIES_SUCCESS
} from './product-category.consts';

export interface IProductCategoryActions {
  fetchProductCategories: () => void;
}
export const productCategoryActions: IProductCategoryActions = {
  fetchProductCategories: () => {
    return dispatch => {
      dispatch({
        type: FETCHING_PRODUCT_CATEGORIES
      })
      fetch("http://api.dev.randy.clubdev.ru/wp-json/wp/v2/product_cat?per_page=100", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(res => res.json())
        .then((items: ProductCategoriesDTO) => {
          let productCategories: ProductCategoryCollection = keyBy(items
            .map(({ thumbnail_id, parent, ...item }) => ({
              ...item, thumbnailID: thumbnail_id, parentID: parent, children: {}
            })), "id");
          productCategories = reduce(productCategories, ((result, item, index) => {
            if (item.parentID) {
              item.parent = productCategories[item.parentID];
              productCategories[item.parentID].children[item.id] = item;
            } else if(item.count) {
              result[item.id] = item;
            }
            return result;
          }), {});
          dispatch({
            type: FETCHING_PRODUCT_CATEGORIES_SUCCESS,
            payload: productCategories
          });
        })
        .catch(err => dispatch({
          type: FETCHING_PRODUCT_CATEGORIES_FAILURE,
          payload: err
        }));

    }
  }


}
