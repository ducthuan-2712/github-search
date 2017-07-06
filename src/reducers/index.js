/* 
 * @flow
 */

import { combineReducers } from 'redux';
import githutSearch from './githutSearch';

const rootReducer = combineReducers({
    githutSearch,
});

export default rootReducer;
