import React, { Component } from 'react';
import { Route } from 'react-router';
import { withRouter, Switch } from 'react-router-dom';

// Routes
import Home from '../routes/home';
import Detail from '../routes/Detail';
import NoFound from '../routes/noFound';

import './App.css';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/detail/:username',
    component: Detail,
  },
  {
    component: NoFound,
  },
];

class App extends Component {
  render() {
    return (
      <div className="page">
        <Switch key={this.props.location.key} location={this.props.location}>
          {routes.map((route, i) => (
            <Route key={route.path+i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
