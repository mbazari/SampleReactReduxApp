import React, { Component } from 'react';
import Navebar from './Component/Navebar';
import Sidebar from './Component/Sidebar';
import Post from './Component/Post';
import {Route, Switch,Redirect } from "react-router-dom";
import Reports from './Component/Reports';
import UserDefine from './Component/UserDefine';
import NimaReport from './Component/NimaReports';
import Detailpost from './Component/DetailPost'
import NotFound from './Component/NotFound'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navebar></Navebar>

        <div className="container-fluid rtl">
        <div className="row">
        <div className="col-lg-2 col-md-2">
        <Sidebar></Sidebar>
        </div>

        <main role="main" className="col-md-10 col-lg-10">
        <Switch>                <Route path="/UserDefine" component={UserDefine} />
                                <Route path="/NimaReports" component={NimaReport} />
                                <Route path="/Reports"  component={Reports}   />
                                {/* انتقال کوئری استنرینگ
                                <Route path="/"  render={(props) => <Post {...props} id={-1}/>} /> */}
                            
                                <Route path="/Detailpost" component={Detailpost}  />
                                <Route path="/" exact  component={Post} />  />
                                <Redirect to="/NotFound"></Redirect>
                            </Switch>

          </main>
        </div>



        </div>

      </React.Fragment>
    );
  }
}

export default App;
