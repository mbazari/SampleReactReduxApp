import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { paginate } from '../Utility/Pagination';
import Pagination from './pagination';
import * as agent from '../Utility/httpagent'

class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentPage: 1,
      pageSize: 5
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }
  handlePageChange = page => {

    this.setState({ currentPage: page });
  };

  componentWillMount() {

  }
  componentDidMount() {
    this.props.onLoad(agent.User.get());
  }
  getPageData = () => {
    const { pageSize, currentPage} = this.state;
    const Users = paginate( this.props.user, currentPage, pageSize);

    return {
      totalCount: this.props.user.length,
      data: Users
    };
  };
  render() {
    if (this.props.user.length === 0) {
      return (
        <div style={{ margin: "10px" }}>
          <div className="alert alert-danger">داده ای جهت نمایش وجود ندارد!!!</div>
        </div>
      )
    }
    const { pageSize, currentPage } = this.state;
    const { totalCount, data } = this.getPageData();
    return (

      <div style={{ margin: "10px" }}>
        <table className="table table-bordered table-hover">
          <thead className="bg-info">
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>ایمیل</th>
              <th>تلفن</th>
              <th>موبایل</th>
              <th>شروع فعالیت</th>
              <th> پایان فعالیت</th>
            </tr>
          </thead>
          <tbody>
            {data.map(counter =>
              <tr>
                <td>{counter.Name}</td>
                <td>{counter.Family}</td>
                <td>{counter.Email}</td>
                <td>{counter.Tell}</td>
                <td>{counter.Mobile}</td>
                <td>{counter.DateFrom}</td>
                <td>{counter.DateTo}</td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          itemCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        ></Pagination>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.User
});

const mapDispatchToProps = (dispatch) => (
  {
    onLoad: promise => {
      promise
        .then(users => {
         dispatch(
            {
              type: "ALL_PERSON_LOADED",
              users
            }
          )
        }
        )
    },
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Reports);


