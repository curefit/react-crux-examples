import React, { Component } from 'react';
import {SimpleTable} from "./examples/SimpleTable"
import {Select} from "./examples/Select"
import {Options} from "./examples/Options"
import {Iterable} from "./examples/Iterable"
import {Nested} from "./examples/Nested"

import {
    HashRouter as Router,
    Route,
    Switch,
} from "react-router-dom"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.scss';
import {IterableOfSelect} from "./examples/IterableOfSelect"
import {IterableOfNested} from "./examples/IterableOfNested"

class App extends Component {
    render() {
        return <Router>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{flexDirection: "column", width: 200, padding: 20, color: "white", zIndex: 2, position: "fixed", backgroundColor: "#333", height: "100%"}}>
                    <div style={{fontWeight: "bold", display: "flex", justifyContent:"center"}}>React CRUX Examples</div>
                    <div style={{height: 20}}></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/">Simple Table + Form</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/options">Edit, Create Options</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/multi">Multiple Components</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/select">Select</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/iterable">Iterable</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/iterableofselect">Iterable of Select</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/nested">Nested</Link></div>
                    <div style={{height: 40, paddingLeft: 4}}><Link to="/iterableofnested">Iterable of Nested</Link></div>
                </div>
                <div style={{flexDirection: "column", flex: 1, marginLeft: 200}}>
                    <Switch>
                        <Route path="/" exact={true} component={SimpleTable} />
                        <Route path="/options" exact={true} component={Options} />
                        <Route path="/select" component={Select}/>
                        <Route path="/iterable" component={Iterable}/>
                        <Route path="/nested" component={Nested}/>
                        <Route path="/iterableofselect" component={IterableOfSelect}/>
                        <Route path="/iterableofnested" component={IterableOfNested}/>
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