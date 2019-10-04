import React, { Component , Fragment} from "react";
import { Row,Button } from "reactstrap";
import EmployeeContainer from "./Employees/EmployeeContainer";


class Filter extends Component {

    state = {
      filter:{
        filterGender: null,
        filterDepartment: null,
      },
       
      };


      onSelectFilterGender = (e) => {
       e.preventDefault();
       
        const value  = e.target.value;
        console.log(e.target.value);
       // this.setState( { filterGender:  value  } , () => {console.log(this.state.filter.filterGender)});
       this.setState( { filter:  { ...this.state.filter, filterGender: value }  } , () => {console.log(this.state.filter.filterGender)});
      
      };
    

      onSelectFilterDepartment = (e) => {
        e.preventDefault();
        const  value  = e.target.value; 
        this.setState( { filter:  { ...this.state.filter, filterDepartment: value }  }, () => {console.log(this.state.filter.filterDepartment)});
        
      };

    render() {
      return (
        <Fragment>
          <Row>
           
           <div className="form-group">
             <label htmlFor="gender">Filter Gender:</label>
             <select
               id="gender"
               name="gender"
               className="form-control"
               onChange={this.onSelectFilterGender}
             >
               <option disabled >Filter male</option>
               <option>male</option>
               <option>female</option>
             </select>
           </div>
           
           <div className="form-group">
             <label htmlFor="department">Filter Department:</label>
             <select
               id="department"
               name="department"
               className="form-control"
               onChange={this.onSelectFilterDepartment}
           
             >
                
               <option disabled >Filter Department</option>
               <option>IT</option>
               <option>marketing</option>
               <option>finance</option>
             </select>
           </div>
         
        
         
         </Row>
          <EmployeeContainer filter={this.state.filter}/>
        </Fragment>
     
            
       

 
       
       
      );
    }
  }
  
  export default Filter;