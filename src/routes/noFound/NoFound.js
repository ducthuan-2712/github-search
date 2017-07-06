/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { withRouter } from 'react-router-dom';

import './NoFound.css';

class NoFound extends Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
            <title>Page not found</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        Page not found
      </div>
    );
  }
}

export default withRouter(NoFound)
