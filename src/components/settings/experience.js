import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import Locale from '../../helpers/locale.json';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';

class AddExperienceDetails extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
       cpincode : null,
       expcount : 1
     };
     this.addExperience = this.addExperience.bind(this);
     this.removeExperience = this.removeExperience.bind(this);
   }

   addExperience= ()=> {
     this.setState({expcount:this.state.expcount+1});
   }

   removeExperience= ()=> {
     this.setState({expcount:this.state.expcount-1});
   }

   componentDidMount() {
     window.$('#reservation').daterangepicker();
   }

  render() {
    const experienceArray = [];
    const expcount        = this.state.expcount;
    for (var i = 1; i <= expcount; i++) {
      experienceArray.push(
            <div className="container-fluid" key={i}>
              <div className="card card-default">
                <div className="card-header">
                  <h3 className="card-title">Experience</h3>
                  <div className="card-tools">
                   { i == 1 ? <button type="button" className="btn btn-tool" onClick={this.addExperience}><i className="fas fa-plus"></i> Add experience </button> :
                   <button type="button" className="btn btn-tool" onClick={this.removeExperience}><i className="fas fa-plus"></i> Remove experience </button>
                   }
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                      <label>{Locale.companyname}</label>
                      <input placeholder={Locale.companyname} type="text" name="pincode" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.companyname ? <span className="error-class">{Locale.companyname} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.designation}</label>
                      <input placeholder={Locale.designation} type="text" name="pincode" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.designation ? <span className="error-class">{Locale.designation} is Required</span> : "" }
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>{Locale.duration}</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt"></i>
                            </span>
                          </div>
                          <input placeholder={Locale.duration} type="text" className="form-control float-right" id="reservation"/>
                        </div>
                        { !this.state.duration ? <span className="error-class">{Locale.duration} is Required</span> : "" }
                      </div>
                      <div className="form-group">
                        <label>{Locale.roles}</label>
                        <textarea placeholder={Locale.roles}  name="pincode" className="form-control" onChange={this.handleInputChange}/>
                        { !this.state.roles ? <span className="error-class">{Locale.roles} is Required</span> : "" }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      )
    }

    return(
            <section className="content">
              {experienceArray}
            </section>
          )
        }
}
export default AddExperienceDetails;
