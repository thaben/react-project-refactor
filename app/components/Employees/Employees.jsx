import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";

const Employees =  ({ employees,selectedEmployee, onFormSubmit, onInputChange, onSelectChange, onSelectEmployee,filter }) => (



  
      <Row>
        <Col xs={12}>
          <div className="employees-container">
            <div className="employees-list">
              <ul>
                <EmployeeList filter={filter} employees={employees}  onSelectEmployee={onSelectEmployee} />
              </ul>
            </div>
                <EmployeeDetails selectedEmployee={selectedEmployee} onFormSubmit={onFormSubmit} onInputChange={onInputChange} onSelectChang={onSelectChange} onSelectEmployee={onSelectEmployee} />
          </div>
        </Col>
      </Row>
    );

export default Employees;
