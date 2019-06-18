import * as React from "react";
import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";

export class Header extends React.Component {
  render() {
    return (
      <Row id="header" >
        <Col>
          <a id="logo" href="/" />
        </Col>
        <Col xs={6} />
        <Col />
      </Row>
    );
  }
}
