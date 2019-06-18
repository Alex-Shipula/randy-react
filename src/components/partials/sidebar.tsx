import * as React from "react";
import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";

export class Sidebar extends React.Component {
  render() {
    return (
      <Col md={4} id="sidebar">
        MAIN MENU<a id="pop-left"></a>
      </Col>
    );
  }
}
