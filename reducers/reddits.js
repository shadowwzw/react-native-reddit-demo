import { GET_REDDITS } from '../actions/Reddits';
import _ from 'lodash';

export default function counter(state = { data: [], loading: false, error: null, after: null }, action) {
  switch (action.type) {
    case GET_REDDITS.START:
      return { ...state, loading: true, error: null };
    case GET_REDDITS.FINISH:
      const filteringNewData = ( newData ) => _.unionBy( newData, reddit => reddit.data.subreddit_id );
      return { ...state, data: filteringNewData([ ...state.data, ...action.data ]), loading: false, after: action.after };
    case GET_REDDITS.ERROR:
      return { ...state, loading: true, error: action.error };
    default:
    return state;
  }
}
