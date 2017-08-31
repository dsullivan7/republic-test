import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchCharacter } from '../clients/gotClient'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

function* searchCharacter(action) {
  try {
    const characters = yield call(fetchCharacter, action.query);
    yield put({type: SEARCH_CHARACTER_SUCCEEDED, characters});
  } catch (e) {
    yield put({type: SEARCH_CHARACTER_FAILED, message: e.message});
  }
}

function* appSaga() {
  yield takeEvery(SEARCH_CHARACTER_REQUESTED, searchCharacter);
}

export default appSaga;
