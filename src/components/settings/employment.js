import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import Locale from '../../helpers/locale.json';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';

class AddEmploymentDetails extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      designation       : null,
      jobdescription        : null,
      priorexperience          : null,
      previouspf        : null,
      department      : null,
      previousua           : null,
      employementtype          : null,
      newentranttopf   : null,
      currency   : null,
      doj             : null,
      confirmationdate : null,
      emailError      : 'Email is Required',
      previouspfError   : 'Mobile number is Required'
    };
    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleInputChange  = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    window.$('#doj').datepicker();
    window.$('#confirmationdate').datepicker();
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
    let designation         = this.state.designation;
    let jobdescription      = this.state.jobdescription;
    let priorexperience     = this.state.priorexperience;
    let previouspf          = this.state.previouspf;
    let department          = this.state.department;
    let employementtype     = this.state.employementtype;
    let previousua          = this.state.previousua;
    var date                = window.$("#doj").datepicker("getDate");
    let doj                 = window.$.datepicker.formatDate("dd-mm-yy", date);
    var cdate               = window.$("#confirmationdate").datepicker("getDate");
    let confirmationdate    = window.$.datepicker.formatDate("dd-mm-yy", cdate);
    let newentranttopf      = this.state.newentranttopf;
    let currency            = this.state.currency;
      if(designation && jobdescription && priorexperience && previouspf && department && employementtype &&  doj && newentranttopf) {
        var personalInfoData = {};
        personalInfoData.designation      = designation;
        personalInfoData.jobdescription   = jobdescription;
        personalInfoData.priorexperience  = priorexperience;
        personalInfoData.previouspf       = previouspf;
        personalInfoData.department       = department;
        personalInfoData.employementtype  = employementtype;
        personalInfoData.doj              = doj;
        personalInfoData.confirmationdate = confirmationdate;
        personalInfoData.previousua       = previousua;
        personalInfoData.newentranttopf   = newentranttopf;
        return personalInfoData;
      } else {
        return false;
      }
  }

  handleInputChange=(event)=> {
    if(window.$("#doj").datepicker("getDate")) {
      var date          = window.$("#doj").datepicker("getDate");
      let doj           = window.$.datepicker.formatDate("dd-mm-yy", date);
      this.setState({doj: doj});
    }
    const target = event.target;
    const value  = target.value;
    const name   = target.name;
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
                  <h3 className="card-title">Employment</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label>{Locale.department}</label><span className="error-class">*</span>
                    <select className="form-control custom-select" name="department" onChange={this.handleInputChange}>
                      <option defaultValue >Select one</option>
                      <option value="delivery">Delivery</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{Locale.designation}</label><span className="error-class">*</span>
                    <input placeholder={Locale.designation} type="text" name="designation" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.jobdescription}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.jobdescription} name="jobdescription" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.doj}</label><span className="error-class">*</span>
                    <input placeholder={Locale.doj} id="doj" type="text" name="doj" className="form-control" onChange={this.handleChangeDate}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.confirmationdate}</label><span className="error-class">*</span>
                    <input placeholder={Locale.confirmationdate} id="confirmationdate" type="text" name="confirmationdate" className="form-control" onChange={this.handleChangeDate}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.currency}</label><span className="error-class" >*</span>
                    <select className="form-control custom-select" name="currency" onChange={this.handleInputChange}>
                      <option defaultValue >Select one</option>
                      <option value="inr">INR</option>
                      <option value="usd">USD</option>
                    </select>
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
                    <label>{Locale.priorexperience}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.priorexperience} name="priorexperience" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.employementtype}</label><span className="error-class">*</span>
                    <div className="col-sm-12">
                        <div className="form-group clearfix">
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioSuccess1" name="employementtype" onChange={this.handleInputChange} value="permanent"/>
                            <label htmlFor="radioSuccess1">Permanent
                            </label>
                          </div>
                          <div className="icheck-primary d-inline">
                            <input type="radio" id="radioSuccess2" name="employementtype" onChange={this.handleInputChange} value="contract"/>
                            <label htmlFor="radioSuccess2">Contract
                            </label>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>{Locale.previouspf}</label><span className="error-class">*</span>
                    <input type="text" placeholder={Locale.previouspf} name="previouspf" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.previousua}</label>
                    <input placeholder={Locale.previousua} type="text" name="previousua" className="form-control" onChange={this.handleInputChange}/>
                  </div>
                  <div className="form-group">
                    <label>{Locale.newentranttopf}</label><span className="error-class" >*</span>
                    <select className="form-control custom-select" name="newentranttopf" onChange={this.handleInputChange}>
                      <option defaultValue >Select one</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>{Locale.dateofexitfrompreviousorg}</label>
                    <input placeholder={Locale.dateofexitfrompreviousorg} type="text" name="dateofexitfrompreviousorg" className="form-control" onChange={this.handleInputChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEmploymentDetails)
