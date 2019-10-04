import React, { Component } from "react";
import axios from "axios";
import Employees from "./Employees";
import EmployeeList from "./EmployeeList";


class EmployeeContainer extends Component {
  state = {
    employees: [],
    selectedEmployee: null,
  };

  async componentDidMount() {
    const employees = await axios.get("http://localhost:3001/employees");

    this.setState({ employees: employees.data });
  }



  onSelectEmployee = (e, id) => {
    e.preventDefault();
    const selectedEmployee = this.state.employees.find((employee) => employee.id === id);
    {console.log(this.props.filter.filterDepartment==null)}
    
      this.setState({ selectedEmployee });
  };

  onInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, [name]: value } });
  };

  onSelectChange = (e) => {
    const { value } = e.target;

    this.setState({ selectedEmployee: { ...this.state.selectedEmployee, gender: value } });
  };
 
  onFormSubmit = async (e) => {
    e.preventDefault();
    const { id, ...rest } = this.state.selectedEmployee;
    await axios.put(`http://localhost:3001/employees/${id}`, rest);
    const employees = await axios.get("http://localhost:3001/employees");

    this.setState({ employees: employees.data });
  };

  render() {
    return <Employees
        {...this.state}
        {...this.props}
        employees={this.state.employees}  
        onSelectEmployee={this.onSelectEmployee}
        onFormSubmit={this.onFormSubmit}
        onInputChange={this.onInputChange}
        onSelectChange={this.onSelectChange} 
    />;
  }
}

export default EmployeeContainer;
