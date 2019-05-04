

import React, { Component } from 'react';
import calcPage from '../Pages/calcPage';
import { Route, Redirect } from "react-router-dom";
import Auth from '../../containers/Auth/Auth';

class Routes extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Route path="/" component={calcPage} exact />
                <Route path="/auth" component={Auth} exact />
            </React.Fragment>);
    }
}

export default Routes;