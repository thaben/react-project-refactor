import React ,{Fragment} from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({  employees, onSelectEmployee }) => (

<Fragment>
    {employees.length &&
        employees.map((employee) => (
          <EmployeeListItem key={employee.id} employee={employee} onSelectEmployee={onSelectEmployee}/>
        ))}
</Fragment>
);

export default EmployeeList;
