import { put , takeEvery } from 'redux-saga/effects';
import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

export function* initGnomesSaga(action) {
  const response = yield fetch(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  );
  const data = yield response.json();
  yield put(actions.setGnomes(data.Brastlewark));
}

export function* watchGnomes() {
  yield takeEvery(actionTypes.INIT_GNOMES, initGnomesSaga);
}
