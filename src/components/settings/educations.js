import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import Locale from '../../helpers/locale.json';
import CONFIG from '../../common/config.js';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';

class AddEducationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degreeName : 1
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name  = e.target.name;
    const value = e.target.value;
    if(name == 'educationtype') {
      this.setState({degreeName:value})
    }
  }

  render() {

    {/* Education type array list*/}
    const educationTypeArray = [];
    const typeList           = CONFIG.EducationType;
    var j = 1;
    typeList.map((type,i) => {
      educationTypeArray.push(<option value={j} key={j}>{type[j]}</option>);
      j++;
    })

    {/* degree array list based on educatuion type*/}
    const degreeArray = [];
    const degreeList  = CONFIG.Degree;
    var k = 1;
    degreeList.map((degree,i) => {
      if(this.state.degreeName == degree.type) {
        degreeArray.push(<option value={k} key={k}>{degree.name}</option>);
      }
      k++;
    })
    return(
      <section className="content">
        <div className="container-fluid" >
          <div className="card card-default">
            <div className="card-header">
              <h3 className="card-title">Experience</h3>
            </div>
            <div className="card-body">
              <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{Locale.educationtype}</label><span className="error-class">*</span>
                      <select className="form-control custom-select" name="educationtype" onChange={this.handleInputChange}>
                          <option defaultValue >Select one</option>
                          {educationTypeArray}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>{Locale.duration}</label>
                      <input placeholder={Locale.duration} type="text" name="duration" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>{Locale.college}</label>
                      <input placeholder={Locale.college} type="text" name="college" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label>{Locale.comments}</label>
                      <input placeholder={Locale.comments} type="text" name="comments" className="form-control"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                        <label>{Locale.degree}</label><span className="error-class">*</span>
                          <select className="form-control custom-select" name="degree" onChange={this.handleInputChange}>
                            <option defaultValue >Select one</option>
                            {degreeArray}
                          </select>
                      </div>
                      <div className="form-group">
                        <label>{Locale.yearsofpasing}</label>
                        <input placeholder={Locale.yearsofpasing} type="text" name="yearsofpasing" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label>{Locale.university}</label>
                        <input placeholder={Locale.university} type="text" name="university" className="form-control"/>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
  }
}

export default AddEducationDetails;
