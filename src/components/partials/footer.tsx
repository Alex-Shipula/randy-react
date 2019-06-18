import * as React from "react";

import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";

export class Footer extends React.Component {
  render() {
    return (
      <Row id="footer">
        <Col md={3} sm={6} sx={12} />
        <Col md={3} sm={6} sx={12} hidden-xs={"true"} />
        <Col md={3} sm={6} sx={12} />
        <Col md={3} sm={6} sx={12} />
      </Row>
    );
  }
}
