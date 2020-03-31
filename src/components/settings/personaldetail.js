import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import Locale from '../../helpers/locale.json';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';

class AddPersonalDetails extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      firstname       : null,
      lastname        : null,
      pemail          : null,
      mobileno        : null,
      salutation      : null,
      skype           : null,
      gender          : null,
      marriedstatus   : null,
      dob             : null,
      currentlocation : null,
      baselocation    : null,
      emailError      : 'Email is Required',
      mobilenoError   : 'Mobile number is Required'
    };
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleInputChange  = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    window.$('#dob').datepicker();
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    var data = this.validateForm();
    this.props.AddEmployeePersonalInfo(data);
    // if(data) {
    //   this.props.AddEmployeePersonalInfo(data);
    // } else {
    //   swal({
    //     title: "Please check the form",
    //     text: "Please fill required fields",
    //     icon: "error",
    //     dangerMode: true
    //     })
    // }
  }

  validateForm() {
    let firstname         = this.state.firstname;
    let lastname          = this.state.lastname;
    let pemail            = this.state.pemail;
    let mobileno          = this.state.mobileno;
    let salutation        = this.state.salutation;
    let gender            = this.state.gender;
    let skype             = this.state.skype;
    let currentlocation   = this.state.currentlocation;
    let baselocation      = this.state.baselocation;
    var date              = window.$("#dob").datepicker("getDate");
    let dob               = window.$.datepicker.formatDate("dd-mm-yy", date);
    let marriedstatus     = this.state.marriedstatus;
      if(firstname && lastname && pemail && mobileno && salutation && gender &&  dob && marriedstatus) {
          var personalInfoData = {};
          personalInfoData.firstname      = firstname;
          personalInfoData.lastname       = lastname;
          personalInfoData.pemail         = pemail;
          personalInfoData.mobileno       = mobileno;
          personalInfoData.salutation     = salutation;
          personalInfoData.gender         = gender;
          personalInfoData.dob            = dob;
          personalInfoData.skype          = skype;
          personalInfoData.marriedstatus  = marriedstatus;
         return personalInfoData;
      } else {
          return false;
      }
  }

  handleInputChange=(event)=> {
    if(window.$("#dob").datepicker("getDate")) {
      var date          = window.$("#dob").datepicker("getDate");
      let dob           = window.$.datepicker.formatDate("dd-mm-yy", date);
      this.setState({dob: dob});
    }
    const target = event.target;
    const value  = target.value;
    const name   = target.name;
    // Email validation
    if(name == 'pemail') {
      if(value) {
      var emailCheck = EmailValidation(value);
        if(!emailCheck) {
          return this.setState({pemail:'', emailError : 'Please enter a valid email'})
        }
      } else {
        return this.setState({pemail:'', emailError : 'Email is Required'})
      }
    }
    // Phone number validation
    if(name == 'mobileno') {
      if(value) {
        var mobileNoCheck = PhoneNumberValidation(value);
        if(!mobileNoCheck) {
          return this.setState({mobileno:'', mobilenoError : 'Enter 10 digit mobile number'})
        }
      } else {
         return this.setState({mobileno:'', mobilenoError : 'Mobile number is Required'})
      }

    }
    this.setState({[name]: value});
  }

  render() {
    return(
      <section className="content">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Personal</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>{Locale.salutation}</label><span className="error-class">*</span>
                    <select className="form-control custom-select" name="salutation" onChange={this.handleInputChange}>
                      <option defaultValue >Select one</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                    </select>
                    { !this.state.salutation ? <span className="error-class">{Locale.salutation} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.firstname}</label><span className="error-class">*</span>
                    <input placeholder={Locale.firstname} type="text" name="firstname" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.firstname ? <span className="error-class">{Locale.firstname} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.lastname}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.lastname} name="lastname" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.lastname ? <span className="error-class">{Locale.lastname} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.dob}</label><span className="error-class">*</span>
                    <input placeholder={Locale.dob} id="dob" type="text" name="dob" className="form-control" onChange={this.handleChangeDate}/>
                    { !this.state.dob ? <span className="error-class">{Locale.dob} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.currentlocation}</label>
                    <input placeholder={Locale.currentlocation} type="text" name="currentlocation" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.baselocation}</label>
                    <input placeholder={Locale.baselocation} type="text" name="baselocation" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Information</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fas fa-minus"></i></button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>{Locale.pemail}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.pemail} name="pemail" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.pemail ? <span className="error-class">{this.state.emailError}</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.gender}</label><span className="error-class">*</span>
                    <div className="col-sm-12">
                        <div className="form-group clearfix">
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioSuccess1" name="gender" onChange={this.handleInputChange} value="male"/>
                            <label htmlFor="radioSuccess1">Male
                            </label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioSuccess2" name="gender" onChange={this.handleInputChange} value="female"/>
                            <label htmlFor="radioSuccess2">Female
                            </label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioSuccess3" name="gender" onChange={this.handleInputChange} value="transgender"/>
                            <label htmlFor="radioSuccess3">Transgender
                            </label>
                          </div>
                        </div>
                    </div>
                    { !this.state.gender ? <span className="error-class">{Locale.gender} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.mobileno}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.mobileno} name="mobileno" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.mobileno ? <span className="error-class">{this.state.mobilenoError}</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.skype}</label>
                    <input placeholder={Locale.skype} type="text" name="skype" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.marriedstatus}</label><span className="error-class" >*</span>
                    <select className="form-control custom-select" name="marriedstatus" onChange={this.handleInputChange}>
                      <option defaultValue >Select one</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Married">Married</option>
                    </select>
                    { !this.state.marriedstatus ? <span className="error-class">{Locale.marriedstatus} is Required</span> : "" }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <input type="submit" value="Add Perosnal Details" className="btn btn-success float-left"/>
            </div>
          </div>
     </form>
   </section>
  )
 }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({AddEmployeePersonalInfo:AC_ADD_EMPLOYEE_PEROSNAL_DATA }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonalDetails)
