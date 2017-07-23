import {combineReducers} from 'redux';

import reddits from './reddits';
import subreddits from './subreddits';

const rootReducer = combineReducers({
  reddits,
  subreddits
});

export default rootReducer;
