/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'

import './Detail.css';

class Detail extends Component {
  render() {
    const { repos } = this.props.githutSearch;

    if(!repos.length) {
      // detect when browser loading and not fetch a user
      return <Redirect to="/" />
    }

    return (
      <div className="detail">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detail page | githut-search</title>
          <meta name="description" content="githut-search application" />
        </Helmet>
        
        <div className="detail__group">
          {repos.map((result, i) => {
            return (
              <div key={result.id} className="detail__list">
                <div className="detail__box">
                  <a href={result.html_url} target="_blank" className="detail__name">
                   {result.name}
                  </a>
                  <span className="detail__repos">repos: {result.full_name}</span>
                  <div className="detail__info">
                    <img src={result.owner.avatar_url} alt={result.owner.login} />
                    <p>{result.description}</p>
                  </div>
                  <div className="detail__quote">
                      <span>Fork: <b>{result.fork ? 'True' : 'False'}</b></span>
                      <span>Language: <b>{result.language}</b></span>
                      <span>Website: <b>{result.homepage}</b></span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    githutSearch: state.rootReducer.githutSearch
  };
}

export default withRouter(connect(mapState)(Detail))
