import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Page/Home/Home";
import Rooms from "../Page/Rooms/Rooms";
import SingleRooms from "../Page/SingleRoom/SingleRoom";
import Error from "../Page/Error/Error";
import Login from "../Page/Log_Reg/Login";
import Navigation from "../Navigation/Navigation";
import { connect } from 'react-redux';
import {requestRooms} from '../../action';
import "./App.css";
const mapStateToProps=(state)=>{
  return {
    rooms:state.rooms
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRooms: () => dispatch(requestRooms())
  }
}
class App extends Component {
  componentDidMount() {
    this.props.onRequestRooms();
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Rooms" component={Rooms} />
          <Route exact path="/Rooms/:slug" component={SingleRooms} />
          <Route exact path="/Login" component={Login} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
