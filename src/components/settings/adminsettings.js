import React from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import Locale from '../../helpers/locale.json';
import { EmailValidation , PhoneNumberValidation } from '../../common/validation.js';
import { AC_ADD_EMPLOYEE_PEROSNAL_DATA } from '../actions/employee';
import Social from './social';

console.log('=--------------------',Locale);

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange  = this.handleInputChange.bind(this);
    this.saveSocialSettings  = this.saveSocialSettings.bind(this);
  }

  handleInputChange(event) {
    this.fileToImageConversation(event)
  }

  saveSocialSettings() {
    console.log('-===============');
  }

  render() {
    return(
      <section className="content">
      <div className="card card-primary card-outline">
        <div className="card-body">
          <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="custom-content-below-home-tab" data-toggle="pill" href="#custom-content-below-home" role="tab" aria-controls="custom-content-below-home" aria-selected="true">Site Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="custom-content-below-profile-tab" data-toggle="pill" href="#custom-content-below-profile" role="tab" aria-controls="custom-content-below-profile" aria-selected="false">Social Media</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="custom-content-below-messages-tab" data-toggle="pill" href="#custom-content-below-messages" role="tab" aria-controls="custom-content-below-messages" aria-selected="false">Google Webmaster & SEO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="custom-content-below-settings-tab" data-toggle="pill" href="#custom-content-below-settings" role="tab" aria-controls="custom-content-below-settings" aria-selected="false">App Settings</a>
            </li>
          </ul>

          <div className="tab-content" id="custom-content-below-tabContent">
            <div className="tab-pane fade show active" id="custom-content-below-home" role="tabpanel" aria-labelledby="custom-content-below-home-tab">
              <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>{Locale.contactemail}</label>
                        <input placeholder={Locale.contactemail} type="text" name="contactemail" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label>{Locale.sitename}</label>
                        <input placeholder={Locale.sitename} type="text" name="sitename" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label>{Locale.contactnumber}</label>
                        <input placeholder={Locale.contactnumber} type="text" name="contactnumber" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label>{Locale.footercontent}</label>
                        <input placeholder={Locale.footercontent} type="text" name="footercontent" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label>{Locale.sitelogo}</label><span className="error-class">*</span>
                        <div>
                            <input type="file"  name="sitelogo" id="sitelogo" onChange={this.handleInputChange}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="sitelogo"></div>
                     </div>
                     <div className="form-group">
                       <label>{Locale.siteavicon}</label><span className="error-class">*</span>
                       <div>
                           <input type="file"  name="siteavicon" id="siteavicon" onChange={this.handleInputChange}/>
                       </div>
                     </div>
                     <div className="form-group">
                       <div className="siteavicon"></div>
                    </div>
                    <div className="form-group">
                      <input type="submit" value={Locale.save} className="btn btn-success float-right" onClick={this.saveSocialSettings}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="custom-content-below-profile" role="tabpanel" aria-labelledby="custom-content-below-profile-tab">
              <Social/>
            </div>

            <div className="tab-pane fade" id="custom-content-below-messages" role="tabpanel" aria-labelledby="custom-content-below-messages-tab">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
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
                      <div className="row">
                        <div className="col-12">
                          <input type="submit" value={Locale.save} className="btn btn-success float-right"/>
                        </div>
                      </div>
                  </div>
                </div>
               </div>
            </div>

            <div className="tab-pane fade" id="custom-content-below-settings" role="tabpanel" aria-labelledby="custom-content-below-settings-tab">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
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
                      <div className="row">
                        <div className="col-12">
                          <input type="submit" value={Locale.save} className="btn btn-success float-right"/>
                        </div>
                      </div>
                    </div>
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

export default EmployeeList;
