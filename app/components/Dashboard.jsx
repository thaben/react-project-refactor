import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Employees from "./Employees/Employees";
import EmployeeContainer from "./Employees/EmployeeContainer";
import Footer from "./Footer";
import UserApiContext from "./UserApiContext";
import UserApi from "./UserApi";

class Dashboard extends Component {
  render() {
    return (
      <Container> 
        <UserApi>        
          <Header />
          <EmployeeContainer />
          <Footer />
        </UserApi>    
       </Container>
    );
  }
}

export default Dashboard;
