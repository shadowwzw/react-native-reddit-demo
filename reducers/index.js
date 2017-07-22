import {combineReducers} from 'redux';

import reddits from './reddits';

const rootReducer = combineReducers({
  reddits,
});

export default rootReducer;
