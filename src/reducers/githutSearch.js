/* 
 * @flow
 */

import {
  CALL_LOADING,
  SEARCH_GITHUB
} from '../actions/githutSearch';

const initialState = {
  results: {},
  repos: [],
  loading: false
};

export default function githutSearch(state = initialState, action) {
  if (action.type === CALL_LOADING) {
    return {
      ...state,
      loading: true,
    }
  }

  if (action.type === SEARCH_GITHUB) {
    return {
      ...state,
      results: action.results,
      repos: action.repos,
      loading: false
    }
  }

  return state;
}
