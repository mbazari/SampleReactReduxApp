

import React, { Component } from 'react';
import getPosts from './../services/fakePosts';
import Pagination from './pagination';
import {paginate} from '../Utility/Pagination';
import {Route, Switch,Link } from "react-router-dom";
import Detailpost from "./DetailPost";
import { connect } from 'react-redux';
import * as agent from '../Utility/httpagent'

class Post extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      currentPage:1,
      pageSize:5
    }
    this.handlePageChange=this.handlePageChange.bind(this)
  }
  componentWillMount() {
   
  }

  //برای http نیز از این استفاده میکنیم
  componentDidMount()
  {
    this.props.onLoad(agent.News.get());     
    // this.setState({ post: [...this.props.News] })
    // console.log(this.state.post)
    // const posts=getPosts()
    // this.setState({post:posts})
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
};

getPageData = () => {
    const { pageSize, currentPage} = this.state;
    const posts = paginate(this.props.News, currentPage, pageSize,this.props.id);

    return {
        totalCount: this.props.News.length,
        data: posts
    };
};
  render() {
    const { pageSize, currentPage } = this.state;
        const { totalCount, data } = this.getPageData();
    return (
      
    <div style={{margin:"2%"}}>
      {data.map(post=>(
        <div class="card" style={{margin:"20px"}} >
      
        <div class="card-body" >
          <h5 class="card-title">{post.Title}</h5>
          <p class="card-text">{post.Desc}</p>
          <Link  class="btn btn-primary"  to={{
  pathname: '/DetailPost',
  state: {
    id: post.id
  }}}>بیشتر</Link>
         
         
        </div>
      </div>
      ))}
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
  News: state.News
})
const mapSDispatchToProps = (dispatch) => ({
  onLoad: promise => promise.then(news=>  dispatch({ type: "ALL_NEWS", news })),
})
export default connect(mapStateToProps,mapSDispatchToProps)(Post);
