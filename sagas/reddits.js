import { takeEvery, put } from 'redux-saga/effects';
import { GET_REDDITS } from "../actions/Reddits";

const getRedditsFetch = function* (){
  yield put({ type: GET_REDDITS.START });
  try {
    const result = yield fetch('https://www.reddit.com/r/all.json');
    const json = yield result.json();
    console.log('json = ', json);
    yield put({ type: GET_REDDITS.FINISH, data: json.data.children, after: json.data.after });
  } catch (e) {
    yield put({ type: GET_REDDITS.ERROR, error: e.message });
  }

};

export const getRedditsSaga = function* () {
  yield takeEvery(GET_REDDITS.SELF, getRedditsFetch)
};