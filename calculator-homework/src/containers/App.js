import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Routes from './Routes/Routes';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {


  render() {
    return (

      <BrowserRouter>

        <Route component={Routes} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    storedResults: state.results
  };
};

export default connect(mapStateToProps)(App);
