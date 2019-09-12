import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/Home";
import UnCompletedChorezList from "./uncompletedchorez/UnCompletedChorezList"
import UnCompletedChorezForm from './uncompletedchorez/UnCompletedChorezForm'
import UnCompletedChorezEditForm from './uncompletedchorez/UnCompletedChorezEditForm'



export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;
  activeUser = () => parseInt(sessionStorage.getItem("activeUser"));

  render() {
    console.log(this.activeUser());
    return (
      <React.Fragment>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/"
          render={props => { 
            if (this.isAuthenticated()) {
              return <Home  {...props}/>;
            } else {
              return <Redirect to="/login" />;
            }
          }}
          />
          <Route exact path="/uncompletedchorez/new" render={(props) => {
          return <UnCompletedChorezForm {...props} />
          }} />
        <Route exact path="/uncompletedchorez" render={(props) => {
        if (this.isAuthenticated()) {
          return <UnCompletedChorezList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/uncompletedchorez/:uncompletedchorezId(\d+)/edit" render={props => {
        return <UnCompletedChorezEditForm {...props} />
      }}
      />
        </React.Fragment>
    )
  }
}
