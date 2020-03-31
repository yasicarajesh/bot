import React from 'react';
import $ from 'jquery';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$('#example1').DataTable();
  }

  render() {
    return(
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DataTable with default features</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Trident</td>
                    <td>Internet
                      Explorer 4.0
                    </td>
                    <td>Win 95+</td>
                    <td> 4</td>
                    <td>X</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                </table>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default EmployeeList;
