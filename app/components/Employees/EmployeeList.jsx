import React ,{Fragment} from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({  employees, onSelectEmployee, filter }) => (

<Fragment>
  
    {employees.length &&
        employees
       .filter((employee) => filter.filterGender=='' ?  true   :  employee.gender === filter.filterGender)
       .filter((employee) => filter.filterDepartment=='' ?  true   :  employee.department === filter.filterDepartment )
        .map((employee) => (
          <EmployeeListItem key={employee.id} employee={employee} onSelectEmployee={onSelectEmployee}/>
        ))}
</Fragment>
);

export default EmployeeList;
