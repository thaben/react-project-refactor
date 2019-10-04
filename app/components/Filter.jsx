import React, { Component } from "react";
import { Row,Button } from "reactstrap";


class Filter extends Component {

    state = {
        filterGender: null,
        // filterDepartment: null,
      };



      onSelectFilterGender = (e) => {
       e.preventDefault();
        const { value } = e.target;
        this.setState( { filterGender:  value  } );
      };
    

      onSelectFilterDepartment = (e, id) => {
        e.preventDefault();
        const { value1 } = e.target;
        const {options, value} = e.target;
        console.log(options[value]);
        
    
        this.setState( { filterDepartment: { ...this.state.filterDepartment, department: value } });
      };

    render() {
      return (
        
        <Row>
    
            {console.log(this.filterGender)}
                 <div className="form-group">
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        onChange={(e) => this.setState({ filterGender: e.target.value })}
                      >
                        <option disabled >Filter Gender</option>
                        <option>male</option>
                        <option>female</option>
                      </select>
                    </div>
      
        </Row>
      );
    }
  }
  
  export default Filter;