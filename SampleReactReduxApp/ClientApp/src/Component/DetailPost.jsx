import React, { Component } from 'react';
import {Link} from  "react-router-dom";
import { GetpostWithid } from '../Utility/GetPostWithId';

class Detailpost extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id:-1,
            data:{}
        }
    }
    componentDidMount () {
      
        this.setState({
            id:this.props.location.state.id
        })
         const posts = GetpostWithid(this.props.location.state.id);
    //     console.log(posts.postTitle)
    //   this.setState({data:posts})
      }
     
  render() {
    return (
    <h1>id:{this.state.id} {this.state.data.postTitle}</h1>
    );
  }
}

export default Detailpost;
