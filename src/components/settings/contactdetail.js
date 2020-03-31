import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux'
import Locale from '../../helpers/locale.json';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';

class AddContactDetails extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      cplot              : null,
      cstreetname        : null,
      clandmark          : null,
      ccity              : null,
      cstatename         : null,
      cpincode           : null,
      ccontactno         : null,
      pplot              : null,
      pstreetname        : null,
      plandmark          : null,
      pcity              : null,
      pstatename         : 'Email is Required',
      ppincode           : 'Mobile number is Required',
      pcontactno         : 'Mobile number is Required',
      isperaddneed       : true
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
    const target = event.target;
    const value  = target.value;
    const name   = target.name;
    if(event.target.checked) {
      this.setState({isperaddneed:false})
    } else {
      this.setState({isperaddneed:true});
    }
    this.setState({[name]: value});
  }

  render() {
    return(

      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Current Contact Details</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>{Locale.plot}</label>
                    <input placeholder={Locale.plot} type="text" name="plot" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.plot ? <span className="error-class">{Locale.plot} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.streetname}</label>
                    <input placeholder={Locale.streetname} type="text" name="streetname" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.streetname ? <span className="error-class">{Locale.streetname} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.landmark}</label>
                    <input placeholder={Locale.landmark} type="text" name="landmark" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.landmark ? <span className="error-class">{Locale.landmark} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.country}</label>
                    <input placeholder={Locale.country} type="text" name="country" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.country ? <span className="error-class">{Locale.country} is Required</span> : "" }
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                      <label>{Locale.statename}</label><span className="error-class">*</span>
                      <input placeholder={Locale.statename}  type="text" name="statename" className="form-control" onChange={this.handleChangeDate}/>
                      { !this.state.statename ? <span className="error-class">{Locale.statename} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                      <label>{Locale.pincode}</label><span className="error-class">*</span>
                      <input placeholder={Locale.pincode}  type="text" name="pincode" className="form-control" onChange={this.handleChangeDate}/>
                      { !this.state.pincode ? <span className="error-class">{Locale.pincode} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.city}</label>
                    <input placeholder={Locale.city} type="text" name="city" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.city ? <span className="error-class">{Locale.city} is Required</span> : "" }
                  </div>
                  <div className="form-group">
                    <label>{Locale.contactno}</label>
                    <input placeholder={Locale.contactno} type="text" name="contactno" className="form-control" onChange={this.handleInputChange}/>
                    { !this.state.ccontactno ? <span className="error-class">{Locale.contactno} is Required</span> : "" }
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* checkbox component */}
            <div className="row">
              <div className="col-md-12">
                  <div className="icheck-primary d-inline">
                      <input type="checkbox" id="checkboxPrimary2" name="samecontactdetails" onChange={this.handleInputChange}/>
                      <label htmlFor="checkboxPrimary2" style={{color:'orange',marginBottom: '6px'}}>Permanent address same as contact address</label>
                  </div>
                  <div>
                  </div>
              </div>
            </div>
          {/* end checkbox component */}
            <div className="card card-primary" style={{display : this.state.isperaddneed ? 'block':'none'}}>
              <div className="card-header">
                <h3 className="card-title">Personal Contact Details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{Locale.plot}</label>
                      <input placeholder={Locale.plot} type="text" name="plot" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.plot ? <span className="error-class">{Locale.plot} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.streetname}</label>
                      <input placeholder={Locale.streetname} type="text" name="streetname" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.streetname ? <span className="error-class">{Locale.streetname} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.landmark}</label>
                      <input placeholder={Locale.landmark} type="text" name="landmark" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.landmark ? <span className="error-class">{Locale.landmark} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.country}</label>
                      <input placeholder={Locale.country} type="text" name="country" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.country ? <span className="error-class">{Locale.country} is Required</span> : "" }
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>{Locale.statename}</label><span className="error-class">*</span>
                        <input placeholder={Locale.statename}  type="text" name="statename" className="form-control" onChange={this.handleChangeDate}/>
                        { !this.state.statename ? <span className="error-class">{Locale.statename} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                        <label>{Locale.pincode}</label><span className="error-class">*</span>
                        <input placeholder={Locale.pincode}  type="text" name="pincode" className="form-control" onChange={this.handleChangeDate}/>
                        { !this.state.pincode ? <span className="error-class">{Locale.pincode} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.city}</label>
                      <input placeholder={Locale.city} type="text" name="city" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.city ? <span className="error-class">{Locale.city} is Required</span> : "" }
                    </div>
                    <div className="form-group">
                      <label>{Locale.contactno}</label>
                      <input placeholder={Locale.contactno} type="text" name="contactno" className="form-control" onChange={this.handleInputChange}/>
                      { !this.state.ccontactno ? <span className="error-class">{Locale.contactno} is Required</span> : "" }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Emergency Contact Details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i></button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-remove"></i></button>
                </div>
              </div>
            <div className="card-body">
              <div className="form-group">
                <label>{Locale.name}</label><span className="error-class" >*</span>
                <input placeholder={Locale.name} type="text" name="name" className="form-control" onChange={this.handleInputChange}/>
              </div>
              <div className="form-group">
                <label>{Locale.relationship}</label><span className="error-class">*</span>
                <select className="form-control custom-select" name="relationship" onChange={this.handleInputChange}>
                  <option defaultValue >Select one</option>
                  <option value="inr">Uncle</option>
                  <option value="usd">Appa</option>
                </select>
                { !this.state.cstreetname ? <span className="error-class">{Locale.relationship} is Required</span> : "" }
              </div>
              <div className="form-group">
                <label>{Locale.contactno}</label>
                <input placeholder={Locale.contactno} type="text" name="contactno" className="form-control" onChange={this.handleInputChange}/>
                { !this.state.econtactno ? <span className="error-class">{Locale.contactno} is Required</span> : "" }
              </div>
            </div>
           </div>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddContactDetails)
