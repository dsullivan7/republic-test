import { call, put, select, takeEvery } from 'redux-saga/effects'
import { fetchCharacter, fetchHouse } from '../clients/gotClient'

import {
  SEARCH_CHARACTER_REQUESTED,
  SEARCH_CHARACTER_SUCCEEDED,
  SEARCH_CHARACTER_FAILED
} from '../constants/app';

const getHouses = (state) => state.app.get('houses').toJS()

function* searchCharacter(action) {
  try {
    const characters = yield call(fetchCharacter, action.query);
    const houses = yield select(getHouses);

    // retreive the houses for each character
    for (let character of characters){
      for (let allegiance of character.allegiances) {

        // get the houseId from the house URL
        const houseId = allegiance.split('/').pop()

        // if we do not have the house stored already
        // call the house api using the api client and store the result in the state
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
