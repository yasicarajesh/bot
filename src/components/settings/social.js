import React from 'react';
import $ from 'jquery';
import Locale from '../../helpers/locale.json';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.saveSocialSettings  = this.saveSocialSettings.bind(this);
  }

  saveSocialSettings() {
    console.log('save');
  }


  render() {
    return(
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
              <div className="form-group">
                <label>{Locale.fblink}</label>
                <input placeholder={Locale.fblink} type="text" name="fblink" className="form-control"/>
              </div>
              <div className="form-group">
                <label>{Locale.fblink}</label>
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

              <div className="form-group">
                <label>{Locale.fblink}</label>
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
                  <input type="submit" value={Locale.save} className="btn btn-success float-right" onClick={this.saveSocialSettings}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Social;
