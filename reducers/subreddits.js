import { GET_SUBREDDITS } from '../actions/Subreddits';
import _ from 'lodash';

export default (state = { data: [], loading: false, error: null, after: null, count: 0 }, action) => {
  switch (action.type) {
    case GET_SUBREDDITS.START:
      return { ...state, loading: true, error: null };
    case GET_SUBREDDITS.FINISH:
      const filteringNewData = ( newData ) => _.unionBy( newData, subreddit => subreddit.data.name );
      return { ...state, data: filteringNewData([ ...state.data, ...action.data ]), loading: false, after: action.after, count: state.count + 25 };
    case GET_SUBREDDITS.ERROR:
      return { ...state, loading: true, error: action.error };
    default:
    return state;
  }
}
