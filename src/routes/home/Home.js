/* 
 * @flow
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet"; 
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import './Home.css';

// Actions
import githutSearch from '../../actions/githutSearch';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }

    this.updateUser = this.updateUser.bind(this);
    this.onPressEnter = this.onPressEnter.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  updateUser(event) {
    this.setState({ user: event.target.value })
  }

  onPressEnter(event) {
    if (event.keyCode === 13 && this.state.user) {
      this.fetchData()
    }
  }

  fetchData() {
    this.props.dispatch(githutSearch(this.state.user))
  }

  render() {
    const {user} = this.state

    return (
      <div className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | githut-search</title>
          <meta name="description" content="githut-search application" />
        </Helmet>
        
        <div className="home__input">
          <input 
            type='text' 
            placeholder="Enter Github username"
            value={user || ''} 
            onChange={this.updateUser} 
            onKeyDown={this.onPressEnter}
          />
          <button className="home__search" onClick={this.fetchData}>Get User</button>
        </div>

        {this.renderResult()}

      </div>
    );
  }

  renderResult() {
    let {results, loading} = this.props.githutSearch;

    if (Object.keys(results).length) {

      if (results.message) {
        return (
          loading ? <b className="home__loading">Loading...</b> : <span className="home__error">User not found</span>
        );
      }

      return <Result {...results}/>
    }

    return loading && <b className="home__loading">Loading...</b>
  }
}

const Result = (children) => (
  <div className="results" id={children.id}>
    <div className="results__image">
      <NavLink exact to={`/detail/${children.login}`} className="results__navlink" activeClassName="results__navlink--selected">
        <img src={children.avatar_url} alt={children.login} />
      </NavLink>
    </div>
    <div className="results__info">
      <NavLink exact to={`/detail/${children.login}`} className="results__navlink" activeClassName="results__navlink--selected">
        Username: <b>{children.login}</b>
      </NavLink>
      <p>Updated At: {children.updated_at}</p>
    </div>
  </div>
)

const mapState = state => {
  return {
    githutSearch: state.rootReducer.githutSearch
  }
}

export default withRouter(connect(mapState)(Home))
