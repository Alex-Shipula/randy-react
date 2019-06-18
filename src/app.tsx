import * as React from "react";
import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Layout } from "./components/partials/layout";
import { Home } from "./containers/home";

import {
  userActions,
  productCategoryActions,
  IProductCategoryActions,
  productActions,
  IProductActions
} from "@actions";

import { IProductCategoryState } from "./entities/product-category/product-category.reducer";
import { IProductsState } from "./entities/product/product.reducer";

type IAppProps = {
  productCategories: IProductCategoryState;
  products: IProductsState;
} & IProductCategoryActions &
  IProductActions;

class AppComponent extends Component {
  props: IAppProps;
  componentDidMount() {
    this.props.fetchProductCategories();
  }
  render() {
    return (
      <Layout {...this.props}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:cat1?/:cat2?" component={Home} />
          <Route component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export const App = connect(
  (state: IAppProps) => state,
  dispatch =>
    bindActionCreators(
      { ...userActions, ...productCategoryActions, ...productActions },
      dispatch
    )
)(AppComponent);
//console.log(  productActions);
