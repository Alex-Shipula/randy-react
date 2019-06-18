import * as React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import classnames from "classnames";
import { map } from "lodash";
import "./layout.scss";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

import { IProductCategoryState } from "@entities/product-category/product-category.reducer";

export class MainMenu extends React.Component<
  IProductCategoryState,
  {
    activeTab: string;
  }
> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: null
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Row id="main-menu">
        <Col>
          <Row className="root-categories">
            <Nav>
              {map(this.props.items, (category, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === index
                    })}
                    onClick={() => {
                      this.toggle(index);
                    }}
                  >
                    {category.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Row>

          <Row>
            <TabContent activeTab={this.state.activeTab}>
              {map(this.props.items, (category, index) => (
                <TabPane key={index} tabId={index}>
                  <Col sm={6} className="child-categories">
                    {map(category.children, (childCategory, childIndex) => (
                      <NavLink
                        key={childIndex}
                        tag={RRNavLink}
                        to={`/products/${index}/${childIndex}`}
                        className={classnames({
                          active: this.state.activeTab === childIndex
                        })}
                      >
                        {childCategory.name}
                      </NavLink>
                    ))}
                  </Col>
                  <Col sm={6} className="child-image" />
                </TabPane>
              ))}
            </TabContent>
          </Row>
        </Col>
      </Row>
    );
  }
}
