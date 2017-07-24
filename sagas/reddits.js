import { takeEvery, put } from 'redux-saga/effects';
import { GET_REDDITS } from "../actions/Reddits";

const getRedditsFetch = function* (action){
  const { after, count } = action;
  yield put({ type: GET_REDDITS.START });
  try {
    const url = `https://www.reddit.com/r/all.json?count=${count || 0}${after ? `&after=${after}` : ""}`;
    const result = yield fetch(url);
    const json = yield result.json();
    yield put({ type: GET_REDDITS.FINISH, data: json.data.children, after: json.data.after });
  } catch (e) {
    yield put({ type: GET_REDDITS.ERROR, error: e.message });
  }

};

export const getRedditsSaga = function* () {
  yield takeEvery(GET_REDDITS.SELF, getRedditsFetch)
};