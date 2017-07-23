import { GET_REDDITS } from '../actions/Reddits';
import _ from 'lodash';

export default function counter(state = { data: [], loading: false, error: null, after: null, count: 0 }, action) {
  switch (action.type) {
    case GET_REDDITS.START:
      return { ...state, loading: true, error: null };
    case GET_REDDITS.FINISH:
      return { ...state, data: [ ...state.data, ...action.data ], loading: false, after: action.after, count: state.count + 25 };
    case GET_REDDITS.ERROR:
      return { ...state, loading: true, error: action.error };
    default:
    return state;
  }
}
