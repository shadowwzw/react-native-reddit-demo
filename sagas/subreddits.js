import { takeEvery, put } from 'redux-saga/effects';
import { GET_SUBREDDITS } from "../actions/Subreddits";

const getSubredditsFetch = function* (action){
  const { after, count } = action;
  yield put({ type: GET_SUBREDDITS.START });
  try {
    const url = `https://www.reddit.com/subreddits.json?count=${count || 0}${after ? `&after=${after}` : ""}`;
    console.log('url = ', url);
    const result = yield fetch(url);
    const json = yield result.json();
    console.log('json = ', json);
    yield put({ type: GET_SUBREDDITS.FINISH, data: json.data.children, after: json.data.after });
  } catch (e) {
    yield put({ type: GET_SUBREDDITS.ERROR, error: e.message });
  }

};

export const getSubredditsSaga = function* () {
  yield takeEvery(GET_SUBREDDITS.SELF, getSubredditsFetch)
};