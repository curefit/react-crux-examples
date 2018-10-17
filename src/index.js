import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, combineReducers, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

import { CruxReducerFactory } from "@curefit/react-crux"
import { UserReducer } from "./UserReducer"

import { DefaultModels } from "./models/DefaultModels"

import { Provider } from "react-redux"

// UserReducer is not getting used in the example but just shows where you can add your own reducers for your redux app
const appReducer = combineReducers({crux: CruxReducerFactory(DefaultModels), user: UserReducer})

const store = createStore(
    appReducer,
    applyMiddleware(thunk, createLogger())
)


const ReduxApp = () => <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
