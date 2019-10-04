import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "./Header";
import Employees from "./Employees/Employees";
import EmployeeContainer from "./Employees/EmployeeContainer"
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <EmployeeContainer />
        <Footer />
      </Container>
    );
  }
}

export default Dashboard;
