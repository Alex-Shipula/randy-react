import * as React from "react";
import { Row, Col } from "reactstrap";
import "./product-teaser.scss";
//import data from "./product.json";
import { Product } from "@entities/product/product.models";

export class ProductTeaser extends React.Component<{
  product: Product;
}> {
  render() {
    return (
      <Row className="product-teaser">
        <Col md={4}>
          <a className="image"> <img src={this.props.product.image}/></a>
        </Col>
        <Col xs={6} md={4}>
          <a className="title">{this.props.product.title}</a>
          <a className="sku">{this.props.product.sku}</a>
          <div
            className="discription"
            //dangerouslySetInnerHTML={{ }}
          />
        </Col>
        <Col md={4}>
          <a className="price" />

         <a className="btn btn_red"></a>
          <a className="btn btn_white notification"></a>
        </Col>
      </Row>
    );
  }
}
