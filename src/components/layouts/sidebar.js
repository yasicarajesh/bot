import React from 'react';
import SidebarName from '../../helpers/sidebar.json';
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
class Sidebar extends React.Component {

  render() {
    const sidebarArray = [];
    SidebarName.SIDEBAR.map((Sidebar,i) => {
      if(Sidebar.Active ==  true)
        sidebarArray.push(
          <li className="nav-item has-treeview" key={i}>
            <Link to={Sidebar.Url} className={i == 0 ? "nav-link active":"nav-link"}>
              <i className={Sidebar.Icon} ></i>
              <p>
                {Sidebar.Main_Moudle_Name}
                {Sidebar.Sub_Module_Name ? <i className="fas fa-angle-left right"></i> : ""}
              </p>
            </Link>
            { Sidebar.Sub_Module_Name ?
               <ul className="nav nav-treeview">
                  { Sidebar.Sub_Module_Name.map((Submodule,j)=> {
                    return (
                             <li className="nav-item" key={j}>
                                <Link to={Submodule.Url} className="nav-link">
                                  <i className="far fa-circle nav-icon"></i>
                                  <p>{Submodule.Moudle_Name}</p>
                                </Link>
                              </li>
                           )
                   })}
                </ul> : ""
               }
          </li>
       )
    })
    return(
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
          <span className="brand-text font-weight-light">Saksoft</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
            </div>
            <div className="info">
              <a href="#" className="d-block">Venakatesan C</a>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {sidebarArray}
            </ul>
          </nav>
        </div>
     </aside>
    )
  }
}

export default Sidebar;
