import { call, put, select, takeEvery } from 'redux-saga/effects'
import { fetchCharacter, fetchHouse } from '../clients/gotClient'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

export const getHouses = (state) => state.app.get('houses').toJS()

function* searchCharacter(action) {
  try {
    const characters = yield call(fetchCharacter, action.query);
    const houses = yield select(getHouses);

    for(let character of characters){
      for (let allegiance of character.allegiances) {
        const houseId = allegiance.split('/').pop()
        if (!houses[houseId]) {
          houses[houseId] = yield call(fetchHouse, houseId);
        }
      }
    }

    yield put({type: SEARCH_CHARACTER_SUCCEEDED, characters, houses});
  } catch (e) {
    yield put({type: SEARCH_CHARACTER_FAILED, message: e.message});
  }
}

function* appSaga() {
  yield takeEvery(SEARCH_CHARACTER_REQUESTED, searchCharacter);
}

export default appSaga;
