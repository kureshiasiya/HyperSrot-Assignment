import React from "react";
import { Row, Col } from "reactstrap";
import Nav from "../Nav/Nav.jsx"; // Make sure to adjust the import path according to the actual location of Nav.jsx file
import Alert from "../Alert/Alert.jsx";
const Header = (props) => {
  return (
    <>
      <div className="header-container"></div>
      <Row>
        <Col xs={8}>
          <h1 className="header-title">Task Manager</h1>
        </Col>
        <Col>{/* <Nav /> */}</Col>
      </Row>
      {/* <hr /> */}
      <Alert />
    </>
  );
};

export default Header;
