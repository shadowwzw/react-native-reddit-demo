import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from "../actions/CounterActions";

const counterInc = function* (){
  yield put({ type: INCREMENT_COUNTER.START });
  yield delay(2500);
  yield put({ type: INCREMENT_COUNTER.FINISH });
};

export const counterIncSaga = function* () {
 yield takeEvery(INCREMENT_COUNTER.SELF, counterInc)
};

const counterDec = function* (){
  yield put({ type: DECREMENT_COUNTER.START });
  yield delay(2500);
  yield put({ type: DECREMENT_COUNTER.FINISH });
};

export const counterDecSaga = function* () {
  yield takeEvery(DECREMENT_COUNTER.SELF, counterDec)
};