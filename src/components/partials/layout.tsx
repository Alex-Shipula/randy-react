import * as React from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";
import "./layout.scss";

import { IProductCategoryState } from "@entities/product-category/product-category.reducer";
import { IProductsState } from "@entities/product/product.reducer";

import { UserBar } from "./user-bar";
import { Header } from "./header";
import { MainMenu } from "./main-menu";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { Content } from "./content";

interface ILayoutProps {
  productCategories: IProductCategoryState;
  products: IProductsState;
}

export class LayoutComponent extends React.Component<ILayoutProps> {
  render() {
    console.log(this);
    return (
      <Container id="container">
        <UserBar />
        <Header />
        <MainMenu {...this.props.productCategories} />
        <Row id="main">
          <Sidebar />
          <Content>{this.props.children}</Content>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export const Layout = connect((state: ILayoutProps) => state)(
  LayoutComponent
);
