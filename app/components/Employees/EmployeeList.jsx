import React ,{Fragment} from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({  employees, onSelectEmployee, filter }) => (

<Fragment>
    {employees.length &&
        employees
        .filter((employee) => filter==null ?  true   :  employee.gender === employee.gender)
        .filter((employee) => filter==null ?  true   :  employee.department === employee.department )
        .map((employee) => (
          <EmployeeListItem key={employee.id} employee={employee} onSelectEmployee={onSelectEmployee}/>
        ))}
</Fragment>
);

export default EmployeeList;
