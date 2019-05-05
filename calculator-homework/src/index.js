import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from './redux/reducers/reducer'
import thunk from 'redux-thunk'
import authReducer from './redux/reducers/auth'
import logsReducer from './redux/reducers/logs'
const rootReducer = combineReducers({
    calc: reducer,
    auth: authReducer,
    logs: logsReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
