import React, { Component } from 'react';
import {DatePicker} from "react-advance-jalaali-datepicker";
import { connect } from 'react-redux';
import { AddPersoninfo } from '../Actions/index'; 
class UserDefine extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      Name:'',
      Family:'',
      Tell:'',
      Mobile:'',
      Email:'',
      Address:'',
      DateFrom:'',
      DateTo:'',
      ShowError:false,
      ShowThanks:false,
      data:[]
    }
   this.handleName=this.handleName.bind(this)
   this.handleTell=this.handleTell.bind(this)
   this.handleEmail=this.handleEmail.bind(this)
   this.handleFamily=this.handleFamily.bind(this)
   this.handleMobile=this.handleMobile.bind(this)
   this.handleAdress=this.handleAdress.bind(this)
   this.handleinsertForm=this.handleinsertForm.bind(this)
   this.changeDateTo=this.changeDateTo.bind(this)
   this.changeDateFrom=this.changeDateFrom.bind(this)
  }
  changeDateFrom(unix, formatted){
   this.setState({
      DateFrom:formatted
   })
}
changeDateTo(unix, formatted){
  this.setState({
     DateTo:formatted
  })
}
  handleinsertForm(e)
  {
    if(this.state.Name==='' || this.state.Family===''|| this.state.Tell==='' || this.state.Email===''  || this.state.Mobile==='' || this.state.DateFrom==='' || this.state.DateTo==='')
    {
    this.setState({
      ShowError:true,
      ShowThanks:false
    })
    }
    else{
      try
        {
         
             const { dispatch } = this.props;                
             dispatch(AddPersoninfo({Name:this.state.Name,Family:this.state.Family,Tell:this.state.Tell,Email:this.state.Email,Mobile:this.state.Mobile,DateFrom:this.state.DateFrom,DateTo:this.state.DateTo}));
             this.setState({Name:'',Family:'',Tell:'',Email:'',Mobile:'',DateFrom:'',DateTo:'',Address:'', ShowError:false,ShowThanks:true})
        }
        catch(ex){
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
  handleName(e)
  {
    this.setState(
      {Name:e.target.value}
    )
  }
  handleFamily(e)
  {
    this.setState(
      {Family:e.target.value}
    )
  }
  handleTell(e)
  {
    const isInteger = /^[0-9]+$/;
    if (e.target.value===''|| isInteger.test(e.target.value))
    {
      this.setState(
        {Tell:e.target.value}
      )
    }
    
  }
  handleMobile(e)
  {
    const isInteger = /^[0-9]+$/;
    if (e.target.value===''|| isInteger.test(e.target.value))
    {
      this.setState(
        {Mobile:e.target.value}
      )
    }
    
  }
  handleEmail(e)
  {

    this.setState(
      {Email:e.target.value}
    )
  }
  handleAdress(e)
  {
    this.setState(
      {Address:e.target.value}
    )
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
      <form onSubmit={this.handleinsertForm}>
        <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4">
        <div className="form-group">
      <label for="Name">نام:</label>
      <input type="Name" onChange={this.handleName} value={this.state.Name} className="form-control" id="Name"/>
  </div>
  </div>
        <div className="col-md-4 col-lg-4">
        <div className="form-group">
      <label for="Family">نام خانوادگی:</label>
      <input type="Family" onChange={this.handleFamily} value={this.state.Family} className="form-control" id="Family"/>
      </div>
        </div>
        <div className="col-md-4 col-lg-4">
        <div className="form-group">
      <label for="Tell">شماره تلفن:</label>
      <input type="Tell" onChange={this.handleTell} value={this.state.Tell} className="form-control" id="Tell" maxLength="11"/>
      </div>
        </div>

        </div>
        <div className="row">
       
        <div className="col-md-4 col-lg-4">
        <div className="form-group">
      <label for="Mobile">موبایل:</label>
      <input type="Mobile" onChange={this.handleMobile} value={this.state.Mobile} className="form-control" maxLength="10" id="Mobile"/>
      </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-4">
        <div className="form-group">
      <label for="Email">ایمیل:</label>
      <input type="Email" onChange={this.handleEmail} value={this.state.Email} className="form-control" id="Email"/>
  </div>
  </div>
        <div className="col-md-4 col-lg-4">
        <div className="form-group">
      <label for="Adress">آدرس:</label>
      <input type="Adress" onChange={this.handleAdress} value={this.state.Address} className="form-control" id="Adress" />
      </div>
        </div>

        </div>
        <div className="row">
       
       <div className="col-md-4 col-lg-4">
       <div className="form-group">
     <label for="Mobile">تاریخ شروع فعالیت:</label>
     <DatePicker
                    inputComponent={this.DatePickerInput}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    onChange={this.changeDateFrom}
                    id="datePicker"
                    preSelected={this.state.DateFrom}
                  
                    />
     
     </div>
       </div>
       <div className="col-md-4 col-lg-4 col-sm-4">
       <div className="form-group">
     <label for="Email">تاریخ پایان فعالیت:</label>
     <DatePicker
                    inputComponent={this.DatePickerInput}
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    onChange={this.changeDateTo}
                    id="datePicker"
                    preSelected={this.state.DateTo}
                  
                    />
 </div>
 </div>
 <div className="col-md-4 col-lg-4 col-sm-4">
 <button type="submit" style={{marginTop:"8%"}} class="btn btn-success">ثبت</button>
 </div>
       </div>
      
       

   </form>
      </div>
 
    );
  }
}

export default connect()(UserDefine);