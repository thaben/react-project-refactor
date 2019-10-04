import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import UserApiContext from "./UserApiContext/UserApiContext";


const Footer = () => {
  return <UserApiContext.Consumer>
  
        {user =>
          <Row>
          <Col xs={12}>
            <footer>
              {user && (
                <div>
                  logged in as {user.name} {user.admin && "(admin)"}
                </div>
              )}
              <div>
                Made with ❤️ in Athens, Greece | <a href="https://tsevdos.me">tsevdos.me</a>
              </div>
            </footer>
          </Col>
        </Row>
        
  }</UserApiContext.Consumer>;
  
};

export default Footer;
