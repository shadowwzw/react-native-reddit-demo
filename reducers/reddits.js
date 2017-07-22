import { GET_REDDITS } from '../actions/Reddits';

export default function counter(state = { data: [], loading: false, error: null, after: null }, action) {
  switch (action.type) {
    case GET_REDDITS.START:
      return { ...state, loading: true, error: null };
    case GET_REDDITS.FINISH:
      return { data: [ ...state.data, ...action.data ], loading: false, after: action.after };
    default:
    return state;
  }
}
