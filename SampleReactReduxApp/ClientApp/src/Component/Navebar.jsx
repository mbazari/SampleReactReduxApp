import React, { Component } from 'react';
import {Link} from  "react-router-dom";

class Navebar extends Component {
  render() {
    return (
      <nav className="rtl navbar navbar-dark fixed-top bg-info flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-sm-3 col-md-3 mr-0" to="/">سامانه </Link>
<ul className="navbar-nav px-3">
<li className="nav-item text-nowrap px-3"><Link to="/Login">ورود</Link></li>
</ul>
      </nav>
    );
  }
}

export default Navebar;
