

import React, { Component } from 'react';
import getPosts from './../services/fakePosts';
import Pagination from './pagination';
import {paginate} from '../Utility/Pagination';
import {Route, Switch,Link } from "react-router-dom";
import Detailpost from "./DetailPost";


class Post extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      post:[],
      currentPage:1,
      pageSize:5
    }
    this.handlePageChange=this.handlePageChange.bind(this)
  }
  //برای http نیز از این استفاده میکنیم
  componentDidMount()
  {

    const posts=getPosts()
    this.setState({post:posts})
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
};

getPageData = () => {
    const { pageSize, currentPage, post } = this.state;
    const posts = paginate(post, currentPage, pageSize,this.props.id);

    return {
        totalCount: post.length,
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
          <h5 class="card-title">{post.postTitle}</h5>
          <p class="card-text">{post.postContent}</p>
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

export default Post;