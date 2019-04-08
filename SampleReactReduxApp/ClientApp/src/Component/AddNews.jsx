import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {AddNew} from '../Actions/index';
class AddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      Desc: '',
      ShowError: false,
      ShowThanks: false
    }
    this.handleTitle=this.handleTitle.bind(this)
    this.handleDesc=this.handleDesc.bind(this)
    this.handleInsertNews=this.handleInsertNews.bind(this)
  }
  handleTitle(e) {
    this.setState({
      title: e.target.value
    })

  }
  handleDesc(e) {
    this.setState({
      Desc: e.target.value
    })
  }
  handleInsertNews(e) {
    if (this.state.title === '' || this.state.Desc === '' ) {
      this.setState({
        ShowError: true,
        ShowThanks: false
      })
    }
    else {
      try {

        const { dispatch } = this.props;
        dispatch(AddNew({ Title: this.state.title, Desc: this.state.Desc}));
        this.setState({ title: '', Desc: ''})
      }
      catch (ex) {
        alert("خطا")
      }
      // this.setState({
      // data:[...this.state.data].push({Name:this.state.Name,Family: this.state.Family,Tell:this.state.Tell,Email:this.state.Email,Mobile:this.state.Email,DateFrom:this.state.DateFrom,DateTo:this.state.DateTo}),
      // ShowError:false
      // })
      // console.log(this.state.data)
    }
    e.preventDefault()

  }
  render() {
    let erro=``;
    if(this.state.ShowError==true)
    {
      erro=<div className="alert alert-danger">خطا!!!!! تمامی فیلدها را پرکنید</div>
    }
    if(this.state.ShowThanks==true)
    {
      erro=<div className="alert alert-success">عملیات با موفقیت انجام شد</div>
    }
    return (
      <div className="container-fluid">
      {erro}
        <form  onSubmit={this.handleInsertNews}>
          <div class="form-group">
            <label for="Title">عنوان خبر </label>
            <input type="Title" value={this.state.title} onChange={this.handleTitle} className="form-control" id="Title" />
          </div>
          <div class="form-group">
            <label for="pwd">توضیحات</label>
            <textarea className="form-control" value={this.state.Desc} onChange={this.handleDesc} id="Desc" ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">ثبت</button>
        </form></div>


    );
  }
}

export default connect()(AddNews);
