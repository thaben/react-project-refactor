import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";

const Employees =  ({ employees,selectedEmployee, onFormSubmit, onInputChange, onSelectChange, onSelectEmployee, }) => (



  
      <Row>
        <Col xs={12}>
          <div className="employees-container">
            <div className="employees-list">
              <ul>
                {employees.length &&
                  employees.map((employee) => (
                    <li key={employee.id} className="employee-list-item">
                      <a href="#" onClick={(e) => onSelectEmployee(e, employee.id)}>
                        <div className="img">
                          <img
                            width={70}
                            height={70}
                            className="rounded-circle"
                            src={employee.picture}
                            alt={`${employee.firstName} ${employee.lastName} photo`}
                          />
                        </div>
                        <div className="info">
                          <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
                          <p className="email">{employee.email}</p>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="employee-details">
              {selectedEmployee ? (
                <>
                  <h3>
                    {selectedEmployee.id}:{" "}
                    {`${selectedEmployee.firstName} ${selectedEmployee.lastName}`} (
                    {selectedEmployee.department})
                  </h3>
                  <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={selectedEmployee.firstName}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={selectedEmployee.lastName}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        onChange={onSelectChange}
                      >
                        <option>male</option>
                        <option>female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={selectedEmployee.email}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={selectedEmployee.phone}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        name="mobile"
                        value={selectedEmployee.mobile}
                        onChange={onInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="age">Age:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        value={selectedEmployee.age}
                        onChange={onInputChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary float-sm-right">
                      Submit
                    </button>
                  </form>
                </>
              ) : (
                <h3>Please select a user to view edit his data...</h3>
              )}
            </div>
          </div>
        </Col>
      </Row>
    );

export default Employees;
