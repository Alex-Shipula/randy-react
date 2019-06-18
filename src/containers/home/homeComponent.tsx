import * as React from "react";

import { IHomeComponentProps } from "./homeTypes";
import { ProductTeaser } from "@components/ProductTeaser";

export class HomeComponent extends React.Component {
  props: IHomeComponentProps & { location; match };
  constructor() {
    super();
  }

  componentWillMount() {
    const queryParams = new URLSearchParams(this.props.location.search);
    const params = this.props.match.params
    const filter = {
      page: +queryParams.get("page"),
      perPage: +queryParams.get("per_page")
    };
    this.props.fetchProducts(filter);

    
    console.log(queryParams.get("page"));
  }

  render() {
    return (
      <div id="product-list">
        {this.props.products.items.map(product => (
          <ProductTeaser key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
