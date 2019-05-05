

import React, { Component } from 'react';
import calcPage from '../Pages/calcPage';
import { Route, Redirect } from "react-router-dom";
import Auth from '../../containers/Auth/Auth';
import LogsPage from '../Pages/LogsPage';
import LogoutPage from '../Pages/LogoutPage';


class Routes extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Route path="/" component={calcPage} exact />
                <Route path="/auth" component={Auth} exact />
                <Route path="/logs" component={LogsPage} exact />
                <Route path="/logout" component={LogoutPage} exact />
            </React.Fragment>);
    }
}

export default Routes;