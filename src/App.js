import React, { Component } from 'react';
import logo from './logo.svg';
import {SimpleTable} from "./examples/SimpleTable"
import {Multi} from "./examples/Multi"
import {Select} from "./examples/Select"
import {Options} from "./examples/Options"

import {
    HashRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import './App.scss';

class App extends Component {
  render() {
    return <Router>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{width: 200, backgroundColor: "#333", padding: 30, zIndex: 1, position: "fixed", height:"100%"}} />
        <div style={{flexDirection: "column", width: 200, padding: 30, color: "white", zIndex: 2}}>
          <div style={{fontWeight: "bold", display: "flex", justifyContent:"center"}}>React CRUX Examples</div>
          <div style={{height: 50}}></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/">Simple Table + Form</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/options">Edit, Create, Delete Options</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/multi">Multiple Components</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/select">Select</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/iterable">Iterable</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/iterableofselect">Iterable of Select</Link></div>
          <div style={{height: 50, paddingLeft: 14}}><Link to="/iterableofnested">Iterable of Nested</Link></div>
        </div>
        <div style={{flexDirection: "column", flex: 1}}>
            <Switch>
              <Route path="/" exact={true} component={SimpleTable} />
              <Route path="/options" exact={true} component={Options} />
              <Route path="/multi" component={Multi}/>
              <Route path="/select" component={Select}/>
            </Switch>
        </div>
      </div>
    </Router>
  }
}

function mapStateToProps(state) {
    return {...state}
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp