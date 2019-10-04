import React, { Component } from "react";
import UserApiContext from "./UserApiContext";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";




const Header = () => {
  return <UserApiContext.Consumer>
  
        {user =>
         <Row>
         <Col xs={12}>
           <Navbar color="light" light>
             <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
             <Nav className="ml-auto" navbar>
               {user && (
                 <Media>
                   <Media left>
                     <img
                       className="rounded-circle"
                       width="50"
                       height="50"
                       src={user.imgPath}
                       alt={user.name}
                     />
                   </Media>
                   <Media body className="user-text">
                     {user.username}
                   </Media>
                 </Media>
               )}
             </Nav>
           </Navbar>
         </Col>
       </Row>
        
  }</UserApiContext.Consumer>;
  
};

export default Header;
