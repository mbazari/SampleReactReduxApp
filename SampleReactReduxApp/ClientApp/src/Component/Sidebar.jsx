import React, { Component } from 'react';
import getNavLinks from './../services/navLinks';
import { Link } from 'react-router-dom';




class Sidebar extends Component {
  render() {
      const sidbar= getNavLinks()
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <div className="text-center">
            <ul class="list-group" style={{padding:"5px"}}>
            {sidbar.map((item, i) => (<li class="list-group-item"><Link to={item.link}>{item.text}</Link></li>
)       ) }
            
            
  
  
  
</ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Sidebar;