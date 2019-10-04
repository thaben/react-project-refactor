import React from "react";

const Employee = ({ employee,onSelectEmployee }) => (

   
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
   
);

export default Employee;
