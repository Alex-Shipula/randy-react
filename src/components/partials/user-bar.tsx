import * as React from "react";
import "./user-bar.scss";
import {
  Container,
  Row,
  Col,
  NavLink,
  ButtonToolbar,
  Button
} from "reactstrap";

export class UserBar extends React.Component {
  render() {
    return (
      <Row id="user-bar">
        <Col xs="6">USER-BAR</Col>
        <Col>
          <ButtonToolbar id="buttontoolbar">
            <Button variant="success">
              <NavLink href="/login"><a>Авторизация</a></NavLink>
            </Button>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  }
}
