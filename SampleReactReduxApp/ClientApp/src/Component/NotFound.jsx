import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
      
    return (
        <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <span class="display-1 d-block">404</span>
                    <div class="mb-4 lead">متاسفانه صفحه مورد نظر یافت نشد</div>
                    <Link to="" class="btn btn-success">بازگشت به صفحه اصلی</Link>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}

export default NotFound;