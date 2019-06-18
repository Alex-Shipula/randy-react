import * as React from "react";
import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";

export class Content extends React.Component {
  render() {
    return (
      <Col md={8} id="content">
        {this.props.children}
      </Col>
    );
  }
}
