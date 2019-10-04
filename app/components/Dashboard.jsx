import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Employees from "./Employees/Employees";
import EmployeeContainer from "./Employees/EmployeeContainer";
import Footer from "./Footer";
import UserApiProvider from "./UserApiContext/UserApiProvider";

class Dashboard extends Component {
  render() {
    return (
      <Container> 
        <UserApiProvider>        
          <Header />
          <EmployeeContainer />
          <Footer />
        </UserApiProvider>    
       </Container>
    );
  }
}

export default Dashboard;
