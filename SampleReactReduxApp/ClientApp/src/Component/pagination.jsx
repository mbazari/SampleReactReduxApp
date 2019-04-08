
import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types'; // ES6
class Pagination extends Component {
  constructor(props)
  {
    super(props)
    
  }
  //برای http نیز از این استفاده میکنیم
  componentDidMount()
  {

   
  }
  render() {
    
      const pagecount=this.props.itemCount/this.props.pageSize
      console.log(pagecount)
      if(pagecount===1) return null;
      const pages=_.range(1,pagecount+1)
    return (
      <div>
          <nav aria-label="Page navigation example">
  <ul class="pagination">
  {pages.map(page=>( <li class="page-item" style={{cursor:"pointer"}} ><a class="page-link" onClick={()=>this.props.onPageChange(page)}>{page}</a></li>)
    )}
    
  </ul>
</nav>
      </div>
    );
  }
}
// Pagination.PropTypes={

// }
export default Pagination;